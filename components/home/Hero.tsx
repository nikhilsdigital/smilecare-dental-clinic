import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#eaf8ff] blur-3xl"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <Container>
        <div className="flex flex-col gap-10 py-8 sm:gap-12 sm:py-12 lg:grid lg:min-h-[calc(100vh-116px)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-20">
          {/* =================================================
              MOBILE IMAGE / DESKTOP RIGHT IMAGE

              IMPORTANT:
              Because this comes FIRST in the DOM,
              image appears FIRST on mobile.

              On desktop, CSS moves it visually to the
              right using lg:order-2.
          ================================================== */}

          <div className="relative z-10 order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-[620px]">
              {/* Main Image Wrapper */}
              <div className="relative overflow-hidden rounded-[28px] bg-[var(--surface-blue)] shadow-[0_25px_70px_rgba(9,47,85,0.14)] sm:rounded-[34px] lg:rounded-[38px]">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/hero-dentist.png"
                    alt="Professional dentist providing comfortable dental care to a patient"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 52vw"
                    className="object-cover"
                  />

                  {/* Bottom Image Gradient */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#092f55]/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* =================================================
                  EXPERIENCE CARD
              ================================================== */}

              <div className="absolute left-3 top-5 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_16px_40px_rgba(9,47,85,0.14)] backdrop-blur-md sm:left-[-18px] sm:top-8 sm:p-4">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)] sm:h-11 sm:w-11">
                    <ShieldCheck size={20} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-lg font-black leading-none text-[var(--heading)] sm:text-xl">
                      15+
                    </div>

                    <div className="mt-1 text-[9px] font-bold text-[var(--muted)] sm:text-[10px]">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  OPEN TODAY CARD
              ================================================== */}

              <div className="absolute bottom-[-14px] right-3 rounded-2xl border border-white bg-white p-3 shadow-[0_18px_45px_rgba(9,47,85,0.15)] sm:bottom-[-20px] sm:right-5 sm:w-[220px] sm:p-4">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f8ef] text-[var(--success)]">
                    <Clock3 size={19} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[var(--success)]" />

                      <span className="text-xs font-extrabold text-[var(--success)]">
                        Open Today
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] text-[var(--muted)] sm:text-xs">
                      9:00 AM — 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DECORATIVE CIRCLE
              ================================================== */}

              <div
                className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-24 w-24 rounded-full border-[14px] border-[var(--surface-blue)] sm:-bottom-12 sm:-left-12 sm:h-32 sm:w-32 sm:border-[18px]"
                aria-hidden="true"
              />

              {/* Decorative Circle Top Right */}
              <div
                className="pointer-events-none absolute -right-5 -top-5 -z-10 h-20 w-20 rounded-full bg-[var(--surface-blue)] sm:-right-8 sm:-top-8 sm:h-24 sm:w-24"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* =================================================
              LEFT CONTENT

              On mobile this comes AFTER image.
              On desktop it appears on the LEFT.
          ================================================== */}

          <div className="relative z-10 order-2 lg:order-1">
            {/* =================================================
                EYEBROW
            ================================================== */}

            <div className="eyebrow">
              <span
                className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                aria-hidden="true"
              />
              Trusted Dental Care
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:mt-6 sm:text-5xl lg:text-[64px]">
              A Healthier Smile.
              <br />
              <span className="text-gradient">A Happier You.</span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              Experience modern, compassionate dental care designed around your
              comfort, confidence and long-term oral health.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              {/* Primary CTA */}
              <Link
                href="/appointment"
                className="btn btn-primary w-full sm:w-auto"
              >
                <CalendarDays size={18} />
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/services"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Explore Our Services
              </Link>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}

            <div className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-2">
              {/* Trust Point 1 */}
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--primary)]">
                  <CheckCircle2 size={18} />
                </span>

                <span className="text-xs font-bold leading-5 text-[var(--foreground)] sm:text-sm">
                  Experienced Dental Specialists
                </span>
              </div>

              {/* Trust Point 2 */}
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--primary)]">
                  <ShieldCheck size={18} />
                </span>

                <span className="text-xs font-bold leading-5 text-[var(--foreground)] sm:text-sm">
                  Advanced &amp; Safe Treatment
                </span>
              </div>
            </div>

            {/* =================================================
                PATIENT RATING
            ================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
              {/* Patient Avatars */}
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#dceeff] text-xs font-bold text-[var(--primary-dark)]">
                  A
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#d9f4ee] text-xs font-bold text-[#16886b]">
                  R
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#fff0dc] text-xs font-bold text-[#a66518]">
                  S
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[var(--primary)] text-[10px] font-black text-white">
                  +2K
                </div>
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center gap-1.5">
                  <Star size={15} className="fill-[#f5b83d] text-[#f5b83d]" />

                  <span className="text-sm font-extrabold text-[var(--heading)]">
                    4.9/5
                  </span>
                </div>

                <p className="mt-0.5 text-[10px] text-[var(--muted)] sm:text-xs">
                  Trusted by 2,000+ patients
                </p>
              </div>
            </div>

            {/* =================================================
                MOBILE QUICK INFO
            ================================================== */}

            <div className="mt-8 grid grid-cols-2 gap-3 sm:hidden">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="text-xl font-black text-[var(--heading)]">
                  15+
                </div>

                <div className="mt-1 text-[10px] font-semibold text-[var(--muted)]">
                  Years Experience
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="text-xl font-black text-[var(--heading)]">
                  2K+
                </div>

                <div className="mt-1 text-[10px] font-semibold text-[var(--muted)]">
                  Happy Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
