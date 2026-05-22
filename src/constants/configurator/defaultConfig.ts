import { ProductConfiguratorData } from "@/src/types/configurator.types";
import { ProductData } from "@/src/constants/products";

// Shared static data common to all products.
// papers, sizes, extras are intentionally empty — they are filled by the API
// in mergeApiConfig before the configurator renders.
export function createDefaultConfig(product: ProductData): ProductConfiguratorData {
  return {
    slug: product.slug,
    title: product.title,
    subtitle: `All of our ${product.title.toLowerCase()} are printed on 100% recycled papers.`,
    description: product.description,
    descriptionTitle: `Premium Recycled ${product.title}`,
    features: product.features,
    faqs: product.faqs ?? [],
    papers: [],
    sizes: [],
    extras: [],
    printingTypes: [
      { id: "double-sided", label: "Double sided",  description: "Full colour both sides"  },
      { id: "single-sided", label: "Single sided",  description: "Full colour front only"  },
    ],
    designOptions: [
      { value: 1, label: "1 design" },
      { value: 2, label: "2 designs" },
      { value: 3, label: "3 designs" },
      { value: 4, label: "4 designs" },
      { value: 5, label: "5 designs" },
    ],
    quantityOptions: [
      { value: 100,  label: "100"   },
      { value: 250,  label: "250"   },
      { value: 500,  label: "500"   },
      { value: 1000, label: "1,000" },
      { value: 2500, label: "2,500" },
      { value: 5000, label: "5,000" },
    ],
    pricingTiers: [
      { minQty: 100,  maxQty: 249,   pricePerUnit: 0.099 },
      { minQty: 250,  maxQty: 499,   pricePerUnit: 0.075 },
      { minQty: 500,  maxQty: 999,   pricePerUnit: 0.058 },
      { minQty: 1000, maxQty: 2499,  pricePerUnit: 0.045 },
      { minQty: 2500, maxQty: 4999,  pricePerUnit: 0.036 },
      { minQty: 5000, maxQty: 99999, pricePerUnit: 0.031 },
    ],
    pricingTable: [],
    gstRate: 0.10,
    relatedProductSlugs: [],
    artworkOptions: [
      {
        id: "upload-pdf",
        label: "Upload print-ready PDF",
        description: "I have my own artwork ready to print",
        badge: "RECOMMENDED" as const,
        icon: "upload-pdf" as const,
      },
      {
        id: "upload-later",
        label: "Upload artwork later",
        description: "I'll send my artwork via email after ordering",
        icon: "upload-later" as const,
        contextMessage: "No problem — we'll email you a secure upload link as soon as your order is placed. Production starts once your artwork is approved.",
        contextIcon: "info" as const,
      },
    ],
    artworkGuidelines: [
      "PDF format preferred (300dpi minimum resolution)",
      "Convert fonts to outlines / curves",
      "Keep important content 5mm from trim edge",
      "Include 3mm bleed on all sides",
      "CMYK colour mode for best results",
      "Embed all linked images at full quality",
    ],
    deliveryNote: "Delivery times are estimates and begin once artwork has been approved. Rural and remote areas may require additional time.",
    paymentMethods: [
      { id: "bank", label: "Direct Bank Transfer", description: "Pay directly via bank transfer.",       icon: "bank" as const, type: "bank" as const },
      { id: "card", label: "Credit Card",          description: "Pay securely using your credit card.", icon: "card" as const, type: "card" as const },
    ],
    bankDetails: {
      accountName:   "Sustainable Printing Co.",
      bank:          "ANZ Bank",
      bsb:           "013412",
      accountNumber: "309431255",
      paymentTerms:  "Payment Required prior to dispatch.",
    },
    paymentNote: "Note: Delivery times are estimates and begin once artwork has been approved. Rural and remote areas may require additional time.",
  };
}
