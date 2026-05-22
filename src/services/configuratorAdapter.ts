import type { ProductConfiguratorData } from '@/src/types/configurator.types';
import type { ApiConfiguratorConfig } from './api';

// Maps backend API config response onto the existing ProductConfiguratorData shape.
// Only papers, sizes, and extras are replaced — everything else (FAQs, delivery,
// payment, pricing tiers) stays from the hardcoded base config until those
// backend APIs are built.
export function mergeApiConfig(
  base: ProductConfiguratorData,
  api: ApiConfiguratorConfig,
): ProductConfiguratorData {
  // One paper entry per (productId, stockId) pair. paper.id stays plain (stockId);
  // the cardVariantSelector handles which product variant is active and PaperSelector
  // filters its list by that variant before rendering — so stockId is unique within
  // any one variant.
  const seenPairs = new Set<string>();
  const papers = api.paper_type
    .filter((p) => {
      const key = `${p.productId ?? 0}-${p.stockId}`;
      if (seenPairs.has(key)) return false;
      seenPairs.add(key);
      return true;
    })
    .map((p) => ({
      id: String(p.stockId),
      label: p.paperName,
      basePriceMultiplier: 1.0,
      productId: p.productId,
    }));

  // Build the card-variant list — one per portfolio (sibling product). Mirrors
  // Laravel's "Choose your card" tile selector that appears above "Choose your paper".
  const cardVariants = (api.portfolios ?? []).map((pf) => ({
    id: String(pf.productId),
    label: pf.title || pf.title2 || `Variant ${pf.productId}`,
    productId: pf.productId,
  }));

  // Deduplicate by formatId — paper_size has one row per kind per format
  const seenFormats = new Set<number>();
  const sizes = api.paper_size
    .filter((s) => {
      if (seenFormats.has(s.formatId)) return false;
      seenFormats.add(s.formatId);
      return true;
    })
    .map((s) => ({
      id: String(s.formatId),
      dimensions: s.formatName,
      label: s.formatName,
    }));

  const seenFinishes = new Set<number>();
  const extras = api.finishing
    .filter((f) => {
      if (seenFinishes.has(f.finishId)) return false;
      seenFinishes.add(f.finishId);
      return true;
    })
    .map((f) => ({
      id: String(f.finishId),
      label: f.finishName,
      priceTiers: api.finish_prices
        .filter((p) => p.finishId === f.finishId)
        .map((p) => ({ quantity: p.quantity, price: p.price })),
    }));

  const seenKinds = new Set<number>();
  const designOptions = (api.design_options ?? [])
    .filter((d) => {
      if (seenKinds.has(d.kind)) return false;
      seenKinds.add(d.kind);
      return true;
    })
    .map((d) => ({
      value: d.kind,
      label: d.kind === 1 ? '1 design' : `${d.kind} designs`,
    }));

  const seenQtys = new Set<number>();
  const quantityOptions = (api.quantity_options ?? [])
    .filter((q) => {
      if (seenQtys.has(q.quantity)) return false;
      seenQtys.add(q.quantity);
      return true;
    })
    .map((q) => ({
      value: q.quantity,
      label: q.quantity.toLocaleString(),
    }));

  // Derive printing types from back ink names — any "blank" variant = single sided, others = double sided
  const printingTypes: { id: string; label: string; description: string }[] = [];
  const isBlankInk = (name: string) => name.toLowerCase().includes('blank');
  const hasDoubleSided = api.back.some((b) => b.inkName && !isBlankInk(b.inkName));
  const hasSingleSided = api.back.some((b) => b.inkName && isBlankInk(b.inkName));
  if (hasDoubleSided) printingTypes.push({ id: 'double-sided', label: 'Double sided', description: 'Full colour both sides' });
  if (hasSingleSided) printingTypes.push({ id: 'single-sided', label: 'Single sided', description: 'Full colour front only' });

  const pricingTable = (api.pricing_table ?? []).map((r) => ({
    kind:            r.kind,
    quantity:        r.quantity,
    formatId:        String(r.formatId),
    stockId:         String(r.stockId),
    productId:       r.productId,
    price:           r.price,
    estimatedWeight: r.estimatedWeight,
  }));

  return {
    ...base,
    papers: papers.length > 0 ? papers : base.papers,
    sizes: sizes.length > 0 ? sizes : base.sizes,
    extras: extras.length > 0 ? extras : base.extras,
    designOptions: designOptions.length > 0 ? designOptions : base.designOptions,
    quantityOptions: quantityOptions.length > 0 ? quantityOptions : base.quantityOptions,
    printingTypes,
    pricingTable: pricingTable.length > 0 ? pricingTable : base.pricingTable,
    portfolios: api.portfolios,
    cardVariants,
  };
}
