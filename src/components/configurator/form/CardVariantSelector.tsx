import { CardVariant, ConfiguratorAction, ConfiguratorState } from "@/src/types/configurator.types";
import CustomSelect from "@/src/components/ui/CustomSelect";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  variants: CardVariant[];
  /** Called after the variant changes so the parent can also reset paperId to a valid
      paper for the new variant (since variants may have different paper sets). */
  onVariantChange: (id: string) => void;
  /** "Choose your card" (default) or "Choose your shape" for sticker products. */
  label?: string;
}

export default function CardVariantSelector({ state, variants, onVariantChange, label }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-1">
        {label ?? "Choose your card"}
      </p>
      <CustomSelect
        value={state.cardVariantId}
        options={variants.map((v) => ({ value: v.id, label: v.label }))}
        onChange={(v) => onVariantChange(v)}
      />
    </div>
  );
}
