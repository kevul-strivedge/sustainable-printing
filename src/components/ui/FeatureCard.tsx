import { Feature } from "@/src/types/features.types";
import Image from "next/image";

export default function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <div className="flex flex-col items-center text-center px-4 sm:px-6">
            {/* Icon */}
            <div className="flex items-center justify-center  mb-6">
                <div className="flex items-center justify-center mb-6">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        width={90}
                        height={80}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-[#292560] font-bold text-[0.95rem] leading-snug mb-4">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-black text-xs leading-relaxed max-w-[240px]">
                {feature.description}
            </p>
        </div>
    );
}