import { ProductData } from "@/src/constants/products";
import { ProductConfiguratorData, InitialDelivery, InitialArtwork, InitialOrder } from "@/src/types/configurator.types";
import ProductConfiguratorPage from "./ProductConfiguratorPage";
import Link from "next/link";

interface Props {
  product: ProductData;
  configuratorConfig?: ProductConfiguratorData;
  initialStep?: number;
  initialDelivery?: InitialDelivery;
  initialArtwork?: InitialArtwork;
  initialOrder?: InitialOrder;
}

export default function ProductDetails({ product, configuratorConfig, initialStep, initialDelivery, initialArtwork, initialOrder }: Props) {
  // If a full configurator config exists for this product, render the rich configurator.
  // Otherwise fall back to a simple info page (for products not yet fully configured).
  if (configuratorConfig) {
    return <ProductConfiguratorPage config={configuratorConfig} initialStep={initialStep} initialDelivery={initialDelivery} initialArtwork={initialArtwork} initialOrder={initialOrder} />;
  }

  // Simple fallback for products without a configurator yet
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-14">
      <nav className="text-[13px] text-gray-500 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-[#3d9e5f] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-[#3d9e5f] transition-colors">Products</Link>
        <span>/</span>
        <span className="text-gray-800">{product.title}</span>
      </nav>
      <h1 className="text-[32px] font-bold text-gray-900 mb-4">{product.title}</h1>
      <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl">{product.description}</p>
    </div>
  );
}
