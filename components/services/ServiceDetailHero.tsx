import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import type { ServiceData } from "@/data/services";

type Props = {
  service: ServiceData;
};

export default function ServiceDetailHero({ service }: Props) {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[var(--surface-blue)] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-20">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow">Dental Treatment</span>

              <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-[var(--primary)] shadow-sm">
                {service.number}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[58px]">
              {service.title}
            </h1>

            <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-[var(--primary-dark)]">
              {service.shortDescription}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base sm:leading-8">
              {service.description}
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
                href="/contact"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Contact Clinic
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.benefits.slice(0, 4).map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 text-xs font-bold text-[var(--foreground)]"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[var(--success)]"
                  />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_70px_rgba(9,47,85,0.14)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#092f55]/30 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="absolute bottom-[-18px] left-4 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_rgba(9,47,85,0.14)] sm:left-[-18px]">
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                SmileCare
              </div>

              <div className="mt-1 text-sm font-black text-[var(--heading)]">
                Patient-Centered Care
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
