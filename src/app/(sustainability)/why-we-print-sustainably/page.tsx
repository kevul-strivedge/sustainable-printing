import SustainabilityPage from "@/src/components/pages/SustainabilityPage";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 8c-2.5 0-5 1-7 3-1.5 1.5-2.5 3.5-2.5 5.5 0 .28.02.56.05.83C9.55 17.11 11.7 17 13 15.5c1.5-1.7 1.5-4.5 4-5.5-1 2-1 4.5-3 6.5-1.5 1.5-3.5 2.5-5.5 2.5H8c.5 1 1.5 2 3 2 4 0 8-3 8-8 0-2-.5-3.5-2-5z" fill="#3d9e5f" />
      </svg>
    ),
    title: "Recycled Materials",
    text: "Every product we print uses 100% post-consumer recycled paper stock — no virgin pulp, ever.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#3d9e5f" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Fast Turnaround",
    text: "Sustainable doesn't mean slow. Most orders ship within 3–5 business days from our Australian facility.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Vegetable-Based Inks",
    text: "We use only vegetable-based inks free from harmful petrochemicals — safer for people and the planet.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Green Power",
    text: "Our printing facility is powered by 100% renewable GreenPower energy, reducing our carbon footprint significantly.",
  },
];

const sections = [
  {
    heading: "Our commitment to the planet",
    paragraphs: [
      "At Sustainable Printing Co., we believe that great print doesn't have to come at a cost to the environment. From day one, our mission has been to offer Australian businesses a genuinely eco-friendly alternative to conventional printing.",
      "We've built every part of our process around sustainability — from the recycled papers we stock to the vegetable-based inks we print with, the renewable energy powering our machines, and the waste-reduction strategies we've embedded across our operations.",
    ],
  },
  {
    heading: "Why it matters",
    paragraphs: [
      "The conventional printing industry is resource-intensive, relying heavily on virgin paper, petroleum-based inks, and high energy consumption. By choosing sustainable printing, you're directly reducing demand for those harmful inputs.",
      "Every order you place with us helps divert paper from landfill, reduces chemical pollution in waterways, and supports the growth of a genuinely green printing industry in Australia.",
    ],
  },
];

export default function WhyWePrintSustainablyPage() {
  return (
    <SustainabilityPage
      badge="Our Mission"
      title="Why We Print Sustainably"
      intro="We're on a mission to prove that beautiful, high-quality printing and environmental responsibility aren't just compatible — they're inseparable. Here's why sustainable printing is at the heart of everything we do."
      heroImage="/images/BannerImage3.png"
      contentImage="/images/feature-image1.png"
      contentImageAlt="Eco-friendly printed materials on a natural background"
      highlights={highlights}
      sections={sections}
    />
  );
}
