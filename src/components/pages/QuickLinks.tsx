// components/ui/QuickLinks.tsx

import {
  QuickLinkCategoryType,
  QuickLinksProps,
} from "@/src/types/quickLinks.types";
import QuickLinkCard from "../ui/QuickLinkCard";

// Each link points to a product slug, optionally with ?variant=<dbProductId> so the
// page opens with the right sibling variant pre-selected (mirrors Laravel's per-variant
// URLs like /uncoated-business-cards). Mapping is keyed off pt_products IDs:
//   Business Cards: 15 (EcoStar Uncoated) / 17 (Brown Kraft)
//   Postcards:      18 (Premium) / 19 (Kraft)
//   Greeting Cards: 20 (A6) / 22 (Square)
//   Swing Tags:     23 (Premium) / 24 (Kraft)
//   Stickers:       25 (Adhesive Labels / Circle) / 26 (Square) — separate slugs
//   Books:          29 (A4 Self) / 30 (A4 Plus) / 31 (A5 Self) / 33 (A5 Plus)
//   Flyers/Posters: 34 / 35 — separate slugs
//   Stationery:     37 (Letterhead) / 38 (Compliment Slips) / wrapping-paper
const quickLinksData: QuickLinkCategoryType[] = [
  {
    category: "Business Cards",
    links: [
      { label: "Brown-Kraft Business Cards", href: "/brown-kraft-business-cards" },
      { label: "100% Recycled Uncoated", href: "/uncoated-business-cards" },
    ],
  },
  {
    category: "Swing Tags",
    links: [
      { label: "Premium Swing Tags", href: "/premium-swing-tags" },
      { label: "Kraft Swing tags", href: "/kraft-swing-tags" },
    ],
  },
  {
    category: "Flyers & Posters",
    links: [
      { label: "Flyers", href: "/flyers-printing" },
      { label: "Posters", href: "/posters-printing" },
    ],
  },
  {
    category: "Postcards",
    links: [
      { label: "Premium Postcards", href: "/premium-postcards" },
      { label: "Kraft Postcards", href: "/kraft-postcards" },
    ],
  },
  {
    category: "Adhesive Label / Stickers",
    links: [
      { label: "Circle Adhesive Labels", href: "/circle-adhesive-labels" },
      { label: "Square Adhesive Labels", href: "/square-stickers" },
    ],
  },
  {
    category: "Brochures Folded",
    links: [{ label: "Brochures", href: "/brochures-printing" }],
  },
  {
    category: "Greeting Cards",
    links: [
      { label: "Standard A6 Greeting Cards", href: "/standard-a6-gift-cards" },
      { label: "Square Greeting Cards", href: "/square-gift-cards" },
    ],
  },
  {
    category: "Booklets / Reports",
    links: [
      { label: "A4 Self Cover Booklets", href: "/a4-self-cover-booklets" },
      { label: "A4 Plus Cover Booklets", href: "/a4-plus-cover-booklets" },
      { label: "A5 Plus Cover Booklets", href: "/a5-plus-cover-booklets" },
      { label: "A5 Self Cover Booklets", href: "/a5-self-cover-booklets" },
    ],
  },
  {
    category: "Stationery",
    links: [
      { label: "Letterhead", href: "/letterhead-printing" },
      { label: "Compliment Slips", href: "/compliment-slips" },
      { label: "A2 Wrapping Paper", href: "/a2-wrapping-paper" },
    ],
  },
];

const QuickLinks = ({
  items = quickLinksData,
  className = "",
  title = "Quick Links",
}: QuickLinksProps) => {
  return (
    <section className={`w-full bg-[#faf7f2] sm:py-20 py-10 ${className}`}>
      <div className="max-w-6xl mx-auto lg:px-6 md:px-20 px-6">
        <h2 className="text-[#292560] text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <QuickLinkCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
