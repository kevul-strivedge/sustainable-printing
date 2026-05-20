import { Product } from "@/src/types/product.types";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col group">
      {/* Image */}
      <div className={`relative w-full aspect-[4/3] overflow-hidden rounded-sm mb-5 ${product.containerClassName} `}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover ${product.imgClassName}`}
        />
      </div>

      {/* Title */}
      <h3 className={`text-[#1a1a1a] font-bold text-[1.05rem] leading-snug ${product.titleClassName}`}>
        {product.title}
      </h3>

      {/* Description */}
      <p className="text-[#444] text-sm leading-relaxed mb-5 flex-1">
        {product.description}
      </p>

      {/* Shop link */}
      <Link
        href={product.shopHref}
        className="
          inline-flex items-center gap-1.5
          text-[#4CCC88] hover:underline
          text-md font-medium
          transition-colors duration-150
          group
        "
      >
        {product.shopLabel}
        <span className="transition-transform duration-150 group-hover:translate-x-0.5">
            <ChevronRight size={20} strokeWidth={2.5} />
        </span>
      </Link>
    </article>
  );
}
