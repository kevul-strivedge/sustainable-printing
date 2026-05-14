export default function ArtworkSection() {
  return (
    <div>
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Artwork</p>
      <div className="flex items-center gap-2.5 border border-gray-200 rounded px-3 py-2.5 bg-white">
        {/* PDF icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="1" width="10" height="13" rx="1" stroke="#3b82f6" strokeWidth="1.3" />
            <path d="M5 5h5M5 7.5h5M5 10h3" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" />
            <path d="M10 1v3.5H13.5" stroke="#3b82f6" strokeWidth="1.1" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-gray-800 truncate">my-cards.pdf</p>
          <p className="text-[10px] text-gray-400">2.4 MB</p>
        </div>
        {/* Remove button */}
        <button
          type="button"
          aria-label="Remove file"
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
