"use client";

import { useState } from "react";
import Image from "next/image";
import Input from "../ui/Input";
import Select from "../ui/Select";
import FileInput from "../ui/FileInput";
import PageHeader from "../ui/PageHeader";

// ─── SVG Icons ───────────────────────────────────────────────────────────────
// To swap any icon with an image, replace the SVG component with:
// const BusinessCardsIcon = () => <Image src="/icons/business-cards.png" alt="Business cards" width={64} height={64} />

const BusinessCardsIcon = () => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="5"
      y="18"
      width="55"
      height="34"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <rect
      x="14"
      y="10"
      width="55"
      height="34"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="white"
    />
    <line
      x1="24"
      y1="22"
      x2="58"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="24"
      y1="30"
      x2="48"
      y2="30"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const FoldedBrochuresIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <path
      d="M20 10 L40 16 L40 60 L20 54 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M40 16 L60 10 L60 54 L40 60 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

const NotebooksIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="20"
      y="8"
      width="40"
      height="54"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="20"
      y1="8"
      x2="20"
      y2="62"
      stroke="currentColor"
      strokeWidth="4"
    />
    <line
      x1="30"
      y1="20"
      x2="52"
      y2="20"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="30"
      y1="30"
      x2="52"
      y2="30"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="30"
      y1="40"
      x2="44"
      y2="40"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const InvitationsIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="12"
      y="14"
      width="56"
      height="42"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M12 14 L40 38 L68 14"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

const PostersIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="18"
      y="6"
      width="44"
      height="56"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="40"
      y1="2"
      x2="40"
      y2="8"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <line
      x1="28"
      y1="22"
      x2="52"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="28"
      y1="32"
      x2="52"
      y2="32"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="28"
      y1="42"
      x2="44"
      y2="42"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const PresentationFoldersIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <path
      d="M10 20 L10 60 L70 60 L70 28 L40 28 L34 20 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

const LetterheadsIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="16"
      y="8"
      width="48"
      height="58"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="24"
      y1="22"
      x2="56"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="24"
      y1="32"
      x2="56"
      y2="32"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="24"
      y1="42"
      x2="56"
      y2="42"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="24"
      y1="52"
      x2="44"
      y2="52"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CalendarsIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="10"
      y="16"
      width="60"
      height="50"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="10"
      y1="28"
      x2="70"
      y2="28"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="26"
      y1="6"
      x2="26"
      y2="20"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <line
      x1="54"
      y1="6"
      x2="54"
      y2="20"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <line
      x1="22"
      y1="38"
      x2="28"
      y2="38"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="38"
      y1="38"
      x2="44"
      y2="38"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="54"
      y1="38"
      x2="60"
      y2="38"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="22"
      y1="50"
      x2="28"
      y2="50"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="38"
      y1="50"
      x2="44"
      y2="50"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="54"
      y1="50"
      x2="60"
      y2="50"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const FlyersIcon = () => (
  <svg
    viewBox="0 0 80 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12 sm:w-20 sm:h-20"
  >
    <rect
      x="20"
      y="8"
      width="40"
      height="54"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
    />
    <line
      x1="28"
      y1="22"
      x2="52"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="28"
      y1="32"
      x2="52"
      y2="32"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="28"
      y1="42"
      x2="44"
      y2="42"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// ─── Categories config ────────────────────────────────────────────────────────
// To swap SVG with image: replace icon with
// icon: <Image src="/icons/business-cards.png" alt="Business cards" width={64} height={64} />

const CATEGORIES = [
  {
    id: "business-cards",
    label: "Business cards",
    icon: <BusinessCardsIcon />,
  },
  {
    id: "folded-brochures",
    label: "Folded Brochures",
    icon: <FoldedBrochuresIcon />,
  },
  { id: "notebooks", label: "Notebooks", icon: <NotebooksIcon /> },
  {
    id: "invitations-cards",
    label: "Invitations & cards",
    icon: <InvitationsIcon />,
  },
  { id: "posters", label: "Posters", icon: <PostersIcon /> },
  {
    id: "presentation-folders",
    label: "Presentation folders",
    icon: <PresentationFoldersIcon />,
  },
  { id: "letterheads", label: "Letterheads", icon: <LetterheadsIcon /> },
  { id: "calendars", label: "Calendars", icon: <CalendarsIcon /> },
  { id: "flyers", label: "Flyers", icon: <FlyersIcon /> },
];

const DESIGNS_OPTIONS = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const CustomQuote = () => {
  const [selected, setSelected] = useState("business-cards");
  const [formData, setFormData] = useState({
    nameOfItem: "",
    describeItem: "",
    size: "",
    designs: "",
    businessName: "",
    name: "",
    email: "",
    phone: "",
    artwork: null as File | null,
  });

  const selectedCategory = CATEGORIES.find((c) => c.id === selected);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, artwork: e.target.files?.[0] ?? null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ category: selected, ...formData });
  };

  return (
    <>
      <PageHeader title="Custom Quote" titleClassName="text-3xl max-w-6xl" />

      <div className="max-w-6xl mx-auto px-6 sm:py-18 py-10">
        {/* ── Category Selector ── */}
        <h2 className="text-[#292560] text-xl font-semibold mb-6">
          What would you like a quote for?
        </h2>

        {/* Responsive: 2 cols mobile → 3 cols sm → 5 cols lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelected(cat.id)}
              className={`flex flex-col items-center justify-center gap-2 p-3 border-2 rounded transition-colors cursor-pointer
                ${
                  selected === cat.id
                    ? "border-[#292560] text-[#4CCC88]"
                    : "border-transparent text-[#4CCC88] hover:border-[#c4c4c4]"
                }`}
            >
              {cat.icon}
              <span className="text-[#292560] text-lg text-center leading-tight">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        <hr className="border-[#e0e0e0] my-10" />

        {/* ── Form ── */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category title */}
          <h3 className="text-[#292560] text-xl font-semibold">
            {selectedCategory?.label}
          </h3>

          {/* Row 1: Name of item + Describe your item */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Name of item"
              name="nameOfItem"
              type="text"
              placeholder="For example, a brochure for an event"
              value={formData.nameOfItem}
              onChange={handleChange}
              inputClassName="w-full !py-8 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
            />
            <Input
              label="Describe your item"
              name="describeItem"
              type="text"
              placeholder="Do you need rounded edges, scoring, folding, binding etc."
              value={formData.describeItem}
              onChange={handleChange}
              inputClassName="w-full !py-8 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
            />
          </div>

          <hr className="border-[#e0e0e0]" />

          {/* Row 2: Size + How many designs/kinds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Size"
              name="size"
              type="text"
              placeholder="For example;DL folded brochure'or A4 Brochure"
              value={formData.size}
              onChange={handleChange}
              inputClassName="w-full !py-5 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
            />
            <Select
              label="How many designs/kinds"
              name="designs"
              placeholder="How many designs/kinds"
              options={DESIGNS_OPTIONS}
              value={formData.designs}
              onChange={handleChange}
              selectClassName="!py-5 !bg-[#c4c4c41a]"
            />
          </div>

          <hr className="border-[#e0e0e0]" />

          {/* Row 3: Your Details + Artwork Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Your Details */}
            <div className="flex flex-col gap-4">
              <label className="text-[#292560] font-medium text-lg">
                Your Details
              </label>
              <Input
                name="businessName"
                type="text"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                inputClassName="w-full !py-5 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
              />
              <Input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                inputClassName="w-full !py-5 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                inputClassName="w-full !py-5 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={handleChange}
                inputClassName="w-full !py-5 !bg-[#c4c4c41a] !border-[#c4c4c41a]"
              />
            </div>

            {/* Artwork Upload */}
            <div className="flex flex-col gap-5">
              <FileInput
                label="Artwork Upload"
                name="artwork"
                accept=".pdf,.ai,.eps,.png,.jpg,.jpeg"
                onChange={handleFile}
                inputClassName="!py-[20px] mt-1"
              />
              <p className="text-md text-[#292560] font-medium">
                Optional file upload for our reference. (Max file size is 20Mb)
              </p>
              <button
                type="button"
                className="w-fit border border-[#292560] text-[#292560] text-md px-4 py-2 rounded hover:bg-[#292560] hover:text-white transition"
              >
                View our Design Guidelines
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center sm:pt-20 pt-6">
            <button
              type="submit"
              className="bg-[#292560] hover:bg-[#1e1a4a] text-white font-medium px-16 py-5 rounded-md transition-colors duration-200"
            >
              Submit Quote
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomQuote;
