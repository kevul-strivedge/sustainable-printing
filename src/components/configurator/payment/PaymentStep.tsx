"use client";

import { useState } from "react";
import { ConfiguratorAction, ConfiguratorState, PriceBreakdown, ProductConfiguratorData } from "@/src/types/configurator.types";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentCardForm, { CardDetails } from "./PaymentCardForm";
import BankTransferDetails from "./BankTransferDetails";
import PaymentStepFooter from "./PaymentStepFooter";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  config: ProductConfiguratorData;
  priceBreakdown: PriceBreakdown;
  onSubmit: (cardDetails?: CardDetails) => void;
  submitting: boolean;
  submitError: string;
}

export default function PaymentStep({ state, dispatch, config, onSubmit, submitting, submitError }: Props) {
  const [promoCode, setPromoCode] = useState("");

  // Card state lives here so it can be passed to onSubmit
  const [cardType,   setCardType]   = useState("Visa");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry,     setExpiry]     = useState("");
  const [cvv,        setCvv]        = useState("");
  const [cardOwner,  setCardOwner]  = useState("");

  const selectedMethod = config.paymentMethods.find((m) => m.id === state.paymentMethodId);
  const isCard = selectedMethod?.type === "card";

  function handlePlaceOrder() {
    if (isCard) {
      onSubmit({ cardType, cardNumber, expiry, cvv, cardOwner });
    } else {
      onSubmit(undefined);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Heading row with step label */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[16px] font-bold text-[#292560]">Payment Details</h2>
        
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
            className="flex-1 min-w-0  border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 outline-none focus:border-[#3d9e5f] transition-colors"
          />
          <button
            type="button"
            className="px-9 py-2.5 bg-[#004E24] text-white rounded-lg text-[13px] font-semibold hover:bg-[#163318] transition-colors whitespace-nowrap"
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

      {isCard && (
        <PaymentCardForm
          cardType={cardType}   setCardType={setCardType}
          cardNumber={cardNumber} setCardNumber={setCardNumber}
          expiry={expiry}       setExpiry={setExpiry}
          cvv={cvv}             setCvv={setCvv}
          cardOwner={cardOwner} setCardOwner={setCardOwner}
        />
      )}

      {/* Note */}
      {config.paymentNote && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
          <p className="text-[12px] text-gray-500 leading-relaxed">{config.paymentNote}</p>
        </div>
      )}

      {/* Submit error */}
      {submitError && (
        <p className="text-[13px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{submitError}</p>
      )}

      {/* Footer */}
      <PaymentStepFooter dispatch={dispatch} onSubmit={handlePlaceOrder} submitting={submitting} />
    </div>
  );
}
