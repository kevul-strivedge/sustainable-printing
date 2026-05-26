"use client";

import { useState } from "react";
import Link from "next/link";

// /books landing page — mirrors the Laravel design in the user-provided screenshot.
//
// Sections, top → bottom:
//   1. Green hero band with heading + two showcase book images
//   2. Centered intro paragraphs
//   3. Paper Stocks tiles (3)
//   4. Binding Styles tiles (3)
//   5. Custom quote form (Your Details + Quote Details) → POSTs to /api/v1/custom-quote
//   6. FAQ accordion
//   7. Decorative annual-reports banner
//   8. Decorative magazine-spread banner (teal background)

const PAPER_STOCKS = [
  { title: "Recycled White Matt", image: "/images/books/paper-white-matt.png" },
  { title: "Recycled White Silk", image: "/images/books/paper-white-silk.png" },
  { title: "Recycled Kraft",      image: "/images/books/paper-kraft.png" },
];

const BINDING_STYLES = [
  { title: "Saddle Stitch", image: "/images/books/binding-saddle-stitch.png" },
  { title: "Perfect Bound", image: "/images/books/binding-perfect-bound.png" },
  { title: "Wiro Bound",    image: "/images/books/binding-wiro-bound.png" },
];


const FAQS = [
  { q: "What types of book printing services do you offer?",
    a: "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes." },
  { q: "Can I print books in small quantities?",
    a: "Yes! We accommodate both short-run and bulk printing. Whether it's one copy or a thousand, we have flexible solutions to suit your needs." },
  { q: "What can I customise in my book printing order?",
    a: "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours." },
  { q: "How long does it take to print books?",
    a: "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days." },
  { q: "Do you offer design assistance for books printing?",
    a: "Yes, our design team can help format and layout your content to ensure a professional final product." },
  { q: "Do you offer custom book printing across Australia?",
    a: "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production." },
  { q: "What sets you apart from other book printing companies?",
    a: "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out." },
  { q: "Can I include special features in custom printed books?",
    a: "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements." },
  { q: "Why choose a custom book printing company over a traditional printer?",
    a: "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project." },
  { q: "Do you have minimum order quantities as a book printing company?",
    a: "No, we support both small and large orders, so you can print just what you need without waste." },
  { q: "What makes your book printing eco-friendly?",
    a: "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint." },
  { q: "What is the first step in printing a book?",
    a: "Start by sending us your final manuscript and design files. We'll review them and provide recommendations on paper, binding, and finish." },
  { q: "Can you help with ISBN and barcode inclusion in book printing services?",
    a: "Yes, we can include your ISBN and barcode on your book cover as part of our standard service." },
  { q: "Do you print educational or academic books?",
    a: "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing." },
  { q: "Do you offer nationwide delivery for book printing in Australia?",
    a: "Yes, we ship across Australia with secure packaging and tracking for all book orders." },
  { q: "Can I print my own book as a one-off project in Australia?",
    a: "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us." },
  { q: "What should I consider when choosing custom book printers?",
    a: "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer." },
  { q: "Do you print custom notebooks, journals, or diaries?",
    a: "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks." },
  { q: "Do you offer budget-friendly booklet printing?",
    a: "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations." },
];

const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

