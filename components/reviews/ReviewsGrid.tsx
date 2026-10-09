"use client";

import { useState } from "react";
import { CheckCircle2, Quote, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type ReviewCategory =
  | "All"
  | "General Dentistry"
  | "Cosmetic Dentistry"
  | "Dental Implants"
  | "Orthodontics";

type Review = {
  id: number;
  name: string;
  category: Exclude<ReviewCategory, "All">;
  role: string;
  rating: number;
  review: string;
  initials: string;
  avatarClass: string;
};

const categories: ReviewCategory[] = [
  "All",
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
];

const reviews: Review[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    category: "Dental Implants",
    role: "Dental Implant Patient",
    rating: 5,
    review:
      "I had been nervous about getting a dental implant, but the entire experience was much easier than I expected. The doctor explained every step clearly and the staff were extremely supportive.",
    initials: "AS",
    avatarClass: "bg-[#dceeff] text-[var(--primary-dark)]",
  },
  {
    id: 2,
    name: "Meera Krishnan",
    category: "Cosmetic Dentistry",
    role: "Cosmetic Dentistry Patient",
    rating: 5,
    review:
      "The team at SmileCare made me feel comfortable from my very first visit. I am extremely happy with my smile and really appreciate the care and attention I received throughout the treatment.",
    initials: "MK",
    avatarClass: "bg-[#d9f4ee] text-[#16886b]",
  },
  {
    id: 3,
    name: "Riya Thomas",
    category: "Orthodontics",
    role: "Orthodontic Patient",
    rating: 5,
    review:
      "The clinic is beautiful, clean and very professional. My orthodontic treatment has been a great experience so far. The doctor patiently answers all my questions and explains everything clearly.",
    initials: "RT",
    avatarClass: "bg-[#fff0dc] text-[#a66518]",
  },
  {
    id: 4,
    name: "Arjun Menon",
    category: "General Dentistry",
    role: "General Dentistry Patient",
    rating: 5,
    review:
      "The staff were friendly and professional. My regular dental checkup was comfortable and the dentist explained everything in a simple and clear way.",
    initials: "AM",
    avatarClass: "bg-[#eee7ff] text-[#6c4acb]",
  },
  {
    id: 5,
    name: "Sneha Nair",
    category: "Cosmetic Dentistry",
    role: "Smile Enhancement Patient",
    rating: 5,
    review:
      "I was looking for a natural-looking improvement to my smile and the team understood exactly what I wanted. The entire process was comfortable and well explained.",
    initials: "SN",
    avatarClass: "bg-[#ffe4ec] text-[#c34d75]",
  },
  {
    id: 6,
    name: "Vivek Raj",
    category: "General Dentistry",
    role: "Dental Care Patient",
    rating: 5,
    review:
      "Excellent experience from the reception to the consultation. The clinic is clean and modern, and I felt comfortable throughout my visit.",
    initials: "VR",
    avatarClass: "bg-[#e0f2ff] text-[#176da8]",
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

export default function ReviewsGrid() {
  const [activeCategory, setActiveCategory] = useState<ReviewCategory>("All");

  const filteredReviews =
    activeCategory === "All"
      ? reviews
      : reviews.filter((review) => review.category === activeCategory);

  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="Patient Stories"
          title="Real Experiences From Our Patients"
          description="Every patient has a different journey. Here are some experiences shared by people who trusted SmileCare with their dental care."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2.5 text-xs font-extrabold transition-all duration-200 sm:px-5 ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_8px_20px_rgba(22,132,232,0.18)]"
                    : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[#b8dcf3] hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="group relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_24px_55px_rgba(9,47,85,0.12)] sm:p-7"
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)] transition-transform duration-300 group-hover:rotate-6">
                <Quote size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <Stars rating={review.rating} />

                <span className="text-[10px] font-bold text-[var(--muted)]">
                  5.0
                </span>
              </div>

              {/* Category */}
              <div className="mt-5">
                <span className="rounded-full bg-[var(--surface-blue)] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.08em] text-[var(--primary-dark)]">
                  {review.category}
                </span>
              </div>

              {/* Review */}
              <p className="mt-5 min-h-[155px] text-sm leading-7 text-[var(--foreground)]">
                “{review.review}”
              </p>

              <div className="my-6 h-px w-full bg-[var(--border-light)]" />

              {/* Patient */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xs font-black ${review.avatarClass}`}
                >
                  {review.initials}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate text-sm font-extrabold text-[var(--heading)]">
                      {review.name}
                    </h3>

                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[var(--success)]"
                    />
                  </div>

                  <p className="mt-0.5 truncate text-[10px] font-semibold text-[var(--muted)]">
                    {review.role}
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

        {/* Empty */}
        {filteredReviews.length === 0 && (
          <div className="mt-12 rounded-[24px] border border-[var(--border)] bg-white p-10 text-center">
            <p className="text-sm font-semibold text-[var(--muted)]">
              No reviews found for this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
