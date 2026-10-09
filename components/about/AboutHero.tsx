import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="relative z-10">
            <span className="eyebrow">About SmileCare</span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[58px]">
              Modern Dentistry.
              <br />
              <span className="text-gradient">Compassionate Care.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              At SmileCare Dental Clinic, we believe exceptional dental care
              should be professional, comfortable and personalized around every
              patient.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/appointment"
                className="btn btn-primary w-full sm:w-auto"
              >
                <CalendarDays size={18} />
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/doctors"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Meet Our Doctors
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
                <CheckCircle2 size={16} className="text-[var(--success)]" />
                Experienced Specialists
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[var(--foreground)]">
                <CheckCircle2 size={16} className="text-[var(--success)]" />
                Modern Technology
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(9,47,85,0.13)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/about-clinic.png"
                  alt="Modern SmileCare Dental Clinic interior"
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

            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white bg-white p-4 shadow-[0_18px_45px_rgba(9,47,85,0.14)] sm:left-[-18px]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                  <span className="text-sm font-black">15+</span>
                </div>

                <div>
                  <div className="text-sm font-black text-[var(--heading)]">
                    Years of Experience
                  </div>

                  <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                    Trusted dental care
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
