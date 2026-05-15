"use client";

import { useState } from "react";
import { ConfiguratorAction, ConfiguratorState, PriceBreakdown, ProductConfiguratorData } from "@/src/types/configurator.types";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentCardForm from "./PaymentCardForm";
import BankTransferDetails from "./BankTransferDetails";
import PaymentStepFooter from "./PaymentStepFooter";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  config: ProductConfiguratorData;
  priceBreakdown: PriceBreakdown;
}

export default function PaymentStep({ state, dispatch, config }: Props) {
  const [promoCode, setPromoCode] = useState("");
  const selectedMethod = config.paymentMethods.find((m) => m.id === state.paymentMethodId);

  return (
    <div className="flex flex-col gap-6">
      {/* Heading row with step label */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[20px] font-bold text-[#292560]">Payment Details</h2>
        <span className="shrink-0 text-[11px] font-bold text-[#3d9e5f] bg-green-100 px-2 py-1 rounded-md uppercase tracking-wide mt-1">
          Step {state.currentStep} of 4
        </span>
      </div>

      {/* Discount code */}
      <div>
        <p className="text-[10px] font-bold text-[#292560] uppercase tracking-widest mb-1.5">Discount Code</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Discount Code"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 outline-none focus:border-[#3d9e5f] transition-colors"
          />
          <button
            type="button"
            className="px-5 py-2.5 bg-[#1e4620] text-white rounded-lg text-[13px] font-semibold hover:bg-[#163318] transition-colors whitespace-nowrap"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Payment method selector */}
      <div>
        <p className="text-[10px] font-bold text-[#292560] uppercase tracking-widest mb-2.5">Select payment option</p>
        <PaymentMethodSelector
          paymentMethods={config.paymentMethods}
          selected={state.paymentMethodId}
          onChange={(id) => dispatch({ type: "SET_PAYMENT_METHOD", id })}
        />
      </div>

      {/* Conditional content based on selected method */}
      {selectedMethod?.type === "bank" && config.bankDetails && (
        <BankTransferDetails bankDetails={config.bankDetails} />
      )}

      {selectedMethod?.type === "card" && <PaymentCardForm />}

      {/* Note */}
      {config.paymentNote && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
          <p className="text-[12px] text-gray-500 leading-relaxed">{config.paymentNote}</p>
        </div>
      )}

      {/* Footer */}
      <PaymentStepFooter dispatch={dispatch} />
    </div>
  );
}
