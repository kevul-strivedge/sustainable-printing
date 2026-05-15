import { ConfiguratorAction } from "@/src/types/configurator.types";

interface Props {
  dispatch: React.Dispatch<ConfiguratorAction>;
}

export default function ArtworkStepFooter({ dispatch }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 pt-2">
      <button
        type="button"
        onClick={() => dispatch({ type: "PREV_STEP" })}
        className="py-3.5 border border-gray-300 rounded-lg text-[14px] font-semibold text-[] bg-white hover:border-[#004E24] transition-colors duration-150"
      >
        Back
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: "NEXT_STEP" })}
        className="py-3.5 bg-[#004E24] text-white text-[14px] font-semibold rounded-lg hover:bg-[#003a1b] transition-colors duration-150"
      >
        Continue to Delivery
      </button>
    </div>
  );
}
