// components/ui/QuickLinkCard.tsx

import { QuickLinkCategoryType } from "@/src/types/quickLinks.types";

const LeafIcon = ({ size = 14, color = "#3d9e5f" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={size} height={size} fill={color}>
    <path d="M96 96C573.6 96 462.6 413.3 463.1 462.3L544 544L518 544L447.6 472.8C408.6 477 323.2 507.3 233.2 435.8C143 364.3 148 278.7 96 96zM175.7 142C126 118.5 170.5 151.2 170.5 151.2C215.7 182.4 236.5 224.9 260.7 271.1C292.2 331.3 339.7 410.8 404.9 438.8C469.9 466.8 439.1 451.3 410.9 430.3C382.7 409.1 342.7 343.3 319.9 300.1C288.2 240.1 258.9 181.5 175.7 142z"/>
  </svg>
);

const QuickLinkCard = ({ category, links }: QuickLinkCategoryType) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[#292560] text-xl font-bold mb-1">{category}</h3>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          className="flex items-center gap-2 text-[#292560] text-md hover:underline ps-5"
        >
          <LeafIcon size={18}  color="#36af7c" />
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default QuickLinkCard;
