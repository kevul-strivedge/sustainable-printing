import Image from "next/image";
import { BannerProps } from "@/src/types/banner.types";
import Link from "next/link";

const buttonStyles = {
  primary:
    "bg-[#f5c518] rounded-sm text-gray-900 hover:bg-[#e8b800]",
  outline:
    "bg-white rounded-sm text-gray-900 hover:bg-gray-50",
};

export default function BannerComponent({
  image,
  heading,
  headingColor = "#f07c1a",
  buttons,
  className = "",
  contentClassName = "",
  headingFont
}: BannerProps) {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />

      <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 ${contentClassName}`}>
        <h2
          className={`text-3xl sm:text-4xl font-bold leading-snug mb-8 max-w-xl ${headingFont}`}
          style={{ color: headingColor }}
        >
          {heading}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {buttons?.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href ?? "#"}
              className={`inline-block px-8 py-3 text-[15px] font-medium transition-colors duration-150 ${
                buttonStyles[btn.variant ?? "primary"]
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
