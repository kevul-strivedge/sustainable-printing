"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "next/navigation";
import { getNavHref } from "@/src/constants/seoMeta";

const megaDropdownCategories = [
  {
    title: "Cards",
    items: [
      { label: "Business Cards", slug: "business-cards" },
      { label: "Postcards", slug: "postcards" },
      { label: "Greeting Cards", slug: "greeting-cards" },
      { label: "Thank You Cards", slug: "thank-you-cards" },
      { label: "Bookmarks", slug: "bookmarks" },
      { label: "Christmas Cards", slug: "christmas-cards" },
      { label: "Discount Cards", slug: "discount-cards" },
      { label: "Appointment Cards", slug: "appointment-cards" },
      { label: "Loyalty Cards", slug: "loyalty-cards" },
      { label: "Birth Announcement Cards", slug: "birth-announcement-cards" },
      { label: "Invitations", slug: "invitations" },
    ],
  },

  {
    title: "Stationery",
    items: [
      { label: "Brochures", slug: "brochures" },
      { label: "Letterhead", slug: "letterhead" },
      { label: "Compliment Slips", slug: "compliment-slips" },
      { label: "Wrapping Paper", slug: "wrapping-paper" },
    ],
  },

  {
    title: "Marketing",
    items: [
      { label: "Flyers", slug: "flyers" },
      { label: "Posters", slug: "posters" },
      { label: "Swing Tags", slug: "swing-tags" },
    ],
  },

  {
    title: "Stickers",
    items: [
      { label: "Adhesive Labels", slug: "adhesive-labels" },
      { label: "Circle Stickers", slug: "circle-stickers" },
      { label: "Square Stickers", slug: "square-stickers" },
      { label: "Rectangle Stickers", slug: "rectangle-stickers" },
    ],
  },

  {
    title: "Books",
    items: [
      { label: "Books", slug: "books" },
      { label: "Booklets", slug: "booklets" },
      { label: "Reports", slug: "reports" },
      { label: "Calendars", slug: "calendars" },
      { label: "Annual Reports", slug: "annual-reports" },
    ],
  },

  {
    title: "Event Stationery",
    items: [
      { label: "Save The Date Cards", slug: "save-the-date-cards" },
      { label: "Thank You Cards", slug: "thank-you-cards" },
      { label: "Invitations", slug: "invitations" },
    ],
  },
];

