// SEO metadata sourced from docs/sustainable-master/meta.xlsx — the Laravel project's
// curated meta source (read by app/Helpers/meta_function.php on every Laravel page).
// Each key is the Laravel URL slug (without leading slash; '' = home).
// To regenerate: re-run the python loader on meta.xlsx and replace this file.
import type { Metadata } from 'next';

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
}

export const seoMetaBySlug: Record<string, SeoMeta> = {
  '': { title: 'Eco-Friendly Green Printing | Sustainable Printing Australia', description: 'Sustainable Printing Co. is an Eco-Friendly Green Printing Service Provider in Australia. We Print on 100% Recycled Papers to Provide Eco-Friendly Green Printing.', keywords: 'Recycled Printing, Eco Printing, Eco-Friendly Printing, Recycled Business Cards, Recycled Postcards, Custom Printing services, Printing Company, Sustainable Printing' },
  'dealofweek': { title: 'ECO Friendly Printing Services Weekly Deals By Sustainable Printing', description: 'Australia’s one of the leading Eco-Friendly printing company offers a deal of the week on recycled business cards, recycled postcards, recycled gift cards and on recycled printing services.', keywords: 'Deal of the week on Eco Printing, Recycled Printing, Eco-Friendly Printing Company, Recycled Printing in Australia' },
  'business-cards': { title: 'Eco-Friendly Recycled Business Cards | Sustainable Printing', description: 'Sustainable Printing offers Eco-Friendly & cost-effective Recycled Business Cards Printing Services. Order your free Recycled Business Cards sample pack now.', keywords: 'Business Cards Printing, Recycled Business Cards, Affordable business cards printing, Eco-friendly Business Cards, Recycled Uncoated Business cards, Brown-Kraft Business Cards' },
  'product-details': { title: 'Product-details-title', description: 'Product-details-desc', keywords: 'Product-details' },
  'postcards': { title: 'Recycled Postcards Printing Services | Sustainable Printing', description: 'Sustainable Printing provides Premium Quality Recycled Postcards, and Kraft Postcards at an affordable price. Get your free Recycled Postcard sample pack now.', keywords: 'Affordable postcard printing in Australia, Recycled Postcards Printing, Kraft Postcards, Premium Postcards, 100% recycled Postcards' },
  'products': { title: 'Recycled Paper Printing – Business Cards, Greeting Cards, Postcards, Gift Cards', description: 'Sustainable Printing Company provides 100% recycled paper printing services like recycled business cards, postcards, greeting cards printing, gift card printing & many others.', keywords: 'Business Card, Postcard Printing, Gift Cards, Swing Tags, Adhesive labels or Stickers, Booklets and Reports, Flyers and posters Printing, Brochures folded, Stationery, Green Printing' },
  'gift-cards': { title: 'Recycled Gift Cards Printing Services | Sustainable Printing', description: 'Sustainable Printing provides Customized Recycled Gift Cards Printing service for any special occasion. Order your free Recycled Gift Cards sample pack now.', keywords: 'Gift Cards Printing, Greeting Cards Printing Services, Affordable Gift Cards Printing Australia' },
  'swing-tags': { title: 'Recycled Swing Tags Printing Services | Sustainable Printing', description: 'Sustainable Printing offers the Premium Quality Recycled Swing Tag Printing Services at an affordable price. Order your free Recycled Swing Tag sample pack now.', keywords: 'Swing Tags Printing, Products Tags Printing, Recycled Paper Printing in Australia, Premium Swing Tags, Kraft Swing tags' },
  'label-stickers': { title: 'Adhesive Labels & Stickers Printing | Sustainable Printing', description: 'Sustainable Printing is One of the Leading Label & Stickers Printing providers in Australia. We offer Eco-Friendly Adhesive Labels & Stickers Printing Services.', keywords: 'Adhesive Labels Printing, Strikers Printing, Custom Adhesive Labels Print, Circle Adhesive Labels, Square Adhesive Labels, Rectangle Adhesive Labels' },
  'booklet-report': { title: 'Recycled Booklets and Reports Printing | Sustainable Printing', description: 'Sustainable Printing provides Recycled Booklet & Report Printing Services at an affordable price. Order your free Recycled Booklets and Reports Printing Sample.', keywords: 'Booklet Printing Services Australia, Report Printing, Affordable Booklet Printing' },
  'flyer-poster': { title: 'Eco-Friendly Flyers & Posters Printing | Sustainable Printing', description: 'Sustainable Printing offers a range of Eco-Friendly Posters & Flyers Printing in different sizes. Order your free Eco-Friendly Flyers & Posters Printing Sample.', keywords: 'Flyers Printing, Posters Printing, Flyers Printing Services Australia, Posters Printing Services Australia, Custom Flyers, Custom Posters' },
  'brochures': { title: 'Custom Folded Brochures Printing | Sustainable Printing', description: 'Sustainable Printing offers a range of Custom Folded Brochures Printing in different sizes. Order your free Eco-Friendly Folded Brochures Printing Sample Now.', keywords: 'Brochures Printing, Eco friendly brochures printing Australia, Affordable Brochures Printing Australia' },
  'stationary': { title: 'Business Stationery & Letterhead Printing | Sustainable Printing', description: 'Sustainable Printing offers Business Stationery, Wrapping paper, Letterhead & Compliment slips printing at the best price. Order your free Stationery Sample Now.', keywords: 'Stationery Printing, Affordable Stationery Printing Services' },
  'custom-quote': { title: 'Get Quote on Eco-Friendly Recycled Printing | Sustainable Printing', description: 'Sustainable Printing offers 100% Recycled, Eco-Friendly Printing Services at an honest price. Get a Quote for Eco-Friendly and Recycled Printing Services.', keywords: 'Eco Printing Company, Recycled Printing, Printing Company in Australia' },
  'faq': { title: 'FAQ Related to Eco-Friendly Printing Services – Sustainable Printing Co.', description: 'Check out all the FAQ for ECO Printing, Green Printing, Art Work, and product related questions from one of the leading Eco-Friendly Printing Company in Melbourne, Sustainable Printing Co.', keywords: 'Eco Printing Company in Australia, Eco Printing' },
  'contact': { title: 'Contact to Sustainable Printing Co. – One of the Leading Eco Printing Services Provider', description: 'If you are looking for any Eco-Friendly printing service provider in Australia, then contact one of the leading Green printing services provider – Sustainable Printing Co. Share your requirements.', keywords: 'Eco printing services, Sustainable Printing, Eco-friendly printing company in Australia' },
  'requestsample': { title: 'Request Recycled Paper Sample Pack from Sustainable Printing Co. Australia', description: 'Visit us now, fill the details and request a sample pack of recycled paper from one of the leading green printing services providers in Australia – Sustainable Printing Co.', keywords: 'Request Recycled Paper Sample Pack, Sustainable Printing' },
  'login': { title: 'Login to Your Account – Sustainable Printing Co. – Green Printing Services Provider', description: 'Welcome & Login to your account. Sustainable Printing Co. Provides complete green printing solutions in Fitzroy, Collingwood, Adelaide, Melbourne, Richmond, Sydney.', keywords: 'Sustainable Printing Co' },
  'about': { title: 'Contact to Sustainable Printing Co. – One of the Leading Eco Printing Services Provider', description: 'If you are looking for any Eco-Friendly printing service provider in Australia, then contact one of the leading Green printing services provider – Sustainable Printing Co. Share your requirements.', keywords: 'Eco printing services, Sustainable Printing, Eco-friendly printing company in Australia' },
  'brown-kraft-business-cards': { title: 'Brown Kraft Business Cards Printing in Australia | Sustainable Printing Co.', description: 'Buy Brown Kraft Business Cards from Sustainable Printing Co. at very affordable price. We offer green printing services on 100% recycled kraft paper in Melbourne & Fitzroy.', keywords: 'Kraft Business Cards' },
  'uncoated-business-cards': { title: '100% Recycled Business Cards Printing in Melbourne | Sustainable Printing Co.', description: 'Get Premium uncoated business cards for yourself. Sustainable Printing Co. offers eco-friendly business cards printing services in Melbourne, Richmond, & Fitzroy.', keywords: 'Premium Uncoated Business cards' },
  'premium-postcards': { title: 'Premium  Postcards Printing in Melbourne, Fitzroy | Sustainable Printing Co.', description: 'Sustainable Printing Co.’s high-quality premium postcards are available in different sizes & paper. We deliver 100% recycled premium postcards as per your custom requirements.', keywords: 'Premium Postcards' },
  'kraft-postcards': { title: 'Brown Kraft Postcards Printing in Collingwood, Richmond | Sustainable Printing Co.', description: 'Sustainable Printing Co. is one of the leading green printing service providers in Australia. We offer Brown Kraft Postcards printing services at best price on 100% recycled papers.', keywords: 'Kraft Postcards' },
  'standard-a6-gift-cards': { title: 'A6 Gift Cards Printing in Australia | Green Printing Services | Sustainable Printing Co.', description: 'Sustainable Printing Co. offers high-quality and affordable gift card printing services in Fitzroy, Richmond, & Melbourne. Contact us now for recycled printing services.', keywords: 'Standard A6 Gift Cards' },
  'square-gift-cards': { title: 'Square Gift Cards Printing in Australia | Square Gift Cards | Sustainable Printing Co.', description: 'Order your square gift cards from Sustainable Printing Co. in Australia. We provide custom gift card printing services on 100% recycled papers at a very affordable price.', keywords: 'Square Gift Cards' },
  'premium-swing-tags': { title: 'Premium Swing Tags Printing Collingwood, Richmond | Sustainable Printing Co.', description: 'Sustainable Printing Co. offers premium swing tags printing services in Australia wide. You can deliver your message using premium swing tags in the fashion world.', keywords: 'Premium Swing Tags' },
  'kraft-swing-tags': { title: 'Kraft Swing Tags | Swing Tags Printing in Australia | Sustainable Printing Co.', description: 'As a one of the leading green printing service provider company – Sustainable Printing Co. offers custom swing tags printing services on 100% recycled kraft (brown) paper.', keywords: 'Kraft Swing tags' },
  'circle-adhesive-labels': { title: 'Circle Adhesive Labels Printing | Round Labels for Printing in Australia', description: 'Create your own custom adhesive label with Sustainable Printing Co. We have a wide range of adhesive labels such as round labels, gloss, kraft, & stickers to fulfill your needs.', keywords: 'Circle Adhesive Labels' },
  'square-stickers': { title: 'Square Stickers & Square Labels Printing Services in Australia | Sustainable Printing Co.', description: 'Get your custom printed Square stickers & labels from Sustainable Printing Co. Visit us now & select size, paper type, & finishing for printing custom square stickers & labels.', keywords: 'Square Stickers' },
  'flyers-printing': { title: 'Affordable Flyers Printing Services in Collingwood, Melbourne, Fitzroy, Sydney', description: 'Looking for environmentally promotional flyers in Australia? Sustainable Printing Co. offers eco-friendly flyer printing options that will help spread the word about your brand.', keywords: 'Flyers Printing Services' },
  'posters-printing': { title: 'Posters Printing Services in Collingwood, Melbourne, Fitzroy, Sydney', description: 'Sustainable Printing Co. offers poster printing services on 100% post-consumer recycled paper. We have a range of poster size available like A4, A3, & A2. Contact us now.', keywords: 'Posters Printing Services' },
  'brochures-printing': { title: 'Custom Brochures Printing Services in Melbourne, Sydney, Collingwood, Fitzroy', description: 'The brochure is a great way to share your company information in an easy way. Sustainable Printing Co. offers great discount on eco-friendly printing services across Australia.', keywords: 'Brochures Printing Services' },
  'letterhead-printing': { title: 'Letterhead Printing Services in Melbourne, Sydney, Collingwood, Fitzroy', description: 'If you’re looking for letterhead printing services in Australia? Sustainable Printing Co. helps you by providing letterhead green printing services at an affordable price.', keywords: 'Letterhead Printing Services' },
  'compliment-slips': { title: 'Compliment Slips Printing | Stationary Printing in Australia | Sustainable Printing Co.', description: 'Print your compliment slips with Sustainable Printing Co. We provide compliment slips printing services using 100% recycled paper across the Australia wide. Visit us now.', keywords: 'Compliment Slips' },
  'a2-wrapping-paper': { title: 'A2 Wrapping Paper | Wrapping Paper Printing in Australia | Sustainable Printing Co.', description: 'Sustainable Printing Co. wrapping paper printing services on 100% recycled paper. Print your own wrapping paper with us & delight your customers to a tidily packaged purchase.', keywords: 'A2 Wrapping Paper' },
  'a4-self-cover-booklets': { title: 'A4 Self Cover Booklets | Booklets Printing in Australia | Sustainable Printing Co.', description: 'Booklets can be used for the promotion of your business like sales catalog, promotional booklet, etc. Sustainable Printing Co. offers booklet printing services in 100% recycled paper.', keywords: 'A4 Self Cover Booklets' },
  'a4-plus-cover-booklets': { title: 'A4 Plus Cover Booklets | Booklet Printing in Collingwood, Richmond, Melbourne', description: 'Sustainable Printing Co. offers A4 Plus Cover Booklet printing on 300gsm white uncoated cover & 100% post-consumer recycled paper at an affordable price in Australia wide.', keywords: 'A4 Plus Cover Booklets' },
  'a5-self-cover-booklets': { title: 'A5 Self Cover Booklets | Promotional Booklet Printing in Sydney, Richmond, Fitzroy', description: 'Sustainable Printing Co. offers recycled printing services for A5 Self Cover Booklets using 100% recycled papers. Contact us now & get a discount on green printing services.', keywords: 'A5 Self Cover Booklets' },
  'a5-plus-cover-booklets': { title: 'Get a Custom Quote for A5 Plus Cover Booklets Printing | Sustainable Printing Co.', description: 'At Sustainable Printing Co. we offer A5 Plus Cover Booklets printing on different paper type. We are one of the leading environment-friendly printing service providers in Australia.', keywords: 'A5 Plus Cover Booklets' },
  'environmentally-friendly-inks-toner': { title: 'Environmentally Friendly Inks and Toners | Sustainable Printing', description: 'Sustainable Printing uses vegetable-based inks for its offset printing. We are committed to delivering Environmentally Friendly printing solutions.', keywords: 'Eco-Friendly Printing Inks and Toners' },
  'reducing-waste': { title: 'Reducing Environmental Waste| Sustainable Printing Australia', description: 'Sustainable Printing Co operates under a ‘Lean-Green Manufacturing’ processes. We use 100% recycled papers, which are manufactured carbon neutral.', keywords: 'Reducing Waste' },
  'greenpower': { title: 'GreenPower Accredited Renewable Energy Sustainable Printing Australia', description: 'Sustainable Printing uses GreenPower which contributes to the decrease in greenhouse gas emissions that are associated with traditional electricity generation.', keywords: 'GreenPower' },
  'recycled-paper': { title: '100% Recycled Paper Printing | Sustainable Printing Australia', description: 'When you print with us, you can take satisfaction in knowing that your Business Card, Invitation, Postcard, Greeting Card has been printed on 100% recycled papers.', keywords: 'Recycled Paper' },
  'why-we-print-sustainably': { title: 'Eco Friendly Printing with Sustainable Printing Solutions', description: 'At Sustainable Printing, our commitment to using GreenPower and 100% post-consumer waste recycled papers has a multitude of positive flow on effects.', keywords: 'Printing with Sustainable' },
  'printpaper-mythsfacts': { title: 'Printing Paper - Myths And Facts | Sustainable Printing', description: 'Myths And Facts about Printing Papers. Making Paper Destroys Forests? Paper and Print is a Wasteful Product? Paper is bad for the Environment?', keywords: 'Printing Paper - Myths And Facts' },
  'rectangle-stickers': { title: 'Rectangle Stickers Printing | Eco-Friendly Adhesive Stickers', description: 'Our Eco-Friendly Adhesive stickers and labels are great for handouts and print vibrantly. Choose from our range of Adhesive stickers.', keywords: 'Rectangle Stickers Printing | Eco-Friendly Adhesive Stickers' },
  'bookmarks': { title: 'Eco Friendly Bookmarks | Recycled Paper Bookmarks', description: '100% post-consumer recycled paper with 350gsm white, uncoated. Natural look and feel. Bulky Bookmarks available in a range of sizes.', keywords: 'Eco Friendly Bookmarks | Recycled Paper Bookmarks' },
  'calenders': { title: 'Eco Friendly Calendar Printing | A4 Wall Calendars Printed', description: 'Get eco friendly calendar printing with Sustainable Printing Company. 100% post-consumer recycled paper for A4 wall calendars printing.', keywords: 'Eco Friendly Calendar Printing | A4 Wall Calendars Printed' },
  // meta.xlsx has TWO rows with key 'thank-you-card-printing' (rows 49 + 60).
  // Laravel's PHP foreach overwrites — keep the LATER row's content.
  'thank-you-card-printing': { title: 'Recycled Eco-Friendly Thank You Cards Printing Australia', description: 'Our Recycled Eco-Friendly Thank You Cards Printing are perfect for gifts, to print your illustrations, drawing and painting and to use as hand outs.', keywords: 'thank you cards printing' },
  'books': { title: 'Eco Friendly Books, Booklets, Reports | Sustainable Printing', description: 'We print all types of books, booklets, reports and would love to talk to you about your next project, have a look at the examples on our website now.', keywords: 'Eco Friendly Books, Booklets, Reports | Sustainable Printing' },
  'bookmarks-printing': { title: 'Eco Friendly Bookmarks Printing | Sustainable Printing', description: 'Contact us for Eco Friendly Bookmarks Printing with 100% post-consumer recycled paper, 350gsm white, uncoated and available in a range of sizes to choose from.', keywords: 'Eco Friendly Bookmarks Printing | Sustainable Printing' },
  'printers-near-me': { title: 'Printers Near Me | Printing Services Near Me | Sustainable Printing', description: 'Click on Sustainable Printing Co. whenever you search for printing services near me for economical and earth-friendly printing solutions.  Contact Now.', keywords: 'Printers Near Me | Printing Services Near Me | Sustainable Printing' },
  'folded-a6-christmas-cards': { title: 'Folded A6 Christmas Cards | Christmas Cards Printing', description: 'We have the best collection of Christmas cards Printing. Find the perfect recycled eco-friendly Folded A6 Christmas Cards and order it now.', keywords: 'christmas cards printing' },
  'discount-cards': { title: 'Recycled Eco Friendly Discount Cards Printing Australia', description: 'Greet your customers with recycled eco-friendly discount card printing. Ask for samples and templates of various designs, styles, sizes.', keywords: 'discount cards printing' },
  'appointment-cards': { title: 'Recycled Eco Friendly Appointment Cards Printing Australia', description: 'Communicate that your appointment is Eco-Friendly with our range of recycled appointment cards. From 350gsm 100% recycled Uncoated Appointment cards.', keywords: 'appointment cards printing' },
  'loyalty-cards': { title: 'Loyalty Cards Printing | Recycled ECO Friendly Loyalty Cards', description: 'Communicate that your loyalty card is Eco-Friendly with our range of recycled loyalty cards. From 350gsm 100% recycled Uncoated.', keywords: 'loyalty cards printing' },
  'birth-announcement-cards': { title: 'Recycled Eco-Friendly Birth Announcement Card Printing', description: 'Our Recycled Eco-Friendly Birth Announcement Cards are perfect for gifts, to print your illustrations, drawing and painting and to use as hand outs.', keywords: 'birth announcement card printing' },
  'invitations': { title: 'Recycled Eco-Friendly Invitations Cards Printing Australia', description: 'Our Recycled Eco-Friendly Invitations Cards are perfect for gifts, to print your illustrations, drawing and painting and to use as hand outs.', keywords: 'invitations cards printing' },
  'save-the-date-cards': { title: 'Recycled Eco-Friendly Save The Date Cards Printing Australia', description: 'Our Recycled Eco-Friendly Save The Date Cards are perfect for gifts, to print your illustrations, drawing and painting and to use as hand outs.', keywords: 'save the date cards printing' },
};

