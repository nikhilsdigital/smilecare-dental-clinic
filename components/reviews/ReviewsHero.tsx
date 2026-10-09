import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageCircleHeart,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function ReviewsHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)]">
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
            <MessageCircleHeart size={30} strokeWidth={1.8} />
          </div>

          {/* Eyebrow */}
          <div className="mt-7">
            <span className="eyebrow">
              <span
                className="mr-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
                aria-hidden="true"
              />
              Patient Reviews
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-[var(--heading)] sm:text-5xl lg:text-[62px]">
            What Our Patients
            <br />
            <span className="text-gradient">Say About Us</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[var(--muted)] sm:text-base sm:leading-8 lg:text-lg">
            Discover what our patients say about their experience with our
            dental team, treatments and patient-focused care.
          </p>

          {/* Rating */}
          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-2xl border border-[var(--border)] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(9,47,85,0.06)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff7df] text-[#f5b83d]">
              <Star size={21} className="fill-[#f5b83d]" />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-[var(--heading)]">
                  4.9
                </span>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      className="fill-[#f5b83d] text-[#f5b83d]"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-0.5 text-[10px] font-semibold text-[var(--muted)]">
                Based on 500+ patient reviews
              </p>
            </div>
          </div>

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

          {/* Trust */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-7">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--success)]" />

              <span className="text-xs font-bold text-[var(--muted)]">
                Verified Patient Feedback
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[var(--primary)]" />

              <span className="text-xs font-bold text-[var(--muted)]">
                Patient-Centered Care
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
