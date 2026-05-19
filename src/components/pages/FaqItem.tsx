"use client";

import { useState, useRef, useEffect } from "react";
import PageHeader from "../ui/PageHeader";

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div
        className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
          isOpen ? "bg-[#c4c4c41a]" : "bg-white"
        }`}
      >
        <p className="text-[#292560] font-medium text-lg">{question}</p>

        <div
          style={{
            maxHeight: height,
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <div ref={contentRef}>
            <p className="text-[#292560] text-base leading-6 pt-4">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    category: "Quote Questions",
    items: [
      {
        question: "Why is your printing so cheap?",
        answer:
          "We are able to print products like our business cards and postcards together at the same time with other people’s business cards and postcards. This allows us to print efficiently and spread the production costs amongst many jobs. We then pass on this cost saving to you, our customer.",
      },
      {
        question: "How do we provide artwork?",
        answer: (
          <>
            <span className="font-bold hover:underline cursor-pointer">
              Please click here
            </span>{" "}
            for a guide on how to best supply artwork. Simply put, we require a
            high resolution PDF with 3mm bleed and trim marks. Please feel free
            to let us know if you have any questions about this.
          </>
        ),
      },
      {
        question: "How long is the quote valid for?",
        answer: "Our quotes are valid for 30 days.",
      },
      {
        question: "I don't understand the quote / specifications. Please help.",
        answer:
          "Being new to printing can be overwhelming, printers often talk in an unfamiliar lingo. Please feel free to ask questions or let us know if you need clarification on any of our quoted specifications.",
      },
      {
        question:
          "I have received a quote for 500 business cards but actually require 5 kinds x 100, is the price the same?",
        answer:
          "This will change the price. Adding additional designs/names will require more than one space on our press/print sheet and the price will increase slightly.",
      },
      {
        question: "Do we receive a hard copy proof?",
        answer:
          "Your job will proceed direct to printing unless a PDF or hard copy proof is requested specifically (via email with your job/quote reference number). If a hard copy proof is required, please let us know and we will advise any additional costs for this.",
      },
    ],
  },
  {
    category: "Artwork Questions",
    items: [
      {
        question: "How do you require artwork to be supplied?",

        answer: (
          <>
            We require a high resolution PDF with 3mm bleed and trim marks. A
            FREE guide to how to supply artwork can be
            <span className="font-bold hover:underline cursor-pointer">
              {" "}
              downloaded here
            </span>
            .
          </>
        ),
      },
      {
        question: "I cannot supply my artwork as a PDF, can you help?",
        answer: (
          <>
            Please contact us at{" "}
            <span className="font-bold text-[#292560]">
              sales@sustainableprintingco.com.au
            </span>{" "}
            to discuss. Our prices do not include artwork touch ups and
            additional costs may be required where assistance is needed with
            artwork.
          </>
        ),
      },
      {
        question: "How do I send you artwork and large files?",
        answer: (
          <>
            You’re welcome to upload artwork via our website. When you request a
            quote we will supply you with a reference number and a URL of where
            to upload your artwork. You’re also welcome to drop it off on a USB
            if convenient for you. Please also feel free to send via{" "}
            <span className="font-semibold text-[#292560]">We Transfer</span>, a
            free online file transfer site.
          </>
        ),
      },
      {
        question: "I'm new to this, can my graphic designer help?",
        answer:
          "Yes of course, please feel free to tell them to get in touch or send us your artwork direct.",
      },
      {
        question: "Does Sustainable Printing Co check my print file?",
        answer:
          "We check that the technical aspects of your order have been supplied correctly, but not the sharpness, grammar or spelling, size of font chosen, the position of elements in your design, look and feel and other taste-related issues.",
      },
    ],
  },
  {
    category: "Production Questions",
    items: [
      {
        question: "What paper do you recommend?",
        answer:
          "We check that the technical aspects of your order have been supplied correctly, but not the sharpness, grammar or spelling, size of font chosen, the position of elements in your design, look and feel and other taste-related issues.",
      },
      {
        question: "Can I print Pantone inks?",
        answer:
          "You sure can, however the chances of us finding another person who wants to print using Pantone inks at the same time as you are unlikely. For this reason, we recommend setting up your artwork in CMYK, these are the colours we print our standard products with. We can print your job as a stand-alone project using our vegetable based Pantone inks, however it will need to be quoted separately.",
      },
    ],
  },
  {
    category: "Post Production Questions",
    items: [
      {
        question: "Do you deliver Australia wide?",
        answer:
          "We sure do, we use Express Post for small parcels and a network of couriers for larger deliveries.",
      },
      {
        question:
          "I do not want the invoice sent with the delivery, is this possible?",
        answer:
          "Absolutely, we print for many graphic designers and print managers and understand the importance of us staying anonymous. We can invoice you directly and send your items directly to your client unbranded. Simply email us this request when placing your order with your order/quote reference.",
      },
    ],
  },
  {
    category: "Payment Questions",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Our preferred method of payment is direct bank transfer. Visa or Mastercard payments can also be made via our website when ordering, a 3% surcharge applies to online card payments.",
      },
      {
        question:
          "Can you deal with my graphic designer about artwork but invoice me direct?",
        answer: "Absolutely, this is common and perfectly fine.",
      },
    ],
  },
];

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <PageHeader title="Frequently Asked Questions" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 sm:py-16 py-10 space-y-6">
        {faqData.map((section, i) => (
          <div key={i} className="space-y-3">
            <h2 className="text-[#292560] text-2xl font-semibold mb-4">
              {section.category}
            </h2>
            {section.items.map((item, j) => {
              const key = `${i}-${j}`;
              return (
                <FaqItem
                  key={key}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItem === key}
                  onClick={() => handleClick(key)}
                />
              );
            })}
          </div>
        ))}

        {/* Still can't find answer */}
        <div className="space-y-2 pt-4">
          <h2 className="text-[#292560] text-2xl font-semibold">
            Still can&apos;t find the answer to your question?
          </h2>
          <div className="px-6 py-6 rounded-lg bg-[#c4c4c41a]">
            <p className="text-[#292560] text-base leading-6">
              No problem, drop us an email:{" "}
              <a
                href="mailto:sales@sustainableprintingco.com.au"
                className="text-[#292560] font-semibold hover:underline"
              >
                sales@sustainableprintingco.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
