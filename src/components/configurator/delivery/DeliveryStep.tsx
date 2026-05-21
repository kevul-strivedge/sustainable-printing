"use client";

import { useState } from "react";
import { ConfiguratorAction, ConfiguratorState, ProductConfiguratorData } from "@/src/types/configurator.types";
import DeliveryForm from "./DeliveryForm";
import DeliveryStepFooter from "./DeliveryStepFooter";

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  config: ProductConfiguratorData;
}

export type DeliveryErrors = Partial<Record<
  | "deliveryFirstName"
  | "deliveryLastName"
  | "deliveryStreet"
  | "deliverySuburb"
  | "deliveryState"
  | "deliveryPostcode"
  | "deliveryPhone"
  | "deliveryEmail",
  string
>>;

function validate(state: ConfiguratorState): DeliveryErrors {
  const errors: DeliveryErrors = {};

  if (!state.deliveryFirstName.trim())
    errors.deliveryFirstName = "First name is required.";

  if (!state.deliveryLastName.trim())
    errors.deliveryLastName = "Last name is required.";

  if (!state.deliveryStreet.trim())
    errors.deliveryStreet = "Street address is required.";

  if (!state.deliverySuburb.trim())
    errors.deliverySuburb = "Suburb is required.";

  if (!state.deliveryState)
    errors.deliveryState = "Please select a state.";

  if (!state.deliveryPostcode.trim()) {
    errors.deliveryPostcode = "Postcode is required.";
  } else if (!/^\d{4}$/.test(state.deliveryPostcode.trim())) {
    errors.deliveryPostcode = "Postcode must be exactly 4 digits.";
  }

  if (!state.deliveryPhone.trim()) {
    errors.deliveryPhone = "Phone number is required.";
  } else if (!/^[\d\s+\-(). ]{7,20}$/.test(state.deliveryPhone.trim())) {
    errors.deliveryPhone = "Enter a valid phone number (digits only).";
  } else {
    const digits = state.deliveryPhone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15)
      errors.deliveryPhone = "Phone number must be 8–15 digits.";
  }

  if (!state.deliveryEmail.trim()) {
    errors.deliveryEmail = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(state.deliveryEmail.trim())) {
    errors.deliveryEmail = "Enter a valid email address.";
  }

  return errors;
}

export default function DeliveryStep({ state, dispatch, config }: Props) {
  const [errors, setErrors] = useState<DeliveryErrors>({});

  function handleContinue() {
    const errs = validate(state);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      dispatch({ type: "NEXT_STEP" });
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[16px] font-bold text-[#292560]">Delivery Details</h2>

      <DeliveryForm state={state} dispatch={dispatch} errors={errors} />

      {config.deliveryNote && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
          <p className="text-[12px] text-gray-500 leading-relaxed">{config.deliveryNote}</p>
        </div>
      )}

      <DeliveryStepFooter dispatch={dispatch} onContinue={handleContinue} />
    </div>
  );
}
