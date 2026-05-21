interface Props {
  guidelines: string[];
}

export default function ArtworkGuidelines({ guidelines }: Props) {
  return (
    <div className="bg-[#f0faf5] border border-[#c8e6d4] rounded-lg px-4 py-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="#3d9e5f" strokeWidth="1.4" />
          <path d="M8 7v5M8 5v.5" stroke="#3d9e5f" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span className="text-[13px] font-bold text-[#1e4620]">Artwork Guidelines</span>
      </div>

      <ul className="flex flex-col gap-1.5">
        {guidelines.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[12px] text-[#292560]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3d9e5f] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
