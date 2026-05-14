import { Feature } from "@/src/types/features.types";
import FeatureCard from "../ui/FeatureCard";
const features: Feature[] = [
  {
    id: 1,
    image: "/images/feature-image1.png",
    title: "No Minimum Order Quantites",
    description:
      "No minimum order quantities required so small businesses and brands can access sustainable printing.",
  },
  {
    id: 2,
    image: "/images/feature-image1.png",
    title: "Printed in Australia",
    description: "We're proud to be 100% Australian made, owned and operated.",
  },
  {
    id: 3,
    image: "/images/feature-image1.png",
    title: "Sustainable",
    description:
      "Our papers and printing is produced sustainably, using 100% recycled paper, sustainable stocks, eco inks and green electricity.",
  },
];
export default function FeaturesCardsStrip() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1000px] mx-auto px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}