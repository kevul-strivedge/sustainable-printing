import { products } from "@/src/constants/products";
import ProductDetails from "@/src/components/pages/ProductDetails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return <ProductDetails product={product} />;
}
