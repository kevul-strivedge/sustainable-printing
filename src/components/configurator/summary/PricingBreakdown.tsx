import { ConfiguratorAction, PriceBreakdown, ConfiguratorState } from "@/src/types/configurator.types";
import { Spinner } from "@/src/components/ui/Spinner";

interface Props {
  priceBreakdown: PriceBreakdown;
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-[13px] font-semibold text-[#292560]">{label}</span>
      <span className="text-[13px] font-semibold text-[#292560]">{value}</span>
    </div>
  );
}

export default function PricingBreakdown({ priceBreakdown, state }: Props) {
  return (
    <div className="bg-[#edf5f0] rounded-xl px-4 py-3">
      <Row label="Subtotal" value={`$${priceBreakdown.subtotal.toFixed(2)}`} />

      {/* Delivery row — always shows price; spinner while fetching */}
      <div className="flex items-center justify-between py-1.5">
        <span className="text-[13px] font-semibold text-[#292560]">Delivery (Standard)</span>
        {state.deliveryFetching ? (
          <Spinner size={14} />
        ) : (
          <span className="text-[13px] font-semibold text-[#292560]">${priceBreakdown.delivery.toFixed(2)}</span>
        )}
      </div>

      <Row label="GST (on delivery)" value={`$${priceBreakdown.gst.toFixed(2)}`} />

      <div className="flex items-center justify-between pt-2.5 mt-1.5 border-t border-gray-300">
        <span className="text-[18px] font-bold text-[#292560]">Total</span>
        <span className="text-[20px] font-bold text-[#3d9e5f]">
          ${priceBreakdown.total.toFixed(2)} AUD
        </span>
      </div>
    </div>
  );
}
