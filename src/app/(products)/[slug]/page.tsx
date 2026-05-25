import type { Metadata } from "next";
import { products } from "@/src/constants/products";
import { getConfiguratorConfig } from "@/src/constants/configurator";
import { createDefaultConfig } from "@/src/constants/configurator/defaultConfig";
import ProductDetails from "@/src/components/pages/ProductDetails";
import { notFound } from "next/navigation";
import { getProductConfig, fetchOrderById } from "@/src/services/api";
import { mergeApiConfig } from "@/src/services/configuratorAdapter";
import { productMetadata } from "@/src/constants/seoMeta";
import type { InitialDelivery, InitialArtwork, InitialOrder } from "@/src/types/configurator.types";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ startStep?: string; quoteId?: string; variant?: string; seo?: string }>;
};

// SEO — every product URL (including Laravel-style aliases routed here via rewrites)
// emits the exact <title>/<meta description>/<meta keywords> from docs/sustainable-master/meta.xlsx.
// Resolution order: ?seo=<laravel-slug> (rewrites for category pages) > (slug + ?variant=) > slug fallback.
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { variant, seo } = await searchParams;
  const variantPid = variant && /^\d+$/.test(variant) ? Number(variant) : undefined;
  return productMetadata(slug, variantPid, seo);
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { startStep, quoteId, variant } = await searchParams;
  const initialStep = startStep ? Math.min(4, Math.max(1, Number(startStep))) : undefined;
  // ?variant=17 → start the configurator with that sibling product pre-selected.
  // Footer "Quick Links" use this to deep-link e.g. /business-cards?variant=17 for
  // the Brown-Kraft variant, mirroring Laravel's separate URLs for each variant.
  const initialVariantId = variant && /^\d+$/.test(variant) ? variant : undefined;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  // Pre-fill delivery and artwork details if resuming from an existing order
  let initialDelivery: InitialDelivery | undefined;
  let initialArtwork: InitialArtwork | undefined;
  let initialOrder: InitialOrder | undefined;
  if (quoteId) {
    const order = await fetchOrderById(Number(quoteId));
    if (order?.deliveryDetails) {
      try {
        const d = JSON.parse(order.deliveryDetails);
        initialDelivery = {
          firstName: d.firstName ?? '',
          lastName:  d.lastName  ?? '',
          email:     d.email     ?? '',
          company:   d.company   ?? '',
          street:    d.address   ?? '',
          suburb:    d.suburb    ?? '',
          state:     d.state     ?? '',
          postcode:  d.postcode  ?? '',
          phone:     d.phone     ?? '',
        };
      } catch { /* malformed snapshot — skip pre-fill */ }
    } else if (order?.member) {
      const m = order.member;
      initialDelivery = {
        firstName: m.firstName    ?? '',
        lastName:  m.lastName     ?? '',
        email:     m.email        ?? '',
        company:   m.businessname ?? '',
        street:    m.address      ?? '',
        suburb:    m.suburb       ?? '',
        state:     m.state        ?? '',
        postcode:  m.postcode     ?? '',
        phone:     m.phone        ?? '',
      };
    }
    if (order?.artworkUrl) {
      const url = order.artworkUrl;
      initialArtwork = {
        fileUrl:  url,
        fileName: url.split('/').pop() ?? url,
      };
    }
    if (order) {
      let storedSplits: { numDesigns: number; qty: number }[] | undefined;
      try {
        const parsed = JSON.parse(order.summary ?? '{}');
        if (Array.isArray(parsed.splits) && parsed.splits.length > 0) {
          // Drop the first row — it becomes the primary numDesigns/quantity in the state
          storedSplits = parsed.splits.slice(1).map((s: { numDesigns: number; qty: number }) => ({
            numDesigns: s.numDesigns,
            qty: s.qty,
          }));
        }
      } catch { /* malformed summary — skip splits */ }

      initialOrder = {
        stock:    order.stock    ?? '',
        format:   order.format   ?? '',
        ink:      order.ink      ?? '',
        finish:   order.finish   ?? '',
        kind:     order.kind     ?? 1,
        quantity: order.quantity ?? 0,
        splits:   storedSplits,
      };
    }
  }

  // Use the product-specific config if it exists, otherwise fall back to the
  // generic config for any product that has a dbId (API data available).
  const baseConfig =
    getConfiguratorConfig(slug) ??
    (product.dbId ? createDefaultConfig(product) : undefined);

  // Enrich with live data from the backend (papers, sizes, finishing options).
  let configuratorConfig = baseConfig;
  if (baseConfig && product.dbId) {
    const apiConfig = await getProductConfig(product.dbId, product.siblingDbIds);
    if (apiConfig) {
      configuratorConfig = mergeApiConfig(baseConfig, apiConfig);
    }
    if (configuratorConfig) {
      configuratorConfig = {
        ...configuratorConfig,
        dbId: product.dbId,
        variantSelectorLabel: product.variantSelectorLabel ?? configuratorConfig.variantSelectorLabel,
      };
    }
  }

  return (
    <ProductDetails
      product={product}
      configuratorConfig={configuratorConfig}
      initialStep={initialStep}
      initialDelivery={initialDelivery}
      initialArtwork={initialArtwork}
      initialOrder={initialOrder}
      initialVariantId={initialVariantId}
    />
  );
}
