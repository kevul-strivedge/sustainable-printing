import { ConfiguratorAction, ConfiguratorState, ExtraOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  extras: ExtraOption[];
}

export default function ExtrasSelector({ state, dispatch, extras }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Optional extras</p>
      <div className="flex flex-col gap-3">
        {extras.map((extra) => {
          const checked = state.selectedExtras.includes(extra.id);
          return (
            <label
              key={extra.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch({ type: "TOGGLE_EXTRA", id: extra.id })}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-colors duration-150 ${
                    checked ? "bg-[#3d9e5f] border-[#3d9e5f]" : "border-gray-300 group-hover:border-[#3d9e5f]"
                  }`}
                >
                  {checked && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[13px] text-gray-700">
                {extra.label}{" "}
                <span className="text-gray-500">
                  — ${extra.pricePerHundred.toFixed(2)} for 100
                </span>
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
