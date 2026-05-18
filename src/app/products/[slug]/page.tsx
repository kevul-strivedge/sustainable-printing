import { products } from "@/src/constants/products";
import { getConfiguratorConfig } from "@/src/constants/configurator";
import ProductDetails from "@/src/components/pages/ProductDetails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const configuratorConfig = getConfiguratorConfig(slug) ?? undefined;

  return <ProductDetails product={product} configuratorConfig={configuratorConfig} />;
}
