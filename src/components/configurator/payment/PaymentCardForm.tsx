"use client";

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

export interface CardDetails {
  cardType: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardOwner: string;
}

interface Props {
  cardType: string;
  setCardType: (v: string) => void;
  cardNumber: string;
  setCardNumber: (v: string) => void;
  expiry: string;
  setExpiry: (v: string) => void;
  cvv: string;
  setCvv: (v: string) => void;
  cardOwner: string;
  setCardOwner: (v: string) => void;
}

export default function PaymentCardForm({
  cardType, setCardType,
  cardNumber, setCardNumber,
  expiry, setExpiry,
  cvv, setCvv,
  cardOwner, setCardOwner,
}: Props) {
  function handleCardNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  }

  function handleExpiryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    const formatted = raw.length > 2 ? `${raw.slice(0, 2)}/${raw.slice(2)}` : raw;
    setExpiry(formatted);
  }

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
              onChange={handleCardNumberChange}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              inputMode="numeric"
              className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none tracking-widest"
            />
          </InlineField>
        </div>

        {/* Expiry Date + CVV */}
        <div className="grid grid-cols-2 gap-2">
          <InlineField label="Expiry Date" required>
            <input
              type="text"
              value={expiry}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              maxLength={5}
              inputMode="numeric"
              className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none"
            />
          </InlineField>

          <InlineField label="CVV" required>
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
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
            placeholder="Name on card"
            className="w-full text-[13px] font-semibold text-[#292560] placeholder-gray-300 bg-transparent border-none outline-none"
          />
        </InlineField>
      </div>
    </div>
  );
}
