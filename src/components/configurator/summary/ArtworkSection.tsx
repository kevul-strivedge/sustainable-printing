import { ConfiguratorAction } from "@/src/types/configurator.types";

interface Props {
  artworkFileName: string;
  artworkFileSize: number;
  dispatch: React.Dispatch<ConfiguratorAction>;
}

export default function ArtworkSection({ artworkFileName, artworkFileSize, dispatch }: Props) {
  const hasFile = artworkFileName !== "";

  return (
    <div>
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Artwork</p>

      {hasFile ? (
        <div className="flex items-center gap-2.5 border border-gray-200 rounded px-3 py-2.5 bg-white">
          {/* PDF / file icon */}
          <div className="shrink-0 w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2" y="1" width="10" height="13" rx="1" stroke="#3b82f6" strokeWidth="1.3" />
              <path d="M5 5h5M5 7.5h5M5 10h3" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M10 1v3.5H13.5" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-gray-800 truncate">{artworkFileName}</p>
            <p className="text-[10px] text-gray-400">
              {(artworkFileSize / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>

          {/* Remove */}
          <button
            type="button"
            aria-label="Remove file"
            onClick={() => dispatch({ type: "SET_ARTWORK_FILE", fileName: "", fileSize: 0 })}
            className="shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 border border-dashed border-gray-200 rounded px-3 py-2.5 bg-gray-50">
          <div className="shrink-0 w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 9V3M4 6l3-3 3 3" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 10v1a1 1 0 001 1h8a1 1 0 001-1v-1" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[11px] text-gray-400 italic">No artwork uploaded yet</p>
        </div>
      )}
    </div>
  );
}
