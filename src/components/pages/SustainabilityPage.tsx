import Image from "next/image";
import BannerComponent from "./BannerComponent";

interface Highlight {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface Section {
  heading: string;
  paragraphs: string[];
}

interface SustainabilityPageProps {
  badge: string;
  title: string;
  intro: string;
  heroImage: string;
  heroHeadingColor?: string;
  contentImage: string;
  contentImageAlt: string;
  highlights: Highlight[];
  sections: Section[];
}

export default function SustainabilityPage({
  badge,
  title,
  intro,
  heroImage,
  heroHeadingColor = "#1e4620",
  contentImage,
  contentImageAlt,
  highlights,
  sections,
}: SustainabilityPageProps) {
  return (
    <>
      {/* Hero banner */}
      <BannerComponent
        image={heroImage}
        heading={title}
        headingColor={heroHeadingColor}
        className="h-[340px] sm:h-[420px]"
        buttons={[]}
      />

      <div className="max-w-[1100px] mx-auto px-6 py-14 sm:py-20">

        {/* Badge + Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-widest text-[#3d9e5f] bg-[#e8f5ee] px-4 py-1.5 rounded-full mb-4">
            {badge}
          </span>
          <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed">{intro}</p>
        </div>

        {/* Highlights */}
        <div className={`grid gap-6 mb-16 ${highlights.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
          {highlights.map((h) => (
            <div key={h.title} className="bg-[#f7faf8] border border-[#d4eedd] rounded-lg p-6">
              <div className="mb-3">{h.icon}</div>
              <p className="text-[15px] font-semibold text-gray-900 mb-2">{h.title}</p>
              <p className="text-[14px] text-gray-600 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        {/* Content: image + sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={contentImage}
              alt={contentImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-[20px] font-bold text-[#1e4620] mb-3">{s.heading}</h2>
                <div className="flex flex-col gap-3">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-[15px] text-gray-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <BannerComponent
        image="/images/bannerImage2.png"
        heading="Want to see the quality for yourself?"
        className="h-[300px]"
        buttons={[{ label: "Order a Sample Pack", href: "/sample-pack", variant: "primary" }]}
      />
    </>
  );
}
