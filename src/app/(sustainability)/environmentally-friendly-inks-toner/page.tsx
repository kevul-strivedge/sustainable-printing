import SustainabilityPage from "@/src/components/pages/SustainabilityPage";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" stroke="#3d9e5f" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" fill="#3d9e5f" />
      </svg>
    ),
    title: "No Petroleum",
    text: "Unlike conventional inks derived from crude oil, our vegetable-based inks use renewable plant oils as their base.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 8c-2.5 0-5 1-7 3-1.5 1.5-2.5 3.5-2.5 5.5 0 .28.02.56.05.83C9.55 17.11 11.7 17 13 15.5c1.5-1.7 1.5-4.5 4-5.5-1 2-1 4.5-3 6.5-1.5 1.5-3.5 2.5-5.5 2.5H8c.5 1 1.5 2 3 2 4 0 8-3 8-8 0-2-.5-3.5-2-5z" fill="#3d9e5f" />
      </svg>
    ),
    title: "Biodegradable",
    text: "Vegetable-based inks are far more biodegradable than petroleum alternatives, making recycling printed paper much easier.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3d9e5f" strokeWidth="1.8" />
        <path d="M9 12l2 2 4-4" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vibrant Colours",
    text: "Don't compromise on quality. Vegetable-based inks deliver bright, rich colours that match or exceed conventional results.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Safer for Workers",
    text: "Lower VOC emissions mean a healthier working environment for our print team compared to traditional solvent-based inks.",
  },
];

const sections = [
  {
    heading: "What are vegetable-based inks?",
    paragraphs: [
      "Vegetable-based inks replace the petroleum oil carrier found in traditional printing inks with renewable plant-derived oils — most commonly soy, linseed, or canola. This single change significantly reduces the environmental impact of the printing process.",
      "These inks contain lower levels of volatile organic compounds (VOCs), which means less harmful chemical emissions during printing and easier, more effective ink removal during the paper recycling process.",
    ],
  },
  {
    heading: "Why we use them — and why it matters",
    paragraphs: [
      "Conventional petroleum-based inks are a significant source of chemical pollution in both the printing process and the waste stream. When paper printed with petroleum inks is recycled, the ink is difficult to remove, often reducing the quality of the recycled fibre.",
      "By switching to vegetable-based inks, we produce finished products that are cleaner for you, your customers, and the planet. It's one of the most impactful choices a printing company can make — and it's one we made from the very beginning.",
    ],
  },
];

export default function EnvironmentallyFriendlyInksPage() {
  return (
    <SustainabilityPage
      badge="Eco Inks"
      title="Environmentally Friendly Inks & Toner"
      intro="We print exclusively with vegetable-based inks — a cleaner, greener alternative to the petroleum-based inks used by most conventional printers. The results speak for themselves: vibrant colours, lower emissions, and fully recyclable printed products."
      heroImage="/images/BannerImage3.png"
      contentImage="/images/feature-image2.png"
      contentImageAlt="Close up of eco-friendly ink printing process"
      highlights={highlights}
      sections={sections}
    />
  );
}