const navLinks = [
  { label: "Products & Prices", href: "/products", dropdownType: "mega" as const, hasMobileChevron: true },
  { label: "Free Sample Pack", href: "/requestsample",  dropdownType: null, hasMobileChevron: false },
  { label: "Request A Custom Quote", href: "/custom-quote", dropdownType: null, hasMobileChevron: false },
  {
    label: "Sustainability",
    dropdownType: "simple" as const,
    hasMobileChevron: true,
    dropdownItems: [
      { label: "Why Sustainable", href: "/why-we-print-sustainably" },
      { label: "Vegetable Based Inks", href: "/environmentally-friendly-inks-toner" },
      { label: "Environmentally Friendly", href: "/environmentally-friendly-inks-toner" },
      { label: "Reducing Waste", href: "/reducing-waste" },
      { label: "Green Power", href: "/greenpower" },
      { label: "Recycled Paper", href: "/recycled-paper" },
    ],
  },
  {
    label: "Help & Contact",
    dropdownType: "simple" as const,
    hasMobileChevron: true,
    dropdownItems: [
      { label: "FAQ", href: "/faq" },
      { label: "Artwork Specification Guide", href: "/docs/artwork-specification-guide.pdf" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [simpleDropdownLeft, setSimpleDropdownLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  function handleLogout() {
    logout();
    router.push("/");
    setMobileOpen(false);
  }

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  function handleMouseEnter(label: string, type: "mega" | "simple" | null) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (type === "simple") {
      const btn = btnRefs.current[label];
      const header = headerRef.current;
      if (btn && header) {
        const btnRect = btn.getBoundingClientRect();
        const headerRect = header.getBoundingClientRect();
        setSimpleDropdownLeft(btnRect.left - headerRect.left);
      }
    }
    setActiveDropdown(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function toggleSection(label: string) {
    setOpenSection((s) => (s === label ? null : label));
    setOpenCategory(null);
  }

  function toggleCategory(title: string) {
    setOpenCategory((c) => (c === title ? null : title));
  }

  const activeLink = navLinks.find((l) => l.label === activeDropdown);

  return (
    <header ref={headerRef} className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12 h-[70px] lg:h-[120px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            height={90}
            alt="Sustainable Printing Co."
            width={180}
            src={'/images/logo.png'}
            className="w-[120px] lg:w-[180px] h-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 ml-10">
          {navLinks.map(({ label, dropdownType,href }) =>
            dropdownType ? (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(label, dropdownType)}
                onMouseLeave={scheduleClose}
              >
                <button
                  ref={(el) => { btnRefs.current[label] = el; }}
                  className={`text-[14px] font-medium transition-colors duration-150 pb-[2px] cursor-pointer border-b-2 whitespace-nowrap ${activeDropdown === label
                    ? "text-[#3d9e5f] border-[#3d9e5f]"
                    : "text-gray-800 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f]"
                    }`}
                >
                  {label}
                </button>
              </div>
            ) : (
              <Link
                key={label}
                href={href || "/"}
                className="text-[14px] font-medium text-gray-800 border-b-2 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f] transition-colors duration-150 whitespace-nowrap pb-[2px]"
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop auth */}
        <div className="hidden lg:flex items-center gap-5 ml-auto shrink-0">
          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="text-[14px] text-gray-500 border-b-2 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f] transition-colors duration-150 pb-0.5"
              >
                Logout
              </button>
              {/* User name — hover triggers account dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("__user__", "simple")}
                onMouseLeave={scheduleClose}
              >
                <button
                  ref={(el) => { btnRefs.current["__user__"] = el; }}
                  className={`text-[14px] font-semibold transition-colors duration-150 pb-0.5 border-b-2 whitespace-nowrap cursor-pointer ${
                    activeDropdown === "__user__"
                      ? "text-[#3d9e5f] border-[#3d9e5f]"
                      : "text-[#292560] border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f]"
                  }`}
                >
                  {user.firstName} {user.lastName}
                </button>
              </div>
            </>
          ) : (
            // Single "Account" button that opens the login page. (No public
            // self-registration flow — accounts are provisioned out of band.)
            <Link
              href="/login"
              className="text-[14px] font-semibold text-white bg-[#004E24] hover:bg-[#003a1b] px-4 py-1.5 rounded-full transition-colors duration-150"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger toggle */}
        <button
          className="lg:hidden ml-auto p-2 text-gray-700 hover:text-[#3d9e5f] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Desktop mega dropdown — centered */}
      {activeDropdown && activeLink?.dropdownType === "mega" && (
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full bg-white border-t border-gray-100 shadow-lg z-50 w-[90vw] max-w-225"
          onMouseEnter={() => handleMouseEnter(activeDropdown, "mega")}
          onMouseLeave={scheduleClose}
        >
          <div className="px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {megaDropdownCategories.map(({ title, items }) => (
                <div key={title}>
                  <p className="font-semibold text-gray-900 text-[13px] mb-3">{title}</p>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        href={getNavHref(item.slug)}
                        className="text-[13px] text-gray-600 hover:text-[#3d9e5f] transition-colors duration-150 block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop simple dropdown — aligned under its nav button */}
      {activeDropdown && activeLink?.dropdownType === "simple" && activeLink.dropdownItems && (
        <ul
          className="hidden lg:block absolute top-full bg-white border border-gray-100 shadow-lg z-50 min-w-55 py-2"
          style={{ left: simpleDropdownLeft }}
          onMouseEnter={() => handleMouseEnter(activeDropdown, "simple")}
          onMouseLeave={scheduleClose}
        >
          {activeLink.dropdownItems.map((item) => {
            const isPdf = item.href.endsWith(".pdf");
            const className = "block px-5 py-2.5 text-[14px] text-gray-700 hover:text-[#3d9e5f] hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap";
            return isPdf ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </ul>
      )}

      {/* Desktop user account dropdown */}
      {activeDropdown === "__user__" && (
        <ul
          className="hidden lg:block absolute top-full bg-white border border-gray-100 shadow-lg z-50 min-w-55 py-2"
          style={{ left: simpleDropdownLeft }}
          onMouseEnter={() => handleMouseEnter("__user__", "simple")}
          onMouseLeave={scheduleClose}
        >
          {[
            { label: "My History", href: "/my-history" },
            { label: "My Details", href: "/myprofile" },
            { label: "Request New Quote", href: "/custom-quote" },
            { label: "Request Free Sample", href: "/requestsample" },
          ].map((item) => (
            <Link key={item.label}
              href={item.href}
              className="block px-5 py-2.5 text-[14px] text-gray-700 hover:text-[#3d9e5f] hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <li className="border-t border-gray-100 mt-1 pt-1">
            <button
              onClick={handleLogout}
              className="w-full text-left block px-5 py-2.5 text-[14px] text-gray-500 hover:text-[#3d9e5f] hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap"
            >
              Logout
            </button>
          </li>
        </ul>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-17.5 z-30 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="lg:hidden fixed left-0 top-17.5 bottom-0 z-40 w-1/2 min-w-70 overflow-y-auto bg-[#faf6f0]">

            {navLinks.map(({ label, href, hasMobileChevron, dropdownItems, dropdownType }) => (
              <div key={label} className="border-b border-gray-200">
                {hasMobileChevron ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-[15px] font-semibold text-gray-800 text-left"
                      onClick={() => toggleSection(label)}
                    >
                      {label}
                      <ChevronDown className={`transition-transform duration-200 ${openSection === label ? "rotate-180" : ""}`} />
                    </button>

                    {openSection === label && dropdownType === "mega" && (
                      <div>
                        {megaDropdownCategories.map(({ title, items }) => (
                          <div key={title} className="border-t border-gray-200">
                            <button
                              className="w-full flex items-center justify-between px-8 py-3 text-[14px] font-semibold text-gray-800 text-left bg-[#f5f0e8]"
                              onClick={() => toggleCategory(title)}
                            >
                              {title}
                              <ChevronDown className={`transition-transform duration-200 ${openCategory === title ? "rotate-180" : ""}`} />
                            </button>
                            {openCategory === title && (
                              <ul>
                                {items.map((item) => (
                                  <Link
                                    key={item.slug}
                                    href={getNavHref(item.slug)}
                                    className="border-t border-gray-200 block px-10 py-3 text-[13px] text-gray-700 hover:text-[#3d9e5f] bg-[#f5f0e8] transition-colors duration-150"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {openSection === label && dropdownType === "simple" && dropdownItems && (
                      <ul>
                        {dropdownItems.map((item) => {
                          const isPdf = item.href.endsWith(".pdf");
                          const className = "border-t border-gray-200 block px-8 py-3 text-[13px] text-gray-700 hover:text-[#3d9e5f] bg-[#f5f0e8] transition-colors duration-150";
                          return isPdf ? (
                            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={() => setMobileOpen(false)}>
                              {item.label}
                            </a>
                          ) : (
                            <Link key={item.label} href={item.href} className={className} onClick={() => setMobileOpen(false)}>
                              {item.label}
                            </Link>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={href ?? "/"} onClick={() => setMobileOpen(false)} className="block px-5 py-4 text-[15px] font-semibold text-gray-800 hover:text-[#3d9e5f] transition-colors duration-150">
                    {label}
                  </Link>
                )}
              </div>
            ))}

            {user ? (
              <div className="border-b border-gray-200">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-[15px] font-semibold text-[#292560] text-left"
                  onClick={() => toggleSection("__user__")}
                >
                  {user.firstName} {user.lastName}
                  <ChevronDown className={`transition-transform duration-200 ${openSection === "__user__" ? "rotate-180" : ""}`} />
                </button>
                {openSection === "__user__" && (
                  <ul>
                    {[
                      { label: "My History", href: "/my-history" },
                      { label: "My Details", href: "/myprofile" },
                      { label: "Request New Quote", href: "/custom-quote" },
                      { label: "Request Free Sample", href: "/requestsample" },
                    ].map((item) => (
                      <Link key={item.label}
                        href={item.href}
                        className="border-t border-gray-200 block px-8 py-3 text-[13px] text-gray-700 hover:text-[#3d9e5f] bg-[#f5f0e8] transition-colors duration-150"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <button
                      onClick={handleLogout}
                      className="border-t border-gray-200 w-full text-left block px-8 py-3 text-[13px] text-[#3d9e5f] hover:text-[#2d7a47] bg-[#f5f0e8] transition-colors duration-150"
                    >
                      Logout
                    </button>
                  </ul>
                )}
              </div>
            ) : (
              <div className="border-b border-gray-200">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-4 text-[15px] font-semibold text-[#3d9e5f] hover:text-[#2d7a47] transition-colors duration-150"
                >
                  Account
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
}
