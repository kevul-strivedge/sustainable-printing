import { ConfiguratorState, PriceBreakdown, ProductConfiguratorData } from "@/src/types/configurator.types";
import Link from "next/link";

interface Props {
  quoteId: number;
  state: ConfiguratorState;
  config: ProductConfiguratorData;
  priceBreakdown: PriceBreakdown;
}

export default function OrderConfirmationPage({ quoteId, state, config, priceBreakdown }: Props) {
  const totalQty = state.numDesigns * state.quantityPerDesign;
  const paper = config.papers.find((p) => p.id === state.paperId);
  const size = config.sizes.find((s) => s.id === state.sizeId);
  const printingType = config.printingTypes.find((p) => p.id === state.printingTypeId);
  const paymentMethod = config.paymentMethods.find((m) => m.id === state.paymentMethodId);
  const selectedCorner = config.extras
    .filter((e) => !e.label.toLowerCase().includes("straight"))
    .find((e) => state.selectedExtras.includes(e.id));
  const cornerLabel = selectedCorner?.label ?? "Trim straight edges";
  const hasCornerOptions = config.extras.some((e) => !e.label.toLowerCase().includes("straight"));
  const orderDate = new Date().toLocaleString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const whatsNext = [
    {
      n: 1,
      title: "Artwork Review",
      body: "Our team will review your uploaded artwork within 1 business day.",
    },
    {
      n: 2,
      title: "Production",
      body: "Once approved, your order enters our eco-friendly print queue.",
    },
    {
      n: 3,
      title: "Delivery",
      body: "Your order is packed and dispatched. Tracking info sent to your email.",
    },
  ];

  return (
    <div className="max-w-240 mx-auto px-6 py-12">

      {/* Header card */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="h-1 bg-[#3d9e5f]" />
        <div className="px-8 py-8 text-center">

          {/* Decorative checkmark icon */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            {/* Outer light ring */}
            <div className="absolute inset-0 rounded-full bg-[#e6f5ec]" />
            {/* Mid ring */}
            <div className="absolute inset-2.5 rounded-full bg-[#c8e6d4]" />
            {/* Inner green circle */}
            <div className="absolute inset-5.5 rounded-full bg-[#3d9e5f] flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M4 11l5 5L18 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Leaf — top left */}
            <div className="absolute top-0 left-3 -rotate-45">
              <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
                <path d="M5.5 15C5.5 15 0.5 10.5 0.5 6.5C0.5 3.46 2.74 1 5.5 1C8.26 1 10.5 3.46 10.5 6.5C10.5 10.5 5.5 15 5.5 15Z" fill="#3d9e5f" opacity="0.75"/>
              </svg>
            </div>
            {/* Leaf — top right */}
            <div className="absolute top-1 right-2 rotate-45">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                <path d="M4.5 12C4.5 12 0.5 8.5 0.5 5.5C0.5 2.96 2.24 1 4.5 1C6.76 1 8.5 2.96 8.5 5.5C8.5 8.5 4.5 12 4.5 12Z" fill="#5bb378" opacity="0.65"/>
              </svg>
            </div>
            {/* Leaf — bottom left */}
            <div className="absolute bottom-2 left-0 rotate-135">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                <path d="M4.5 12C4.5 12 0.5 8.5 0.5 5.5C0.5 2.96 2.24 1 4.5 1C6.76 1 8.5 2.96 8.5 5.5C8.5 8.5 4.5 12 4.5 12Z" fill="#3d9e5f" opacity="0.55"/>
              </svg>
            </div>
            {/* Dot — right */}
            <div className="absolute top-5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-85" />
            {/* Dot — bottom right */}
            <div className="absolute bottom-3 right-1 w-2 h-2 rounded-full bg-[#60a5fa] opacity-75" />
            {/* Dot — left */}
            <div className="absolute top-9 -left-1 w-2 h-2 rounded-full bg-[#f472b6] opacity-65" />
          </div>

          <h1 className="text-[28px] font-bold text-[#292560] mb-2">Thank you for your order!</h1>
          <p className="text-[14px] text-gray-500 font-semibold leading-relaxed">
            Your payment has been received and your order is confirmed.
          </p>
          <p className="text-[14px] text-gray-500 font-semibold mb-8">
            We&apos;ve sent an order confirmation email with all the details to{" "}
            <span className="font-semibold text-[#3d9e5f] underline">{state.deliveryEmail}</span>.
          </p>

          {/* Info chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {/* Order Reference */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <div className="text-[#3d9e5f] shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="2" width="16" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 8h8M7 11.5h8M7 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-semibold mb-0.5">Order Reference</p>
                <p className="text-[13px] font-bold text-[#3d9e5f]">#SPC-{quoteId}</p>
              </div>
            </div>

            {/* Order Date */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <div className="text-[#3d9e5f] shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 9h18" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 2v4M15 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6.5 13h2M11 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-semibold mb-0.5">Order Date</p>
                <p className="text-[13px] font-bold text-[#292560]">{orderDate}</p>
              </div>
            </div>

            {/* Confirmation sent to */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <div className="text-[#3d9e5f] shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8.5l9 5.5 9-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-500 font-semibold mb-0.5">Confirmation sent to</p>
                <p className="text-[13px] font-bold text-[#292560] truncate">{state.deliveryEmail}</p>
              </div>
            </div>

            {/* Print Method */}
            <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
              <div className="text-[#3d9e5f] shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M6 8V3h10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="2" y="8" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 19h10v-6H6v6z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="16.5" cy="12.5" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-500 font-semibold mb-0.5">Print Method</p>
                <p className="text-[13px] font-bold text-[#292560]">{printingType?.label ?? state.printingTypeId}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Overview heading */}
      <div className="mb-4">
        <h2 className="text-[22px] font-bold text-[#292560]">Order Overview</h2>
        <p className="text-[13px] text-gray-500 mt-0.5">A summary of your order, delivery and payment details.</p>
      </div>

      {/* 3-column order overview — separate cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        {/* Col 1 — Your Order Summary */}
        <div className="border border-gray-200 rounded-xl bg-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <div className="text-[#3d9e5f]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6.5 7h7M6.5 10h7M6.5 13h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[14px] font-bold text-[#292560]">Your Order Summary</h3>
          </div>

          {/* Product preview */}
          <div className="flex gap-3 mb-4 pb-4 border-b border-gray-100">
            {/* Paper thumbnail — paper icon placeholder */}
            <div className="w-16 h-16 rounded-lg bg-gray-100 shrink-0 flex items-center justify-center">
              <svg width="28" height="34" viewBox="0 0 28 34" fill="none" opacity="0.18">
                <rect x="2" y="2" width="24" height="30" rx="3" stroke="#292560" strokeWidth="2"/>
                <path d="M7 11h14M7 17h14M7 23h8" stroke="#292560" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[13px] font-bold text-[#292560] leading-snug">
                {paper?.label ?? config.title}
              </p>
              {/* Finishing — always show straight or round corners */}
              <p className="text-[12px] text-[#292560] flex items-center gap-1.5 font-semibold">
                <span className="w-3.5 h-3.5 rounded border border-[#292560] text-[#3d9e5f] flex items-center justify-center text-[10px] font-bold shrink-0 leading-none">+</span>
                {cornerLabel}
              </p>
              <p className="text-[12px] text-[#292560] flex items-center gap-1.5 font-semibold">
                <span className="w-3.5 h-3.5 rounded border border-[#292560] text-[#3d9e5f] flex items-center justify-center text-[10px] font-bold shrink-0 leading-none">+</span>
                {state.numDesigns} design{state.numDesigns !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Details table */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500 font-semibold">Quantity</span>
              <span className="text-[#292560] font-medium">{totalQty.toLocaleString()}</span>
            </div>
            {paper && (
              <div className="flex justify-between gap-3 text-[13px]">
                <span className="text-gray-500 shrink-0 font-semibold">Paper</span>
                <span className="text-[#292560] font-medium text-right">{paper.label}</span>
              </div>
            )}
            {size && (
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500 font-semibold">Size</span>
                <span className="text-[#292560] font-medium">{size.dimensions}</span>
              </div>
            )}
            {hasCornerOptions && (
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500 font-semibold">Corners</span>
                <span className="text-[#292560] font-medium">
                  {cornerLabel}
                </span>
              </div>
            )}
            {printingType && (
              <div className="flex justify-between text-[13px]">
                <span className="text-gray-500 font-semibold">Printing</span>
                <span className="text-[#292560] font-medium">{printingType.label}</span>
              </div>
            )}
          </div>

          {/* Total */}
          <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center mb-2">
            <span className="text-[15px] font-bold text-[#292560] ">Total</span>
            <span className="text-[16px] font-bold text-[#3d9e5f]">${priceBreakdown.total.toFixed(2)} AUD</span>
          </div>
          <a href="#" className="text-[13px] text-[#3d9e5f] hover:underline font-semibold">
            View full order summary →
          </a>
        </div>

        {/* Col 2 — Delivery Details */}
        <div className="border border-gray-200 rounded-xl bg-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <div className="text-[#3d9e5f]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1 4.5h12v8H1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M13 7h4l2 3v2.5h-6V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="4.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="15.5" cy="15" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-[14px] font-bold text-[#292560]">Delivery Details</h3>
          </div>

          <div className="flex justify-between items-center mb-2.5 text-[13px]">
            <span className="text-gray-500 font-semibold">Delivery Australia-wide</span>
            <span className="font-bold text-[#292560]">Standard</span>
          </div>
          <div className="flex justify-between items-center mb-5 text-[13px]">
            <span className="text-gray-500 font-semibold ">Estimated delivery</span>
            <span className="font-bold text-[#292560]">3 – 5 working days</span>
          </div>

          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2 font-semibold">Delivery address</p>
          <div className="text-[13px] text-[#292560] flex flex-col gap-0.5 mb-5">
            <span className="font-semibold">
              {state.deliveryFirstName} {state.deliveryLastName}
              {state.deliveryCompany ? ` | ${state.deliveryCompany}` : ""}
            </span>
            <span>{state.deliveryStreet},</span>
            <span>{state.deliverySuburb}, {state.deliveryState}.</span>
            <span>Pin: {state.deliveryPostcode}</span>
            {state.deliveryPhone && <span className="mt-0.5">{state.deliveryPhone}</span>}
          </div>

          <div className="flex items-start gap-2.5 border-t border-gray-100 pt-4 mb-4">
            <div className="text-gray-400 shrink-0 mt-0.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 4h11v7.5H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M12 6.5h3.5L17 9v2.5h-5V6.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <circle cx="4" cy="13.5" r="1.3" stroke="currentColor" strokeWidth="1.3"/>
                <circle cx="14" cy="13.5" r="1.3" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </div>
            <p className="text-[12px] text-gray-500 font-semibold">
              You&apos;ll receive an email when your order is dispatched.
            </p>
          </div>
        </div>

        {/* Col 3 — Payment Details */}
        <div className="border border-gray-200 rounded-xl bg-white p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-5">
            <div className="text-[#3d9e5f]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="1" y="4" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1 8.5h18" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M4 12h4M4 14.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[14px] font-bold text-[#292560]">Payment Details</h3>
          </div>

          <div className="flex flex-col gap-3 mb-5">
            <div className="flex justify-between text-[13px]">
              <span className="text-gray-500 font-semibold">Payment method</span>
              <span className="font-bold text-[#292560]">{paymentMethod?.label ?? "—"}</span>
            </div>
            {paymentMethod?.type === "bank" && config.bankDetails && (
              <>
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-500 font-semibold">BSB</span>
                  <span className="font-bold text-[#292560]">{config.bankDetails.bsb}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-500 font-semibold">Account no.</span>
                  <span className="font-bold text-[#292560]">{config.bankDetails.accountNumber}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-500 font-semibold">Account name</span>
                  <span className="font-bold text-[#292560]">{config.bankDetails.accountName}</span>
                </div>
              </>
            )}
          </div>

          {/* Payment status card — shield icon matches Figma */}
          <div className={`mt-auto rounded-xl p-4 flex gap-3 items-start ${paymentMethod?.type === "bank" ? "bg-amber-50 border border-amber-200" : "bg-[#f0faf5] border border-[#c8e6d4]"}`}>
            {/* Shield icon */}
            <div className="shrink-0 pt-0.5">
              {paymentMethod?.type === "bank" ? (
                <svg width="36" height="40" viewBox="0 0 38 46" fill="none">
                  <path d="M19 2L3 9v13c0 10 7.2 19.3 16 22 8.8-2.7 16-12 16-22V9L19 2z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
                  <path d="M12 21l5 5L26 15" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="36" height="40" viewBox="0 0 38 46" fill="none">
                  <path d="M19 2L3 9v13c0 10 7.2 19.3 16 22 8.8-2.7 16-12 16-22V9L19 2z" fill="#e6f5ec" stroke="#3d9e5f" strokeWidth="1.5"/>
                  <path d="M12 21l5 5L26 15" stroke="#3d9e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div>
              <p className={`text-[13px] font-bold mb-0.5 ${paymentMethod?.type === "bank" ? "text-amber-800" : "text-[#292560]"}`}>
                {paymentMethod?.type === "bank" ? "Payment Pending" : "Payment Successful"}
              </p>
              <p className={`text-[12px] ${paymentMethod?.type === "bank" ? "text-amber-700" : "text-gray-500"}`}>
                {paymentMethod?.type === "bank"
                  ? `Please transfer $${priceBreakdown.total.toFixed(2)} AUD to the bank details above.`
                  : `Your payment of $${priceBreakdown.total.toFixed(2)} AUD has been received.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 font-semibold">
        <Link
          href="/"
          className="inline-block px-10 py-3 bg-[#004E24] text-white text-[14px] font-semibold rounded-full hover:bg-[#003a1b] transition-colors"
        >
          Continue Shopping
        </Link>
        <Link href="#" className="text-[14px] text-[#3d9e5f] hover:underline font-semibold">
          View my orders →
        </Link>
      </div>

    </div>
  );
}
