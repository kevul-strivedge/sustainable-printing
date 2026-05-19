"use client";

import PageHeader from "../ui/PageHeader";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { useState } from "react";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <PageHeader
        title="Free Sample Pack"
        titleClassName="text-3xl max-w-6xl"
      />

      <div className="max-w-6xl mx-auto px-6 sm:py-18 py-8">
        <div className="">
          <h2 className="text-[#292560] text-2xl font-semibold">Samples</h2>
          <p className="text-[#292560] text-md pt-4 pb-6">
            Please enter your details below to receive our recycled paper sample
            pack.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Business name, First name, Surname, Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Business name"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
            />
            <Input
              label="First name"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              label="Surname"
              name="surname"
              type="text"
              required
              value={formData.surname}
              onChange={handleChange}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Row 2: Address (full width) */}
          <div>
            <Input
              label="Address"
              name="address"
              type="text"
              required
              value={formData.address}
              onChange={handleChange}
              wrapperClassName="w-full"
              inputClassName="w-full"
            />
          </div>

          {/* Row 3: Phone, Town/City, State, Postcode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Input
              label="Phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              label="Town/City"
              name="townCity"
              type="text"
              required
              value={formData.townCity}
              onChange={handleChange}
            />
            <Select
              label="State"
              name="state"
              required
              placeholder="-- Select One --"
              options={AUSTRALIAN_STATES}
              value={formData.state}
              onChange={handleChange}
              selectClassName="!border !border-[#C4C4C4] focus:!border-5 focus:!border-[#4CCC88] !rounded-lg !px-3 !py-[14px] !text-md !bg-white !text-[#292560]"
            />
            <Input
              label="Postcode"
              name="postcode"
              type="text"
              required
              value={formData.postcode}
              onChange={handleChange}
            />
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
              className="bg-[#292560] text-lg hover:bg-[#1e1a4a] text-white font-medium cursor-pointer px-6 py-4 rounded-lg transition-colors duration-200"
            >
              Request Sample
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FreeSamplePack;
