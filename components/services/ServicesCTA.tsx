import Link from "next/link";
import { ArrowRight, CalendarDays, Phone } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesCTA() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[var(--navy)] px-6 py-10 shadow-[0_25px_65px_rgba(9,47,85,0.14)] sm:px-10 sm:py-12">
          {/* Background Decoration */}
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[#39b9f4]/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Content */}
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/80">
                Need Dental Care?
              </span>

              <h2 className="mt-3 max-w-2xl text-2xl font-black tracking-[-0.035em] text-white sm:text-3xl">
                Let&apos;s find the right treatment for your smile.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
                Talk to our dental team and get personalized guidance based on
                your oral health needs.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              {/* Book Appointment */}
              <Link
                href="/appointment"
                className="btn !border-0 !bg-white !text-[var(--navy)] shadow-[0_12px_30px_rgba(255,255,255,0.12)] hover:!bg-[#eaf8ff] hover:!text-[var(--navy)]"
              >
                <CalendarDays size={17} className="!text-[var(--navy)]" />

                <span className="font-extrabold !text-[var(--navy)]">
                  Book Appointment
                </span>

                <ArrowRight size={16} className="!text-[var(--navy)]" />
              </Link>

              {/* Call Clinic */}
              <a
                href="tel:+919876543210"
                className="btn !border-white !bg-white !text-[var(--navy)] shadow-[0_10px_30px_rgba(255,255,255,0.10)] hover:!bg-[#eaf8ff] hover:!text-[var(--navy)]"
              >
                <Phone size={17} className="!text-[var(--navy)]" />

                <span className="font-extrabold !text-[var(--navy)]">
                  Call Clinic
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
