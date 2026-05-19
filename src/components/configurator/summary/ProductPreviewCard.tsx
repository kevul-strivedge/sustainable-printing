import { ConfiguratorState, ExtraOption, PaperOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  papers: PaperOption[];
  extras: ExtraOption[];
}

function PlusSquareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="2" stroke="#9ca3af" strokeWidth="1.2" fill="none" />
      <path d="M7.5 4.5v6M4.5 7.5h6" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function DiamondSquareIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="0.75" y="0.75" width="13.5" height="13.5" rx="2" stroke="#9ca3af" strokeWidth="1.2" fill="none" />
      <rect x="5.2" y="5.2" width="4.6" height="4.6" rx="0.8" transform="rotate(45 7.5 7.5)" stroke="#9ca3af" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

export default function ProductPreviewCard({ state, papers, extras }: Props) {
  const paper = papers.find((p) => p.id === state.paperId);
  const selectedCorner = extras
    .filter((e) => !e.label.toLowerCase().includes("straight"))
    .find((e) => state.selectedExtras.includes(e.id));
  const cornerLabel = selectedCorner?.label ?? "Trim straight edges";

  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
      {/* Green thumbnail square with white card preview inside */}
      <div className="flex-shrink-0 w-[72px] h-[72px] bg-[#c8e6d4] rounded-md flex items-center justify-center">
        <div className="w-[50px] h-[34px] bg-white rounded-sm shadow-sm" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-[12px] font-bold text-[#292560] leading-snug mb-2">
          {paper?.label ?? "—"}
        </p>
        <div className="flex items-center gap-2 mb-1">
          <PlusSquareIcon />
          <span className="text-[12px] text-[#292560]">
            {cornerLabel}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <DiamondSquareIcon />
          <span className="text-[12px] text-[#292560]">
            {state.numDesigns} design{state.numDesigns > 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
