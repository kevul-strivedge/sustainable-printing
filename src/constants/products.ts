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
}

export const products: ProductData[] = [
  // ── Cards ────────────────────────────────────────────────────────────────
  {
    slug: "business-cards",
    dbId: 15,
    title: "Business Cards",
    shortDescription: "Eco-friendly business cards printed on 100% recycled paper.",
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
    shortDescription: "Premium recycled postcards for marketing and personal use.",
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
  },
  {
    slug: "thank-you-cards",
    dbId: 42,
    title: "Thank You Cards",
    shortDescription: "Eco-friendly thank you cards that make a lasting impression.",
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
    shortDescription: "Recycled appointment reminder cards for your practice or business.",
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
    shortDescription: "Eco-friendly loyalty cards to build lasting customer relationships.",
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
    shortDescription: "Eco-friendly invitations for weddings, events, and celebrations.",
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
  },
  {
    slug: "swing-tags",
    dbId: 23,
    title: "Swing Tags",
    shortDescription: "100% recycled swing tags for sustainable product packaging.",
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
  },

  // ── Stickers ─────────────────────────────────────────────────────────────
  {
    slug: "adhesive-labels",
    title: "Adhesive Labels",
    shortDescription: "Eco-friendly adhesive stickers and labels in custom shapes.",
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
  },
  {
    slug: "rectangle-stickers",
    dbId: 28,
    title: "Rectangle Stickers",
    shortDescription: "Eco-friendly rectangle stickers for labelling and branding.",
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
  },
  {
    slug: "calendars",
    title: "Calendars",
    shortDescription: "Custom eco-friendly calendars for your business or brand.",
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
  },
  {
    slug: "annual-reports",
    title: "Annual Reports",
    shortDescription: "Sustainable annual reports that reflect your brand values.",
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
  },
];
