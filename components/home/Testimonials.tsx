import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Dental Implant Patient",
    rating: 5,
    review:
      "I had been nervous about getting a dental implant, but the entire experience was much easier than I expected. The doctor explained every step clearly and the staff were extremely supportive.",
    image: "/images/testimonials/patient-01.png",
  },
  {
    name: "Meera Krishnan",
    role: "Cosmetic Dentistry Patient",
    rating: 5,
    review:
      "The team at SmileCare made me feel comfortable from my very first visit. I am extremely happy with my smile and really appreciate the care and attention I received throughout the treatment.",
    image: "/images/testimonials/patient-02.png",
  },
  {
    name: "Riya Thomas",
    role: "Orthodontic Patient",
    rating: 5,
    review:
      "The clinic is beautiful, clean and very professional. My orthodontic treatment has been a great experience so far. The doctor patiently answers all my questions and explains everything clearly.",
    image: "/images/testimonials/patient-03.jpg",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={15}
          className={
            index < rating ? "fill-[#f5b83d] text-[#f5b83d]" : "text-[#d8e2e9]"
          }
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Trusted by Patients, Loved by Families"
            description="Our patients are at the heart of everything we do. Here is what some of them say about their experience with our dental team."
          />

          <div className="hidden items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
              <Star size={19} className="fill-[#f5b83d] text-[#f5b83d]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black text-[var(--heading)]">
                  4.9
                </span>

                <Stars rating={5} />
              </div>

              <p className="mt-0.5 text-[10px] font-semibold text-[var(--muted)]">
                Based on 500+ patient reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_24px_55px_rgba(9,47,85,0.12)] sm:p-7"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)] transition-transform duration-300 group-hover:rotate-6">
                <Quote size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <Stars rating={testimonial.rating} />

                <span className="text-[10px] font-bold text-[var(--muted)]">
                  5.0
                </span>
              </div>

              {/* Review */}
              <p className="mt-6 min-h-[150px] text-sm leading-7 text-[var(--foreground)]">
                “{testimonial.review}”
              </p>

              <div className="my-6 h-px w-full bg-[var(--border-light)]" />

              {/* Patient */}
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate text-sm font-extrabold text-[var(--heading)]">
                      {testimonial.name}
                    </h3>

                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[var(--success)]"
                    />
                  </div>

                  <p className="mt-0.5 truncate text-[10px] font-semibold text-[var(--muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Verified */}
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#e8f8ef] px-2.5 py-1.5 text-[9px] font-extrabold text-[var(--success)]">
                <CheckCircle2 size={12} />
                Verified Patient
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-[var(--navy)] px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Star size={21} className="fill-[#f5b83d] text-[#f5b83d]" />
            </div>

            <div>
              <h3 className="text-base font-extrabold text-white">
                Happy with your SmileCare experience?
              </h3>

              <p className="mt-1 text-xs leading-5 text-white/65">
                Your feedback helps other patients choose the right dental care.
              </p>
            </div>
          </div>

          <Link href="/reviews" className="btn btn-light btn-sm shrink-0">
            Read More Reviews
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