export default function BooksLandingPage() {
  const [activePaper,   setActivePaper]   = useState(0);
  const [activeBinding, setActiveBinding] = useState(0);
  const [openFaq,       setOpenFaq]       = useState<number | null>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [backendError, setBackendError] = useState<string | null>(null);
  function clearFieldError(field: string) {
  if (errors[field]) {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  }
}

  function validate() {
    const next: Record<string, string> = {};

    if (!form.business_name.trim()) {
      next.business_name = "Business name is required.";
    }

    if (!form.fname.trim()) {
      next.fname = "Name is required.";
    }

    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      next.phone = "Phone is required.";
    } else {
      const cleanedPhone = form.phone.replace(/\D/g, "");

      if (cleanedPhone.length < 9 || cleanedPhone.length > 15) {
        next.phone = "Phone number must be between 9 and 15 digits.";
      }
    }

    if (!form.delivery_location.trim()) {
      next.delivery_location = "Delivery location is required.";
    }

    if (!form.size.trim()) {
      next.size = "Size is required.";
    }

    if (!form.quantity.trim()) {
      next.quantity = "Quantity is required.";
    } else if (isNaN(Number(form.quantity))) {
      next.quantity = "Quantity must be a number.";
    }

    if (!form.page_count.trim()) {
      next.page_count = "Page count is required.";
    } else if (isNaN(Number(form.page_count))) {
      next.page_count = "Page count must be a number.";
    }

    if (!form.binding_method.trim()) {
      next.binding_method = "Binding method is required.";
    }

    if (!form.other_notes.trim()) {
      next.other_notes = "Other notes are required.";
    }

    return next;
  }

  const [form, setForm] = useState({
    business_name: "", fname: "", email: "", phone: "",
    delivery_location: "", size: "", quantity: "", page_count: "",
    binding_method: "", other_notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState<null | "ok" | "err">(null);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate();

  if (Object.keys(fieldErrors).length) {
    setErrors(fieldErrors);
    setSubmitted("err");
    setBackendError(null);
    return;
  }
    setSubmitting(true);
    setSubmitted(null);
    try {
      // Map the books form onto the existing /custom-quote endpoint's schema.
      const fd = new FormData();
      fd.append("category",     "Books / Booklets / Reports");
      fd.append("nameOfItem",   "Custom Book Print Quote");
      fd.append("describeItem",
        `Paper stock: ${PAPER_STOCKS[activePaper]?.title ?? ""}\n` +
        `Binding (selected): ${BINDING_STYLES[activeBinding]?.title ?? ""}\n` +
        `Binding method (typed): ${form.binding_method}\n` +
        `Page count: ${form.page_count}\n` +
        `Delivery location: ${form.delivery_location}\n` +
        `Other notes: ${form.other_notes}`,
      );
      fd.append("size",         form.size);
      fd.append("designs",      form.quantity);
      fd.append("businessName", form.business_name);
      fd.append("name",         form.fname);
      fd.append("email",        form.email);
      fd.append("phone",        form.phone);

      const res = await fetch(`${BASE}/custom-quotes`, { method: "POST", body: fd });
         // ← 404/500 might return HTML not JSON — check first
      const contentType = res.headers.get("content-type");
      
        if (!contentType?.includes("application/json")) {
          setBackendError(`Server error (${res.status}). Please try again later.`);
          setSubmitted("err");
          return;
        }

      const json = await res.json();

        if (!res.ok || !json.success) {
            console.log(json.message)
            setBackendError(
              json.message ?? `Server error (${res.status}). Please try again later.`
            );
            setSubmitted("err");
            return;
          }
      setSubmitted("ok");
      setForm({
        business_name: "", fname: "", email: "", phone: "",
        delivery_location: "", size: "", quantity: "", page_count: "",
        binding_method: "", other_notes: "",
      });
    } catch {
      setBackendError("Unable to connect to server. Please try again later.");
      setSubmitted("err");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ─── 1. Hero banner — full-width image with text overlay ─────── */}
      <section className="relative w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/books/hero-catalog.png"
          alt="Books, booklets and reports printed on recycled paper"
          className="w-full h-auto block"
        />

        {/* Text sits at roughly the left-centre of the banner */}
        <div className="absolute inset-0 flex items-center">
          <h1
            className="ml-[9%] text-[clamp(28px,4.5vw,64px)] font-extrabold leading-[1.15]"
            style={{ color: "#1a3a1a" }}
          >
            Books,<br />booklets,<br />reports...
          </h1>
        </div>
      </section>

      {/* ─── 2. Intro paragraphs ────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14 text-center">
        <div className="text-[16px] text-[#292560] leading-relaxed space-y-4">
          <p>
            At Sustainable Printing Co. Australia, we specialise in high-quality custom book printing for creators,
            publishers, and businesses who value both craftsmanship and eco-consciousness. Whether you&apos;re looking
            to print books for a self-published novel, a professional catalogue, or a beautifully designed coffee
            table edition, our book printing services are tailored to meet your specific needs.
          </p>
          <p>
            We print all types of books — from short-run to bulk orders — using sustainable materials and
            environmentally responsible processes. Our experienced team is here to guide you through the entire
            journey of printing books, ensuring your project reflects your vision while minimising environmental
            impact.
          </p>
          <p>
            Explore our range of custom book printing options and discover how we can bring your next book project to
            life. If you&apos;re looking for trusted, sustainable books printing in Australia, we&apos;d love to have
            a chat.{" "}
            <Link href="/contact" className="text-[#3d9e5f] font-semibold hover:underline">
              Get in touch today
            </Link>{" "}
            and let&apos;s print something meaningful together.
          </p>
        </div>
      </section>

      {/* ─── 3. Paper Stocks ────────────────────────────────────────────── */}
      <TileSection
        title="Paper Stocks"
        items={PAPER_STOCKS}
        active={activePaper}
        onSelect={setActivePaper}
      />

      {/* ─── 4. Binding Styles ──────────────────────────────────────────── */}
      <TileSection
        title="Binding Styles"
        items={BINDING_STYLES}
        active={activeBinding}
        onSelect={setActiveBinding}
      />

      {/* ─── 5. Custom Quote Form ───────────────────────────────────────── */}
      <section className="max-w-275 mx-auto px-6 py-10">
        <div className="border-t border-gray-200 pt-10">
          <form onSubmit={handleSubmit}>
            <h3 className="text-[24px] font-bold text-[#292560] mb-5">Business Name</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <Field
                label="Business Name"
                placeholder="Business Name"
                value={form.business_name}
                onChange={(v) => {
                  update("business_name", v);
                  clearFieldError("business_name");
                }}
                error={errors.business_name}
              />
              <Field
              label="Name"
              placeholder="Name"
              value={form.fname}
              onChange={(v) => {
                update("fname", v);
                clearFieldError("fname");
              }}
              error={errors.fname}
            />
              <Field
                label="Email"
                placeholder="Email *"
                value={form.email}
                onChange={(v) => {
                  update("email", v);
                  clearFieldError("email");
                }}
                type="email"
                error={errors.email}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              <Field
                label="Phone"
                placeholder="Phone *"
                value={form.phone}
                onChange={(v) => {
                  update("phone", v);
                  clearFieldError("phone");
                }}
                error={errors.phone}
              />
              <Field
                label="Delivery Location"
                placeholder="Delivery Location"
                value={form.delivery_location}
                onChange={(v) => {
                  update("delivery_location", v);
                  clearFieldError("delivery_location");
                }}
                error={errors.delivery_location}
              />
              <div />
            </div>

            <h3 className="text-[24px] font-bold text-[#292560] mb-5">Quote Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <Field
                label="Size"
                placeholder="Size"
                value={form.size}
                onChange={(v) => {
                  update("size", v);
                  clearFieldError("size");
                }}
                error={errors.size}
              />
              
              <Field
                label="Quantity Required"
                placeholder="Quantity"
                value={form.quantity}
                onChange={(v) => {
                  update("quantity", v);
                  clearFieldError("quantity");
                }}
                error={errors.quantity}
              />
              
              <Field
                label="Page Count"
                placeholder="Page Count"
                value={form.page_count}
                onChange={(v) => {
                  update("page_count", v);
                  clearFieldError("page_count");
                }}
                error={errors.page_count}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              
              <Field
                label="Binding Method"
                placeholder="Binding Method"
                value={form.binding_method}
                onChange={(v) => {
                  update("binding_method", v);
                  clearFieldError("binding_method");
                }}
                error={errors.binding_method}
              />
              <div className="md:col-span-2">
                <label className="block text-[18px] font-semibold text-[#292560] mb-1.5">Other Notes</label>
                
                <textarea
                  value={form.other_notes}
                  onChange={(e) => {
                    update("other_notes", e.target.value);
                    clearFieldError("other_notes");
                  }}
                  rows={3}
                  placeholder="Other notes"
                  className={`w-full rounded-sm px-3 py-4 text-[14px] bg-[#f9f9f9]
                  ${
                    errors.other_notes
                      ? "focus:border-[#4CCC88] focus:ring-2 focus:ring-[#4CCC88]"
                      : "border-[#c4c4c41a]  focus:border-[#4CCC88] focus:ring-2 focus:ring-[#4CCC88]"
                  }
                  text-[#292560] placeholder-gray-400 focus:outline-none focus:ring-1`}
                />

                {errors.other_notes && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.other_notes}
                  </p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#f6cf22] cursor-pointer hover:bg-[#dc9319] disabled:opacity-60 text-[#292560] text-[14px] font-semibold px-10 py-3 rounded transition-colors"
              >
                {submitting ? "Sending…" : "Get a Custom Quote"}
              </button>
                {submitted === "err" && (
                  <p className="mt-3 text-[13px] text-red-600 font-medium">
                    {backendError
                      ? backendError
                      : "Please complete the required fields and try again."}
                  </p>
                )}
            </div>
          </form>
        </div>
      </section>

      {/* ─── 6. FAQ Accordion ───────────────────────────────────────────── */}
      <section className="max-w-275 mx-auto px-6 py-10">
        <h3 className="text-[24px] font-bold text-[#292560] mb-5">Frequently Asked Questions</h3>
        <div className="">
          {FAQS.map((item, i) => {
            const open = openFaq === i;
            return (
              <div key={i} className={`p-4 rounded-md ${open ? "bg-[#f9f9f9]" :""}`}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full text-left flex items-start justify-between gap-3 text-[18px] font-semibold text-[#292560] cursor-pointer transition-colors"
                >
                  <span>Q: {item.q}</span>
                </button>
                {open && (
                  <p className="mt-3 text-[16px] text-[#292560] leading-relaxed">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 7. Annual reports banner ───────────────────────────────────── */}
      <section className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/books/showcase-annual-reports.png"
          alt="Eucalyptus branch and BWX Annual Report books printed on recycled paper"
          className="w-full h-auto block"
        />
      </section>

      {/* ─── 8. Magazine spread banner (teal) ───────────────────────────── */}
      <section className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/books/showcase-magazine.png"
          alt="Open art-book magazine spread on a teal background"
          className="w-full h-auto block"
        />
      </section>
    </>
  );
}

// ── Tile section + form primitives ──────────────────────────────────────────

function TileSection({
  title, items, active, onSelect,
}: {
  title: string;
  items: { title: string; image: string }[];
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <section className="max-w-225 mx-auto px-6 py-6">
      <h3 className="text-[20px] font-bold text-[#292560] mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map((it, i) => {
          const selected = i === active;
          return (
            <button
              key={it.title}
              type="button"
              onClick={() => onSelect(i)}
              className={`rounded-lg overflow-hidden bg-white text-left transition-shadow border-2 ${
                selected
                  ? "border-[#4CCC88] shadow-md"
                  : "border-none hover:shadow-md"
              }`}
            >
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt={it.title} className="w-full h-full object-cover p-4" />
              </div>
              <div className="px-4 py-3">
                <p className="text-[18px] font-semibold text-[#00000]">{it.title}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, required, type = "text", placeholder, error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[18px] font-semibold text-[#292560] mb-1.5">
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full border border-[#c4c4c41a] bg-[#f9f9f9] rounded-sm px-3 py-4 text-[14px] text-[#292560] placeholder-gray-400 focus:border-[#4CCC88] focus:outline-none focus:ring-1 focus:ring-[#4CCC88]"
      />
       {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
