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

export interface PaymentMethod {
  id: string;
  label: string;
  description: string;
  icon: "bank" | "card";
  type: "bank" | "card";
}

export interface BankDetails {
  accountName: string;
  bank: string;
  bsb: string;
  accountNumber: string;
  paymentTerms: string;
}

export interface DeliveryMethod {
  id: string;
  label: string;
  description: string;
  price: number;
  badge?: string;
  icon: "standard" | "express" | "pickup";
}

export interface ArtworkOption {
  id: string;
  label: string;
  description: string;
  badge?: "RECOMMENDED" | "NEW";
  icon: "upload-pdf" | "upload-later" | "online-designer";
  contextMessage?: string;
  contextIcon?: "info" | "lightning";
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
  artworkOptions: ArtworkOption[];
  artworkGuidelines: string[];
  deliveryMethods: DeliveryMethod[];
  deliveryNote?: string;
  paymentMethods: PaymentMethod[];
  bankDetails?: BankDetails;
  paymentNote?: string;
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
  artworkMethod: string;
  artworkFileName: string;
  artworkFileSize: number;
  deliveryFirstName: string;
  deliveryLastName: string;
  deliveryCompany: string;
  deliveryStreet: string;
  deliverySuburb: string;
  deliveryState: string;
  deliveryPostcode: string;
  deliveryPhone: string;
  deliveryEmail: string;
  deliveryMethodId: string;
  paymentMethodId: string;
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
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_ARTWORK_METHOD"; id: string }
  | { type: "SET_ARTWORK_FILE"; fileName: string; fileSize: number }
  | { type: "SET_DELIVERY_FIELD"; field: "deliveryFirstName" | "deliveryLastName" | "deliveryCompany" | "deliveryStreet" | "deliverySuburb" | "deliveryState" | "deliveryPostcode" | "deliveryPhone" | "deliveryEmail"; value: string }
  | { type: "SET_DELIVERY_METHOD"; id: string }
  | { type: "SET_PAYMENT_METHOD"; id: string };
