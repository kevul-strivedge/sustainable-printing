import Image from "next/image";
import { ProductData } from "@/src/constants/products";

function LeafIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 3.69 1.99 6.9 4.93 8.65L12 22l5.07-1.35C19.01 18.9 21 15.69 21 12c0-5.52-4.48-10-9-10z"
        fill="#3d9e5f"
        opacity="0.2"
      />
      <path
        d="M17 8c-2.5 0-5 1-7 3-1.5 1.5-2.5 3.5-2.5 5.5 0 .28.02.56.05.83C9.55 17.11 11.7 17 13 15.5c1.5-1.7 1.5-4.5 4-5.5-1 2-1 4.5-3 6.5-1.5 1.5-3.5 2.5-5.5 2.5H8c.5 1 1.5 2 3 2 4 0 8-3 8-8 0-2-.5-3.5-2-5z"
        fill="#3d9e5f"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#3d9e5f" opacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductDetails({ product }: { product: ProductData }) {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12 sm:py-16">

      {/* Breadcrumb */}
      <nav className="text-[13px] text-gray-500 mb-8 flex items-center gap-2">
        <a href="/" className="hover:text-[#3d9e5f] transition-colors">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-[#3d9e5f] transition-colors">Products</a>
        <span>/</span>
        <span className="text-gray-800">{product.title}</span>
      </nav>

      {/* Hero: image + summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14">

        {/* Image */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#3d9e5f]">
            <LeafIcon />
            <span>100% Eco-Friendly</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {product.title}
          </h1>

          <p className="text-[15px] text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-[#1e4620]">{product.priceFrom}</p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#"
              className="inline-block px-8 py-3 text-[15px] font-medium bg-[#3d9e5f] text-white rounded-sm hover:bg-[#2d7a47] transition-colors duration-150"
            >
              Get a Quote
            </a>
            <a
              href="/sample-pack"
              className="inline-block px-8 py-3 text-[15px] font-medium border border-gray-300 text-gray-800 rounded-sm hover:bg-gray-50 transition-colors duration-150"
            >
              Order Sample Pack
            </a>
          </div>
        </div>
      </div>

      {/* Features + Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Features */}
        <div className="bg-[#f7faf8] rounded-lg p-8 border border-[#d4eedd]">
          <h2 className="text-[18px] font-semibold text-gray-900 mb-5">Why choose our {product.title}?</h2>
          <ul className="flex flex-col gap-4">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[14px] text-gray-700">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Specs */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-[18px] font-semibold text-gray-900">Specifications</h2>
          </div>
          <table className="w-full text-[14px]">
            <tbody>
              {product.specs.map(({ label, value }, i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-3 font-medium text-gray-700 w-[45%]">{label}</td>
                  <td className="px-6 py-3 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center bg-[#f7faf8] border border-[#d4eedd] rounded-lg px-6 py-10">
        <p className="text-[22px] font-bold text-[#1e4620] mb-2">Ready to order?</p>
        <p className="text-[15px] text-gray-600 mb-6">
          Get in touch for a custom quote or order a free sample pack to see the quality for yourself.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="inline-block px-8 py-3 text-[15px] font-medium bg-[#3d9e5f] text-white rounded-sm hover:bg-[#2d7a47] transition-colors duration-150"
          >
            Request a Custom Quote
          </a>
          <a
            href="/sample-pack"
            className="inline-block px-8 py-3 text-[15px] font-medium bg-[#f5c518] text-gray-900 rounded-sm hover:bg-[#e8b800] transition-colors duration-150"
          >
            Order a Sample Pack
          </a>
        </div>
      </div>

    </div>
  );
}
