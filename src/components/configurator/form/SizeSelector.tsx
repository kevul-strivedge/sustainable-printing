import { ConfiguratorAction, ConfiguratorState, SizeOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  sizes: SizeOption[];
}

function CheckBadge() {
  return (
    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#3d9e5f] flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}


export default function SizeSelector({ state, dispatch, sizes }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Size</p>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => {
          const selected = state.sizeId === size.id;
          return (
            <button
              key={size.id}
              type="button"
              onClick={() => dispatch({ type: "SET_SIZE", id: size.id })}
              className={`relative flex flex-col items-start text-left border-2 rounded-lg p-2.5 pt-2 transition-all duration-150 cursor-pointer ${
                selected
                  ? "border-[#3d9e5f] bg-white"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {selected && <CheckBadge />}

              {/* Mini card rectangle preview */}
              <div
                className={`w-[70%] h-8 rounded-sm mb-2.5 ${
                  selected ? "bg-[#c8e6d4]" : "bg-gray-200"
                }`}
              />

              {/* Dimensions */}
              <span className={`text-[11px] font-bold leading-tight block ${selected ? "text-[#1e4620]" : "text-gray-800"}`}>
                {size.dimensions}
              </span>

              {/* Label */}
              <span className="text-[10px] text-gray-400 leading-tight mt-0.5 block">
                {size.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
