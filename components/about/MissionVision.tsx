import { Eye, HeartHandshake, Target } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    icon: Target,
    label: "Our Mission",
    title: "Better Dental Care for Every Patient",
    description:
      "To provide reliable, personalized and comfortable dental care while helping patients make informed decisions about their oral health.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "Creating Healthier Smiles for Life",
    description:
      "To become a trusted destination for modern dentistry where clinical excellence, technology and genuine patient care come together.",
  },
  {
    icon: HeartHandshake,
    label: "Our Promise",
    title: "Care You Can Feel Confident About",
    description:
      "We promise to listen carefully, communicate clearly and put patient comfort, safety and long-term oral health first.",
  },
];

export default function MissionVision() {
  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our Mission, Vision & Promise"
          description="Everything we do is guided by our commitment to responsible dentistry and a better patient experience."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-[0_6px_25px_rgba(9,47,85,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_20px_45px_rgba(9,47,85,0.09)] sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <div className="mt-5 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--primary)]">
                  {item.label}
                </div>

                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-[var(--heading)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
