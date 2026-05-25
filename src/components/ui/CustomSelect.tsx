"use client";

import { useState, useRef, useEffect } from "react";

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  /** Optional label shown inside the trigger at the top (uppercase small-caps style) */
  label?: string;
  value: string | number;
  options: Option[];
  onChange: (value: string) => void;
  /** Shown in the trigger when value is empty; also appears as the first dismissible option */
  placeholder?: string;
  hasError?: boolean;
  /** Strip border/padding — use when the component sits inside an already-bordered container */
  noBorder?: boolean;
  className?: string;
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7l3.5 3.5 5.5-6" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CustomSelect({
  label,
  value,
  options,
  onChange,
  placeholder,
  hasError = false,
  noBorder = false,
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => String(o.value) === String(value));
  const displayText = selectedOption?.label ?? (value !== "" && value !== 0 ? String(value) : null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const borderColor = hasError ? "border-red-400" : open ? "border-[#3d9e5f]" : "border-gray-200";
  const paddingClass = label ? "pt-1.5 pb-1.5" : "py-2.5";

  const wrapperClass = noBorder
    ? `relative ${className}`
    : `relative rounded-lg px-3 ${paddingClass} border ${borderColor} transition-colors bg-white ${className}`;

  return (
    <div ref={ref} className={wrapperClass}>
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="w-full text-left"
      >
        {label && (
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 leading-none mb-1">
            {label}
          </span>
        )}
        <div className="flex items-center gap-2">
          <span className={`flex-1 text-[13px] font-semibold leading-none ${displayText ? "text-[#292560]" : "text-gray-400"}`}>
            {displayText ?? placeholder ?? ""}
          </span>
          <svg
            className={`shrink-0 text-gray-400 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            aria-hidden="true"
          >
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#3d9e5f] rounded-lg shadow-lg z-40 overflow-hidden min-w-[120px]">
          {placeholder && (
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className={`flex items-center w-full px-4 py-2.5 text-[13px] text-left transition-colors ${
                !value
                  ? "bg-[#f0faf5] text-[#3d9e5f] font-semibold"
                  : "text-gray-400 hover:bg-[#f0faf5]"
              }`}
            >
              <span className="flex-1">{placeholder}</span>
              {!value && <CheckIcon />}
            </button>
          )}
          {options.map((o) => {
            const isSelected = String(o.value) === String(value);
            return (
              <button
                key={String(o.value)}
                type="button"
                onClick={() => { onChange(String(o.value)); setOpen(false); }}
                className={`flex items-center w-full px-4 py-2.5 text-[13px] text-left transition-colors ${
                  isSelected
                    ? "bg-[#f0faf5] text-[#3d9e5f] font-semibold"
                    : "text-[#292560] hover:bg-[#f0faf5]"
                }`}
              >
                <span className="flex-1">{o.label}</span>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
