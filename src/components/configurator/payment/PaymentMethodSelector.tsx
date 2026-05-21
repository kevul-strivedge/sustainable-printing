import { PaymentMethod } from "@/src/types/configurator.types";

interface Props {
  paymentMethods: PaymentMethod[];
  selected: string;
  onChange: (id: string) => void;
}

function BankIcon({ active }: { active: boolean }) {
  const color = active ? "#3d9e5f" : "#9ca3af";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 12h22M14 4L3 12h22L14 4z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="5" y="12" width="3" height="9" rx="0.5" stroke={color} strokeWidth="1.3" />
      <rect x="12.5" y="12" width="3" height="9" rx="0.5" stroke={color} strokeWidth="1.3" />
      <rect x="20" y="12" width="3" height="9" rx="0.5" stroke={color} strokeWidth="1.3" />
      <path d="M2 21h24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CardIcon({ active }: { active: boolean }) {
  const color = active ? "#3d9e5f" : "#9ca3af";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="24" height="16" rx="3" stroke={color} strokeWidth="1.5" />
      <path d="M2 11h24" stroke={color} strokeWidth="1.5" />
      <rect x="5" y="15" width="5" height="3" rx="1" fill={color} />
      <rect x="12" y="15" width="3" height="3" rx="1" fill={color} opacity="0.4" />
    </svg>
  );
}

const iconMap: Record<string, (active: boolean) => React.ReactNode> = {
  bank: (a) => <BankIcon active={a} />,
  card: (a) => <CardIcon active={a} />,
};

export default function PaymentMethodSelector({ paymentMethods, selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {paymentMethods.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            type="button"
            onClick={() => onChange(method.id)}
            style={{ background: isSelected ? "linear-gradient(to bottom, #FFFFFF, #F4F0E9)" : "#FFFFFF" }}
            className={`flex items-center gap-3.5 w-full text-left border rounded-lg px-4 py-3.5 transition-all duration-150 ${
              isSelected
                ? "border-[#3d9e5f]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Radio dot */}
            <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-[#3d9e5f]" : "border-gray-300"
            }`}>
              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#3d9e5f]" />}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-[#292560]">{method.label}</p>
              <p className="text-[12px] text-gray-500 mt-0.5">{method.description}</p>
            </div>

            {/* Icon on the right */}
            <div className="shrink-0">
              {iconMap[method.icon]?.(isSelected)}
            </div>
          </button>
        );
      })}
    </div>
  );
}
