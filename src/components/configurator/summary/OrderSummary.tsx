import {
  ConfiguratorState,
  ConfiguratorAction,
  PriceBreakdown,
  ProductConfiguratorData,
} from "@/src/types/configurator.types";
import ProductPreviewCard from "./ProductPreviewCard";
import PrintingDetails from "./PrintingDetails";
import ArtworkSection from "./ArtworkSection";
import DeliveryDetails from "./DeliveryDetails";
import ThankyouCard from "./ThankyouCard";
import PricingBreakdown from "./PricingBreakdown";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  priceBreakdown: PriceBreakdown;
  config: ProductConfiguratorData;
}

export default function OrderSummary({ state, dispatch, priceBreakdown, config }: Props) {
  return (
    <div className="sticky top-[130px] border border-gray-200 rounded bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200">
        <p className="text-[15px] font-bold text-[#292560]">Your Order Summary</p>
      </div>

      <div className="px-5 py-4 flex flex-col gap-5">
        <ProductPreviewCard state={state} papers={config.papers} />

        <PrintingDetails
          state={state}
          papers={config.papers}
          sizes={config.sizes}
          printingTypes={config.printingTypes}
          extras={config.extras}
        />

        <PricingBreakdown priceBreakdown={priceBreakdown} state={state} dispatch={dispatch} />

        <ArtworkSection />

        <hr className="border-1 border-gray-300" />

        <DeliveryDetails />

        <ThankyouCard />
      </div>
    </div>
  );
}
