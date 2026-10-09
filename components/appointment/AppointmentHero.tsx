import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function AppointmentHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 py-14 text-center sm:py-20 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-[0_12px_35px_rgba(9,47,85,0.09)]">
            <CalendarDays size={30} />
          </div>

          <div className="mt-7">
            <span className="eyebrow">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
              Book an Appointment
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[60px]">
            Your Healthier Smile
            <br />
            <span className="text-gradient">Starts Here.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
            Book a convenient appointment with our dental team and take the
            first step toward better oral health and a more confident smile.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--success)]" />
              <span className="text-xs font-bold text-[var(--muted)]">
                Easy Booking
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[var(--primary)]" />
              <span className="text-xs font-bold text-[var(--muted)]">
                Patient-Focused Care
              </span>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-2 text-xs font-extrabold text-[var(--primary)]"
            >
              Contact Clinic
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
