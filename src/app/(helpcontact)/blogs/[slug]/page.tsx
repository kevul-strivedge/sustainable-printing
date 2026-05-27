// app/(helpcontact)/blog/[slug]/page.tsx

import PageHeader from "@/src/components/ui/PageHeader";
import { blogData } from "@/src/constants/blog.data";
import { pageMetadata } from "@/src/constants/seoMeta";
import { BlogContentBlock } from "@/src/types/blog.types";
import Link from "next/link";
import { notFound } from "next/navigation";

// Add this function above the default export
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;  
  return pageMetadata(`blogs/${slug}`);
}

const renderBlock = (block: BlogContentBlock, i: number) => {
  switch (block.type) {
    // renderBlock
    case "paragraph":
      if (block.boldWords?.length) {
        let parts: (string | React.ReactElement)[] = [block.text];
        block.boldWords.forEach(({ word, href }) => {
          parts = parts.flatMap((part): (string | React.ReactElement)[] => {
            if (typeof part !== "string") return [part];
            const split = part.split(word);
            return split.flatMap((s, i): (string | React.ReactElement)[] =>
              i < split.length - 1
                ? [
                    s,
                    href ? (
                      <Link
                        key={`${word}-${i}`}
                        href={href}
                        className="font-bold hover:underline text-[#292560]"
                      >
                        {word}
                      </Link>
                    ) : (
                      <strong key={`${word}-${i}`}>{word}</strong>
                    ),
                  ]
                : [s],
            );
          });
        });
        return (
          <p key={i} className="text-[#292560] text-base leading-6">
            {parts}
          </p>
        );
      }
      return (
        <p key={i} className="text-[#292560] text-base leading-6">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 key={i} className="text-[#292560] text-xl font-semibold pt-2">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul
          key={i}
          className="list-disc list-outside pl-8 space-y-2 text-[#292560] text-base leading-6"
        >
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "link":
      return (
        <Link
          key={i}
          href={block.href}
          className="text-[#292560] font-bold hover:underline"
        >
          {block.text}
        </Link>
      );

    case "richList":
      const Tag = block.ordered ? "ol" : "ul";

      return (
        <Tag
          key={i}
          className={`${
            block.ordered ? "list-decimal" : "list-disc"
          } list-outside pl-8 space-y-4 text-[#292560] text-base leading-6 marker:font-bold`}
        >
          {block.items.map((item, j) => (
            <li key={j}>
              {/* Label */}
              {item.boldLabel ? (
                <span className="font-bold">{item.label}</span>
              ) : (
                <span>{item.label}</span>
              )}

              {/* Description */}
              {item.description && <p className="mt-1">{item.description}</p>}

              {/* Paragraphs */}
              {item.paragraphs?.map((paragraph, index) => {
                let parts: (string | React.ReactElement)[] = [paragraph.text];

                paragraph.boldWords?.forEach(({ word, href }) => {
                  parts = parts.flatMap(
                    (part): (string | React.ReactElement)[] => {
                      if (typeof part !== "string") return [part];

                      const split = part.split(word);

                      return split.flatMap(
                        (s, i): (string | React.ReactElement)[] =>
                          i < split.length - 1
                            ? [
                                s,

                                href ? (
                                  <Link
                                    key={`${word}-${i}`}
                                    href={href}
                                    className="font-bold hover:underline text-[#292560]"
                                  >
                                    {word}
                                  </Link>
                                ) : (
                                  <strong key={`${word}-${i}`}>{word}</strong>
                                ),
                              ]
                            : [s],
                      );
                    },
                  );
                });

                return (
                  <p key={index} className="mt-3">
                    {parts}
                  </p>
                );
              })}

              {/* Link Text */}
              {item.linkText &&
                (item.href ? (
                  <Link
                    href={item.href}
                    className={`text-[#292560] hover:underline ${
                      item.boldLink ? "font-bold" : ""
                    }`}
                  >
                    {" "}
                    {item.linkText}
                  </Link>
                ) : (
                  <span className={`${item.boldLink ? "font-bold" : ""}`}>
                    {" "}
                    {item.linkText}
                  </span>
                ))}
            </li>
          ))}
        </Tag>
      );
    case "accordion":
      return (
        <div key={i} className="space-y-4">
          {block.items.map((item, j) => {
            let parts: (string | React.ReactElement)[] = [item.content];

            item.boldWords?.forEach(({ word, href }) => {
              parts = parts.flatMap((part): (string | React.ReactElement)[] => {
                if (typeof part !== "string") return [part];

                const split = part.split(word);

                return split.flatMap((s, i): (string | React.ReactElement)[] =>
                  i < split.length - 1
                    ? [
                        s,
                        href ? (
                          <Link
                            key={`${word}-${i}`}
                            href={href}
                            className="font-bold hover:underline text-[#292560]"
                          >
                            {word}
                          </Link>
                        ) : (
                          <strong key={`${word}-${i}`}>{word}</strong>
                        ),
                      ]
                    : [s],
                );
              });
            });

            return (
              <details
                key={j}
                className="group px-6 py-1 rounded-lg  transition-all duration-300 ease-in-out open:bg-[#c4c4c41a]"
              >
                <summary className="font-bold text-[#292560] cursor-pointer list-none flex items-center justify-between">
                  {item.title}
                </summary>

                <p className="mt-3 text-[#292560] text-base leading-6">
                  {parts}
                </p>
              </details>
            );
          })}
        </div>
      );
  }
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // ← Promise type
}) {
  const { slug } = await params; // ← await params

  const post = blogData.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <PageHeader title={post.imageAlt} titleClassName="text-3xl max-w-6xl" />
      <div className="max-w-6xl mx-auto px-6 sm:py-16 py-8 space-y-3">
        {post.content.map((block, i) => (
          <div key={i}>{renderBlock(block, i)}</div>
        ))}
      </div>
    </>
  );
}
