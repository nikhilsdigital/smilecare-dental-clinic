import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import type { DoctorData } from "@/data/doctors";

type DoctorProfileHeroProps = {
  doctor: DoctorData;
};

export default function DoctorProfileHero({ doctor }: DoctorProfileHeroProps) {
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
        {/* Breadcrumb */}
        <div className="relative z-10 flex items-center gap-2 pt-7 text-xs font-semibold text-[var(--muted)] sm:pt-9">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <Link
            href="/doctors"
            className="transition-colors hover:text-[var(--primary)]"
          >
            Doctors
          </Link>

          <ChevronRight size={14} />

          <span className="truncate text-[var(--primary)]">{doctor.name}</span>
        </div>

        <div className="grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16">
          {/* Doctor Image */}
          <div className="relative order-1">
            <div className="relative mx-auto max-w-[500px]">
              <div className="relative overflow-hidden rounded-[32px] bg-[var(--surface-blue)] shadow-[0_25px_70px_rgba(9,47,85,0.14)] sm:rounded-[38px]">
                <div className="relative aspect-[4/4.8] w-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 45vw"
                    className="object-cover object-top"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#092f55]/35 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute left-3 top-5 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_16px_40px_rgba(9,47,85,0.14)] backdrop-blur-md sm:left-[-18px] sm:top-8 sm:p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                    <Award size={20} />
                  </div>

                  <div>
                    <div className="text-sm font-black text-[var(--heading)] sm:text-base">
                      {doctor.experience}
                    </div>

                    <div className="mt-0.5 text-[9px] font-semibold text-[var(--muted)]">
                      Professional Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-[-16px] right-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_18px_45px_rgba(9,47,85,0.15)] sm:bottom-[-20px] sm:right-5 sm:px-5 sm:py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff7df] text-[#f5b83d]">
                    <Star size={19} className="fill-[#f5b83d]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg font-black text-[var(--heading)]">
                        {doctor.rating}
                      </span>

                      <Star
                        size={13}
                        className="fill-[#f5b83d] text-[#f5b83d]"
                      />
                    </div>

                    <p className="text-[10px] font-semibold text-[var(--muted)]">
                      {doctor.reviews}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className="pointer-events-none absolute -bottom-8 -left-8 -z-10 h-24 w-24 rounded-full border-[14px] border-[#dff3ff] sm:-bottom-12 sm:-left-12 sm:h-32 sm:w-32 sm:border-[18px]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Doctor Information */}
          <div className="relative z-10 order-2">
            <span className="eyebrow">
              <span
                className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                aria-hidden="true"
              />
              Dental Specialist
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[58px]">
              {doctor.name}
            </h1>

            <p className="mt-3 text-lg font-extrabold text-[var(--primary)]">
              {doctor.specialization}
            </p>

            {/* Qualification */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[var(--surface-blue)] px-4 py-2 text-xs font-extrabold text-[var(--primary-dark)]">
                {doctor.qualification}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[var(--muted)] shadow-sm">
                {doctor.experience}
              </span>
            </div>

            {/* Bio */}
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              {doctor.shortBio}
            </p>

            {/* Trust Points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Patient-centered dental care",
                "Modern treatment approach",
                "Personalized treatment planning",
                "Comfort-focused experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef] text-[var(--success)]">
                    <CheckCircle2 size={16} />
                  </span>

                  <span className="text-xs font-bold leading-5 text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
