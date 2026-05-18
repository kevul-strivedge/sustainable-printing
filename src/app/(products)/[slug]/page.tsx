import { products } from "@/src/constants/products";
import { getConfiguratorConfig } from "@/src/constants/configurator";
import { createDefaultConfig } from "@/src/constants/configurator/defaultConfig";
import ProductDetails from "@/src/components/pages/ProductDetails";
import { notFound } from "next/navigation";
import { getProductConfig } from "@/src/services/api";
import { mergeApiConfig } from "@/src/services/configuratorAdapter";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  // Use the product-specific config if it exists, otherwise fall back to the
  // generic config for any product that has a dbId (API data available).
  const baseConfig =
    getConfiguratorConfig(slug) ??
    (product.dbId ? createDefaultConfig(product) : undefined);

  // Enrich with live data from the backend (papers, sizes, finishing options).
  let configuratorConfig = baseConfig;
  if (baseConfig && product.dbId) {
    const apiConfig = await getProductConfig(product.dbId);
    if (apiConfig) {
      configuratorConfig = mergeApiConfig(baseConfig, apiConfig);
    }
    if (configuratorConfig) {
      configuratorConfig = { ...configuratorConfig, dbId: product.dbId };
    }
  }

  return <ProductDetails product={product} configuratorConfig={configuratorConfig} />;
}
