// components/ui/ContactInfoCard.tsx

import { ContactInfoItemType } from "@/src/types/contactInfo.types";

const ContactInfoCard = ({
  icon: Icon,
  label,
  value,
  href,
}: ContactInfoItemType) => {
  const valueLines = Array.isArray(value) ? value : [value];

  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* Icon */}
      <div className=" flex items-center justify-center">
        <Icon size={36} strokeWidth={2.4} className="text-[#4CCC88]" />
      </div>

      {/* Label */}
      <p className="text-[#292560] font-bold text-lg">{label}</p>

      {/* Value */}
      {href ? (
        <a href={href} className="text-[#292560] text-md hover:underline">
          {valueLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </a>
      ) : (
        <div className="text-[#292560] text-md">
          {valueLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactInfoCard;
