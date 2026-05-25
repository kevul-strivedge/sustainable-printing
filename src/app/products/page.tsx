import ProductsPage from "@/src/components/pages/ProductsPage";
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("products");

export default function Page() {
  return <ProductsPage />;
}
