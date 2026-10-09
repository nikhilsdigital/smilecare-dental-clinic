import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#eaf8ff] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 py-16 text-center sm:py-20 lg:py-24">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-[0_12px_35px_rgba(9,47,85,0.09)]">
            <Camera size={30} strokeWidth={1.8} />
          </div>

          {/* Eyebrow */}
          <div className="mt-7">
            <span className="eyebrow">
              <span
                className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                aria-hidden="true"
              />
              Our Gallery
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[62px]">
            A Look Inside
            <br />
            <span className="text-gradient">SmileCare</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8 lg:text-lg">
            Explore our modern clinic, advanced dental technology and
            comfortable treatment environment designed around your care.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/appointment"
              className="btn btn-primary w-full sm:w-auto"
            >
              <CalendarDays size={18} />
              Book Appointment
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="btn btn-secondary w-full sm:w-auto"
            >
              Contact Clinic
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--success)]" />
              <span className="text-xs font-bold text-[var(--muted)]">
                Modern Clinic
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--muted)]">
                Advanced Technology
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--success)]" />
              <span className="text-xs font-bold text-[var(--muted)]">
                Patient-Focused Environment
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
