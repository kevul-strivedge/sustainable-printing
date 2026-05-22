"use client";

import { useReducer, useMemo, useEffect } from "react";
import {
  ConfiguratorState,
  ConfiguratorAction,
  PriceBreakdown,
  SplitBreakdown,
  ProductConfiguratorData,
  InitialOrder,
} from "@/src/types/configurator.types";
import { fetchDeliveryPrice } from "@/src/services/api";

function configuratorReducer(
  state: ConfiguratorState,
  action: ConfiguratorAction
): ConfiguratorState {
  switch (action.type) {
    case "SET_DESIGNS":
      return { ...state, numDesigns: action.value };
    case "SET_QTY_PER_DESIGN":
      return { ...state, quantityPerDesign: action.value };
    case "SET_PAPER":
      return { ...state, paperId: action.id };
    case "SET_CARD_VARIANT":
      // Switching variant invalidates paperId — caller passes the new variant id;
      // ProductConfiguratorPage will re-dispatch SET_PAPER with a valid paper for the
      // new variant (the first one in that variant's paper list).
      return { ...state, cardVariantId: action.id };
    case "SET_SIZE":
      return { ...state, sizeId: action.id };
    case "SET_PRINTING_TYPE":
      return { ...state, printingTypeId: action.id };
    case "TOGGLE_EXTRA":
      return {
        ...state,
        selectedExtras: state.selectedExtras.includes(action.id)
          ? state.selectedExtras.filter((id) => id !== action.id)
          : [...state.selectedExtras, action.id],
      };
    case "NEXT_STEP":
      return { ...state, currentStep: Math.min(state.currentStep + 1, 4) as 1 | 2 | 3 | 4 };
    case "PREV_STEP":
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1) as 1 | 2 | 3 | 4 };
    case "SET_ARTWORK_METHOD":
      return { ...state, artworkMethod: action.id };
    case "SET_ARTWORK_FILE":
      return { ...state, artworkFileName: action.fileName, artworkFileSize: action.fileSize, artworkFileUrl: action.fileUrl };
    case "SET_DELIVERY_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethodId: action.id };
    case "ADD_SPLIT_ROW":
      return { ...state, splitRows: [...state.splitRows, { numDesigns: action.numDesigns, qty: action.qty }] };
    case "SET_SPLIT_ROW": {
      const updated = state.splitRows.map((r, i) =>
        i === action.index ? { numDesigns: action.numDesigns, qty: action.qty } : r
      );
      return { ...state, splitRows: updated };
    }
    case "REMOVE_SPLIT_ROW":
      return { ...state, splitRows: state.splitRows.filter((_, i) => i !== action.index) };
    case "SET_DELIVERY_PRICE":
      return { ...state, deliveryPrice: action.price, deliveryFetching: false };
    case "SET_DELIVERY_FETCHING":
      return { ...state, deliveryFetching: action.fetching };
    default:
      return state;
  }
}

// Price for a single quantity split (no delivery/GST — just the print subtotal).
function calcSplitSubtotal(
  numDesigns: number,
  qty: number,
  paperId: string,
  cardVariantId: string,
  sizeId: string,
  selectedExtras: string[],
  config: ProductConfiguratorData
): number {
  let base = 0;
  const variantPid = cardVariantId ? Number(cardVariantId) : undefined;
  if (config.pricingTable.length > 0) {
    const byKindQty = config.pricingTable.filter(
      (r) => r.kind === numDesigns && r.quantity === qty
    );

    // Try most-specific match first, relax constraints if nothing found
    const exact = byKindQty.filter(
      (r) =>
        (sizeId === '' || r.formatId === sizeId) &&
        (paperId === '' || r.stockId === paperId) &&
        (variantPid === undefined || r.productId === undefined || r.productId === variantPid)
    );
    const bySize  = exact.length  ? exact  : byKindQty.filter((r) => sizeId === '' || r.formatId === sizeId);
    const matches = bySize.length ? bySize : byKindQty;

    if (matches.length > 0) base = Math.min(...matches.map((r) => r.price));
  } else {
    const totalQty = numDesigns * qty;
    const tier = config.pricingTiers.find((t) => totalQty >= t.minQty && totalQty <= t.maxQty);
    const paper = config.papers.find((p) => p.id === paperId);
    base = (tier?.pricePerUnit ?? 0) * (paper?.basePriceMultiplier ?? 1) * totalQty;
  }
  const extras = selectedExtras.reduce((sum, id) => {
    const extra = config.extras.find((e) => e.id === id);
    if (!extra) return sum;
    // Mirror Laravel ProductController.php:1589-1597 — build qty→price map in insertion
    // order (sorted by pt_finish_prices.id, later rows overwrite earlier ones), then
    // pick the LAST tier whose quantity ≤ target qty (NOT the highest tier ≤ qty —
    // because PHP foreach iterates keys in first-appearance order).
    const sorted = [...extra.priceTiers].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
    const priceMap = new Map<number, number>();
    const insertionOrder: number[] = [];
    for (const t of sorted) {
      if (!priceMap.has(t.quantity)) insertionOrder.push(t.quantity);
      priceMap.set(t.quantity, t.price);
    }
    let finis = 0;
    for (const q of insertionOrder) {
      if (qty >= q) finis = priceMap.get(q) ?? 0;
    }
    return sum + finis;
  }, 0);
  return base + extras;
}

