export default function DeliveryDetails() {
  return (
    <div>
      <p className="text-[11px] font-bold text-[#292560] uppercase tracking-widest mb-2">Delivery Details</p>

      {/* Delivery type row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-semibold text-[#676C80]">Delivery Australia-wide</span>
        <span className="text-[13px] font-bold text-[#292560]">Standard</span>
      </div>

      {/* Single card: user info + address */}
      <div className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
        {/* User info */}
        <div className="flex items-center gap-3 px-3 py-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="8" r="4" stroke="#9ca3af" strokeWidth="1.4" />
              <path d="M3 18c0-3.9 3.1-6 7-6s7 2.1 7 6" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-bold text-[#676C80]">Sumer Pal | Strivedge</p>
            <p className="text-[11px] text-[#676C80] mt-0.5">sumer@gmail.com</p>
            <p className="text-[11px] text-[#676C80]">+91 0123456789</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mx-3" />

        {/* Address */}
        <div className="px-3 py-3">
          <p className="text-[11px] text-[#676C80] font-semibold mb-1">Address</p>
          <p className="text-[13px] font-bold text-[#292560] leading-snug">
            202, Satkar complax, near tanishq, CG road.
          </p>
          <p className="text-[13px] font-bold text-[#292560]">Pin: 360028</p>
        </div>
      </div>
    </div>
  );
}
