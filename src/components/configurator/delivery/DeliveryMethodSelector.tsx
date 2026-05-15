import { DeliveryMethod } from "@/src/types/configurator.types";

interface Props {
  deliveryMethods: DeliveryMethod[];
  selected: string;
  onChange: (id: string) => void;
}

function StandardIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1" y="6" width="14" height="10" rx="2" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.4" />
      <path d="M15 9h3l3 4v3h-6V9z" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="5" cy="17" r="1.5" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.3" />
      <circle cx="17" cy="17" r="1.5" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.3" />
    </svg>
  );
}

function ExpressIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M12.5 2L6 12h6.5L9.5 20l8-10H11L12.5 2z" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function PickupIcon({ active }: { active: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 9.5L11 3l8 6.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="8" y="13" width="6" height="7" rx="1" stroke={active ? "#3d9e5f" : "#9ca3af"} strokeWidth="1.3" />
    </svg>
  );
}

const iconMap: Record<string, (active: boolean) => React.ReactNode> = {
  standard: (a) => <StandardIcon active={a} />,
  express: (a) => <ExpressIcon active={a} />,
  pickup: (a) => <PickupIcon active={a} />,
};

export default function DeliveryMethodSelector({ deliveryMethods, selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {deliveryMethods.map((method) => {
        const isSelected = selected === method.id;
        const isFree = method.price === 0;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            className={`flex items-center gap-3.5 w-full text-left border-2 rounded-lg px-4 py-3.5 transition-all duration-150 ${
              isSelected
                ? "border-[#3d9e5f] bg-white"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            {/* Radio dot */}
            <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-[#3d9e5f]" : "border-gray-300"
            }`}>
              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#3d9e5f]" />}
            </div>

            {/* Icon */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              isSelected ? "bg-[#f0faf5]" : "bg-gray-100"
            }`}>
              {iconMap[method.icon]?.(isSelected)}
            </div>

            {/* Label + description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[14px] font-semibold text-[#292560]">{method.label}</span>
                {method.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#f0faf5] text-[#1e4620]">
                    {method.badge}
                  </span>
                )}
              </div>
              <p className="text-[12px] text-gray-500 mt-0.5">{method.description}</p>
            </div>

            {/* Price */}
            <span className={`shrink-0 text-[14px] bg-gray-100 px-2 py-1 rounded-md font-bold ml-2 ${isFree ? "text-[#3d9e5f]" : "text-[#292560]"}`}>
              {isFree ? "Free" : `$${method.price.toFixed(2)}`}
            </span>
          </button>
        );
      })}
    </div>
  );
}
