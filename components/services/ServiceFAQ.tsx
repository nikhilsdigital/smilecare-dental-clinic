"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceData } from "@/data/services";

type Props = {
  service: ServiceData;
};

export default function ServiceFAQ({ service }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title={`Questions About ${service.title}?`}
          description="Here are some common questions patients may have before treatment."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {service.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen
                    ? "border-[#b8dcf3] shadow-[0_12px_35px_rgba(9,47,85,0.08)]"
                    : "border-[var(--border)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-extrabold leading-6 text-[var(--heading)] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
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
                    <p className="border-t border-[var(--border-light)] px-5 py-5 text-sm leading-7 text-[var(--muted)] sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
