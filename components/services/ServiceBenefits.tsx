import {
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Care",
    description:
      "We follow careful clinical protocols and prioritize patient safety throughout every treatment.",
  },
  {
    icon: Microscope,
    title: "Modern Technology",
    description:
      "Modern dental tools and techniques help our team provide precise and efficient treatment.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    description:
      "Your treatment plan is designed around your specific dental needs, concerns and goals.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Experience",
    description:
      "We create a calm and welcoming environment to make your dental visit more comfortable.",
  },
];

export default function ServiceBenefits() {
  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Our Care"
          title="More Than Treatment. A Better Dental Experience."
          description="We combine clinical expertise, technology and genuine patient care to make every visit more comfortable and reassuring."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[24px] border border-[var(--border)] bg-white p-6 text-center shadow-[0_6px_25px_rgba(9,47,85,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(9,47,85,0.08)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-base font-extrabold text-[var(--heading)]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
