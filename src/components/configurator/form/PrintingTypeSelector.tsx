import { ConfiguratorAction, ConfiguratorState, PrintingType } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  printingTypes: PrintingType[];
}

export default function PrintingTypeSelector({ state, dispatch, printingTypes }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Printing type</p>
      <div className="grid grid-cols-2 gap-3">
        {printingTypes.map((pt) => {
          const selected = state.printingTypeId === pt.id;
          return (
            <button
              key={pt.id}
              type="button"
              onClick={() => dispatch({ type: "SET_PRINTING_TYPE", id: pt.id })}
              className={`flex flex-col items-start text-left border-2 rounded-lg px-4 py-3 transition-all duration-150 cursor-pointer ${
                selected
                  ? "border-[#3d9e5f] bg-[#f0faf5]"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <span className={`text-[13px] font-semibold text-[#1D1A52]`}>
                {pt.label}
              </span>
              <span className="text-[11px] text-gray-500 mt-0.5">{pt.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
