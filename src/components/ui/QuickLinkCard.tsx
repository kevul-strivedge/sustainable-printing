// components/ui/QuickLinkCard.tsx

import { QuickLinkCategoryType } from "@/src/types/quickLinks.types";
import { Leaf } from "lucide-react";

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
          <Leaf
            size={18}
            strokeWidth={2.5}
            className="text-[#36af7c] shrink-0"
          />
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default QuickLinkCard;
