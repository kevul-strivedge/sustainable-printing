"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  onConfirm: (postcode: string) => void;
  onSkip: () => void;
}

export default function PostcodeModal({ onConfirm, onSkip }: Props) {
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleInput(val: string) {
    // Allow digits only, max 4
    const digits = val.replace(/\D/g, "").slice(0, 4);
    setPostcode(digits);
    if (error) setError("");
  }

  function handleConfirm() {
    if (!/^\d{4}$/.test(postcode)) {
      setError("Please enter a valid 4-digit Australian postcode.");
      return;
    }
    onConfirm(postcode);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleConfirm();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
        {/* Green top bar */}
        <div className="h-1.5 bg-[#3d9e5f]" />

        <div className="px-7 py-7">
          {/* Icon */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f0faf5] mx-auto mb-4">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M11 2C7.69 2 5 4.69 5 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z"
                stroke="#3d9e5f"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="11" cy="8" r="2" stroke="#3d9e5f" strokeWidth="1.5" />
            </svg>
          </div>

          <h2 className="text-[18px] font-bold text-[#292560] text-center mb-1">
            What&apos;s your postcode?
          </h2>
          <p className="text-[13px] text-gray-500 text-center mb-5 leading-relaxed">
            We use your postcode to calculate accurate delivery costs for your order.
          </p>

          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={postcode}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. 2000"
            className={`w-full border rounded-lg px-4 py-3 text-[15px] text-[#292560] text-center font-semibold placeholder-gray-300 outline-none transition-colors tracking-widest ${
              error
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 focus:border-[#3d9e5f]"
            }`}
          />
          {error && (
            <p className="text-[12px] text-red-500 text-center mt-2">{error}</p>
          )}

          <button
            onClick={handleConfirm}
            className="mt-4 w-full bg-[#004E24] text-white text-[14px] font-semibold rounded-full py-3 hover:bg-[#003a1b] transition-colors"
          >
            Confirm Postcode
          </button>

          <button
            onClick={onSkip}
            className="mt-2.5 w-full text-[13px] text-gray-400 hover:text-gray-600 transition-colors py-1"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
