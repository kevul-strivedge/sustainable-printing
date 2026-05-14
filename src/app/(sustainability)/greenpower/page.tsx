import SustainabilityPage from "@/src/components/pages/SustainabilityPage";

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="#3d9e5f" strokeWidth="1.8" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "100% Renewable",
    text: "Our facility is powered entirely by accredited GreenPower — energy sourced from solar, wind, and hydro.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "GreenPower Certified",
    text: "We're accredited under Australia's GreenPower programme — independently verified renewable energy use.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 8c-2.5 0-5 1-7 3-1.5 1.5-2.5 3.5-2.5 5.5 0 .28.02.56.05.83C9.55 17.11 11.7 17 13 15.5c1.5-1.7 1.5-4.5 4-5.5-1 2-1 4.5-3 6.5-1.5 1.5-3.5 2.5-5.5 2.5H8c.5 1 1.5 2 3 2 4 0 8-3 8-8 0-2-.5-3.5-2-5z" fill="#3d9e5f" />
      </svg>
    ),
    title: "Lower Emissions",
    text: "Switching our facility to renewable energy is one of the highest-impact steps we've taken to reduce our carbon footprint.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ongoing Commitment",
    text: "We review our energy use annually and continue looking for ways to reduce consumption across all operations.",
  },
];

const sections = [
  {
    heading: "Powered by renewable energy",
    paragraphs: [
      "Printing presses are energy-hungry machines. Running a professional print facility without addressing energy consumption would undermine everything else we do for sustainability. That's why we made the decision to power our entire operation with accredited GreenPower.",
      "GreenPower is an Australian Government programme that ensures the electricity we use is matched by energy fed into the grid from renewable sources — solar panels, wind turbines, and hydroelectric generators across Australia.",
    ],
  },
  {
    heading: "What GreenPower accreditation means",
    paragraphs: [
      "Unlike generic 'green energy' claims, GreenPower is independently audited and certified. For every unit of electricity we consume, an equivalent unit of renewable energy is generated and fed into the national grid. It's a transparent, government-backed system you can trust.",
      "By choosing to print with us, you're not just getting beautiful, sustainable printed materials — you're supporting the growth of renewable energy infrastructure in Australia.",
    ],
  },
];

export default function GreenPowerPage() {
  return (
    <SustainabilityPage
      badge="Renewable Energy"
      title="Powered by Green Energy"
      intro="Our printing facility runs on 100% accredited GreenPower — renewable energy sourced from solar, wind, and hydro generators across Australia. It's one of the most meaningful steps we've taken to reduce the environmental impact of our operations."
      heroImage="/images/BannerImage3.png"
      contentImage="/images/feature-image1.png"
      contentImageAlt="Solar panels and renewable energy infrastructure"
      highlights={highlights}
      sections={sections}
    />
  );
}
