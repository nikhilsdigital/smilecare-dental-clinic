import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Orthodontics", href: "/services/orthodontics" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Patient Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Appointment CTA */}
      <div className="border-b border-white/10">
        <div className="container py-12 sm:py-14">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#1684e8] to-[#0b5fae] px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.15)] sm:px-8 sm:py-10 lg:px-10">
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/85">
                  Start Your Smile Journey
                </span>

                <h2 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                  Ready for a healthier, more confident smile?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
                  Book your consultation with our experienced dental team and
                  take the first step toward better oral health.
                </p>
              </div>

              <Link
                href="/appointment"
                className="btn shrink-0 !bg-white !text-[var(--navy)] shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:!bg-[#eaf8ff] hover:!text-[var(--navy)]"
              >
                <CalendarDays size={18} />
                <span className="font-extrabold !text-[var(--navy)]">
                  Book Appointment
                </span>
                <ArrowRight size={17} className="!text-[var(--navy)]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-black text-[var(--primary)]">
                S
              </div>

              <div className="leading-none">
                <div className="text-[17px] font-black tracking-[-0.03em]">
                  SmileCare
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#72cdf7]">
                  Dental Clinic
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Modern, compassionate dental care designed around your comfort,
              confidence and long-term oral health.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs font-black">f</span>

              <span className="text-xs font-black">◎</span>
              <span className="text-xs font-black">in</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-extrabold text-white">Our Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-xs font-medium text-white/55 transition hover:text-white"
                  >
                    <ArrowRight
                      size={13}
                      className="text-[#39b9f4] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-extrabold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-xs font-medium text-white/55 transition hover:text-white"
                  >
                    <ArrowRight
                      size={13}
                      className="text-[#39b9f4] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-extrabold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-xs leading-5 text-white/60 transition hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-[#39b9f4]" />
                <span>
                  +91 98765 43210
                  <br />
                  <span className="text-white/40">Call our clinic</span>
                </span>
              </a>

              <a
                href="mailto:info@smilecare.com"
                className="flex items-start gap-3 text-xs leading-5 text-white/60 transition hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-[#39b9f4]" />
                <span>info@smilecare.com</span>
              </a>

              <div className="flex items-start gap-3 text-xs leading-5 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#39b9f4]" />
                <span>
                  SmileCare Dental Clinic
                  <br />
                  Thrissur, Kerala, India
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs leading-5 text-white/60">
                <Clock3 size={16} className="mt-0.5 shrink-0 text-[#39b9f4]" />
                <span>
                  Mon - Sat
                  <br />
                  9:00 AM - 8:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-medium text-white/40 sm:text-xs">
            © {new Date().getFullYear()} SmileCare Dental Clinic. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5 text-[10px] font-semibold text-white/40 sm:text-xs">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
