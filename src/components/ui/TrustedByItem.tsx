import { trustedBy } from "@/src/types/trustedby.types";
import Image from "next/image";

export default function TrustedByItem({ logo }: { logo: trustedBy }) {
    return (
        <li
            className={`
        flex items-center justify-center
        ${logo.maxW ?? "max-w-[140px]"}
        w-full
      `}
        >
            <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={logo.height ?? 44}
                className="
    object-contain
    w-full
    h-auto
    grayscale
    transition-all duration-300
    hover:grayscale-0
  "
            />
        </li>
    );
}