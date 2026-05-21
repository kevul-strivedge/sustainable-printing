import { ConfiguratorAction, ConfiguratorState, PriceBreakdown } from "@/src/types/configurator.types";

interface Props {
  priceBreakdown: PriceBreakdown;
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

export default function StepFooter({ priceBreakdown, state, dispatch }: Props) {
  const totalQty = state.numDesigns * state.quantityPerDesign;

  return (
    <div className="rounded-lg px-5 py-4 flex items-center justify-between gap-6 flex-wrap" style={{ background: "linear-gradient(to bottom, #F4F0E9, #EBE9E2)" }}>
      {/* Left: price info */}
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#676C80] mb-1">
          Step 1 subtotal
        </p>
        <p className="leading-none">
          <span className="text-[38px] font-bold text-[#292560] leading-none">
            ${priceBreakdown.subtotal.toFixed(2)}
          </span>
          <span className="text-[14px] font-semibold text-[#292560] ml-1.5">AUD</span>
        </p>
        <p className="text-[12px] text-gray-500 mt-1.5">
          ${priceBreakdown.perUnit.toFixed(2)} per card &middot; {totalQty.toLocaleString()} cards &middot; ex. GST &amp; delivery
        </p>
      </div>

      {/* Right: CTA button */}
      <button
        type="button"
        onClick={() => dispatch({ type: "NEXT_STEP" })}
        className="inline-flex items-center gap-2.5 sm:px-7 px-3 py-3.5 bg-[#1e4620] text-white text-[14px] font-semibold rounded-lg hover:bg-[#163318] transition-colors duration-150 whitespace-nowrap"
      >
        Continue to Artwork
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
