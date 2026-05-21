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
  priceTiers: { quantity: number; price: number }[];
}

export interface PricingTier {
  minQty: number;
  maxQty: number;
  pricePerUnit: number;
}

export interface PricingTableRow {
  kind: number;
  quantity: number;
  formatId: string;
  stockId: string;
  price: number;
}

export interface FAQ {
  question: string;
  answer: string;

 boldWords?: {
  word: string;
  href?: string;
}[];
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
  dbId?: number;
  title: string;
  subtitle: string;
  description: string;
  descriptionTitle?: string;
  aboutParagraphs?: string[];
  features: string[];
  faqs: FAQ[];
  artworkOptions: ArtworkOption[];
  artworkGuidelines: string[];
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
  pricingTable: PricingTableRow[];
  deliveryPrice: number;
  gstRate: number;
  relatedProductSlugs: string[];
}

export interface ConfiguratorState {
  currentStep: 1 | 2 | 3 | 4;
  numDesigns: number;
  quantityPerDesign: number;
  splitRows: { numDesigns: number; qty: number }[];
  paperId: string;
  sizeId: string;
  printingTypeId: string;
  selectedExtras: string[];
  artworkMethod: string;
  artworkFileName: string;
  artworkFileSize: number;
  artworkFileUrl: string;
  deliveryFirstName: string;
  deliveryLastName: string;
  deliveryCompany: string;
  deliveryStreet: string;
  deliverySuburb: string;
  deliveryState: string;
  deliveryPostcode: string;
  deliveryPhone: string;
  deliveryEmail: string;
  paymentMethodId: string;
}

export interface PriceBreakdown {
  subtotal: number;
  delivery: number;
  gst: number;
  total: number;
  perUnit: number;
}

export interface SplitBreakdown {
  numDesigns: number;
  qty: number;
  subtotal: number;
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
  | { type: "SET_ARTWORK_FILE"; fileName: string; fileSize: number; fileUrl: string }
  | { type: "SET_DELIVERY_FIELD"; field: "deliveryFirstName" | "deliveryLastName" | "deliveryCompany" | "deliveryStreet" | "deliverySuburb" | "deliveryState" | "deliveryPostcode" | "deliveryPhone" | "deliveryEmail"; value: string }
  | { type: "SET_PAYMENT_METHOD"; id: string }
  | { type: "ADD_SPLIT_ROW"; numDesigns: number; qty: number }
  | { type: "SET_SPLIT_ROW"; index: number; numDesigns: number; qty: number }
  | { type: "REMOVE_SPLIT_ROW"; index: number };

export interface InitialDelivery {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  street: string;
  suburb: string;
  state: string;
  postcode: string;
  phone: string;
}

export interface InitialArtwork {
  fileUrl: string;
  fileName: string;
}

export interface InitialOrder {
  stock: string;
  format: string;
  ink: string;
  finish: string;
  kind: number;
  quantity: number;
  splits?: { numDesigns: number; qty: number }[];
}
