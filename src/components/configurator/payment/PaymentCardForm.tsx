"use client";

import { useState } from "react";

function InlineField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg px-3 pt-2 pb-2.5 border border-gray-200">
      <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 leading-none mb-1">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </span>
      {children}
    </div>
  );
}

const CARD_TYPES = ["Visa", "Mastercard", "Amex", "Discover"];

export default function PaymentCardForm() {
  const [cardType, setCardType] = useState("Visa");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardOwner, setCardOwner] = useState("");

  return (
    <div className="bg-[#eef5f1] rounded-xl p-4">
      <p className="text-[15px] font-bold text-[#292560] mb-3">Credit Card Transfer</p>

      <div className="flex flex-col gap-2">
        {/* Card Type + Card Number */}
        <div className="grid grid-cols-[1fr_2fr] gap-2">
          <InlineField label="Card Type" required>
            <div className="relative flex items-center">
              <select
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                className="flex-1 text-[13px] font-semibold text-[#292560] bg-transparent border-none outline-none appearance-none cursor-pointer pr-5"
              >
                {CARD_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </InlineField>

          <InlineField label="Card Number" required>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none tracking-widest"
            />
          </InlineField>
        </div>

        {/* Expiry Date + CVV */}
        <div className="grid grid-cols-2 gap-2">
          <InlineField label="Expiry Date">
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none"
            />
          </InlineField>

          <InlineField label="CVV">
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="••••"
              maxLength={4}
              className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none"
            />
          </InlineField>
        </div>

        {/* Card Owner */}
        <InlineField label="Card Owner">
          <input
            type="text"
            value={cardOwner}
            onChange={(e) => setCardOwner(e.target.value)}
            placeholder="Sumer Pal"
            className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none"
          />
        </InlineField>
      </div>
    </div>
  );
}
