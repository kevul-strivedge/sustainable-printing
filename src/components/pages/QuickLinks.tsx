// components/ui/QuickLinks.tsx

import {
  QuickLinkCategoryType,
  QuickLinksProps,
} from "@/src/types/quickLinks.types";
import QuickLinkCard from "../ui/QuickLinkCard";

const quickLinksData: QuickLinkCategoryType[] = [
  {
    category: "Business Cards",
    links: [
      { label: "Brown-Kraft Business Cards", href: "#" },
      { label: "100% Recycled Uncoated", href: "#" },
    ],
  },
  {
    category: "Swing Tags",
    links: [
      { label: "Premium Swing Tags", href: "#" },
      { label: "Kraft Swing tags", href: "#" },
    ],
  },
  {
    category: "Flyers & Posters",
    links: [
      { label: "Flyers", href: "#" },
      { label: "Posters", href: "#" },
    ],
  },
  {
    category: "Postcards",
    links: [
      { label: "Premium Postcards", href: "#" },
      { label: "Kraft Postcards", href: "#" },
    ],
  },
  {
    category: "Adhesive Label / Stickers",
    links: [
      { label: "Circle Adhesive Labels", href: "#" },
      { label: "Square Adhesive Labels", href: "#" },
    ],
  },
  {
    category: "Brochures Folded",
    links: [{ label: "Brochures", href: "#" }],
  },
  {
    category: "Greeting Cards",
    links: [
      { label: "Standard A6 Greeting Cards", href: "#" },
      { label: "Square Greeting Cards", href: "#" },
    ],
  },
  {
    category: "Booklets / Reports",
    links: [
      { label: "A4 Self Cover Booklets", href: "#" },
      { label: "A4 Plus Cover Booklets", href: "#" },
      { label: "A5 Plus Cover Booklets", href: "#" },
      { label: "A5 Self Cover Booklets", href: "#" },
    ],
  },
  {
    category: "Stationery",
    links: [
      { label: "Letterhead", href: "#" },
      { label: "Compliment Slips", href: "#" },
      { label: "A2 Wrapping Paper", href: "#" },
    ],
  },
];

const QuickLinks = ({
  items = quickLinksData,
  className = "",
}: QuickLinksProps) => {
  return (
    <section className={`w-full bg-[#faf7f2] sm:py-20 py-10 ${className}`}>
      <div className="max-w-6xl mx-auto lg:px-6 md:px-20 px-6">
        <h2 className="text-[#292560] text-2xl font-bold mb-6">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <QuickLinkCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
