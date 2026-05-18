import { trustedBy } from "@/src/types/trustedby.types";
import TrustedByItem from "../ui/TrustedByItem";
const ROW_ONE: trustedBy[] = [
    { name: "Sustainable Choice", src: "/images/trustedbylogo/companylogo1.png", maxW: "max-w-[90px]", height: 40 },
    { name: "Victoria", src: "/images/trustedbylogo/companylogo2.png", maxW: "max-w-[90px]", height: 44 },
    { name: "Saatchi & Saatchi", src: "/images/trustedbylogo/companylogo3.png", maxW: "max-w-[140px]", height: 52 },
    { name: "Greenpeace", src: "/images/trustedbylogo/companylogo4.png", maxW: "max-w-[140px]", height: 30 },
    { name: "Friends of the Earth Melbourne", src: "/images/trustedbylogo/companylogo5.png", maxW: "max-w-[90px]", height: 48 },
];

const ROW_TWO: trustedBy[] = [
    { name: "Sea Shepherd", src: "/images/trustedbylogo/companylogo6.png", maxW: "max-w-[90px]", height: 52 },
    { name: "The Greens", src: "/images/trustedbylogo/companylogo7.png", maxW: "max-w-[70px]", height: 56 },
    { name: "University of Melbourne", src: "/images/trustedbylogo/companylogo8.png", maxW: "max-w-[90px]", height: 56 },
    { name: "Wild Things", src: "/images/trustedbylogo/companylogo9.png", maxW: "max-w-[90px]", height: 44 },
    { name: "CERES", src: "/images/trustedbylogo/companylogo10.png", maxW: "max-w-[50px]", height: 44 },
    { name: "WWF", src: "/images/trustedbylogo/companylogo11.png", maxW: "max-w-[140px]", height: 52 },
];
export default function TrustedByComponent() {
    return (
        <section
            aria-label="Trusted by"
            className="w-full bg-white py-12 px-4 sm:px-8"
        >
            {/* Heading */}
            <p className="text-center text-sm font-semibold leading-snug text-gray-800 mb-10 tracking-wide">
                Trusted by
                <br />
                the following:
            </p>

            {/* Row 1 — 5 logos */}
            <ul
                className="
                flex flex-wrap items-center justify-center
                gap-x-10 gap-y-6 mb-10
                list-none m-0 p-0"
            >
                {ROW_ONE.map((logo) => (
                    <TrustedByItem key={logo.name} logo={logo} />
                ))}
            </ul>

            {/* Divider — invisible in the original but keeps rows separated */}
            <div className="w-full" aria-hidden="true" />

            {/* Row 2 — 6 logos */}
            <ul
                className="
                flex flex-wrap items-center justify-center
                gap-x-10 gap-y-6 mb-10
                list-none m-0 p-0"
            >
                {ROW_TWO.map((logo) => (
                    <TrustedByItem key={logo.name} logo={logo} />
                ))}
            </ul>
        </section>
    );
}