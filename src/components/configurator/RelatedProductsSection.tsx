import ProductCard from "@/src/components/ui/ProductCard";
import { Product } from "@/src/types/product.types";

// Static map of all products that can appear as related items.
// Future: receive this data as a prop from the API response.
const allProducts: Record<string, Product> = {
  "adhesive-labels": {
    id: 1,
    image: "/images/image1.png",
    imageAlt: "A bottle with a yellow Grateful label sitting on dark stones",
    title: "Adhesive Labels",
    description:
      "Our Eco-Friendly Adhesive stickers and labels are great for handouts and print vibrantly. Choose from our range of Adhesive stickers and labels, customised shapes and sizes for your best fit/application.",
    shopLabel: "Shop Adhesive Labels",
    shopHref: "/products/adhesive-labels",
  },
  "greeting-cards": {
    id: 2,
    image: "/images/image2.png",
    imageAlt: "Greeting cards with botanical illustration on a blue background",
    title: "Greeting Cards",
    description:
      "A beautiful range of recycled papers to help you showcase your artwork and illustrations. 100% recycled post consumer waste white, earthy brown or off-white….take your pick",
    shopLabel: "Shop Greeting Cards",
    shopHref: "/products/greeting-cards",
  },
  "swing-tags": {
    id: 3,
    image: "/images/image3.png",
    imageAlt: "Little Wild & Green swing tag on a green background with flowers",
    title: "Swing Tags",
    description:
      "Make your products stand apart from the competition with 100% recycled swing tags. Sturdy, eco-friendly and available in a range of sizes. Printed in Australia with love.",
    shopLabel: "Shop Swing Tags",
    shopHref: "/products/swing-tags",
  },
  "brochures": {
    id: 4,
    image: "/images/image4.png",
    imageAlt: "Folded brochure standing on a textured background",
    title: "Folded Brochure",
    description:
      "Great for any business wanting to share their message with the world. These folded brochures are available in 100% recycled, post consumer waste papers, with a uncoated or a silk finish.",
    shopLabel: "Shop Brochures",
    shopHref: "/products/brochures",
  },
  "books": {
    id: 5,
    image: "/images/image5.png",
    imageAlt: "Recycled printed books standing with flowers",
    title: "Books",
    description:
      "We produce books, magazines, annual reports and more on 100% recycled papers. Choose a self cover book or a book with a heavier cover for a higher quality feel.",
    shopLabel: "Shop Books",
    shopHref: "/products/books",
  },
  "business-cards": {
    id: 6,
    image: "/images/image6.png",
    imageAlt: "Business cards displayed on a green floral background",
    title: "Business Cards",
    description:
      "Draw attention to your business and brand and communicate your commitment to being sustainable and eco-friendly. These business cards are printed on 100% recycled post consumer waste paper.",
    shopLabel: "Shop Business Cards",
    shopHref: "/products/business-cards",
  },
};

interface Props {
  relatedSlugs: string[];
}

export default function RelatedProductsSection({ relatedSlugs }: Props) {
  const relatedProducts = relatedSlugs
    .map((slug) => allProducts[slug])
    .filter(Boolean);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="border-t border-gray-200 pt-10 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-[22px] font-bold text-gray-900 mb-2">Other products you might like</h2>
        <p className="text-[14px] text-gray-500">
          We&rsquo;ve made sustainable printing as cost effective as non-sustainable alternatives.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
