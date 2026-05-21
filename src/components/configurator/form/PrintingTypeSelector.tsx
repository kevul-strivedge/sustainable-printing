"use client";

import { ConfiguratorAction, ConfiguratorState, PrintingType } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  printingTypes: PrintingType[];
}

function PrintIcon({ selected }: { selected: boolean }) {
  const color = selected ? "#00883D" : "#9ca3af";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="3" y="7" width="12" height="7" rx="1" stroke={color} strokeWidth="1.4" />
      <path d="M5 7V4.5A1.5 1.5 0 016.5 3h5A1.5 1.5 0 0113 4.5V7" stroke={color} strokeWidth="1.4" />
      <rect x="6" y="11" width="6" height="2" rx="0.5" fill={color} opacity="0.35" />
      <circle cx="13" cy="9.5" r="1" fill={color} />
    </svg>
  );
}

function TickBadge() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#00883D" />
      <path d="M5.5 10.5l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PrintingTypeSelector({ state, dispatch, printingTypes }: Props) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#292560] uppercase tracking-wide mb-3">Printing type</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {printingTypes.map((pt) => {
          const selected = state.printingTypeId === pt.id;
          return (
            <button
              key={pt.id}
              type="button"
              onClick={() => dispatch({ type: "SET_PRINTING_TYPE", id: pt.id })}
              style={{ background: selected ? "linear-gradient(to bottom, #FFFFFF, #F4F0E9)" : "#FFFFFF" }}
              className={`relative flex items-start gap-3 text-left rounded-lg px-4 py-3 transition-all duration-150 cursor-pointer ${
                selected
                  ? "border border-[#00883D]"
                  : "border border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Tick badge — top-right when selected */}
              {selected && (
                <span className="absolute top-2.5 right-2.5">
                  <TickBadge />
                </span>
              )}

              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-3">
                  <PrintIcon selected={selected} />
                  <span className="text-[13px] font-semibold text-[#292560]">{pt.label}</span>
                </div>
                <span className="text-[11px] text-gray-500">{pt.description}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
