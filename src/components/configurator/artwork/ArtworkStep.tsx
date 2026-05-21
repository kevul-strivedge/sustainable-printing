import { ConfiguratorAction, ConfiguratorState, ProductConfiguratorData } from "@/src/types/configurator.types";
import ArtworkMethodSelector from "./ArtworkMethodSelector";
import ArtworkDropzone from "./ArtworkDropzone";
import ArtworkGuidelines from "./ArtworkGuidelines";
import ArtworkStepFooter from "./ArtworkStepFooter";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  config: ProductConfiguratorData;
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="#3d9e5f" strokeWidth="1.4" />
      <path d="M8 7v5M8 5v.01" stroke="#3d9e5f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M9.5 1.5L4 9h5.5L6.5 14.5l7-8.5H8L9.5 1.5z" stroke="#3d9e5f" strokeWidth="1.4" strokeLinejoin="round" fill="#f0faf5" />
    </svg>
  );
}

export default function ArtworkStep({ state, dispatch, config }: Props) {
  const selectedOption = config.artworkOptions.find((o) => o.id === state.artworkMethod);

  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <h2 className="text-[20px] font-bold text-[#292560]">Upload Your Artwork</h2>

      {/* Artwork method radio cards */}
      <ArtworkMethodSelector
        artworkOptions={config.artworkOptions}
        selected={state.artworkMethod}
        onChange={(id) => dispatch({ type: "SET_ARTWORK_METHOD", id })}
      />

      {/* Context area — changes based on selected method */}
      {state.artworkMethod === "upload-pdf" && (
        <ArtworkDropzone
          dispatch={dispatch}
          artworkFileName={state.artworkFileName}
          artworkFileSize={state.artworkFileSize}
        />
      )}

      {selectedOption?.contextMessage && state.artworkMethod !== "upload-pdf" && (
        <div className="flex items-start gap-3 bg-[#f0faf5] border border-[#c8e6d4] rounded-lg px-4 py-3.5">
          {selectedOption.contextIcon === "lightning" ? <LightningIcon /> : <InfoIcon />}
          <p className="text-[13px] text-[#292560] leading-relaxed">
            {selectedOption.contextMessage}
          </p>
        </div>
      )}

      {/* Guidelines — only for upload-pdf */}
      {state.artworkMethod === "upload-pdf" && (
        <ArtworkGuidelines guidelines={config.artworkGuidelines} />
      )}

      {/* Footer navigation */}
      <ArtworkStepFooter dispatch={dispatch} />
    </div>
  );
}
