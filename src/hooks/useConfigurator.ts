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
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 4) as 1 | 2 | 3 | 4,
      };
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

  const tier = config.pricingTiers.find(
    (t) => totalQty >= t.minQty && totalQty <= t.maxQty
  );
  const paper = config.papers.find((p) => p.id === state.paperId);

  const basePerUnit = (tier?.pricePerUnit ?? 0) * (paper?.basePriceMultiplier ?? 1);

  const extrasTotal = state.selectedExtras.reduce((sum, id) => {
    const extra = config.extras.find((e) => e.id === id);
    return sum + ((extra?.pricePerHundred ?? 0) / 100) * totalQty;
  }, 0);

  const subtotal = basePerUnit * totalQty + extrasTotal;
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
    paperId: config.papers[0].id,
    sizeId: config.sizes[0].id,
    printingTypeId: config.printingTypes[0].id,
    selectedExtras: [],
  };

  const [state, dispatch] = useReducer(configuratorReducer, initialState);

  const priceBreakdown = useMemo(
    () => calculatePrice(state, config),
    [state, config]
  );

  return { state, dispatch, priceBreakdown };
}
