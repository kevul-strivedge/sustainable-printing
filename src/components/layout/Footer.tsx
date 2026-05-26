import Link from "next/link";
import React from "react";

// Footer options — URLs match the Laravel site exactly (sourced from live nav scrape).
const productsCol1 = [
  { label: "All Products", href: "/products" },
  { label: "Business Cards", href: "/uncoated-business-cards" },
  { label: "Postcards", href: "/premium-postcards" },
  { label: "Flyers", href: "/flyers-printing" },
  { label: "Posters", href: "/posters-printing" },
  { label: "Stickers", href: "/circle-adhesive-labels" },
  { label: "Adhesive Labels", href: "/circle-adhesive-labels" },
];

const productsCol2 = [
  { label: "Brochures", href: "/brochures-printing" },
  { label: "Wrapping Paper", href: "/a2-wrapping-paper" },
  { label: "Booklets", href: "/a4-self-cover-booklets" },
  { label: "Books", href: "/books" },
  { label: "Greeting Cards", href: "/standard-a6-gift-cards" },
  { label: "Bookmarks", href: "/bookmarks-printing" },
];

const aboutLinks = [
  { label: "Why Sustainable", href: "/why-we-print-sustainably" },
  { label: "Vegetable Based Inks", href: "/environmentally-friendly-inks-toner" },
  { label: "Environmentally Friendly", href: "/environmentally-friendly-inks-toner" },
  { label: "Reducing Waste", href: "/reducing-waste" },
  { label: "Green Power", href: "/greenpower" },
  { label: "Recycled Paper", href: "/recycled-paper" },
  { label: "Melbourne Printers", href: "/melbourne-printers" },
];

const helpLinks = [
  { label: "Artwork Setup Instructions", href: "/docs/artwork-specification-guide.pdf" },
  { label: "Urgent Printing", href: "/contact" },
  { label: "Quote Questions", href: "/faq" },
  { label: "Production", href: "/reducing-waste" },
  { label: "Blogs", href: "/blogs" },
];


const latestBlogs = [
  { label: "Why Eco Friendly Printing Is the Smartest Branding Move Today", href: "/blogs/eco-friendly-printing-smart-branding-choice-today" },
  { label: "How Recycled Business Cards Improve Brand Perception", href: "/blogs/recycled-business-cards-that-elevate-brand-perception" },
  { label: "Sustainable Printing for E Commerce Brands A Complete Guide", href: "/blogs/sustainable-printing-guid-for-ecommerce-brands" },
];

//Footer-components
function FooterLink({ label,href = "#"  }: { label: string,href?: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-white hover:text-green-600 text-sm leading-relaxed transition-colors duration-150"
            >
                {label}
            </Link>
        </li>
    );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-white font-semibold text-base mb-5 tracking-wide">
            {children}
        </h3>
    );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.2"
        cy="6.8"
        r="1.2"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.67 4.52-4.67 1.31 0 2.68.23 2.68.23v2.95H15.8c-1.5 0-1.96.93-1.96 1.89V12h3.33l-.53 3.46h-2.8v8.39A12 12 0 0 0 24 12z" />
    </svg>
  );
}

// Main Footer

export default function Footer() {
    return (
        <footer className="bg-[#292560] w-full">
            {/* ── Top section ── */}
            <div className="max-w-[1100px] mx-auto px-6 pt-14 pb-10">
                {/* Logo */}
                <div className="mb-12">
                    <Link href="/" className="inline-block">
                        <span className="text-white font-bold text-3xl leading-tight block">
                            Sustainable
                        </span>
                        <span className="text-white font-bold text-3xl leading-tight block">
                            Printing Co.
                        </span>
                    </Link>
                </div>

                {/* Columns grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1fr_1.4fr] gap-10 lg:gap-6">

                    {/* Products */}
                    <div>
                        <FooterHeading>Products</FooterHeading>
                        <div className="flex gap-10 sm:gap-14">
                            {/* Column 1 */}
                            <ul className="space-y-[6px]">
                                {productsCol1.map((item) => (
                                    <FooterLink key={item.label} label={item.label} href={item.href}  />
                                ))}
                            </ul>
                            {/* Column 2 */}
                            <ul className="space-y-[6px]">
                                {productsCol2.map((item) => (
                                    <FooterLink key={item.label} label={item.label} href={item.href}  />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* About us */}
                    <div>
                        <FooterHeading>About us</FooterHeading>
                        <ul className="space-y-[6px]">
                            {aboutLinks.map((item) => (
                                <FooterLink key={item.label} label={item.label} href={item.href}  />
                            ))}
                        </ul>
                    </div>

                    {/* Help / Useful Links */}
                    <div>
                        <FooterHeading>Help/Useful Links</FooterHeading>
                        <ul className="space-y-[6px]">
                            {helpLinks.map((item) => (
                                <FooterLink key={item.label} label={item.label} href={item.href}  />
                            ))}
                        </ul>
                    </div>

                    {/* Latest Blogs */}
                    <div>
                        <FooterHeading>Latest Blogs</FooterHeading>
                        <ul className="space-y-4 mb-8">
                            {latestBlogs.map((blog) => (
                                <li key={blog.label}>
                                    <Link
                                        href={blog.href}
                                        className="text-white/80 hover:text-white text-sm leading-snug transition-colors duration-150 block"
                                    >
                                         {blog.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Contact button */}
                        <Link
                          href="/contact"
                            className="
                inline-block border border-white text-white text-md font-medium
                px-8 py-3 rounded
                hover:text-green-600 
                hover:border-green-600
                transition-colors duration-200
                w-full text-center
              "
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Acknowledgement ── */}
            <div className="max-w-[1100px] mx-auto px-6 py-8">
                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                    Sustainable Printing Co. respectfully acknowledges the traditional
                    custodians of the land on which we live and work — the Wurundjeri
                    People and Elders past and present of the Kulin Nations.
                </p>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10" />

            {/* ── Bottom bar ── */}
            <div className="max-w-[1100px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-white/70 text-sm font-bold">
                    © 2021 All Rights. Reserved. <Link href={"/"} className="hover:text-green-600 hover:underline">Sustainable Printing Co.</Link> 
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-5">
                    <Link
                        href="#"
                        aria-label="Instagram"
                        className="text-white/80 hover:text-white transition-colors duration-150"
                    >
                        <InstagramIcon />
                    </Link>
                    <Link
                        href="#"
                        aria-label="Facebook"
                        className="text-white/80 hover:text-white transition-colors duration-150"
                    >
                        <FacebookIcon />
                    </Link>
                </div>
            </div>
        </footer>
    );
}