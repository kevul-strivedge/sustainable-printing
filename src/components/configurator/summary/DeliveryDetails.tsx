import { ConfiguratorState } from "@/src/types/configurator.types";

interface Props {
  state: ConfiguratorState;
}

export default function DeliveryDetails({ state }: Props) {
  const {
    deliveryFirstName, deliveryLastName, deliveryCompany,
    deliveryStreet, deliverySuburb, deliveryState, deliveryPostcode,
    deliveryPhone, deliveryEmail,
  } = state;

  const hasInfo = deliveryFirstName !== "" || deliveryEmail !== "";
  const fullName = [deliveryFirstName, deliveryLastName].filter(Boolean).join(" ");
  const nameAndCompany = [fullName, deliveryCompany].filter(Boolean).join(" | ");
  const addressLine = [deliveryStreet, deliverySuburb, deliveryState].filter(Boolean).join(", ");
  const postcodeLine = deliveryPostcode ? `Pin: ${deliveryPostcode}` : "";

  return (
    <div>
      <p className="text-[11px] font-bold text-[#292560] uppercase tracking-widest mb-1">Delivery Details</p>

      {hasInfo ? (
        <div className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
          {/* User info */}
          <div className="flex items-center gap-3 px-3 py-3">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="8" r="4" stroke="#9ca3af" strokeWidth="1.4" />
                <path d="M3 18c0-3.9 3.1-6 7-6s7 2.1 7 6" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              {nameAndCompany && (
                <p className="text-[13px] font-bold text-[#676C80] truncate">{nameAndCompany}</p>
              )}
              {deliveryEmail && (
                <p className="text-[11px] text-[#676C80] mt-0.5 truncate">{deliveryEmail}</p>
              )}
              {deliveryPhone && (
                <p className="text-[11px] text-[#676C80]">{deliveryPhone}</p>
              )}
            </div>
          </div>

          {/* Divider */}
          {addressLine && <hr className="border-gray-200 mx-3" />}

          {/* Address */}
          {addressLine && (
            <div className="px-3 py-3">
              <p className="text-[11px] text-[#676C80] font-semibold mb-1">Address</p>
              {addressLine && (
                <p className="text-[13px] font-bold text-[#292560] leading-snug">{addressLine}</p>
              )}
              {postcodeLine && (
                <p className="text-[13px] font-bold text-[#292560]">{postcodeLine}</p>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2.5 border border-dashed border-gray-200 rounded px-3 py-2.5 bg-gray-50">
          <div className="shrink-0 w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="6" r="2.5" stroke="#9ca3af" strokeWidth="1.3" />
              <path d="M2 13c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[11px] text-gray-400 italic">No delivery details yet</p>
        </div>
      )}
    </div>
  );
}
