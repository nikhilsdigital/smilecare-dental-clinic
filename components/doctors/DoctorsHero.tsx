import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function DoctorsHero() {
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
        <div className="relative flex min-h-[500px] items-center justify-center py-20 text-center sm:py-24 lg:min-h-[560px] lg:py-28">
          <div className="relative z-10 max-w-4xl">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-[0_12px_35px_rgba(9,47,85,0.09)]">
              <Stethoscope size={30} strokeWidth={1.8} />
            </div>

            {/* Eyebrow */}
            <div className="mt-7">
              <span className="eyebrow">
                <span
                  className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                  aria-hidden="true"
                />
                Our Dental Specialists
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[64px]">
              Meet the Experts
              <br />
              <span className="text-gradient">Behind Your Smile</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8 lg:text-lg">
              Our experienced dental specialists combine clinical expertise,
              modern technology and compassionate care to help you achieve a
              healthier and more confident smile.
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
                href="/services"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[var(--success)]" />
                <span className="text-xs font-bold text-[var(--muted)]">
                  Experienced Specialists
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-[var(--primary)]" />
                <span className="text-xs font-bold text-[var(--muted)]">
                  Modern & Safe Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
