import { ConfiguratorAction, ConfiguratorState, ExtraOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  extras: ExtraOption[];
}

function RadioOption({
  selected,
  label,
  priceLabel,
  onChange,
}: {
  selected: boolean;
  label: string;
  priceLabel: string;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative shrink-0">
        <input type="radio" checked={selected} onChange={onChange} className="sr-only" />
        <div
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-150 ${
            selected ? "border-[#3d9e5f]" : "border-gray-300 group-hover:border-[#3d9e5f]"
          }`}
        >
          {selected && <div className="w-2 h-2 rounded-full bg-[#3d9e5f]" />}
        </div>
      </div>
      <span className="text-[13px] text-gray-700">
        {label} <span className="text-gray-500">{priceLabel}</span>
      </span>
    </label>
  );
}

export default function ExtrasSelector({ state, dispatch, extras }: Props) {
  // Exclude any "straight edges" / "trim" option — it's the synthetic default below
  const radioExtras = extras.filter(
    (e) => !e.label.toLowerCase().includes("straight")
  );

  if (radioExtras.length === 0) return null;

  // Which extra (if any) is currently active — at most one for radio behaviour
  const selectedExtraId = radioExtras.find((e) => state.selectedExtras.includes(e.id))?.id ?? null;

  const handleSelect = (extraId: string | null) => {
    if (selectedExtraId === extraId) return;
    if (selectedExtraId !== null) dispatch({ type: "TOGGLE_EXTRA", id: selectedExtraId });
    if (extraId !== null) dispatch({ type: "TOGGLE_EXTRA", id: extraId });
  };

  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Corners</p>
      <div className="flex flex-col gap-3">
        {/* Synthetic default option — no extra selected */}
        <RadioOption
          selected={selectedExtraId === null}
          label="Trim straight edges"
          priceLabel="— included"
          onChange={() => handleSelect(null)}
        />

        {radioExtras.map((extra) => {
          const tier = extra.priceTiers.find((t) => t.quantity === state.quantityPerDesign);
          const price = tier?.price ?? 0;
          return (
            <RadioOption
              key={extra.id}
              selected={selectedExtraId === extra.id}
              label={extra.label}
              priceLabel={price > 0 ? `— +$${price.toFixed(2)}` : "— included"}
              onChange={() => handleSelect(extra.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
