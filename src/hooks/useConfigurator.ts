"use client";

import { useReducer, useMemo } from "react";
import {
  ConfiguratorState,
  ConfiguratorAction,
  PriceBreakdown,
  ProductConfiguratorData,
} from "@/src/types/configurator.types";

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
    default:
      return state;
  }
}

// Pure price calculator — swap this for an API call in the future without touching components.
export function calculatePrice(
  state: ConfiguratorState,
  config: ProductConfiguratorData
): PriceBreakdown {
  const totalQty = state.numDesigns * state.quantityPerDesign;

  let baseSubtotal = 0;
  if (config.pricingTable.length > 0) {
    // Use real DB prices — find the cheapest matching row for selected kind+qty+format+paper
    const matches = config.pricingTable.filter(
      (r) =>
        r.kind === state.numDesigns &&
        r.quantity === state.quantityPerDesign &&
        (state.sizeId === '' || r.formatId === state.sizeId) &&
        (state.paperId === '' || r.stockId === state.paperId)
    );
    if (matches.length > 0) {
      baseSubtotal = Math.min(...matches.map((r) => r.price));
    }
  } else {
    // Fallback: hardcoded tier calculation for products without DB pricing
    const tier = config.pricingTiers.find(
      (t) => totalQty >= t.minQty && totalQty <= t.maxQty
    );
    const paper = config.papers.find((p) => p.id === state.paperId);
    const basePerUnit = (tier?.pricePerUnit ?? 0) * (paper?.basePriceMultiplier ?? 1);
    baseSubtotal = basePerUnit * totalQty;
  }

  const extrasTotal = state.selectedExtras.reduce((sum, id) => {
    const extra = config.extras.find((e) => e.id === id);
    if (!extra) return sum;
    const tier = extra.priceTiers.find((t) => t.quantity === state.quantityPerDesign);
    return sum + (tier?.price ?? 0) * state.numDesigns;
  }, 0);

  const subtotal = baseSubtotal + extrasTotal;
  const delivery = config.deliveryPrice;
  const gst = (subtotal + delivery) * config.gstRate;
  const total = subtotal + delivery + gst;
  const perUnit = totalQty > 0 ? subtotal / totalQty : 0;

  return { subtotal, delivery, gst, total, perUnit };
}

export function useConfigurator(config: ProductConfiguratorData) {
  const initialState: ConfiguratorState = {
    currentStep: 1,
    numDesigns: config.designOptions[0].value,
    quantityPerDesign: config.quantityOptions[0].value,
    paperId: config.papers[0]?.id ?? '',
    sizeId: config.sizes[0]?.id ?? '',
    printingTypeId: config.printingTypes[0]?.id ?? '',
    selectedExtras: [],
    artworkMethod: config.artworkOptions[0].id,
    artworkFileName: "",
    artworkFileSize: 0,
    artworkFileUrl: "",
    deliveryFirstName: "",
    deliveryLastName: "",
    deliveryCompany: "",
    deliveryStreet: "",
    deliverySuburb: "",
    deliveryState: "",
    deliveryPostcode: "",
    deliveryPhone: "",
    deliveryEmail: "",
    paymentMethodId: config.paymentMethods[0].id,
  };

  const [state, dispatch] = useReducer(configuratorReducer, initialState);

  const priceBreakdown = useMemo(
    () => calculatePrice(state, config),
    [state, config]
  );

  return { state, dispatch, priceBreakdown };
}
