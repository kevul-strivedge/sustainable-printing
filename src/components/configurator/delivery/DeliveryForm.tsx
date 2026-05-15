"use client";

import { useState } from "react";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <p className="text-[11px] font-semibold text-[#292560] mb-1.5">
      {children}{required && <span className="text-red-500 ml-0.5">*</span>}
    </p>
  );
}

function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 bg-white outline-none focus:border-[#3d9e5f] transition-colors"
    />
  );
}

const AU_STATES = ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"];

export default function DeliveryForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-3.5">
      {/* First + Last Name */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label required>First Name</Label>
          <Input placeholder="First name" value={firstName} onChange={setFirstName} />
        </div>
        <div>
          <Label required>Last Name</Label>
          <Input placeholder="Last name" value={lastName} onChange={setLastName} />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <Label>Company Name</Label>
        <Input placeholder="Your company name" value={company} onChange={setCompany} />
      </div>

      {/* Street Address */}
      <div>
        <Label required>Street Address</Label>
        <Input placeholder="Your company name" value={street} onChange={setStreet} />
      </div>

      {/* Suburb + State + Postcode */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <Label required>Suburb</Label>
          <Input placeholder="" value={suburb} onChange={setSuburb} />
        </div>
        <div>
          <Label required>State</Label>
          <div className="relative">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] bg-white outline-none focus:border-[#3d9e5f] appearance-none cursor-pointer transition-colors"
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
        </div>
        <div>
          <Label required>Postcode</Label>
          <Input placeholder="" value={postcode} onChange={setPostcode} />
        </div>
      </div>

      {/* Phone + Email */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label required>Phone</Label>
          <Input placeholder="0123456789" value={phone} onChange={setPhone} type="tel" />
        </div>
        <div>
          <Label required>Email</Label>
          <Input placeholder="email@gmail.com" value={email} onChange={setEmail} type="email" />
        </div>
      </div>
    </div>
  );
}
