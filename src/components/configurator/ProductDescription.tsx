import Link from "next/link";

interface Props {
  title: string;
  description: string;
  features: string[];
  aboutParagraphs?: string[];
}

function LeafCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#3d9e5f" opacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="#3d9e5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductDescription({ title, description, features, aboutParagraphs }: Props) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-4 shadow-lg mt-5">
      <h2 className="text-[20px] font-bold text-[#1D1A52] mb-3">{title}</h2>
      <p className="text-[14px] text-[#292560] leading-relaxed mb-1 max-w-3xl">{description}</p>
      <p className="text-[14px] text-[#292560] leading-relaxed mb-5">
        <Link href="/contact" className="text-[#3d9e5f] hover:underline font-medium">
          Contact us
        </Link>{" "}
        for a different quantity or{" "}
        <Link href="/custom-quote" className="text-[#3d9e5f] hover:underline font-medium">
          custom quote
        </Link>
        .{" "}
      </p>
      <ul className="flex flex-col gap-2.5 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] text-[#292560] font-medium">
            <LeafCheckIcon />
            {f}
          </li>
        ))}
      </ul>

      {aboutParagraphs && aboutParagraphs.length > 0 && (
        <div className="flex flex-col gap-4">
          {aboutParagraphs.map((para, i) => (
            <p key={i} className="text-[14px] text-[#292560] leading-relaxed max-w-3xl">
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