// Pure price calculator — swap this for an API call in the future without touching components.
export function calculatePrice(
  state: ConfiguratorState,
  config: ProductConfiguratorData
): PriceBreakdown {
  const allRows = [
    { numDesigns: state.numDesigns, qty: state.quantityPerDesign },
    ...state.splitRows,
  ];
  const totalSubtotal = allRows.reduce(
    (sum, r) => sum + calcSplitSubtotal(r.numDesigns, r.qty, state.paperId, state.cardVariantId, state.sizeId, state.selectedExtras, config),
    0
  );
  const totalUnits = allRows.reduce((s, r) => s + r.numDesigns * r.qty, 0);
  const delivery = state.deliveryPrice;
  // Laravel applies 10% GST only to weight_price (delivery) — pt_product_pricing
  // prices are already stored GST-inclusive, so we'd double-charge if we apply it
  // to the subtotal too. See docs/sustainable-master/public/js/custom-current.js:1823-1839.
  const gst = delivery * config.gstRate;
  const total = totalSubtotal + delivery + gst;
  const perUnit = totalUnits > 0 ? totalSubtotal / totalUnits : 0;
  return { subtotal: totalSubtotal, delivery, gst, total, perUnit };
}

export function calculateSplitBreakdowns(
  state: ConfiguratorState,
  config: ProductConfiguratorData
): SplitBreakdown[] {
  return [
    { numDesigns: state.numDesigns, qty: state.quantityPerDesign },
    ...state.splitRows,
  ].map((r) => ({
    numDesigns: r.numDesigns,
    qty:        r.qty,
    subtotal:   calcSplitSubtotal(r.numDesigns, r.qty, state.paperId, state.cardVariantId, state.sizeId, state.selectedExtras, config),
  }));
}

