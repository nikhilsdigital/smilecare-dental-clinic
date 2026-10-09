"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How do I book a dental appointment?",
    answer:
      "You can book an appointment online through our appointment page or contact our clinic directly by phone. Choose your preferred date and time, and our team will confirm your appointment.",
  },
  {
    question: "Do I need an appointment for a dental consultation?",
    answer:
      "Appointments are recommended so we can give you dedicated time with our dental team. However, if you have a dental emergency, please contact us directly and we will do our best to assist you as soon as possible.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "For most people, regular dental checkups every six months are a good general guideline. Your dentist may recommend a different schedule depending on your oral health and treatment needs.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "Modern dental treatments are designed to be as comfortable as possible. Our team explains the procedure beforehand and uses appropriate techniques to minimize discomfort during treatment.",
  },
  {
    question: "Do you provide emergency dental treatment?",
    answer:
      "Yes. If you experience severe tooth pain, dental trauma, swelling or another urgent dental problem, contact our clinic as soon as possible so our team can guide you on the next steps.",
  },
  {
    question: "Do you provide cosmetic and teeth whitening treatments?",
    answer:
      "Yes. We offer a range of cosmetic dental treatments, including professional teeth whitening and smile-enhancement options. Your dentist will first assess your oral health and recommend suitable treatment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Have Questions? We Have Answers."
          description="Find answers to some of the most common questions patients ask before visiting our dental clinic."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#b8dcf3] shadow-[0_12px_35px_rgba(9,47,85,0.08)]"
                    : "border-[var(--border)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-blue)] text-[10px] font-black text-[var(--primary)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-extrabold leading-6 text-[var(--heading)] sm:text-base">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[var(--primary)] text-white"
                        : "bg-[var(--surface)] text-[var(--heading)]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--border-light)] px-5 pb-5 pt-4 pl-[4.25rem] sm:px-6 sm:pl-[4.75rem]">
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-[var(--navy)] shadow-[0_25px_65px_rgba(9,47,85,0.16)]">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#39b9f4]/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:px-10 lg:py-11">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                <ShieldCheck size={25} />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-white/80">
                  Dental Emergency?
                </div>

                <h3 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  Don&apos;t wait with dental pain.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                  Contact our dental team for guidance and emergency care when
                  you need it most.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a href="tel:+919876543210" className="btn btn-light">
                <Phone size={17} />
                Call +91 98765 43210
              </a>
              <Link
                href="/appointment"
                className="btn border border-white/20 bg-white text-[var(--navy)] shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:bg-[#eaf8ff] hover:text-[var(--primary-dark)]"
              >
                <CalendarDays size={17} />
                Book Appointment
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
