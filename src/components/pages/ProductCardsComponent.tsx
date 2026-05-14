import { Product } from "@/src/types/product.types";
import ProductCard from "../ui/ProductCard";

 
const products: Product[] = [
  {
    id: 1,
    image: "/images/image1.png", // replace with your actual image path
    imageAlt: "A bottle with a yellow Grateful label sitting on dark stones",
    title: "Adhesive Labels",
    description:
      "Our Eco-Friendly Adhesive stickers and labels are great for handouts and print vibrantly. Choose from our range of Adhesive stickers and labels, customised shapes and sizes for your best fit/application.",
    shopLabel: "Shop Adhesive Labels",
    shopHref: "/products/adhesive-labels",
  },
  {
    id: 2,
    image: "/images/image2.png", // replace with your actual image path
    imageAlt: "Greeting cards with botanical illustration on a blue background",
    title: "Greeting Cards",
    description:
      "A beautiful range of recycled papers to help you showcase your artwork and illustrations. 100% recycled post consumer waste white, earthy brown or off-white....take your pick",
    shopLabel: "Shop Greeting Cards",
    shopHref: "/products/greeting-cards",
  },
  {
    id: 3,
    image: "/images/image3.png", // replace with your actual image path
    imageAlt: "Little Wild & Green swing tag on a green background with flowers",
    title: "Swing Tags",
    description:
      "Make your products stand apart from the competition with 100% recycled swing tags. Sturdy, eco-friendly and available in a range of sizes. Printed in Australia with love.",
    shopLabel: "Shop Swing Tags",
    shopHref: "/products/swing-tags",
  },
  {
    id: 4,
    image: "/images/image4.png",
    imageAlt: "Folded brochure standing on a textured background",
    title: "Folded Brochure",
    description:
      "Great for any business wanting to share their message with the world. These folded brochures are available in 100% recycled, post consumer waste papers, with a uncoated or a silk finish.",
    shopLabel: "Shop Brochures",
    shopHref: "/products/folded-brochure",
  },
  {
    id: 5,
    image: "/images/image5.png",
    imageAlt: "Recycled printed books standing with flowers",
    title: "Books",
    description:
      "We produce books, magazines, annual reports and more on 100% recycled papers. Choose a self cover book or a book with a heavier cover for a higher quality feel. Saddle stitch, perfect bound or wiro bound to create a great look.",
    shopLabel: "Shop Books",
    shopHref: "/products/books",
  },
  {
    id: 6,
    image: "/images/image6.png",
    imageAlt: "Business cards displayed on a green floral background",
    title: "Business Cards",
    description:
      "Draw attention to your business and brand and communicate your commitment to being sustainable and eco-friendly. These business cards are printed on 100% recycled post consumer waste paper.",
    shopLabel: "Shop Business Cards",
    shopHref: "/products/business-cards",
  },
];
export default function ProductCardsComponent() {
  return (
    <section className=" w-full">
      <div className="max-w-[1100px] mx-auto px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}