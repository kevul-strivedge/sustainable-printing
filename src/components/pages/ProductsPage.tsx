import ProductCard from "@/src/components/ui/ProductCard";
import BannerComponent from "@/src/components/pages/BannerComponent";
import PageHeader from "@/src/components/ui/PageHeader";
import Link from "next/link";
import { Product } from "@/src/types/product.types";

// ─── Data ────────────────────────────────────────────────────────────────────

const CDN = "https://www.sustainableprintingco.com.au/images";

const SECTIONS: { title: string; products: Product[]; showCustomCard?: boolean }[] = [
  {
    title: "Cards",
    products: [
      {
        id: 101,
        image: `${CDN}/products-business-cards.jpg`,
        imageAlt: "Recycled business cards",
        title: "Business Cards",
        description:
          "Draw attention and communicate your commitment to being sustainable and eco-friendly. These business cards are printed on 100% recycled post consumer waste paper.",
        shopLabel: "Shop Business Cards",
        shopHref: "/uncoated-business-cards",
      },
      {
        id: 102,
        image: `${CDN}/product-gift-cards.png`,
        imageAlt: "Recycled greeting cards",
        title: "Greeting Cards",
        description:
          "Perfect for communicating that special message. High quality print and 100% recycled, sturdy paper ensures they are a great retail item if you are an artist or on-seller.",
        shopLabel: "Shop Greeting Cards",
        shopHref: "/standard-a6-gift-cards",
      },
      {
        id: 103,
        image: `${CDN}/product-postcards.png`,
        imageAlt: "Recycled postcards",
        title: "Postcards",
        description:
          "Our Recycled Postcards are perfect for gifts, to print your illustrations, and to use as hand outs. Choose from our recycled paper options below for a unique look and feel.",
        shopLabel: "Shop Postcards",
        shopHref: "/premium-postcards",
      },
      {
        id: 104,
        image: `${CDN}/product-bookmarks.png`,
        imageAlt: "Recycled bookmarks",
        title: "Bookmarks",
        description:
          "Sturdy, 100% recycled bookmarks with great colour printability. Perfect for artists or on-sellers to promote your message or brand.",
        shopLabel: "Shop Bookmarks",
        shopHref: "/bookmarks-printing",
      },
    ],
  },
  {
    title: "Stickers",
    products: [
      {
        id: 201,
        image: `${CDN}/products-adhesive-labels.png`,
        imageAlt: "Eco-friendly adhesive labels and stickers",
        title: "Adhesive Labels",
        description:
          "Our Eco-Friendly Adhesive stickers and labels are great for handouts and print vibrantly. Choose from our range of Adhesive stickers and labels, customised shapes and sizes for your best fit/application.",
        shopLabel: "Shop Adhesive Labels",
        shopHref: "/circle-adhesive-labels",
      },
    ],
  },
  {
    title: "Stationery",
    showCustomCard: true,
    products: [
      {
        id: 301,
        image: `${CDN}/product-letterheads.jpg`,
        imageAlt: "Recycled letterheads",
        title: "Letterheads",
        description:
          "Printed on white 100% recycled, post consumer waste paper. Professional and sharp. This letterhead makes businesses look the goods.",
        shopLabel: "Shop Letterheads",
        shopHref: "/letterhead-printing",
      },
      {
        id: 302,
        image: `${CDN}/product-compliment-slips.png`,
        imageAlt: "Recycled compliment slips",
        title: "Compliment Slips",
        description:
          "Our with compliments slips are printed full colour on 100% recycled paper.",
        shopLabel: "Shop Compliment Slips",
        shopHref: "/compliment-slips",
      },
      {
        id: 303,
        image: `${CDN}/product-wrapping-paper.png`,
        imageAlt: "Recycled wrapping paper",
        title: "Wrapping Paper",
        description:
          "Wrapping paper printed on white, 100gsm 100% Recycled, post consumer waste paper.",
        shopLabel: "Shop Wrapping Paper",
        shopHref: "/a2-wrapping-paper",
      },
      {
        id: 304,
        image: `${CDN}/product-calendars.jpg`,
        imageAlt: "Recycled calendars",
        title: "Calendars",
        description:
          "Fantastic way to showcase your artwork, promote your brand or to give out to friends. Printed on 100% recycled papers.",
        shopLabel: "Shop Calendars",
        shopHref: "/books",
      },
      {
        id: 305,
        image: `${CDN}/product-flyers.jpg`,
        imageAlt: "Recycled flyers",
        title: "Flyers",
        description:
          "We have a range of poster and flyer sizes to suit your every need. Browse our range below.",
        shopLabel: "Shop Flyers",
        shopHref: "/flyers-printing",
      },
      {
        id: 306,
        image: `${CDN}/product-posters.png`,
        imageAlt: "Recycled posters",
        title: "Posters",
        description:
          "We have a range of poster and flyer sizes to suit your every need. Browse our range below.",
        shopLabel: "Shop Posters",
        shopHref: "/posters-printing",
      },
    ],
  },
  {
    title: "Books & Booklets",
    products: [
      {
        id: 401,
        image: `${CDN}/product-books.png`,
        imageAlt: "Recycled books",
        title: "Books",
        description:
          "We produce books, magazines, annual reports and more on 100% recycled papers. Choose a self cover book or a book with a heavier cover for a higher quality feel. Saddle stitch, perfect bound or wiro bound to create a great look.",
        shopLabel: "Shop Books",
        shopHref: "/books",
      },
      {
        id: 402,
        image: `${CDN}/product-booklets.png`,
        imageAlt: "Recycled booklets",
        title: "Booklets",
        description:
          "Our Eco-Friendly booklets are great for handouts and print vibrantly.",
        shopLabel: "Shop Booklets",
        shopHref: "/a4-self-cover-booklets",
      },
      {
        id: 403,
        image: `${CDN}/product-reports.png`,
        imageAlt: "Recycled reports",
        title: "Reports",
        description:
          "Too much information for a 2 page flyer? Try one of our folded brochures on for size.",
        shopLabel: "Shop Reports",
        shopHref: "/a4-self-cover-booklets",
      },
      {
        id: 404,
        image: `${CDN}/product-brochures.png`,
        imageAlt: "Recycled brochures",
        title: "Brochures",
        description:
          "Draw attention to your business and brand and communicate your commitment to being sustainable and eco-friendly.",
        shopLabel: "Shop Brochures",
        shopHref: "/brochures-printing",
      },
    ],
  },
];