// ── Slug resolution ────────────────────────────────────────────────────────────

// Maps our Next.js slug + selected variant DB productId → Laravel SEO slug.
// When a user is on /business-cards?variant=15, SEO should use the Laravel
// /uncoated-business-cards meta, not the parent /business-cards meta.
const variantToSeoSlug: Record<string, Record<number, string>> = {
  'business-cards':  { 15: 'uncoated-business-cards', 17: 'brown-kraft-business-cards' },
  'postcards':       { 18: 'premium-postcards', 19: 'kraft-postcards', 48: 'save-the-date-cards' },
  'greeting-cards':  { 20: 'standard-a6-gift-cards', 22: 'square-gift-cards' },
  'swing-tags':      { 23: 'premium-swing-tags', 24: 'kraft-swing-tags' },
  'christmas-cards': { 43: 'folded-a6-christmas-cards', 44: 'folded-square-christmas-cards' },
  'books':           { 29: 'a4-self-cover-booklets', 30: 'a4-plus-cover-booklets', 31: 'a5-self-cover-booklets', 33: 'a5-plus-cover-booklets' },
};

// Maps our slug → its Laravel SEO slug for the bare (no-variant) URL.
// Our slug names differ for some categories (e.g. our /flyers ↔ Laravel /flyers-printing).
const baseSlugToSeoSlug: Record<string, string> = {
  'business-cards':           'business-cards',
  'postcards':                'postcards',
  'greeting-cards':           'gift-cards',
  'thank-you-cards':          'thank-you-card-printing',
  'bookmarks':                'bookmarks',
  'christmas-cards':          'folded-a6-christmas-cards',
  'discount-cards':           'discount-cards',
  'appointment-cards':        'appointment-cards',
  'loyalty-cards':            'loyalty-cards',
  'birth-announcement-cards': 'birth-announcement-cards',
  'invitations':              'invitations',
  'brochures':                'brochures',
  'letterhead':               'letterhead-printing',
  'compliment-slips':         'compliment-slips',
  'wrapping-paper':           'a2-wrapping-paper',
  'flyers':                   'flyers-printing',
  'posters':                  'posters-printing',
  'swing-tags':               'swing-tags',
  'adhesive-labels':          'label-stickers',
  'circle-stickers':          'circle-adhesive-labels',
  'square-stickers':          'square-stickers',
  'rectangle-stickers':       'rectangle-stickers',
  'books':                    'books',
  'booklets':                 'booklet-report',
  'reports':                  'booklet-report',
  'annual-reports':           'booklet-report',
  'calendars':                'calenders',
  'save-the-date-cards':      'save-the-date-cards',
};

