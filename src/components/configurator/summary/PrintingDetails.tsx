import {
  ConfiguratorState,
  PaperOption,
  SizeOption,
  PrintingType,
  ExtraOption,
} from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  papers: PaperOption[];
  sizes: SizeOption[];
  printingTypes: PrintingType[];
  extras: ExtraOption[];
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      <span className="text-[12px] text-[#676C80] font-semibold shrink-0">{label}</span>
      <span className="text-[12px] text-[#292560] font-semibold text-right">{value}</span>
    </div>
  );
}

export default function PrintingDetails({ state, papers, sizes, printingTypes, extras }: Props) {
  const paper = papers.find((p) => p.id === state.paperId);
  const size = sizes.find((s) => s.id === state.sizeId);
  const printType = printingTypes.find((pt) => pt.id === state.printingTypeId);
  const totalQty = state.numDesigns * state.quantityPerDesign;

  const selectedExtraLabels = state.selectedExtras
    .map((id) => extras.find((e) => e.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  const paperShort = paper?.label
    ? paper.label.replace(" (White)", "").replace("100% Recycled ", "")
    : "—";

  return (
    <div>
      <p className="text-[11px] font-bold text-[#292560] uppercase tracking-widest mb-2">Printing</p>
      <Row label="Quantity" value={totalQty.toLocaleString()} />
      <Row label="Paper" value={paperShort} />
      <Row label="Size" value={size ? size.dimensions : "—"} />
      <Row label="Corners" value={state.selectedExtras.includes("round-corners") ? "Round corners" : "Trim straight edges"} />
      <Row label="Printing" value={printType?.label ?? "—"} />
      <Row label="Extras" value={selectedExtraLabels || "—"} />
    </div>
  );
}