export function useConfigurator(
  config: ProductConfiguratorData,
  initialStep?: number,
  initialDelivery?: { firstName: string; lastName: string; email: string; company: string; street: string; suburb: string; state: string; postcode: string; phone: string },
  initialArtwork?: { fileUrl: string; fileName: string },
  initialOrder?: InitialOrder,
  /** Optional ?variant=NNN from the URL — picks which sibling product is active on load. */
  initialVariantId?: string,
) {
  const uploadMethod = config.artworkOptions.find(o => o.id === 'upload-pdf')?.id ?? config.artworkOptions[0].id;

  // Resolve step-1 values from a prior order by matching stored labels/IDs back to config entries
  // Variant resolution order:
  //   1. Explicit ?variant=NNN query param (footer "Quick Links" deep-link here)
  //   2. Slug's own dbId (so /square-stickers opens with productId=26, not whichever
  //      product the backend listed first)
  //   3. First variant in the list
  const requestedVariantPid = initialVariantId ? Number(initialVariantId) : undefined;
  const initVariant = (requestedVariantPid
    ? config.cardVariants?.find(v => v.productId === requestedVariantPid)
    : undefined)
    ?? config.cardVariants?.find(v => v.productId === config.dbId)
    ?? config.cardVariants?.[0];
  // Default paper = first paper of the active variant, falling back to first overall.
  const initPaper = initialOrder
    ? (config.papers.find(p => p.label === initialOrder.stock) ?? config.papers[0])
    : (config.papers.find(p => p.productId === initVariant?.productId) ?? config.papers[0]);
  const initSize     = initialOrder ? (config.sizes.find(s => s.label === initialOrder.format) ?? config.sizes[0]) : config.sizes[0];
  const initPrinting = initialOrder ? (config.printingTypes.find(pt => pt.id === initialOrder.ink) ?? config.printingTypes[0]) : config.printingTypes[0];
  const initExtras   = initialOrder?.finish && !initialOrder.finish.toLowerCase().includes("straight")
    ? [config.extras.find(e => e.label === initialOrder.finish)?.id].filter((id): id is string => !!id)
    : [];
  const initDesigns  = initialOrder ? (config.designOptions.find(d => d.value === initialOrder.kind)?.value ?? config.designOptions[0].value) : config.designOptions[0].value;
  const initQty      = initialOrder ? (config.quantityOptions.find(q => q.value === initialOrder.quantity)?.value ?? config.quantityOptions[0].value) : config.quantityOptions[0].value;

  const initialState: ConfiguratorState = {
    currentStep: (initialStep as ConfiguratorState["currentStep"]) ?? 1,
    numDesigns:        initDesigns,
    quantityPerDesign: initQty,
    splitRows:         initialOrder?.splits ?? [],
    cardVariantId: initVariant?.id ?? '',
    paperId:        initPaper?.id    ?? '',
    sizeId:         initSize?.id     ?? '',
    printingTypeId: initPrinting?.id ?? '',
    selectedExtras: initExtras,
    artworkMethod:   initialArtwork ? uploadMethod : config.artworkOptions[0].id,
    artworkFileName: initialArtwork?.fileName ?? "",
    artworkFileSize: 0,
    artworkFileUrl:  initialArtwork?.fileUrl  ?? "",
    deliveryFirstName: initialDelivery?.firstName ?? "",
    deliveryLastName:  initialDelivery?.lastName  ?? "",
    deliveryCompany:   initialDelivery?.company   ?? "",
    deliveryStreet:    initialDelivery?.street    ?? "",
    deliverySuburb:    initialDelivery?.suburb    ?? "",
    deliveryState:     initialDelivery?.state     ?? "",
    deliveryPostcode:  initialDelivery?.postcode  ?? "",
    deliveryPhone:     initialDelivery?.phone     ?? "",
    deliveryEmail:     initialDelivery?.email     ?? "",
    paymentMethodId: config.paymentMethods[0].id,
    deliveryPrice:   0,
    deliveryFetching: false,
  };

  const [state, dispatch] = useReducer(configuratorReducer, initialState);

  // Fetch delivery price whenever postcode or weight-affecting config changes
  useEffect(() => {
    const postcode = state.deliveryPostcode;
    if (!/^\d{4}$/.test(postcode)) {
      dispatch({ type: "SET_DELIVERY_PRICE", price: 0 });
      return;
    }
    const variantPid = state.cardVariantId ? Number(state.cardVariantId) : undefined;
    const row = config.pricingTable.find(
      (r) =>
        r.kind === state.numDesigns &&
        r.quantity === state.quantityPerDesign &&
        (state.sizeId === "" || r.formatId === state.sizeId) &&
        (state.paperId === "" || r.stockId === state.paperId) &&
        (variantPid === undefined || r.productId === undefined || r.productId === variantPid)
    );
    const weight = (row?.estimatedWeight && row.estimatedWeight > 0) ? row.estimatedWeight : 0.5;
    let cancelled = false;
    dispatch({ type: "SET_DELIVERY_FETCHING", fetching: true });
    fetchDeliveryPrice(postcode, weight)
      .then((price) => { if (!cancelled) dispatch({ type: "SET_DELIVERY_PRICE", price }); })
      .catch(() => { if (!cancelled) dispatch({ type: "SET_DELIVERY_PRICE", price: 0 }); });
    return () => { cancelled = true; };
  }, [state.deliveryPostcode, state.numDesigns, state.quantityPerDesign, state.paperId, state.cardVariantId, state.sizeId]);

  const priceBreakdown = useMemo(() => calculatePrice(state, config), [state, config]);
  const splitBreakdowns = useMemo(() => calculateSplitBreakdowns(state, config), [state, config]);

  return { state, dispatch, priceBreakdown, splitBreakdowns };
}
