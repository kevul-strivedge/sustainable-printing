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
      <div className="overflow-hidden">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`${isOpen ? "bg-gray-50" : "hover:bg-white"}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-150`}
              >
                <span
                  className={`text-[18px] font-semibold text-[#292560] ${
                    !isOpen ? "hover:underline" : ""
                  }`}
                >
                  {faq.question}
                </span>
                {/* <ChevronDown open={isOpen} /> */}
              </button>
              {isOpen && (
                <div className="px-5 pb-4">
                  <p className="text-[16px] text-[#292560] leading-relaxed">
                    {(() => {
                      let parts: (string | React.ReactElement)[] = [faq.answer];

                      faq.boldWords?.forEach(({ word, href }) => {
                        parts = parts.flatMap(
                          (part): (string | React.ReactElement)[] => {
                            if (typeof part !== "string") return [part];

                            const split = part.split(word);

                            return split.flatMap(
                              (s, i): (string | React.ReactElement)[] =>
                                i < split.length - 1
                                  ? [
                                      s,

                                      href ? (
                                        <a
                                          key={`${word}-${i}`}
                                          href={href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="underline font-bold text-[#292560]"
                                        >
                                          {word}
                                        </a>
                                      ) : (
                                        <strong key={`${word}-${i}`}>
                                          {word}
                                        </strong>
                                      ),
                                    ]
                                  : [s],
                            );
                          },
                        );
                      });

                      return parts;
                    })()}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
