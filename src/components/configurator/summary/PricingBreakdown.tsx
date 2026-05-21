import { ConfiguratorAction, PriceBreakdown, ConfiguratorState } from "@/src/types/configurator.types";

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

export default function PricingBreakdown({ priceBreakdown }: Props) {
  return (
    <div className="bg-[#edf5f0] rounded-xl px-4 py-3">
      <Row label="Subtotal" value={`$${priceBreakdown.subtotal.toFixed(2)}`} />
      <Row label="Delivery (Standard)" value={`$${priceBreakdown.delivery.toFixed(2)}`} />
      <Row label="GST (10%)" value={`$${priceBreakdown.gst.toFixed(2)}`} />

      <div className="flex items-center justify-between pt-2.5 mt-1.5 border-t border-gray-300">
        <span className="text-[18px] font-bold text-[#292560]">Total</span>
        <span className="text-[20px] font-bold text-[#3d9e5f]">
          ${priceBreakdown.total.toFixed(2)} AUD
        </span>
      </div>
    </div>
  );
}
