interface SpinnerProps {
  size?: number;
}

export function Spinner({ size = 24 }: SpinnerProps) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="#d1d5db" strokeWidth="2" />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke="#3d9e5f"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface PageLoaderProps {
  label?: string;
}

export function PageLoader({ label }: PageLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <Spinner size={36} />
      {label && (
        <p className="text-[13px] text-gray-500 font-medium">{label}</p>
      )}
    </div>
  );
}
