"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock3,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: true,
  },
  {
    label: "Doctors",
    href: "/doctors",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const serviceItems = [
  {
    label: "All Services",
    href: "/services",
  },
  {
    label: "General Dentistry",
    href: "/services/general-dentistry",
  },
  {
    label: "Cosmetic Dentistry",
    href: "/services/cosmetic-dentistry",
  },
  {
    label: "Dental Implants",
    href: "/services/dental-implants",
  },
  {
    label: "Orthodontics",
    href: "/services/orthodontics",
  },
  {
    label: "Teeth Whitening",
    href: "/services/teeth-whitening",
  },
  {
    label: "Preventive Care",
    href: "/services/preventive-care",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =====================================================
          TOP CONTACT BAR
      ====================================================== */}

      <div className="hidden bg-[var(--navy)] text-white md:block">
        <div className="container">
          <div className="flex min-h-10 items-center justify-between gap-4">
            {/* Left Contact Details */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs font-medium text-white/85 transition hover:text-white"
              >
                <Phone size={14} />
                <span>+91 98765 43210</span>
              </a>

              <a
                href="mailto:info@smilecare.com"
                className="flex items-center gap-2 text-xs font-medium text-white/85 transition hover:text-white"
              >
                <Mail size={14} />
                <span>info@smilecare.com</span>
              </a>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/85">
              <Clock3 size={14} />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div className="border-b border-[var(--border-light)] bg-white/95 backdrop-blur-xl">
        <div className="container">
          <div className="flex min-h-[76px] items-center justify-between gap-6">
            {/* =================================================
                LOGO
            ================================================== */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="group flex shrink-0 items-center gap-3"
            >
              {/* Logo Icon */}
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-[var(--primary)] shadow-[0_10px_25px_rgba(22,132,232,0.22)] transition duration-300 group-hover:scale-105">
                <span className="text-xl font-black text-white">S</span>

                <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-white/80" />
              </div>

              {/* Logo Text */}
              <div className="leading-none">
                <div className="text-[17px] font-black tracking-[-0.03em] text-[var(--heading)]">
                  SmileCare
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                  Dental Clinic
                </div>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <div key={item.label} className="group relative">
                  {/* Normal Nav Item */}
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[13px] font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                  >
                    {item.label}

                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {/* =================================================
                      SERVICES DROPDOWN
                  ================================================== */}

                  {item.dropdown && (
                    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-2 shadow-[0_20px_50px_rgba(9,47,85,0.14)]">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--primary)] ${
                              index === 0
                                ? "mb-1 border-b border-[var(--border-light)]"
                                : ""
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* =================================================
                DESKTOP APPOINTMENT BUTTON
            ================================================== */}

            <div className="hidden shrink-0 lg:block">
              <Link href="/appointment" className="btn btn-primary btn-sm">
                <CalendarDays size={16} />
                Book Appointment
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white text-[var(--heading)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] lg:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <div
        className={`overflow-hidden border-b border-[var(--border-light)] bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container pb-5 pt-3">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              {
                /* =================================================
                  MOBILE SERVICES MENU
              ================================================== */
              }

              if (item.dropdown) {
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                    >
                      <span>Services</span>

                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Services Items */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 border-l-2 border-[var(--surface-blue)] pl-3">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              {
                /* =================================================
                  NORMAL MOBILE NAV ITEM
              ================================================== */
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold text-[var(--foreground)] transition hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              MOBILE APPOINTMENT
          ================================================== */}

          <div className="mt-4">
            <Link
              href="/appointment"
              onClick={closeMobileMenu}
              className="btn btn-primary w-full"
            >
              <CalendarDays size={17} />
              Book Appointment
            </Link>
          </div>

          {/* =================================================
              MOBILE CONTACT
          ================================================== */}

          <div className="mt-5 rounded-2xl bg-[var(--surface)] p-4">
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm font-semibold text-[var(--foreground)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <Phone size={16} />
                </span>

                <span>+91 98765 43210</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@smilecare.com"
                className="flex items-center gap-3 text-sm font-semibold text-[var(--foreground)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <Mail size={16} />
                </span>

                <span>info@smilecare.com</span>
              </a>

              {/* Opening Hours */}
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--foreground)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <Clock3 size={16} />
                </span>

                <span>Mon - Sat · 9 AM - 8 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
