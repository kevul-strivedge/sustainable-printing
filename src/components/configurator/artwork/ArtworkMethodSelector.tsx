import { ArtworkOption } from "@/src/types/configurator.types";

interface Props {
  artworkOptions: ArtworkOption[];
  selected: string;
  onChange: (id: string) => void;
}

function UploadPdfIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 15V7M7 11l4-4 4 4" stroke="#3d9e5f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1.5" y="1.5" width="19" height="19" rx="4" stroke="#3d9e5f" strokeWidth="1.4" />
    </svg>
  );
}

function UploadLaterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1.5" y="4.5" width="19" height="14" rx="3" stroke="#3d9e5f" strokeWidth="1.4" />
      <path d="M1.5 8.5l9.5 6 9.5-6" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function OnlineDesignerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="19" height="19" rx="4" stroke="#9ca3af" strokeWidth="1.4" />
      <path d="M6 11h10M11 6v10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  "upload-pdf": <UploadPdfIcon />,
  "upload-later": <UploadLaterIcon />,
  "online-designer": <OnlineDesignerIcon />,
};

export default function ArtworkMethodSelector({ artworkOptions, selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {artworkOptions.map((option) => {
        const isSelected = selected === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            style={{ background: isSelected ? "linear-gradient(to bottom, #FFFFFF, #FEFAF3)" : "#FFFFFF" }}
            className={`flex items-center gap-3.5 w-full text-left border-2 rounded-lg px-4 py-3.5 transition-all duration-150 ${
              isSelected
                ? "border-[#3d9e5f]"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {/* Radio dot */}
            <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-[#3d9e5f]" : "border-gray-300"
            }`}>
              {isSelected && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#3d9e5f]" />
              )}
            </div>

            {/* Icon */}
            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
              isSelected ? "bg-[#f0faf5]" : "bg-gray-100"
            }`}>
              {iconMap[option.icon]}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[14px] font-semibold ${isSelected ? "text-[#292560]" : "text-[#292560]"}`}>
                  {option.label}
                </span>
                {option.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#f0faf5] text-[#1e4620]">
                    {option.badge}
                  </span>
                )}
              </div>
              <p className="text-[12px] text-gray-500 mt-0.5">{option.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
