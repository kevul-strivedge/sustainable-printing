import { ConfiguratorAction, ConfiguratorState, PaperOption } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  papers: PaperOption[];
}

export default function PaperSelector({ state, dispatch, papers }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Paper</p>
      <select
        value={state.paperId}
        onChange={(e) => dispatch({ type: "SET_PAPER", id: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#1D1A52] bg-white focus:outline-none focus:border-[#3d9e5f] transition-colors duration-150 cursor-pointer"
      >
        {papers.map((p) => (
          <option key={p.id} value={p.id}>{p.label}</option>
        ))}
      </select>
    </div>
  );
}
