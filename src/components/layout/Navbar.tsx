"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const megaDropdownCategories = [
  {
    title: "Cards",
    items: [
      "Business Cards", "Postcards", "Greeting Cards", "Thank You Cards",
      "Bookmarks", "Christmas Cards", "Discount Cards", "Appointment Cards",
      "Loyalty Cards", "Birth Announcement Cards", "Invitations",
    ],
  },
  {
    title: "Stationery",
    items: ["Brochures", "Letterhead", "Compliment Slips", "Wrapping Paper"],
  },
  {
    title: "Marketing",
    items: ["Flyers", "Posters", "Swing Tags"],
  },
  {
    title: "Stickers",
    items: ["Adhesive Labels", "Circle Stickers", "Square Stickers", "Rectangle Stickers"],
  },
  {
    title: "Books",
    items: ["Books", "Booklets", "Reports", "Calendars", "Annual Reports"],
  },
  {
    title: "Event Stationery",
    items: ["Save The Date Cards", "Thank You Cards", "Invitations"],
  },
];

const navLinks = [
  { label: "Products & Prices", dropdownType: "mega" as const, hasMobileChevron: true },
  { label: "Free Sample Pack", dropdownType: null, hasMobileChevron: false },
  { label: "Request A Custom Quote", dropdownType: null, hasMobileChevron: false },
  {
    label: "Sustainability",
    dropdownType: "simple" as const,
    hasMobileChevron: true,
    dropdownItems: [
      "Why Sustainable", "Vegetable Based Inks", "Environmentally Friendly",
      "Reducing Waste", "Green Power", "Recycled Paper",
    ],
  },
  {
    label: "Help & Contact",
    dropdownType: "simple" as const,
    hasMobileChevron: true,
    dropdownItems: ["FAQ", "Artwork Specification Guide", "Contact Us", "Blogs"],
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [simpleDropdownLeft, setSimpleDropdownLeft] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

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
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Image
            height={90}
            alt="Sustainable Printing Co."
            width={180}
            src={'/images/logo.png'}
            className="w-[120px] lg:w-[180px] h-auto"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 ml-10">
          {navLinks.map(({ label, dropdownType }) =>
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
              <a
                key={label}
                href="#"
                className="text-[14px] font-medium text-gray-800 border-b-2 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f] transition-colors duration-150 whitespace-nowrap pb-[2px]"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Desktop auth */}
        <div className="hidden lg:flex items-center gap-5 ml-auto shrink-0">
          <a href="#" className="text-[14px] text-gray-500 border-b-2 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f] transition-colors duration-150 pb-[2px]">Login</a>
          <a href="#" className="text-[14px] text-gray-500 border-b-2 border-transparent hover:text-[#3d9e5f] hover:border-[#3d9e5f] transition-colors duration-150 pb-[2px]">Account</a>
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
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full bg-white border-t border-gray-100 shadow-lg z-50 w-[90vw] max-w-[900px]"
          onMouseEnter={() => handleMouseEnter(activeDropdown, "mega")}
          onMouseLeave={scheduleClose}
        >
          <div className="px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {megaDropdownCategories.map(({ title, items }) => (
                <div key={title}>
                  <p className="font-semibold text-gray-900 text-[13px] mb-3">{title}</p>
                  <ul className="space-y-[10px]">
                    {items.map((item) => (
                      <Link key={item}
                        href="#" className="text-[13px] text-gray-600 hover:text-[#3d9e5f] transition-colors duration-150 block"
                      >
                        {item}
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
          className="hidden lg:block absolute top-full bg-white border border-gray-100 shadow-lg z-50 min-w-[220px] py-2"
          style={{ left: simpleDropdownLeft }}
          onMouseEnter={() => handleMouseEnter(activeDropdown, "simple")}
          onMouseLeave={scheduleClose}
        >
          {activeLink.dropdownItems.map((item) => (
            <Link key={item}
              href="#"
              className="block px-5 py-[10px] text-[14px] text-gray-700 hover:text-[#3d9e5f] hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </ul>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-[70px] z-30 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="lg:hidden fixed left-0 top-[70px] bottom-0 z-40 w-1/2 min-w-[280px] overflow-y-auto bg-[#faf6f0]">

            {navLinks.map(({ label, hasMobileChevron, dropdownItems, dropdownType }) => (
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
                                  <Link key={item}
                                    href="#" className="border-t border-gray-200 block px-10 py-3 text-[13px] text-gray-700 hover:text-[#3d9e5f] bg-[#f5f0e8] transition-colors duration-150">
                                    {item}
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
                        {dropdownItems.map((item) => (
                          <Link key={item}
                            href="#" className=" border-t border-gray-200block px-8 py-3 text-[13px] text-gray-700 hover:text-[#3d9e5f] bg-[#f5f0e8] transition-colors duration-150">
                            {item}
                          </Link>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href="#" className="block px-5 py-4 text-[15px] font-semibold text-gray-800 hover:text-[#3d9e5f] transition-colors duration-150">
                    {label}
                  </a>
                )}
              </div>
            ))}

            <div className="border-b border-gray-200">
              <a href="#" className="block px-5 py-4 text-[15px] font-semibold text-[#3d9e5f] hover:text-[#2d7a47] transition-colors duration-150">Login</a>
            </div>
            <div className="border-b border-gray-200">
              <a href="#" className="block px-5 py-4 text-[15px] font-semibold text-[#3d9e5f] hover:text-[#2d7a47] transition-colors duration-150">Account</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
