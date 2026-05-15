import { ConfiguratorAction, ConfiguratorState, ProductConfiguratorData } from "@/src/types/configurator.types";
import DeliveryForm from "./DeliveryForm";
import DeliveryStepFooter from "./DeliveryStepFooter";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  config: ProductConfiguratorData;
}

export default function DeliveryStep({ state, dispatch, config }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <h2 className="text-[20px] font-bold text-[#292560]">Delivery Details</h2>

      {/* Address form */}
      <DeliveryForm state={state} dispatch={dispatch} />

      {/* Delivery note */}
      {config.deliveryNote && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
          <p className="text-[12px] text-gray-500 leading-relaxed">{config.deliveryNote}</p>
        </div>
      )}

      {/* Footer navigation */}
      <DeliveryStepFooter dispatch={dispatch} />
    </div>
  );
}
