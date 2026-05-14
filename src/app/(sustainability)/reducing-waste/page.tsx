import SustainabilityPage from "@/src/components/pages/SustainabilityPage";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="1 4 1 10 7 10" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 15a9 9 0 102.13-9.36L1 10" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Print On Demand",
    text: "We encourage ordering what you need, when you need it — eliminating excess stock that ends up in the bin.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3d9e5f" strokeWidth="1.8" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Digital Proofing",
    text: "All proofs are approved digitally before print, eliminating paper waste from physical proof runs.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Offcut Recycling",
    text: "All paper offcuts and waste from our presses are collected and sent for recycling — nothing goes to landfill.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Responsible Disposal",
    text: "Expired inks and chemicals are disposed of through certified waste management channels — never down the drain.",
  },
];

const sections = [
  {
    heading: "How we minimise waste at every step",
    paragraphs: [
      "Waste reduction starts long before a job goes on press. We've designed our entire workflow — from file preparation to packing and dispatch — with minimising waste at every step.",
      "Our digital prepress system uses colour management software to optimise ink usage on every job, and our imposition software nests print jobs on sheets to maximise paper utilisation. This means less offcut waste and lower costs per unit for our customers.",
    ],
  },
  {
    heading: "A closed-loop approach to paper waste",
    paragraphs: [
      "Any paper that doesn't make it into a finished product — from setup sheets to trim offcuts — is sorted, baled, and collected by a specialist recycling contractor. This material feeds back into the recycled paper supply chain, completing a genuine closed loop.",
      "We also use recycled packaging materials for all our outgoing orders, and we're continually working to reduce the amount of packaging used overall. Every kilogram of waste we avoid is a win for the environment.",
    ],
  },
];

export default function ReducingWastePage() {
  return (
    <SustainabilityPage
      badge="Zero Waste"
      title="Reducing Waste"
      intro="Sustainable printing means more than just using recycled paper. It means rethinking the entire production process to eliminate waste at every stage — from artwork approval through to delivery."
      heroImage="/images/BannerImage3.png"
      contentImage="/images/feature-image3.png"
      contentImageAlt="Recycled paper and offcuts being collected for recycling"
      highlights={highlights}
      sections={sections}
    />
  );
}
