import { ConfiguratorAction, ConfiguratorState, PaperOption } from "@/src/types/configurator.types";
import CustomSelect from "@/src/components/ui/CustomSelect";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  papers: PaperOption[];
}

export default function PaperSelector({ state, dispatch, papers }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-1">Paper</p>
      <CustomSelect
        value={state.paperId}
        options={papers.map((p) => ({ value: p.id, label: p.label }))}
        onChange={(v) => dispatch({ type: "SET_PAPER", id: v })}
      />
    </div>
  );
}
