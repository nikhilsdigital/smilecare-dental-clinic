import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Phone } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      {/* Background Decoration */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#e5f6ff] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="relative z-10">
            <span className="eyebrow">Our Dental Services</span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[58px]">
              Complete Care for
              <br />
              <span className="text-gradient">Your Smile.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              From preventive checkups to advanced restorative and cosmetic
              treatments, our experienced dental team provides personalized care
              for every stage of your oral health journey.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {/* Appointment */}
              <Link
                href="/appointment"
                className="btn btn-primary w-full sm:w-auto"
              >
                <CalendarDays size={18} />
                <span>Book Appointment</span>
                <ArrowRight size={17} />
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Contact Our Clinic
              </Link>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Experienced Dental Specialists",
                "Modern Treatment Technology",
                "Comfort-Focused Care",
                "Personalized Treatment Plans",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]"
                >
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[var(--success)]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] bg-[var(--surface-blue)] shadow-[0_25px_70px_rgba(9,47,85,0.13)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/services/services-hero.png"
                  alt="Modern dental clinic treatment room"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#092f55]/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Floating Treatment Badge */}
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_rgba(9,47,85,0.14)] sm:left-[-18px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                  <span className="text-sm font-black">25+</span>
                </div>

                <div>
                  <div className="text-sm font-black text-[var(--heading)]">
                    Dental Treatments
                  </div>

                  <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                    Complete oral care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
