"use client";

import { ConfiguratorAction, ConfiguratorState } from "@/src/types/configurator.types";
import type { DeliveryErrors } from "./DeliveryStep";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <p className="text-[11px] font-semibold text-[#292560] mb-1.5">
      {children}{required && <span className="text-red-500 ml-0.5">*</span>}
    </p>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-[11px] text-red-500 mt-1">{message}</p>;
}

function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  hasError,
  inputMode,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hasError?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      type={type}
      inputMode={inputMode}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full border rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 bg-white outline-none transition-colors ${
        hasError
          ? "border-red-400 focus:border-red-500"
          : "border-gray-200 focus:border-[#3d9e5f]"
      }`}
    />
  );
}

const AU_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

interface Props {
  state: ConfiguratorState;
  dispatch: React.Dispatch<ConfiguratorAction>;
  errors?: DeliveryErrors;
}

type DeliveryField =
  | "deliveryFirstName"
  | "deliveryLastName"
  | "deliveryCompany"
  | "deliveryStreet"
  | "deliverySuburb"
  | "deliveryState"
  | "deliveryPostcode"
  | "deliveryPhone"
  | "deliveryEmail";

export default function DeliveryForm({ state, dispatch, errors = {} }: Props) {
  function set(field: DeliveryField) {
    return (value: string) => dispatch({ type: "SET_DELIVERY_FIELD", field, value });
  }

  return (
    <div className="flex flex-col gap-3.5">
      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label required>First Name</Label>
          <Input
            placeholder="First name"
            value={state.deliveryFirstName}
            onChange={set("deliveryFirstName")}
            hasError={!!errors.deliveryFirstName}
          />
          <FieldError message={errors.deliveryFirstName} />
        </div>
        <div>
          <Label required>Last Name</Label>
          <Input
            placeholder="Last name"
            value={state.deliveryLastName}
            onChange={set("deliveryLastName")}
            hasError={!!errors.deliveryLastName}
          />
          <FieldError message={errors.deliveryLastName} />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <Label>Company Name</Label>
        <Input
          placeholder="Your company name (optional)"
          value={state.deliveryCompany}
          onChange={set("deliveryCompany")}
        />
      </div>

      {/* Street Address */}
      <div>
        <Label required>Street Address</Label>
        <Input
          placeholder="Street address"
          value={state.deliveryStreet}
          onChange={set("deliveryStreet")}
          hasError={!!errors.deliveryStreet}
        />
        <FieldError message={errors.deliveryStreet} />
      </div>

      {/* Suburb + State + Postcode */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label required>Suburb</Label>
          <Input
            placeholder=""
            value={state.deliverySuburb}
            onChange={set("deliverySuburb")}
            hasError={!!errors.deliverySuburb}
          />
          <FieldError message={errors.deliverySuburb} />
        </div>
        <div>
          <Label required>State</Label>
          <div className="relative">
            <select
              value={state.deliveryState}
              onChange={(e) => dispatch({ type: "SET_DELIVERY_FIELD", field: "deliveryState", value: e.target.value })}
              className={`w-full border rounded-lg px-3 py-2.5 text-[13px] text-[#292560] bg-white outline-none appearance-none cursor-pointer transition-colors ${
                errors.deliveryState
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-200 focus:border-[#3d9e5f]"
              }`}
            >
              <option value="">Select</option>
              {AU_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M3 5l3.5 3.5L10 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <FieldError message={errors.deliveryState} />
        </div>
        <div>
          <Label required>Postcode</Label>
          <Input
            placeholder="e.g. 3000"
            value={state.deliveryPostcode}
            onChange={set("deliveryPostcode")}
            hasError={!!errors.deliveryPostcode}
            inputMode="numeric"
          />
          <FieldError message={errors.deliveryPostcode} />
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label required>Phone</Label>
          <Input
            placeholder="e.g. 0412 345 678"
            value={state.deliveryPhone}
            onChange={set("deliveryPhone")}
            type="tel"
            hasError={!!errors.deliveryPhone}
            inputMode="tel"
          />
          <FieldError message={errors.deliveryPhone} />
        </div>
        <div>
          <Label required>Email</Label>
          <Input
            placeholder="email@example.com"
            value={state.deliveryEmail}
            onChange={set("deliveryEmail")}
            type="email"
            hasError={!!errors.deliveryEmail}
          />
          <FieldError message={errors.deliveryEmail} />
        </div>
      </div>
    </div>
  );
}
