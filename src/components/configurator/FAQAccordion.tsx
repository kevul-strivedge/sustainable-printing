"use client";

import { useState } from "react";
import { FAQ } from "@/src/types/configurator.types";

interface Props {
  faqs: FAQ[];
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 shrink-0 text-[#292560] ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10">
      <h2 className="text-[20px] font-bold text-[#292560] mb-5">Frequently Asked Questions</h2>
      <div className="border border-gray-200 rounded-lg overflow-hidden divide-y divide-gray-200">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors duration-150"
              >
                <span className="text-[14px] font-semibold text-[#292560]">
                  {faq.question}
                </span>
                <ChevronDown open={isOpen} />
              </button>
              {isOpen && (
                <div className="px-5 pb-4">
                  <p className="text-[13px] text-[#292560] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