// ─── Custom quote card (appears in Stationery grid) ──────────────────────────

function CustomQuoteCard() {
  return (
    <Link
      href="/custom-quote"
      className="flex flex-col items-center justify-center gap-4 rounded-sm border-2 border-dashed border-[#4CCC88] bg-[#f5faf7] p-8 text-center transition-colors hover:bg-[#ecf7f1] group"
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="text-[#4CCC88]">
        <rect x="8" y="14" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M18 24h12M18 30h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="38" r="10" fill="#292560" />
        <path d="M42 34v8M38 38h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div>
        <h3 className="text-[#292560] font-bold text-lg leading-snug">
          Can&apos;t find what<br />you&apos;re looking for?
        </h3>
        <p className="mt-2 text-sm text-[#444]">We can help you with a custom quote!</p>
      </div>
      <span className="mt-1 inline-block rounded-md bg-[#292560] px-5 py-2 text-sm font-semibold text-white group-hover:bg-[#1e1a4a] transition-colors">
        Request a Custom Quote
      </span>
    </Link>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

function ProductSection({ title, products, showCustomCard }: { title: string; products: Product[]; showCustomCard?: boolean }) {
  return (
    <section className="w-full py-8">
      <div className="max-w-275 mx-auto px-6 py-5">
        <h2 className="text-[#292560] text-2xl font-bold mb-8 pb-3 border-b border-gray-200">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {showCustomCard && <CustomQuoteCard />}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="Our Products" />

      {/* Product sections */}
      {SECTIONS.map((section) => (
        <ProductSection
          key={section.title}
          title={section.title}
          products={section.products}
          showCustomCard={section.showCustomCard}
        />
      ))}

      {/* Bottom CTA banner */}
      <BannerComponent
        image="/images/bannerImage2.png"
        heading="Can't find what you're looking for?"
        className="h-75"
        alt="Sustainable Printing Custom Quote Banner"
        buttons={[{ label: "Request a Custom Quote", href: "/custom-quote", variant: "primary" }]}
      />
    </>
  );
}
