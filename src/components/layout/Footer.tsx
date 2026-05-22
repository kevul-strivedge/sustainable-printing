import Link from "next/link";
import React from "react";

// Footer options
const productsCol1 = [
  { label: "All Products", href: "/products" },
  { label: "Business Cards", href: "/business-cards" },
  { label: "Postcards", href: "/postcards" },
  { label: "Flyers", href: "/flyers" },
  { label: "Posters", href: "/posters" },
  { label: "Stickers", href: "/circle-stickers" },
  { label: "Adhesive Labels", href: "/adhesive-labels" },
];

const productsCol2 = [
  { label: "Brochures", href: "/brochures" },
  { label: "Wrapping Paper", href: "/wrapping-paper" },
  { label: "Booklets", href: "/booklets" },
  { label: "Books", href: "/books" },
  { label: "Greeting Cards", href: "/greeting-cards" },
  { label: "Bookmarks", href: "/bookmarks" },
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

//Social Icons
function InstagramIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                    <Link href="#" className="inline-block">
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
                    © 2021 All Rights. Reserved. Sustainable Printing Co.
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