"use client";

import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import CustomSelect from "../ui/CustomSelect";
import { useState } from "react";
import { submitSamplePack } from "@/src/services/api";

const AUSTRALIAN_STATES = [
  { label: "New South Wales", value: "NSW" },
  { label: "Victoria", value: "VIC" },
  { label: "Queensland", value: "QLD" },
  { label: "Western Australia", value: "WA" },
  { label: "South Australia", value: "SA" },
  { label: "Tasmania", value: "TAS" },
  { label: "Australian Capital Territory", value: "ACT" },
  { label: "Northern Territory", value: "NT" },
];

const REQUIRED_FIELDS = ["firstName", "surname", "email", "address", "phone", "townCity", "state", "postcode"] as const;

const FreeSamplePack = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    firstName: "",
    surname: "",
    email: "",
    address: "",
    phone: "",
    townCity: "",
    state: "",
    postcode: "",
    sampleOf: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  function validate() {
    const next: Record<string, string> = {};
    if (!formData.firstName.trim())  next.firstName  = "First name is required.";
    if (!formData.surname.trim())    next.surname    = "Surname is required.";
    if (!formData.email.trim())      next.email      = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                     next.email      = "Please enter a valid email address.";
    if (!formData.address.trim())    next.address    = "Address is required.";
    if (!formData.phone.trim())      next.phone      = "Phone is required.";
    if (!formData.townCity.trim())   next.townCity   = "Town/City is required.";
    if (!formData.state)             next.state      = "Please select a state.";
    if (!formData.postcode.trim())   next.postcode   = "Postcode is required.";
    return next;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      await submitSamplePack({
        businessName: formData.businessName || undefined,
        firstName:    formData.firstName,
        surname:      formData.surname,
        email:        formData.email,
        address:      formData.address,
        phone:        formData.phone,
        townCity:     formData.townCity,
        state:        formData.state,
        postcode:     formData.postcode,
        sampleOf:     formData.sampleOf || undefined,
      });
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader title="Free Sample Pack" titleClassName="text-3xl max-w-6xl" />

      <div className="max-w-6xl mx-auto px-6 sm:py-18 py-8">
        {submitted && (
          <div className="mb-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-800 font-medium">
            Request sent successfully — thank you! We will take a look and get back to you asap.
          </div>
        )}

        {submitError && (
          <div className="mb-6 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}
        <div>
          <h2 className="text-[#292560] text-2xl font-semibold">Samples</h2>
          <p className="text-[#292560] text-md pt-4 pb-6">
            Please enter your details below to receive our recycled paper sample pack.
          </p>
        </div>

        

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Row 1: Business name, First name, Surname, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Business name"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
            />
            <div>
              <Input
                label="First name *"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                inputClassName={errors.firstName ? "!border-red-400" : ""}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <Input
                label="Surname *"
                name="surname"
                type="text"
                value={formData.surname}
                onChange={handleChange}
                inputClassName={errors.surname ? "!border-red-400" : ""}
              />
              {errors.surname && <p className="mt-1 text-xs text-red-500">{errors.surname}</p>}
            </div>
            <div>
              <Input
                label="Email *"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                inputClassName={errors.email ? "!border-red-400" : ""}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          {/* Row 2: Address (full width) */}
          <div>
            <Input
              label="Address *"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              wrapperClassName="w-full"
              inputClassName={`w-full${errors.address ? " !border-red-400" : ""}`}
            />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
          </div>

          {/* Row 3: Phone, Town/City, State, Postcode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Input
                label="Phone *"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                inputClassName={errors.phone ? "!border-red-400" : ""}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <Input
                label="Town/City *"
                name="townCity"
                type="text"
                value={formData.townCity}
                onChange={handleChange}
                inputClassName={errors.townCity ? "!border-red-400" : ""}
              />
              {errors.townCity && <p className="mt-1 text-xs text-red-500">{errors.townCity}</p>}
            </div>
            <div>
              <p className="text-[#292560] font-medium text-lg mb-2">State *</p>
              <CustomSelect
                value={formData.state}
                options={AUSTRALIAN_STATES}
                onChange={(v) => {
                  setFormData((prev) => ({ ...prev, state: v }));
                  if (errors.state) setErrors((prev) => ({ ...prev, state: "" }));
                }}
                placeholder="-- Select One --"
                hasError={!!errors.state}
              />
              {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
            </div>
            <div>
              <Input
                label="Postcode *"
                name="postcode"
                type="text"
                value={formData.postcode}
                onChange={handleChange}
                inputClassName={errors.postcode ? "!border-red-400" : ""}
              />
              {errors.postcode && <p className="mt-1 text-xs text-red-500">{errors.postcode}</p>}
            </div>
          </div>

          {/* Row 4: In particular, I would like a sample of... (full width) */}
          <div>
            <Input
              label="In particular, I would like a sample of..."
              name="sampleOf"
              type="text"
              value={formData.sampleOf}
              onChange={handleChange}
              wrapperClassName="w-full"
              inputClassName="w-full"
            />
          </div>

          {/* Required fields note */}
          <p className="text-[#000000] text-xl">
            <span className="text-red-600 font-bold">*</span> – Required Fields
          </p>

          {/* Submit button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#292560] text-lg hover:bg-[#1e1a4a] text-white font-medium cursor-pointer px-6 py-4 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Request Sample"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FreeSamplePack;
