import { FAQ } from "../types/configurator.types";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductData {
  slug: string;
  /** Numeric ID from pt_products in the backend DB — used to fetch live config */
  dbId?: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  priceFrom: string;
  features: string[];
  specs: ProductSpec[];
  faqs?: FAQ[];
}

export const products: ProductData[] = [
  // ── Cards ────────────────────────────────────────────────────────────────
  {
    slug: "business-cards",
    dbId: 15,
    title: "Business Cards",
    shortDescription:
      "Eco-friendly business cards printed on 100% recycled paper.",
    description:
      "Draw attention to your business and brand while communicating your commitment to sustainability. Printed on 100% recycled post-consumer waste paper using vegetable-based inks — vibrant, professional, and kind to the planet.",
    image: "/images/image6.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Printed with vegetable-based eco-friendly inks",
      "Available in uncoated matte or silk finish",
      "Single or double-sided printing",
      "Printed in Australia with fast turnaround",
    ],
    specs: [
      { label: "Standard Size", value: "90mm × 55mm" },
      { label: "Paper Stock", value: "350gsm Recycled" },
      { label: "Finish Options", value: "Uncoated Matte / Silk" },
      { label: "Print Sides", value: "Single or Double Sided" },
      { label: "Min. Quantity", value: "100 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
  },
  {
    slug: "postcards",
    dbId: 18,
    title: "Postcards",
    shortDescription:
      "Premium recycled postcards for marketing and personal use.",
    description:
      "Premium postcard printing on 100% recycled paper. Perfect for marketing campaigns, events, or personal use. Full colour, vibrant printing that stands out from the crowd.",
    image: "/images/image1.png",
    priceFrom: "from $39",
    features: [
      "100% recycled post-consumer waste paper",
      "Full colour printing both sides",
      "Available in A6, DL, and A5 sizes",
      "Uncoated matte or silk finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, DL, A5" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish Options", value: "Uncoated Matte / Silk" },
      { label: "Min. Quantity", value: "50 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Are your recycled postcards printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "I need my postcards urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my postcards are printed with other businesses postcards?",
        answer:
          "We print postcards multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my postcard size?",
        answer:
          "Our online postcards above are all available in standard sizes: A6 (105mm x 148mm), A5 (210mm x 148mm) and DL (99mm x 210mm). This is to maximise the use of the entire sheet of paper and minimise wise. Custom sizes are available on request, prices are dependent on how much space on press is required. Contact sales@sustainableprintingco.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Is 350gsm your thickest paper?",
        answer:
          "We have thicker stocks available. 350gsm is what we use for our Premium Recycled Postcards. Please contact sales@sustainableprinting.com.au for a quote and more information.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "What if I have more than 8 postcard designs?",
        answer:
          "We can print more than 8 designs, please call 03 9482 2222 or email sales@sustainableprinting.com.au for a quote",
        boldWords: [
          {
            word: "What if I have more than 8 postcard designs?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you print circle postcards or die-cut shapes?",
        answer:
          "Yes we do, please contact sales@sustainableprinting.com.au for a quote and more information. We also round corner eco-friendly printed postcards if you would like a softer looking edge.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Is it more cost effective to print 1 sided postcards?",
        answer:
          "Because we print our postcards together with other businesses postcards at the same time, we print all postcards both sides. If your design is one sided only, that is OK, it will still print with the double-sided postcards and the cost will be as per the double-sided postcards.",
      },

      {
        question:
          "I need more postcards than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for postcards?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each postcard needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
        boldWords: [
          {
            word: "Do you still have my artwork on file?",
          },
        ],
      },

      {
        question:
          "Do you print recycled postcards with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK postcard card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "greeting-cards",
    dbId: 20,
    title: "Greeting Cards",
    shortDescription: "Beautiful recycled greeting cards for every occasion.",
    description:
      "A beautiful range of recycled papers to showcase your artwork and illustrations. Available in 100% recycled post-consumer waste — white, earthy brown, or off-white — take your pick.",
    image: "/images/image2.png",
    priceFrom: "from $59",
    features: [
      "100% recycled paper — white, brown or off-white",
      "Vegetable-based inks throughout",
      "Score and fold for a premium finish",
      "Matching envelopes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5, Square 148mm" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated" },
      { label: "Min. Quantity", value: "50 cards" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
    faqs: [
      {
        question: "Are your recycled greeting cards printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my greeting cards urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my greeting cards urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question:
          "Do you supply plastic pockets or envelopes to house the greeting cards?",
        answer:
          "No, we do not offer plastic products and envelopes can be sourced directly from a envelope supplier.",
      },

      {
        question:
          "Can you print a personalised message inside my greeting card?",
        answer:
          "Yes, please add your message into your greeting card design and we will print this also.",
      },

      {
        question:
          "Do I have to wait longer if my greeting cards are printed with other businesses greeting cards?",
        answer:
          "We print greeting cards multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here.",
        boldWords: [
          {
            word: "click here.",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my greeting card size?",
        answer:
          "Our standard greeting card size is 4pp A6 (A5 folded to A6) Custom sizes are available on request, prices are dependent on how much space on press is required. Contact sales@sustainableprinting.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "What if I have more than 20 greeting card designs?",
        answer:
          "We can print more than 20 designs, please call 03 9482 2222 or email sales@sustainableprintingco.com.au for a quote.",
        boldWords: [
          {
            word: "What if I have more than 20 greeting card designs?",
          },
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question:
          "I need more greeting cards than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more greeting cards than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for greeting cards?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each greeting cards needed in their file name.",
        boldWords: [
          {
            word: "Can I split quantities for greeting cards?",
          },
        ],
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled greeting cards with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK greeting card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "thank-you-cards",
    dbId: 42,
    title: "Thank You Cards",
    shortDescription:
      "Eco-friendly thank you cards that make a lasting impression.",
    description:
      "Show your gratitude sustainably. Our thank you cards are printed on 100% recycled paper with vegetable-based inks, perfect for businesses and personal use alike.",
    image: "/images/image2.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Vegetable-based inks",
      "Custom sizes available",
      "Single or double-sided printing",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, DL, A5" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "50 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Are your recycled postcards printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "I need my postcards urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my postcards are printed with other businesses postcards?",
        answer:
          "We print postcards multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here.",
        boldWords: [
          {
            word: "click here.",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my postcard size?",
        answer:
          "Our online postcards above are all available in standard sizes: A6 (105mm x 148mm), A5 (210mm x 148mm) and DL (99mm x 210mm). This is to maximise the use of the entire sheet of paper and minimise wise. Custom sizes are available on request, prices are dependent on how much space on press is required. Contact sales@sustainableprintingco.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Is 350gsm your thickest paper?",
        answer:
          "We have thicker stocks available. 350gsm is what we use for our Premium Recycled Postcards. Please contact sales@sustainableprinting.com.au for a quote and more information.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "What if I have more than 8 postcard designs?",
        answer:
          "We can print more than 8 designs, please call 03 9482 2222 or email sales@sustainableprinting.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you print circle postcards or die-cut shapes?",
        answer:
          "Yes we do, please contact sales@sustainableprinting.com.au for a quote and more information. We also round corner eco-friendly printed postcards if you would like a softer looking edge.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Is it more cost effective to print 1 sided postcards?",
        answer:
          "Because we print our postcards together with other businesses postcards at the same time, we print all postcards both sides. If your design is one sided only, that is OK, it will still print with the double-sided postcards and the cost will be as per the double-sided postcards.",
      },

      {
        question:
          "I need more postcards than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for postcards?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each postcard needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled postcards with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK postcard card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "bookmarks",
    dbId: 41,
    title: "Bookmarks",
    shortDescription: "Recycled bookmarks for books, events, and promotions.",
    description:
      "Functional and beautiful, our bookmarks are printed on 100% recycled stock and make a great giveaway or promotional item.",
    image: "/images/image1.png",
    priceFrom: "from $29",
    features: [
      "100% recycled paper stock",
      "Vegetable-based inks",
      "Optional string or hole punch",
      "Custom sizes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "55mm × 200mm" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "100 units" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Brochure size or brochure’ fold?",
        answer:
          "Yes, this is fine. Please let us know your sizing and folding requirements and we will quote accordingly.",
      },

      {
        question: "I need my Brochures urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Brochures urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Brochures printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Brochures than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Brochures than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Brochures with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Brochure card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "christmas-cards",
    dbId: 43,
    title: "Christmas Cards",
    shortDescription: "Sustainable Christmas cards for your festive season.",
    description:
      "Spread festive cheer the eco-friendly way. Our Christmas cards are printed on 100% recycled paper — beautiful, sustainable, and memorable.",
    image: "/images/image2.png",
    priceFrom: "from $59",
    features: [
      "100% recycled post-consumer waste paper",
      "Vegetable-based inks",
      "A6 and A5 sizes available",
      "Matching envelopes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "50 cards" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
    faqs: [
      {
        question: "Are your recycled christmas cards printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my christmas cards urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my christmas cards urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question:
          "Do you supply plastic pockets or envelopes to house the christmas cards?",
        answer:
          "No, we do not offer plastic products and envelopes can be sourced directly from a envelope supplier.",
      },

      {
        question:
          "Can you print a personalised message inside my christmas card?",
        answer:
          "Yes, please add your message into your christmas card design and we will print this also.",
      },

      {
        question:
          "Do I have to wait longer if my christmas cards are printed with other businesses christmas cards?",
        answer:
          "We print christmas cards multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here.",
        boldWords: [
          {
            word: "click here.",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my christmas card size?",
        answer:
          "Our standard christmas card size is 4pp A6 (A5 folded to A6) Custom sizes are available on request, prices are dependent on how much space on press is required. Contact sales@sustainableprinting.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "What if I have more than 20 christmas card designs?",
        answer:
          "We can print more than 20 designs, please call 03 9482 2222 or email sales@sustainableprintingco.com.au for a quote.",
        boldWords: [
          {
            word: "What if I have more than 20 christmas card designs?",
          },
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question:
          "I need more christmas cards than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more christmas cards than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for christmas cards?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each christmas cards needed in their file name.",
        boldWords: [
          {
            word: "Can I split quantities for christmas cards?",
          },
        ],
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled christmas cards with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK christmas card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "discount-cards",
    dbId: 47,
    title: "Discount Cards",
    shortDescription: "Eco-friendly discount cards to reward your customers.",
    description:
      "Drive repeat business with sustainable discount cards. Printed on 100% recycled paper, these cards help you reward loyalty while reducing your carbon footprint.",
    image: "/images/image6.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Credit card or business card size",
      "Vegetable-based inks",
      "Double-sided printing available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "90mm × 55mm" },
      { label: "Paper Stock", value: "350gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte / Silk" },
      { label: "Min. Quantity", value: "100 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
  },
  {
    slug: "appointment-cards",
    dbId: 45,
    title: "Appointment Cards",
    shortDescription:
      "Recycled appointment reminder cards for your practice or business.",
    description:
      "Keep your clients on schedule with eco-friendly appointment cards. Printed on 100% recycled stock — professional, practical, and sustainable.",
    image: "/images/image6.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Standard business card size",
      "Custom design and layout",
      "Double-sided printing available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "90mm × 55mm" },
      { label: "Paper Stock", value: "350gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "100 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
  },
  {
    slug: "loyalty-cards",
    dbId: 46,
    title: "Loyalty Cards",
    shortDescription:
      "Eco-friendly loyalty cards to build lasting customer relationships.",
    description:
      "Reward your customers and the planet at the same time. Our loyalty cards are printed on 100% recycled paper and are a great way to build repeat business sustainably.",
    image: "/images/image6.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Stamp or signature box layouts",
      "Vegetable-based inks",
      "Double-sided printing available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "90mm × 55mm" },
      { label: "Paper Stock", value: "350gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "100 cards" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
  },
  {
    slug: "birth-announcement-cards",
    dbId: 50,
    title: "Birth Announcement Cards",
    shortDescription: "Beautiful recycled cards to announce your new arrival.",
    description:
      "Celebrate new life sustainably. Our birth announcement cards are printed on 100% recycled paper — a beautiful keepsake that's gentle on the planet.",
    image: "/images/image2.png",
    priceFrom: "from $59",
    features: [
      "100% recycled paper",
      "Vegetable-based inks",
      "A6 and A5 sizes",
      "Matching envelopes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "25 cards" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
  },
  {
    slug: "invitations",
    dbId: 49,
    title: "Invitations",
    shortDescription:
      "Eco-friendly invitations for weddings, events, and celebrations.",
    description:
      "Set the tone for your special event with sustainable invitations. Printed on 100% recycled paper with vegetable-based inks — elegant, memorable, and kind to the earth.",
    image: "/images/image2.png",
    priceFrom: "from $69",
    features: [
      "100% recycled post-consumer waste paper",
      "Vegetable-based inks",
      "Multiple sizes available",
      "Matching envelopes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5, Square 148mm" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "25 units" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
  },

  // ── Stationery ────────────────────────────────────────────────────────────
  {
    slug: "brochures",
    dbId: 11,
    title: "Brochures",
    shortDescription: "Eco-friendly folded brochures on 100% recycled paper.",
    description:
      "Share your message with the world on 100% recycled post-consumer waste paper. Available with an uncoated or silk finish in a range of fold options.",
    image: "/images/image4.png",
    priceFrom: "from $89",
    features: [
      "100% recycled paper",
      "DL, A5, and A4 sizes",
      "Multiple fold options",
      "Uncoated or silk finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "DL, A5, A4" },
      { label: "Paper Stock", value: "150gsm / 200gsm Recycled" },
      { label: "Folds", value: "Tri-fold, Z-fold, Half-fold" },
      { label: "Min. Quantity", value: "100 units" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
  },
  {
    slug: "letterhead",
    dbId: 37,
    title: "Letterhead",
    shortDescription: "Sustainable letterheads that reflect your eco values.",
    description:
      "Make every letter count. Our sustainable letterheads are printed on 100% recycled paper and help communicate your brand's commitment to the environment.",
    image: "/images/image4.png",
    priceFrom: "from $69",
    features: [
      "100% recycled paper",
      "A4 and custom sizes",
      "Vegetable-based inks",
      "Single or double-sided",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "A4 (210mm × 297mm)" },
      { label: "Paper Stock", value: "100gsm Recycled" },
      { label: "Finish", value: "Uncoated" },
      { label: "Min. Quantity", value: "100 sheets" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Stationery size?",
        answer:
          "Yes, this is fine. Please let us know your sizing requirements and we will quote accordingly.",
      },

      {
        question: "I need my Stationery urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Stationery urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Stationery printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Stationery than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Stationery than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Stationery with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Stationery card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "compliment-slips",
    dbId: 38,
    title: "Compliment Slips",
    shortDescription: "Eco-friendly compliment slips for a professional touch.",
    description:
      "Add a personal, professional touch to your correspondence. Our compliment slips are printed on 100% recycled paper and complement your sustainable letterhead perfectly.",
    image: "/images/image4.png",
    priceFrom: "from $49",
    features: [
      "100% recycled paper",
      "DL size (⅓ A4)",
      "Vegetable-based inks",
      "Matches your letterhead",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Size", value: "210mm × 99mm (DL)" },
      { label: "Paper Stock", value: "100gsm Recycled" },
      { label: "Finish", value: "Uncoated" },
      { label: "Min. Quantity", value: "100 sheets" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Stationery size?",
        answer:
          "Yes, this is fine. Please let us know your sizing requirements and we will quote accordingly.",
      },

      {
        question: "I need my Stationery urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Stationery urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Stationery printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Stationery than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Stationery than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Stationery with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Stationery card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "wrapping-paper",
    title: "Wrapping Paper",
    shortDescription: "Sustainable custom-printed wrapping paper.",
    description:
      "Wrap your products beautifully and sustainably. Our custom wrapping paper is printed on 100% recycled stock and is fully recyclable after use.",
    image: "/images/image1.png",
    priceFrom: "from $99",
    features: [
      "100% recycled and recyclable paper",
      "Full colour custom print",
      "Multiple sheet sizes",
      "Vegetable-based inks",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sheet Size", value: "500mm × 700mm" },
      { label: "Paper Stock", value: "80gsm Recycled" },
      { label: "Finish", value: "Uncoated" },
      { label: "Min. Quantity", value: "50 sheets" },
      { label: "Turnaround", value: "5–7 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Stationery size?",
        answer:
          "Yes, this is fine. Please let us know your sizing requirements and we will quote accordingly.",
      },

      {
        question: "I need my Stationery urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order..",
        boldWords: [
          {
            word: "I need my Stationery urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Stationery printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Stationery than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Stationery than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Stationery with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Stationery card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },

  // ── Marketing ────────────────────────────────────────────────────────────
  {
    slug: "flyers",
    dbId: 34,
    title: "Flyers",
    shortDescription: "Eye-catching eco-friendly flyers for your campaigns.",
    description:
      "Get your message out there sustainably. Our flyers are printed on 100% recycled paper using vegetable-based inks — vibrant, affordable, and environmentally responsible.",
    image: "/images/image4.png",
    priceFrom: "from $49",
    features: [
      "100% recycled post-consumer waste paper",
      "Full colour printing",
      "A6, A5, and A4 sizes",
      "Single or double-sided",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5, A4" },
      { label: "Paper Stock", value: "130gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte / Silk" },
      { label: "Min. Quantity", value: "100 units" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Posters & Flyers size?",
        answer:
          "Yes, this is fine. Please let us know your sizing requirements and we will quote accordingly.",
      },

      {
        question:
          "I need my Posters & Flyers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Posters & Flyers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Posters & Flyers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "What if I have multiple flyer designs?",
        answer:
          "That is fine, please email us the number of designs and quantity you want for each and we will work on a quote for you.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here .",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Posters & Flyers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Posters & Flyers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Posters & Flyers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Posters & Flyers card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "posters",
    dbId: 35,
    title: "Posters",
    shortDescription: "Large format eco-friendly posters for maximum impact.",
    description:
      "Make a big statement sustainably. Our posters are printed on 100% recycled paper in bold, vibrant colours — perfect for retail, events, and promotions.",
    image: "/images/image4.png",
    priceFrom: "from $79",
    features: [
      "100% recycled paper",
      "A3, A2, and A1 sizes",
      "Full colour printing",
      "Uncoated or silk finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A3, A2, A1" },
      { label: "Paper Stock", value: "150gsm / 200gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte / Silk" },
      { label: "Min. Quantity", value: "10 units" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question: "Can I change my Posters & Flyers size?",
        answer:
          "Yes, this is fine. Please let us know your sizing requirements and we will quote accordingly.",
      },

      {
        question:
          "I need my Posters & Flyers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Posters & Flyers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Are your recycled Posters & Flyers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "What if I have multiple flyer designs?",
        answer:
          "That is fine, please email us the number of designs and quantity you want for each and we will work on a quote for you.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here .",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question:
          "I need more Posters & Flyers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Posters & Flyers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Posters & Flyers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job. The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Posters & Flyers card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
  {
    slug: "swing-tags",
    dbId: 23,
    title: "Swing Tags",
    shortDescription:
      "100% recycled swing tags for sustainable product packaging.",
    description:
      "Make your products stand apart from the competition with 100% recycled swing tags. Sturdy, eco-friendly and available in a range of sizes. Printed in Australia with love.",
    image: "/images/image3.png",
    priceFrom: "from $79",
    features: [
      "100% recycled post-consumer waste paper",
      "String or hole punch options",
      "Custom shapes available",
      "Full colour printing",
      "Printed in Australia",
    ],
    specs: [
      { label: "Standard Sizes", value: "55mm × 90mm, 60mm × 120mm" },
      { label: "Paper Stock", value: "350gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "100 tags" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
    faqs: [
      {
        question: "Does Sustainable Printing supply string?",
        answer:
          "We do not string gift cards. We would supply them to you without string or elastic.",
      },

      {
        question: "Are your recycled Swing Tags printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "I need my Swing Tags urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Swing Tags urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Can I position the drill hole anywhere?",
        answer:
          "Yes, this is perfectly fine. Please supply us with instruction and a separate PDF file that highlights where the drill hole should be positioned.",
      },

      {
        question:
          "Do I have to wait longer if my Swing Tags are printed with other businesses Swing Tags?",
        answer:
          "We print Swing Tags multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here .",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my Swing Tag size?",
        answer:
          "We offer 3 swing tags sizes, 90mm x 55mm, 55mm x 55mm and 120mm x 140mm. If you require a different size, please contact us, we can accommodate. Contact sales@sustainableprinting.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Is it more cost effective to print 1 sided Swing Tags?",
        answer:
          "Because we print our Swing Tags together with other businesses Swing Tags at the same time, we print all Swing Tags both sides. If your design is one sided only, that is OK, it will still print with the double-sided Swing Tags and the cost will be as per the double-sided Swing Tags.",
      },

      {
        question:
          "I need more Swing Tags than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Swing Tags than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for Swing Tags?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each Swing Tags needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Swing Tags with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Swing Tag printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here.",
            href: "/requestsample",
          },
        ],
      },
    ],
  },

  // ── Stickers ─────────────────────────────────────────────────────────────
  {
    slug: "adhesive-labels",
    title: "Adhesive Labels",
    shortDescription:
      "Eco-friendly adhesive stickers and labels in custom shapes.",
    description:
      "Our eco-friendly adhesive stickers and labels are great for handouts and print vibrantly. Choose from a range of shapes and sizes for your best fit.",
    image: "/images/image1.png",
    priceFrom: "from $59",
    features: [
      "100% recycled backing paper",
      "Vibrant full colour printing",
      "Custom shapes and sizes",
      "Vegetable-based inks",
      "Printed in Australia",
    ],
    specs: [
      { label: "Shapes", value: "Circle, Square, Rectangle, Custom" },
      { label: "Material", value: "Recycled White Label Stock" },
      { label: "Finish", value: "Gloss or Matte" },
      { label: "Min. Quantity", value: "50 labels" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question:
          "Are your recycled Adhesive Labels / Stickers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you have other sticker sizes available?",
        answer:
          "Yes we do, in both small and large sizes also. Please contact sales@sustainableprintingco.com.au with your sizing requirements and we will work on a quote for you.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Are your stickers freezer grade?",
        answer:
          "We can print on special freezer grade stickers upon request. This is popular for wine bottle stickers, jam jar stickers or to be placed on any other products that need labels that are condensation / freezer proof.",
      },

      {
        question: "Are your stickers water proof and UV resistant?",
        answer:
          "No they are not. If put on car bumpers for example they will fade in the sun and deteriorate in the rain. Our stickers are best for application out of the elements.",
      },

      {
        question: "Are your adhesive stickers made from recycled paper?",
        answer:
          "At this stage, there are no recycled adhesive stocks available to us to print on. We do have some limited recycled label stock still available upon special request, but unfortunately this line of recycled stickers has been discontinued by the manufacturer. The paper element of our labels is Forest Stewardship Council (FSC) certified.",
      },

      {
        question:
          "Do I have to wait longer if my Adhesive Labels / Stickers are printed with other businesses Adhesive Labels / Stickers?",
        answer:
          "We print Adhesive Labels / Stickers multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my Adhesive Labels / Sticker size?",
        answer:
          "Yes we can, please contact sales@sustainableprinting.com.au with your sizing requirements for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Can you supply my labels on a roll?",
        answer:
          "We cannot. All of our labels are printed on flat sheets for easy peel off.",
      },

      {
        question:
          "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for Adhesive Labels / Stickers?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each Adhesive Labels / Stickers needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
      },
    ],
  },
  {
    slug: "circle-stickers",
    dbId: 25,
    title: "Circle Stickers",
    shortDescription: "Perfectly round eco-friendly stickers for any use.",
    description:
      "Versatile and vibrant, our circle stickers are printed on recycled stock and available in a range of sizes. Perfect for product labels, promotions, and packaging.",
    image: "/images/image1.png",
    priceFrom: "from $49",
    features: [
      "100% recycled backing paper",
      "Full colour printing",
      "Multiple diameter sizes",
      "Gloss or matte finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "30mm, 50mm, 75mm, 100mm" },
      { label: "Material", value: "Recycled White Label Stock" },
      { label: "Finish", value: "Gloss or Matte" },
      { label: "Min. Quantity", value: "50 stickers" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question:
          "Are your recycled Adhesive Labels / Stickers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you have other sticker sizes available?",
        answer:
          "Yes we do, in both small and large sizes also. Please contact sales@sustainableprintingco.com.au with your sizing requirements and we will work on a quote for you.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Are your stickers freezer grade?",
        answer:
          "We can print on special freezer grade stickers upon request. This is popular for wine bottle stickers, jam jar stickers or to be placed on any other products that need labels that are condensation / freezer proof.",
      },

      {
        question: "Are your stickers water proof and UV resistant?",
        answer:
          "No they are not. If put on car bumpers for example they will fade in the sun and deteriorate in the rain. Our stickers are best for application out of the elements.",
      },

      {
        question: "Are your adhesive stickers made from recycled paper?",
        answer:
          "At this stage, there are no recycled adhesive stocks available to us to print on. We do have some limited recycled label stock still available upon special request, but unfortunately this line of recycled stickers has been discontinued by the manufacturer. The paper element of our labels is Forest Stewardship Council (FSC) certified.",
        boldWords: [
          {
            word: "Are your adhesive stickers made from recycled paper?",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my Adhesive Labels / Stickers are printed with other businesses Adhesive Labels / Stickers?",
        answer:
          "We print Adhesive Labels / Stickers multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my Adhesive Labels / Sticker size?",
        answer:
          "Yes we can, please contact sales@sustainableprinting.com.au with your sizing requirements for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Can you supply my labels on a roll?",
        answer:
          "We cannot. All of our labels are printed on flat sheets for easy peel off.",
      },

      {
        question:
          "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for Adhesive Labels / Stickers?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each Adhesive Labels / Stickers needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
        boldWords: [
          {
            word: "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
          },
          {
            word: "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
          },
        ],
      },
    ],
  },
  {
    slug: "square-stickers",
    dbId: 26,
    title: "Square Stickers",
    shortDescription: "Eco-friendly square stickers for a clean modern look.",
    description:
      "Clean, modern, and sustainable. Our square stickers are printed on 100% recycled stock and are perfect for packaging, branding, and promotions.",
    image: "/images/image1.png",
    priceFrom: "from $49",
    features: [
      "100% recycled backing paper",
      "Full colour printing",
      "Multiple sizes available",
      "Gloss or matte finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "30mm, 50mm, 75mm, 100mm" },
      { label: "Material", value: "Recycled White Label Stock" },
      { label: "Finish", value: "Gloss or Matte" },
      { label: "Min. Quantity", value: "50 stickers" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question:
          "Are your recycled Adhesive Labels / Stickers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you have other sticker sizes available?",
        answer:
          "Yes we do, in both small and large sizes also. Please contact sales@sustainableprintingco.com.au with your sizing requirements and we will work on a quote for you.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Are your stickers freezer grade?",
        answer:
          "We can print on special freezer grade stickers upon request. This is popular for wine bottle stickers, jam jar stickers or to be placed on any other products that need labels that are condensation / freezer proof.",
      },

      {
        question: "Are your stickers water proof and UV resistant?",
        answer:
          "No they are not. If put on car bumpers for example they will fade in the sun and deteriorate in the rain. Our stickers are best for application out of the elements.",
      },

      {
        question: "Are your adhesive stickers made from recycled paper?",
        answer:
          "At this stage, there are no recycled adhesive stocks available to us to print on. We do have some limited recycled label stock still available upon special request, but unfortunately this line of recycled stickers has been discontinued by the manufacturer. The paper element of our labels is Forest Stewardship Council (FSC) certified.",
        boldWords: [
          {
            word: "Are your adhesive stickers made from recycled paper?",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my Adhesive Labels / Stickers are printed with other businesses Adhesive Labels / Stickers?",
        answer:
          "We print Adhesive Labels / Stickers multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my Adhesive Labels / Sticker size?",
        answer:
          "Yes we can, please contact sales@sustainableprinting.com.au with your sizing requirements for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Can you supply my labels on a roll?",
        answer:
          "We cannot. All of our labels are printed on flat sheets for easy peel off.",
      },

      {
        question:
          "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for Adhesive Labels / Stickers?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each Adhesive Labels / Stickers needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
        boldWords: [
          {
            word: "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
          },
          {
            word: "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
          },
        ],
      },
    ],
  },
  {
    slug: "rectangle-stickers",
    dbId: 28,
    title: "Rectangle Stickers",
    shortDescription:
      "Eco-friendly rectangle stickers for labelling and branding.",
    description:
      "Practical and sustainable, our rectangle stickers are great for product labels, packaging, and promotional use. Printed on 100% recycled stock.",
    image: "/images/image1.png",
    priceFrom: "from $49",
    features: [
      "100% recycled backing paper",
      "Full colour printing",
      "Multiple sizes available",
      "Gloss or matte finish",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "50mm × 30mm, 70mm × 45mm, 100mm × 65mm" },
      { label: "Material", value: "Recycled White Label Stock" },
      { label: "Finish", value: "Gloss or Matte" },
      { label: "Min. Quantity", value: "50 stickers" },
      { label: "Turnaround", value: "3–5 business days" },
    ],
    faqs: [
      {
        question:
          "Are your recycled Adhesive Labels / Stickers printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question:
          "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "I need my Adhesive Labels / Stickers urgently, can you fast track my order?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you have other sticker sizes available?",
        answer:
          "Yes we do, in both small and large sizes also. Please contact sales@sustainableprintingco.com.au with your sizing requirements and we will work on a quote for you.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Are your stickers freezer grade?",
        answer:
          "We can print on special freezer grade stickers upon request. This is popular for wine bottle stickers, jam jar stickers or to be placed on any other products that need labels that are condensation / freezer proof.",
      },

      {
        question: "Are your stickers water proof and UV resistant?",
        answer:
          "No they are not. If put on car bumpers for example they will fade in the sun and deteriorate in the rain. Our stickers are best for application out of the elements.",
      },

      {
        question: "Are your adhesive stickers made from recycled paper?",
        answer:
          "At this stage, there are no recycled adhesive stocks available to us to print on. We do have some limited recycled label stock still available upon special request, but unfortunately this line of recycled stickers has been discontinued by the manufacturer. The paper element of our labels is Forest Stewardship Council (FSC) certified.",
        boldWords: [
          {
            word: "Are your adhesive stickers made from recycled paper?",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my Adhesive Labels / Stickers are printed with other businesses Adhesive Labels / Stickers?",
        answer:
          "We print Adhesive Labels / Stickers multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
        boldWords: [
          {
            word: "Do I have to wait longer if my Adhesive Labels / Stickers are printed with other businesses Adhesive Labels / Stickers?",
          },
        ],
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my Adhesive Labels / Sticker size?",
        answer:
          "Yes we can, please contact sales@sustainableprinting.com.au with your sizing requirements for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Can you supply my labels on a roll?",
        answer:
          "We cannot. All of our labels are printed on flat sheets for easy peel off.",
      },

      {
        question:
          "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "I need more Adhesive Labels / Stickers than what your set prices offer, is this possible?",
          },
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for Adhesive Labels / Stickers?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each Adhesive Labels / Stickers needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
      },

      {
        question:
          "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
        boldWords: [
          {
            word: "Do you print recycled Adhesive Labels / Stickers with Pantone Inks/Spot Colours?",
          },
          {
            word: "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK Adhesive Labels / Sticker printing.",
          },
        ],
      },
    ],
  },

  // ── Books ─────────────────────────────────────────────────────────────────
  {
    slug: "books",
    dbId: 29,
    title: "Books",
    shortDescription: "Sustainable books, magazines, and annual reports.",
    description:
      "Books, magazines, annual reports and more on 100% recycled papers. Choose a self cover book or a book with a heavier cover for a higher quality feel.",
    image: "/images/image5.png",
    priceFrom: "from $149",
    features: [
      "100% recycled paper throughout",
      "Saddle stitch, perfect bound, or wiro bound",
      "Self cover or heavier cover stock",
      "Full colour or black and white",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A5, A4, Custom" },
      { label: "Cover Stock", value: "300gsm Recycled" },
      { label: "Inner Stock", value: "100gsm / 120gsm Recycled" },
      { label: "Binding", value: "Saddle Stitch / Perfect Bound / Wiro" },
      { label: "Turnaround", value: "5–8 business days" },
    ],
    faqs: [
      {
        question: "Q: What types of book printing services do you offer?",
        answer:
          "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes.",
      },

      {
        question: "Q: Can I print books in small quantities?",
        answer:
          "Yes! We accommodate both short-run and bulk printing. Whether it’s one copy or a thousand, we have flexible solutions to suit your needs.",
      },

      {
        question: "Q: What can I customise in my book printing order?",
        answer:
          "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours.",
      },

      {
        question: "Q: How long does it take to print books?",
        answer:
          "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days.",
      },

      {
        question: "Q: Do you offer design assistance for books printing?",
        answer:
          "Yes, our design team can help format and layout your content to ensure a professional final product.",
      },

      {
        question: "Q: Do you offer custom book printing across Australia?",
        answer:
          "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production.",
        boldWords: [
          {
            word: "fast",
          },
        ],
      },

      {
        question: "Q: What sets you apart from other book printing companies?",
        answer:
          "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out.",
      },

      {
        question: "Q: Can I include special features in custom printed books?",
        answer:
          "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements.",
      },

      {
        question:
          "Q: Why choose a custom book printing company over a traditional printer?",
        answer:
          "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project.",
      },

      {
        question:
          "Q: Do you have minimum order quantities as a book printing company?",
        answer:
          "No, we support both small and large orders, so you can print just what you need without waste.",
      },

      {
        question: "Q: What makes your book printing eco-friendly?",
        answer:
          "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint.",
      },

      {
        question: "Q: What is the first step in printing a book?",
        answer:
          "Start by sending us your final manuscript and design files. We’ll review them and provide recommendations on paper, binding, and finish.",
      },

      {
        question:
          "Q: Can you help with ISBN and barcode inclusion in book printing services?",
        answer:
          "Yes, we can include your ISBN and barcode on your book cover as part of our standard service.",
      },

      {
        question: "Q: Do you print educational or academic books?",
        answer:
          "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing.",
      },

      {
        question:
          "Q: Do you offer nationwide delivery for book printing in Australia?",
        answer:
          "Yes, we ship across Australia with secure packaging and tracking for all book orders.",
      },

      {
        question:
          "Q: Can I print my own book as a one-off project in Australia?",
        answer:
          "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us.",
      },

      {
        question:
          "Q: What should I consider when choosing custom book printers?",
        answer:
          "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer.",
      },

      {
        question: "Q: Do you print custom notebooks, journals, or diaries?",
        answer:
          "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks.",
      },

      {
        question: "Q: Do you offer budget-friendly booklet printing?",
        answer:
          "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations.",
      },
    ],
  },
  {
    slug: "booklets",
    dbId: 12,
    title: "Booklets",
    shortDescription: "Eco-friendly booklets for catalogues, menus, and more.",
    description:
      "Compact and professional, our booklets are printed on 100% recycled paper. Perfect for product catalogues, menus, and information packs.",
    image: "/images/image5.png",
    priceFrom: "from $99",
    features: [
      "100% recycled paper throughout",
      "Saddle stitched for a clean finish",
      "A5 and A4 sizes",
      "Full colour printing",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A5, A4" },
      { label: "Cover Stock", value: "250gsm Recycled" },
      { label: "Inner Stock", value: "100gsm Recycled" },
      { label: "Binding", value: "Saddle Stitch" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
    faqs: [
      {
        question: "Q: What types of book printing services do you offer?",
        answer:
          "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes.",
      },

      {
        question: "Q: Can I print books in small quantities?",
        answer:
          "Yes! We accommodate both short-run and bulk printing. Whether it’s one copy or a thousand, we have flexible solutions to suit your needs.",
      },

      {
        question: "Q: What can I customise in my book printing order?",
        answer:
          "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours.",
      },

      {
        question: "Q: How long does it take to print books?",
        answer:
          "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days.",
      },

      {
        question: "Q: Do you offer design assistance for books printing?",
        answer:
          "Yes, our design team can help format and layout your content to ensure a professional final product.",
      },

      {
        question: "Q: Do you offer custom book printing across Australia?",
        answer:
          "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production.",
        boldWords: [
          {
            word: "fast",
          },
        ],
      },

      {
        question: "Q: What sets you apart from other book printing companies?",
        answer:
          "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out.",
      },

      {
        question: "Q: Can I include special features in custom printed books?",
        answer:
          "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements.",
      },

      {
        question:
          "Q: Why choose a custom book printing company over a traditional printer?",
        answer:
          "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project.",
      },

      {
        question:
          "Q: Do you have minimum order quantities as a book printing company?",
        answer:
          "No, we support both small and large orders, so you can print just what you need without waste.",
      },

      {
        question: "Q: What makes your book printing eco-friendly?",
        answer:
          "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint.",
      },

      {
        question: "Q: What is the first step in printing a book?",
        answer:
          "Start by sending us your final manuscript and design files. We’ll review them and provide recommendations on paper, binding, and finish.",
      },

      {
        question:
          "Q: Can you help with ISBN and barcode inclusion in book printing services?",
        answer:
          "Yes, we can include your ISBN and barcode on your book cover as part of our standard service.",
      },

      {
        question: "Q: Do you print educational or academic books?",
        answer:
          "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing.",
      },

      {
        question:
          "Q: Do you offer nationwide delivery for book printing in Australia?",
        answer:
          "Yes, we ship across Australia with secure packaging and tracking for all book orders.",
      },

      {
        question:
          "Q: Can I print my own book as a one-off project in Australia?",
        answer:
          "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us.",
      },

      {
        question:
          "Q: What should I consider when choosing custom book printers?",
        answer:
          "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer.",
      },

      {
        question: "Q: Do you print custom notebooks, journals, or diaries?",
        answer:
          "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks.",
      },

      {
        question: "Q: Do you offer budget-friendly booklet printing?",
        answer:
          "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations.",
      },
    ],
  },
  {
    slug: "reports",
    title: "Reports",
    shortDescription: "Professional eco-friendly printed reports.",
    description:
      "Present your data and insights professionally and sustainably. Our reports are printed on 100% recycled paper with a range of binding options to suit your needs.",
    image: "/images/image5.png",
    priceFrom: "from $129",
    features: [
      "100% recycled paper throughout",
      "Multiple binding options",
      "A4 and custom sizes",
      "Full colour or black and white",
      "Printed in Australia",
    ],
    specs: [
      { label: "Size", value: "A4" },
      { label: "Cover Stock", value: "300gsm Recycled" },
      { label: "Inner Stock", value: "100gsm / 120gsm Recycled" },
      { label: "Binding", value: "Perfect Bound / Wiro / Stapled" },
      { label: "Turnaround", value: "5–8 business days" },
    ],
    faqs: [
      {
        question: "Q: What types of book printing services do you offer?",
        answer:
          "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes.",
      },

      {
        question: "Q: Can I print books in small quantities?",
        answer:
          "Yes! We accommodate both short-run and bulk printing. Whether it’s one copy or a thousand, we have flexible solutions to suit your needs.",
      },

      {
        question: "Q: What can I customise in my book printing order?",
        answer:
          "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours.",
      },

      {
        question: "Q: How long does it take to print books?",
        answer:
          "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days.",
      },

      {
        question: "Q: Do you offer design assistance for books printing?",
        answer:
          "Yes, our design team can help format and layout your content to ensure a professional final product.",
      },

      {
        question: "Q: Do you offer custom book printing across Australia?",
        answer:
          "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production.",
        boldWords: [
          {
            word: "fast",
          },
        ],
      },

      {
        question: "Q: What sets you apart from other book printing companies?",
        answer:
          "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out.",
      },

      {
        question: "Q: Can I include special features in custom printed books?",
        answer:
          "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements.",
      },

      {
        question:
          "Q: Why choose a custom book printing company over a traditional printer?",
        answer:
          "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project.",
      },

      {
        question:
          "Q: Do you have minimum order quantities as a book printing company?",
        answer:
          "No, we support both small and large orders, so you can print just what you need without waste.",
      },

      {
        question: "Q: What makes your book printing eco-friendly?",
        answer:
          "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint.",
      },

      {
        question: "Q: What is the first step in printing a book?",
        answer:
          "Start by sending us your final manuscript and design files. We’ll review them and provide recommendations on paper, binding, and finish.",
      },

      {
        question:
          "Q: Can you help with ISBN and barcode inclusion in book printing services?",
        answer:
          "Yes, we can include your ISBN and barcode on your book cover as part of our standard service.",
      },

      {
        question: "Q: Do you print educational or academic books?",
        answer:
          "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing.",
      },

      {
        question:
          "Q: Do you offer nationwide delivery for book printing in Australia?",
        answer:
          "Yes, we ship across Australia with secure packaging and tracking for all book orders.",
      },

      {
        question:
          "Q: Can I print my own book as a one-off project in Australia?",
        answer:
          "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us.",
      },

      {
        question:
          "Q: What should I consider when choosing custom book printers?",
        answer:
          "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer.",
      },

      {
        question: "Q: Do you print custom notebooks, journals, or diaries?",
        answer:
          "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks.",
      },

      {
        question: "Q: Do you offer budget-friendly booklet printing?",
        answer:
          "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations.",
      },
    ],
  },
  {
    slug: "calendars",
    title: "Calendars",
    shortDescription:
      "Custom eco-friendly calendars for your business or brand.",
    description:
      "Keep your brand visible all year long with custom printed calendars on 100% recycled paper. Wall or desk calendars available in a range of sizes.",
    image: "/images/image5.png",
    priceFrom: "from $149",
    features: [
      "100% recycled paper",
      "Wall and desk calendar options",
      "Custom photo or artwork each month",
      "Vegetable-based inks",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A3 (Wall), A5 (Desk)" },
      { label: "Paper Stock", value: "150gsm Recycled" },
      { label: "Cover Stock", value: "300gsm Recycled" },
      { label: "Binding", value: "Wire-O / Saddle Stitch" },
      { label: "Turnaround", value: "7–10 business days" },
    ],
    faqs: [
      {
        question: "Q: What types of book printing services do you offer?",
        answer:
          "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes.",
      },

      {
        question: "Q: Can I print books in small quantities?",
        answer:
          "Yes! We accommodate both short-run and bulk printing. Whether it’s one copy or a thousand, we have flexible solutions to suit your needs.",
      },

      {
        question: "Q: What can I customise in my book printing order?",
        answer:
          "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours.",
      },

      {
        question: "Q: How long does it take to print books?",
        answer:
          "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days.",
      },

      {
        question: "Q: Do you offer design assistance for books printing?",
        answer:
          "Yes, our design team can help format and layout your content to ensure a professional final product.",
      },

      {
        question: "Q: Do you offer custom book printing across Australia?",
        answer:
          "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production.",
        boldWords: [
          {
            word: "fast",
          },
        ],
      },

      {
        question: "Q: What sets you apart from other book printing companies?",
        answer:
          "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out.",
      },

      {
        question: "Q: Can I include special features in custom printed books?",
        answer:
          "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements.",
      },

      {
        question:
          "Q: Why choose a custom book printing company over a traditional printer?",
        answer:
          "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project.",
      },

      {
        question:
          "Q: Do you have minimum order quantities as a book printing company?",
        answer:
          "No, we support both small and large orders, so you can print just what you need without waste.",
      },

      {
        question: "Q: What makes your book printing eco-friendly?",
        answer:
          "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint.",
      },

      {
        question: "Q: What is the first step in printing a book?",
        answer:
          "Start by sending us your final manuscript and design files. We’ll review them and provide recommendations on paper, binding, and finish.",
      },

      {
        question:
          "Q: Can you help with ISBN and barcode inclusion in book printing services?",
        answer:
          "Yes, we can include your ISBN and barcode on your book cover as part of our standard service.",
      },

      {
        question: "Q: Do you print educational or academic books?",
        answer:
          "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing.",
      },

      {
        question:
          "Q: Do you offer nationwide delivery for book printing in Australia?",
        answer:
          "Yes, we ship across Australia with secure packaging and tracking for all book orders.",
      },

      {
        question:
          "Q: Can I print my own book as a one-off project in Australia?",
        answer:
          "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us.",
      },

      {
        question:
          "Q: What should I consider when choosing custom book printers?",
        answer:
          "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer.",
      },

      {
        question: "Q: Do you print custom notebooks, journals, or diaries?",
        answer:
          "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks.",
      },

      {
        question: "Q: Do you offer budget-friendly booklet printing?",
        answer:
          "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations.",
      },
    ],
  },
  {
    slug: "annual-reports",
    title: "Annual Reports",
    shortDescription:
      "Sustainable annual reports that reflect your brand values.",
    description:
      "Your annual report is a showcase of your achievements. Printed on 100% recycled paper, it also showcases your commitment to sustainability.",
    image: "/images/image5.png",
    priceFrom: "from $199",
    features: [
      "100% recycled paper throughout",
      "Premium cover options",
      "Perfect bound for a professional look",
      "Full colour printing",
      "Printed in Australia",
    ],
    specs: [
      { label: "Size", value: "A4" },
      { label: "Cover Stock", value: "350gsm Recycled" },
      { label: "Inner Stock", value: "120gsm Recycled" },
      { label: "Binding", value: "Perfect Bound" },
      { label: "Turnaround", value: "7–10 business days" },
    ],
    faqs: [
      {
        question: "Q: What types of book printing services do you offer?",
        answer:
          "We offer a full range of book printing services including paperback, hardcover, saddle-stitched, perfect-bound, and spiral-bound options to suit different genres and purposes.",
      },

      {
        question: "Q: Can I print books in small quantities?",
        answer:
          "Yes! We accommodate both short-run and bulk printing. Whether it’s one copy or a thousand, we have flexible solutions to suit your needs.",
      },

      {
        question: "Q: What can I customise in my book printing order?",
        answer:
          "You can customise size, paper type, binding style, cover finish, and more. We work closely with you to make your book uniquely yours.",
      },

      {
        question: "Q: How long does it take to print books?",
        answer:
          "Turnaround time depends on the order size and specifications, but most print jobs are completed within 5–10 business days.",
      },

      {
        question: "Q: Do you offer design assistance for books printing?",
        answer:
          "Yes, our design team can help format and layout your content to ensure a professional final product.",
      },

      {
        question: "Q: Do you offer custom book printing across Australia?",
        answer:
          "Absolutely. We serve clients all over Australia with fast, reliable shipping and eco-conscious production.",
        boldWords: [
          {
            word: "fast",
          },
        ],
      },

      {
        question: "Q: What sets you apart from other book printing companies?",
        answer:
          "We focus on sustainable printing practices, customer collaboration, and high-quality finishes that make your book stand out.",
      },

      {
        question: "Q: Can I include special features in custom printed books?",
        answer:
          "Yes! Options include foil stamping, embossing, custom covers, spot UV, and other finishing enhancements.",
      },

      {
        question:
          "Q: Why choose a custom book printing company over a traditional printer?",
        answer:
          "Custom book printers like us offer more flexibility, better attention to detail, and tailored support throughout your project.",
      },

      {
        question:
          "Q: Do you have minimum order quantities as a book printing company?",
        answer:
          "No, we support both small and large orders, so you can print just what you need without waste.",
      },

      {
        question: "Q: What makes your book printing eco-friendly?",
        answer:
          "We use recycled paper, vegetable-based inks, and energy-efficient printing methods to reduce our environmental footprint.",
      },

      {
        question: "Q: What is the first step in printing a book?",
        answer:
          "Start by sending us your final manuscript and design files. We’ll review them and provide recommendations on paper, binding, and finish.",
      },

      {
        question:
          "Q: Can you help with ISBN and barcode inclusion in book printing services?",
        answer:
          "Yes, we can include your ISBN and barcode on your book cover as part of our standard service.",
      },

      {
        question: "Q: Do you print educational or academic books?",
        answer:
          "Yes, we print everything from textbooks to training manuals and academic journals, with options for both colour and black-and-white printing.",
      },

      {
        question:
          "Q: Do you offer nationwide delivery for book printing in Australia?",
        answer:
          "Yes, we ship across Australia with secure packaging and tracking for all book orders.",
      },

      {
        question:
          "Q: Can I print my own book as a one-off project in Australia?",
        answer:
          "Yes, we welcome self-publishers and one-time projects. You can print a single copy or small batch easily with us.",
      },

      {
        question:
          "Q: What should I consider when choosing custom book printers?",
        answer:
          "Look for experience, print quality, customisation options, and environmentally responsible practices – all of which we offer.",
      },

      {
        question: "Q: Do you print custom notebooks, journals, or diaries?",
        answer:
          "Absolutely. We offer custom printing for all types of books, including journals, planners, and logbooks.",
      },

      {
        question: "Q: Do you offer budget-friendly booklet printing?",
        answer:
          "Yes, we provide cost-effective booklet printing solutions without compromising on quality, perfect for events, guides, or presentations.",
      },
    ],
  },

  // ── Event Stationery ──────────────────────────────────────────────────────
  {
    slug: "save-the-date-cards",
    dbId: 48,
    title: "Save The Date Cards",
    shortDescription: "Eco-friendly save the date cards for your special day.",
    description:
      "Give your guests plenty of notice with beautiful, sustainable save the date cards. Printed on 100% recycled paper — the perfect start to your eco-conscious celebrations.",
    image: "/images/image2.png",
    priceFrom: "from $59",
    features: [
      "100% recycled post-consumer waste paper",
      "Vegetable-based inks",
      "A6 and A5 sizes",
      "Matching envelopes available",
      "Printed in Australia",
    ],
    specs: [
      { label: "Sizes", value: "A6, A5" },
      { label: "Paper Stock", value: "300gsm Recycled" },
      { label: "Finish", value: "Uncoated Matte" },
      { label: "Min. Quantity", value: "25 cards" },
      { label: "Turnaround", value: "4–6 business days" },
    ],
     faqs: [
      {
        question: "Are your recycled postcards printed in Australia?",
        answer:
          "They sure are, we produce all our printing in our Australian print facility. We are a family business with over 30 years’ experience in the printing industry that is proudly Australian owned.",
      },

      {
        question: "I need my postcards urgently, can you fast track my order?",
        answer:
          "Please contact us at sales@sustainableprinting.com.au for information on how we can fast track your order.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question:
          "Do I have to wait longer if my postcards are printed with other businesses postcards?",
        answer:
          "We print postcards multiple times a week. As soon as we receive your order and artwork we allocate you to the next print run that week.",
      },

      {
        question: "How do I supply artwork?",
        answer:
          "We require a print ready PDF for printing. Please also supply with 3mm bleed and trim marks. For more information on how to set up artwork, please click here",
        boldWords: [
          {
            word: "click here",
            href: "/docs/artwork-specification-guide.pdf",
          },
        ],
      },

      {
        question: "Can I change my postcard size?",
        answer:
          "Our online postcards above are all available in standard sizes: A6 (105mm x 148mm), A5 (210mm x 148mm) and DL (99mm x 210mm). This is to maximise the use of the entire sheet of paper and minimise wise. Custom sizes are available on request, prices are dependent on how much space on press is required. Contact sales@sustainableprintingco.com.au for a quote.",
        boldWords: [
          {
            word: "sales@sustainableprintingco.com.au",
            href: "mailto:sales@sustainableprintingco.com.au",
          },
        ],
      },

      {
        question: "Is 350gsm your thickest paper?",
        answer:
          "We have thicker stocks available. 350gsm is what we use for our Premium Recycled Postcards. Please contact sales@sustainableprinting.com.au for a quote and more information.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "What if I have more than 8 postcard designs?",
        answer:
          "We can print more than 8 designs, please call 03 9482 2222 or email sales@sustainableprinting.com.au for a quote",
        boldWords: [
          {
            word: "What if I have more than 8 postcard designs?",
          },
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you print circle postcards or die-cut shapes?",
        answer:
          "Yes we do, please contact sales@sustainableprinting.com.au for a quote and more information. We also round corner eco-friendly printed postcards if you would like a softer looking edge.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Is it more cost effective to print 1 sided postcards?",
        answer:
          "Because we print our postcards together with other businesses postcards at the same time, we print all postcards both sides. If your design is one sided only, that is OK, it will still print with the double-sided postcards and the cost will be as per the double-sided postcards.",
      },

      {
        question:
          "I need more postcards than what your set prices offer, is this possible?",
        answer:
          "Yes it is, please contact us to know let us know your exact requirements sales@sustainableprinting.com.au.",
        boldWords: [
          {
            word: "sales@sustainableprinting.com.au.",
            href: "mailto:sales@sustainableprinting.com.au",
          },
        ],
      },

      {
        question: "Do you provide proofs?",
        answer:
          "Yes, we can either print a proof on the stock for you (at an additional cost) or send a PDF proof (no additional cost). Proofing allows you the check the details one last time before final print. Best catch any changes at this stage and resupply artwork if needed. Proofs are generated by request only.",
      },

      {
        question: "Can I split quantities for postcards?",
        answer:
          "Yes, that is totally fine, please let us know the quantity split you’re after and we will quote you accordingly. It’s helpful if you can please write the quantity for each postcard needed in their file name.",
      },

      {
        question: "Do you still have my artwork on file?",
        answer:
          "Yes, we should have your artwork on file if you have printed with us before. We will send you a proof of the file so you can double check before proceeding to print.",
        boldWords: [
          {
            word: "Do you still have my artwork on file?",
          },
        ],
      },

      {
        question:
          "Do you print recycled postcards with Pantone Inks/Spot Colours?",
        answer:
          "Yes we can, however we will need to quote this separately as it would be printed as a stand-alone job (not with other CMYK cards at the same time). The costs for printing with Pantone Inks can often significantly higher compared to our regular CMYK postcard card printing.",
      },

      {
        question: "Can I please see a sample of your work before proceeding?",
        answer:
          "Yes, we would love to send you some samples, please request a sample pack here.",
        boldWords: [
          {
            word: "Can I please see a sample of your work before proceeding?",
          },
          {
            word: "request a sample pack here",
            href: "/requestsample",
          },
        ],
      },
    ],
  },
];
