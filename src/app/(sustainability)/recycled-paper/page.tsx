import SustainabilityPage from "@/src/components/pages/SustainabilityPage";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="1 4 1 10 7 10" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="23 20 23 14 17 14" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Post-Consumer Waste",
    text: "Our paper is made from 100% post-consumer recycled fibre — paper that has already been used, collected, and reprocessed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 8c-2.5 0-5 1-7 3-1.5 1.5-2.5 3.5-2.5 5.5 0 .28.02.56.05.83C9.55 17.11 11.7 17 13 15.5c1.5-1.7 1.5-4.5 4-5.5-1 2-1 4.5-3 6.5-1.5 1.5-3.5 2.5-5.5 2.5H8c.5 1 1.5 2 3 2 4 0 8-3 8-8 0-2-.5-3.5-2-5z" fill="#3d9e5f" />
      </svg>
    ),
    title: "No Virgin Pulp",
    text: "We never use paper made from virgin wood pulp. Our entire range is recycled — protecting forests and biodiversity.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3d9e5f" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Premium Quality",
    text: "Recycled doesn't mean inferior. Our stocks deliver crisp, vibrant results indistinguishable from virgin paper.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Wide Range",
    text: "From 100gsm uncoated letterhead to 350gsm card, we stock a full range of recycled weights and finishes.",
  },
];

const sections = [
  {
    heading: "What makes paper truly recycled?",
    paragraphs: [
      "Not all recycled paper is equal. Some products labelled 'recycled' contain only a small percentage of recycled content, or use pre-consumer waste (offcuts from paper manufacturing) rather than genuinely recovered post-consumer waste.",
      "Our paper range is made from 100% post-consumer waste — paper that has been used by consumers, collected through recycling programmes, de-inked, and reprocessed into new paper. This is the highest standard of recycled content available.",
    ],
  },
  {
    heading: "The environmental impact",
    paragraphs: [
      "Producing recycled paper uses significantly less water, energy, and chemicals than manufacturing virgin paper. It also diverts material from landfill and reduces demand for logging — protecting forests, biodiversity, and carbon stores.",
      "When you choose to print on our recycled stocks, you're making a genuine difference. And because our papers are printed with vegetable-based inks, the finished product is itself easily recyclable — keeping the loop closed.",
    ],
  },
];

export default function RecycledPaperPage() {
  return (
    <SustainabilityPage
      badge="Recycled Stock"
      title="Recycled Paper"
      intro="Every product we print is produced on 100% recycled post-consumer waste paper. No virgin pulp, no greenwashing — just genuinely sustainable paper that performs as beautifully as it sounds."
      heroImage="/images/BannerImage3.png"
      contentImage="/images/feature-image3.png"
      contentImageAlt="Stacks of recycled paper stock in natural tones"
      highlights={highlights}
      sections={sections}
    />
  );
}