/** Resolve which Laravel SEO slug to use for a given route.
 *  Lookup priority: seoOverride (rewrite ?seo=) > (slug + variant) > base slug. */
export function resolveSeoSlug(slug: string, variantProductId?: number, seoOverride?: string): string {
  if (seoOverride && seoMetaBySlug[seoOverride]) return seoOverride;
  if (variantProductId !== undefined && variantToSeoSlug[slug]?.[variantProductId]) {
    return variantToSeoSlug[slug][variantProductId];
  }
  return baseSlugToSeoSlug[slug] ?? slug;
}

/** Look up the SEO meta object for a route. */
export function getSeoMeta(slug: string, variantProductId?: number, seoOverride?: string): SeoMeta | undefined {
  return seoMetaBySlug[resolveSeoSlug(slug, variantProductId, seoOverride)];
}

// ── Helpers ────────────────────────────────────────────────────────────────────

/** Build a Next.js Metadata object from a Laravel SEO slug. Use in static pages: */
/**   `export const metadata = pageMetadata('contact');` */
export function pageMetadata(seoSlug: string): Metadata {
  const m = seoMetaBySlug[seoSlug];
  if (!m) return {};
  return {
    title: { absolute: m.title },
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description },
  };
}

/** Build a Metadata object from a dynamic product route. Use in [slug] generateMetadata: */
export function productMetadata(slug: string, variantProductId?: number, seoOverride?: string): Metadata {
  const m = getSeoMeta(slug, variantProductId, seoOverride);
  if (!m) return {};
  return {
    title: { absolute: m.title },
    description: m.description,
    keywords: m.keywords,
    openGraph: { title: m.title, description: m.description },
  };
}

