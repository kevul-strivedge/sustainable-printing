import { ProductConfiguratorData } from "@/src/types/configurator.types";

export const businessCardsConfig: ProductConfiguratorData = {
  slug: "business-cards",
  title: "Business Cards",
  subtitle: "All of our business cards are printed full colour on 100% recycled papers.",
  description:
    "Communicate that your business is Eco-Friendly with our range of recycled business cards. From 350gsm 100% recycled Uncoated Business cards to brown Kraft Business cards to 350gsm Recycled Silk. Contact us if you need something different at sales@sustainableprintingco.com.au.",
  descriptionTitle: "Premium Uncoated Recycled Business Cards",
  aboutParagraphs: [
    "Sustainable Printing Co was founded to provide artists, brands and businesses with a fully sustainable printing solution. All of our papers are made from 100% post consumer recycled fibre and we use vegetable based inks to further reduce our environmental impact.",
    "We are a family business with over 30 years' experience in the printing industry that is proudly Australian owned and operated. Our facility runs on 100% GreenPower and we are committed to reducing waste at every step of the printing process.",
  ],
  features: [
    "100% post consumer recycled uncoated cards",
    "Excellent printability, colours look great",
    "350gsm Uncoated (natural look and feel)",
    "Perfect to write on",
    "High white finish (without nasty bleaching processes)",
    "Communicates that your business is eco friendly",
    "Option to round corner",
  ],
  faqs: [
    {
      question: "Are your business cards printed in Australia?",
      answer:
        "They sure are, we produce all our printing in our Australian facility. We are a family business with over 30 years' experience in the printing industry that is proudly Australian owned.",
    },
    {
      question: "What paper stocks are available for business cards?",
      answer:
        "We offer 350gsm EcoStar 100% Recycled Uncoated (White), 350gsm Recycled Silk, and 300gsm Kraft Brown. All stocks are made from 100% post-consumer recycled fibre.",
    },
    {
      question: "What sizes do you print business cards in?",
      answer:
        "We print Standard AU (90×55mm), Slim AU (90×45mm), EU/International (85×55mm) and custom sizes. Get in touch if you need a non-standard size.",
    },
    {
      question: "Can I order different designs in the one order?",
      answer:
        "Yes! Use the 'Add split quantity' option to configure multiple designs within a single order run. Each design must be the same paper, size, and print type.",
    },
    {
      question: "Do you offer round corners?",
      answer:
        "Yes, round corners are available as an optional extra. They are die-cut after printing and add a premium feel to your cards.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery is 3–5 business days after your artwork is approved. Express options are available at checkout. We deliver Australia-wide.",
    },
    {
      question: "What file format should I supply my artwork in?",
      answer:
        "We accept print-ready PDF files with a 3mm bleed on all sides, at 300dpi, with all fonts embedded or outlined. Full artwork specifications are available in our Artwork Guide.",
    },
    {
      question: "Can I get a proof before printing?",
      answer:
        "All orders receive a digital PDF proof for approval before going to press. We do not charge for digital proofing. Physical press proofs are available on request.",
    },
  ],
  designOptions: [
    { value: 1, label: "1 design" },
    { value: 2, label: "2 designs" },
    { value: 3, label: "3 designs" },
    { value: 4, label: "4 designs" },
    { value: 5, label: "5 designs" },
  ],
  quantityOptions: [
    { value: 100, label: "100" },
    { value: 250, label: "250" },
    { value: 500, label: "500" },
    { value: 1000, label: "1,000" },
    { value: 2500, label: "2,500" },
    { value: 5000, label: "5,000" },
  ],
  papers: [
    { id: "ecostar-uncoated", label: "350gsm EcoStar 100% Recycled Uncoated (White)", basePriceMultiplier: 1.0 },
    { id: "recycled-silk", label: "350gsm Recycled Silk", basePriceMultiplier: 1.15 },
    { id: "kraft-brown", label: "300gsm Kraft Brown", basePriceMultiplier: 1.1 },
  ],
  sizes: [
    { id: "standard-au", dimensions: "90 × 55 mm", label: "Standard AU" },
    { id: "slim-au", dimensions: "90 × 55 mm", label: "Slim AU" },
    { id: "eu-intl", dimensions: "85 × 55 mm", label: "EU / Intl" },
    { id: "custom", dimensions: "Custom", label: "Your size" },
  ],
  printingTypes: [
    { id: "double-sided", label: "Double sided", description: "Full colour both sides" },
    { id: "single-sided", label: "Single sided", description: "Full colour front only" },
  ],
  extras: [
    { id: "round-corners", label: "Round corners", pricePerHundred: 12.0 },
  ],
  // Price per unit at each quantity bracket (ex. GST & delivery)
  pricingTiers: [
    { minQty: 100,  maxQty: 249,  pricePerUnit: 0.099 },
    { minQty: 250,  maxQty: 499,  pricePerUnit: 0.075 },
    { minQty: 500,  maxQty: 999,  pricePerUnit: 0.058 },
    { minQty: 1000, maxQty: 2499, pricePerUnit: 0.045 },
    { minQty: 2500, maxQty: 4999, pricePerUnit: 0.036 },
    { minQty: 5000, maxQty: 99999,pricePerUnit: 0.031 },
  ],
  deliveryPrice: 9.90,
  gstRate: 0.10,
  relatedProductSlugs: ["adhesive-labels", "greeting-cards", "swing-tags", "brochures"],
};
