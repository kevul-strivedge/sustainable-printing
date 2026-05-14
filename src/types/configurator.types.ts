export interface QuantityOption {
  value: number;
  label: string;
}

export interface PaperOption {
  id: string;
  label: string;
  basePriceMultiplier: number;
}

export interface SizeOption {
  id: string;
  dimensions: string;
  label: string;
}

export interface PrintingType {
  id: string;
  label: string;
  description: string;
}

export interface ExtraOption {
  id: string;
  label: string;
  pricePerHundred: number;
}

export interface PricingTier {
  minQty: number;
  maxQty: number;
  pricePerUnit: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductConfiguratorData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  descriptionTitle?: string;
  aboutParagraphs?: string[];
  features: string[];
  faqs: FAQ[];
  designOptions: QuantityOption[];
  quantityOptions: QuantityOption[];
  papers: PaperOption[];
  sizes: SizeOption[];
  printingTypes: PrintingType[];
  extras: ExtraOption[];
  pricingTiers: PricingTier[];
  deliveryPrice: number;
  gstRate: number;
  relatedProductSlugs: string[];
}

export interface ConfiguratorState {
  currentStep: 1 | 2 | 3 | 4;
  numDesigns: number;
  quantityPerDesign: number;
  paperId: string;
  sizeId: string;
  printingTypeId: string;
  selectedExtras: string[];
}

export interface PriceBreakdown {
  subtotal: number;
  delivery: number;
  gst: number;
  total: number;
  perUnit: number;
}

export type ConfiguratorAction =
  | { type: "SET_DESIGNS"; value: number }
  | { type: "SET_QTY_PER_DESIGN"; value: number }
  | { type: "SET_PAPER"; id: string }
  | { type: "SET_SIZE"; id: string }
  | { type: "SET_PRINTING_TYPE"; id: string }
  | { type: "TOGGLE_EXTRA"; id: string }
  | { type: "NEXT_STEP" };
