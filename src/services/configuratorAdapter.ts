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
  const seenStocks = new Set<number>();
  const papers = api.paper_type
    .filter((p) => {
      if (seenStocks.has(p.stockId)) return false;
      seenStocks.add(p.stockId);
      return true;
    })
    .map((p) => ({
      id: String(p.stockId),
      label: p.paperName,
      basePriceMultiplier: 1.0,
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
    kind:     r.kind,
    quantity: r.quantity,
    formatId: String(r.formatId),
    stockId:  String(r.stockId),
    price:    r.price,
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
  };
}
