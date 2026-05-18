import { Product } from "@/src/types/product.types";
import Image from "next/image";
import ArrowRight from "./ArrowRight";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm mb-5">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
 
      {/* Title */}
      <h3 className="text-[#1a1a1a] font-bold text-[1.05rem] leading-snug mb-3">
        {product.title}
      </h3>
 
      {/* Description */}
      <p className="text-[#444] text-sm leading-relaxed mb-5 flex-1">
        {product.description}
      </p>
 
      {/* Shop link */}
      <a
        href={product.shopHref}
        className="
          inline-flex items-center gap-1.5
          text-[#4e9e7e] hover:underline
          text-sm font-medium
          transition-colors duration-150
          group
        "
      >
        {product.shopLabel}
        <span className="transition-transform duration-150 group-hover:translate-x-0.5">
          <ArrowRight />
        </span>
      </a>
    </article>
  );
}