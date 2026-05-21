import { BankDetails } from "@/src/types/configurator.types";

interface Props {
  bankDetails: BankDetails;
}

function BankIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="8" fill="#e8f5ee" />
      <path d="M8 20h20M18 10L8 17h20L18 10z" fill="#3d9e5f" />
      <rect x="10" y="20" width="3" height="6" rx="0.5" fill="#3d9e5f" />
      <rect x="16.5" y="20" width="3" height="6" rx="0.5" fill="#3d9e5f" />
      <rect x="23" y="20" width="3" height="6" rx="0.5" fill="#3d9e5f" />
      <rect x="7" y="26" width="22" height="2" rx="1" fill="#3d9e5f" />
    </svg>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between sm:gap-6 gap-2 py-2">
      <span className="text-[12px] text-gray-400 shrink-0 w-32">{label}</span>
      <span className="text-[12px] font-bold text-[#292560] text-right">{value}</span>
    </div>
  );
}

export default function BankTransferDetails({ bankDetails }: Props) {
  return (
    <div className="bg-[#eef5f1] rounded-xl p-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-[14px] font-bold text-[#292560]">Direct Bank Transfer</p>
          <p className="text-[12px] text-gray-500 mt-0.5">Please quote reference #1312653.</p>
        </div>
        <BankIcon />
      </div>

      {/* Details table */}
      <div className="bg-white border border-gray-200 rounded-lg px-4 py-1">
        <Row label="Account Name"   value={bankDetails.accountName} />
        <Row label="Bank"           value={bankDetails.bank} />
        <Row label="BSB"            value={bankDetails.bsb} />
        <Row label="Account Number" value={bankDetails.accountNumber} />
        <Row label="Payment Terms"  value={bankDetails.paymentTerms} />
      </div>
    </div>
  );
}
