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
    <div className="flex items-start justify-between gap-4 py-0.5">
      <span className="text-[12px] text-[#676C80] font-semibold shrink-0">{label}</span>
      <span className="text-[12px] text-[#292560] font-semibold text-right">{value}</span>
    </div>
  );
}

export default function PrintingDetails({ state, papers, sizes, printingTypes, extras }: Props) {
  const paper = papers.find((p) => p.id === state.paperId);
  const size = sizes.find((s) => s.id === state.sizeId);
  const printType = printingTypes.find((pt) => pt.id === state.printingTypeId);
  const allRows = [{ numDesigns: state.numDesigns, qty: state.quantityPerDesign }, ...state.splitRows];
  const totalQty = allRows.reduce((sum, r) => sum + r.numDesigns * r.qty, 0);

  const paperShort = paper?.label
    ? paper.label.replace(" (White)", "").replace("100% Recycled ", "")
    : "—";

  const selectedCorner = extras
    .filter((e) => !e.label.toLowerCase().includes("straight"))
    .find((e) => state.selectedExtras.includes(e.id));
  const cornerLabel = selectedCorner?.label ?? "Trim straight edges";

  return (
    <div>
      <p className="text-[11px] font-bold text-[#292560] uppercase tracking-widest mb-1">Printing</p>
      <Row label="Quantity" value={totalQty.toLocaleString()} />
      <Row label="Paper" value={paperShort} />
      <Row label="Size" value={size ? size.dimensions : "—"} />
      <Row label="Printing" value={printType?.label ?? "—"} />
      <Row label="Corners" value={cornerLabel} />
    </div>
  );
}