// ── Laravel-matching navigation URLs ──────────────────────────────────────────
// The exact URL each navbar/footer menu item should link to. Sourced by scraping
// the live Laravel site's <nav>: every menu item links to a specific variant or
// category Laravel URL, NOT our internal slug. e.g. "Business Cards" → /uncoated-business-cards.
const navHrefBySlug: Record<string, string> = {
  'business-cards':           '/uncoated-business-cards',
  'postcards':                '/premium-postcards',
  'greeting-cards':           '/standard-a6-gift-cards',
  'thank-you-cards':          '/thank-you-card-printing',
  'bookmarks':                '/bookmarks-printing',
  'christmas-cards':          '/folded-a6-christmas-cards',
  'discount-cards':           '/discount-cards',
  'appointment-cards':        '/appointment-cards',
  'loyalty-cards':            '/loyalty-cards',
  'birth-announcement-cards': '/birth-announcement-cards',
  'invitations':              '/invitations',
  'brochures':                '/brochures-printing',
  'letterhead':               '/letterhead-printing',
  'compliment-slips':         '/compliment-slips',
  'wrapping-paper':           '/a2-wrapping-paper',
  'flyers':                   '/flyers-printing',
  'posters':                  '/posters-printing',
  'swing-tags':               '/premium-swing-tags',
  // Laravel sends ALL sticker menu items to /circle-adhesive-labels (category landing).
  'adhesive-labels':          '/circle-adhesive-labels',
  'circle-stickers':          '/circle-adhesive-labels',
  'square-stickers':          '/circle-adhesive-labels',
  'rectangle-stickers':       '/circle-adhesive-labels',
  // Laravel sends Books / Calendars / Annual Reports to /books, but Booklets / Reports to /a4-self-cover-booklets.
  'books':                    '/books',
  'booklets':                 '/a4-self-cover-booklets',
  'reports':                  '/a4-self-cover-booklets',
  'calendars':                '/books',
  'annual-reports':           '/books',
  'save-the-date-cards':      '/save-the-date-cards',
};

/** Return the Laravel-matching URL for one of our product slugs. Falls back to
 *  `/${slug}` (no remap) for slugs not in the table. */
export function getNavHref(slug: string): string {
  return navHrefBySlug[slug] ?? `/${slug}`;
}
