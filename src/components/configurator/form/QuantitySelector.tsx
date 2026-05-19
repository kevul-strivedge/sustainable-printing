import { ConfiguratorAction, ConfiguratorState, QuantityOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  designOptions: QuantityOption[];
  quantityOptions: QuantityOption[];
}

function InlineSelect({
  innerLabel,
  value,
  options,
  onChange,
}: {
  innerLabel: string;
  value: number;
  options: QuantityOption[];
  onChange: (val: number) => void;
}) {
  return (
    <div className="relative flex-1 border border-gray-300 rounded-lg px-3 pt-1.5 pb-1.5">
      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 leading-none mb-1">
        {innerLabel}
      </span>
      <div className="flex items-center">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 text-[13px] font-semibold text-[#292560] bg-transparent border-none outline-none appearance-none cursor-pointer pr-4"
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <svg
          className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
          width="14" height="14" viewBox="0 0 14 14" fill="none"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function QuantitySelector({ state, dispatch, designOptions, quantityOptions }: Props) {
  const primaryTotal = state.numDesigns * state.quantityPerDesign;

  function addSplit() {
    dispatch({ type: "ADD_SPLIT_ROW", numDesigns: state.numDesigns, qty: quantityOptions[0].value });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[14px] font-bold text-[#292560]">Quantity</p>
        <p className="text-[14px] font-bold text-[#292560]">Total quantity</p>
      </div>

      {/* Primary row */}
      <div className="flex items-center gap-2">
        <InlineSelect
          innerLabel="Designs"
          value={state.numDesigns}
          options={designOptions}
          onChange={(val) => dispatch({ type: "SET_DESIGNS", value: val })}
        />
        <span className="text-gray-400 text-[14px] font-medium shrink-0">×</span>
        <InlineSelect
          innerLabel="Quantity per design"
          value={state.quantityPerDesign}
          options={quantityOptions}
          onChange={(val) => dispatch({ type: "SET_QTY_PER_DESIGN", value: val })}
        />
        <span className="text-gray-400 text-[14px] font-medium shrink-0">=</span>
        <div className="flex-1 border-2 border-[#3d9e5f] rounded-lg px-3 pt-1.5 pb-1.5 bg-linear-to-t from-[#FFF2DA] to-white">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#3d9e5f] leading-none mb-1">
            Total quantity
          </span>
          <p className="text-[13px] font-bold text-[#1e4620]">{primaryTotal.toLocaleString()}</p>
        </div>
      </div>

      {/* Split rows — fully independent designs × qty */}
      {state.splitRows.map((row, i) => {
        const splitTotal = row.numDesigns * row.qty;
        return (
          <div key={i} className="flex items-center gap-2 mt-2">
            <InlineSelect
              innerLabel="Designs"
              value={row.numDesigns}
              options={designOptions}
              onChange={(val) =>
                dispatch({ type: "SET_SPLIT_ROW", index: i, numDesigns: val, qty: row.qty })
              }
            />

            <span className="text-gray-400 text-[14px] font-medium shrink-0">×</span>

            <InlineSelect
              innerLabel="Quantity per design"
              value={row.qty}
              options={quantityOptions}
              onChange={(val) =>
                dispatch({ type: "SET_SPLIT_ROW", index: i, numDesigns: row.numDesigns, qty: val })
              }
            />

            <span className="text-gray-400 text-[14px] font-medium shrink-0">=</span>

            <div className="flex-1 border-2 border-[#3d9e5f] rounded-lg px-3 pt-1.5 pb-1.5 bg-linear-to-t from-[#FFF2DA] to-white">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#3d9e5f] leading-none mb-1">
                Total quantity
              </span>
              <p className="text-[13px] font-bold text-[#1e4620]">{splitTotal.toLocaleString()}</p>
            </div>

            <button
              type="button"
              onClick={() => dispatch({ type: "REMOVE_SPLIT_ROW", index: i })}
              aria-label="Remove split"
              className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:border-red-400 hover:text-red-400 transition-colors text-[14px] leading-none"
            >
              ×
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={addSplit}
        className="mt-3 text-[12px] text-[#3d9e5f] hover:underline font-medium"
      >
        + Add split quantity
      </button>
    </div>
  );
}
