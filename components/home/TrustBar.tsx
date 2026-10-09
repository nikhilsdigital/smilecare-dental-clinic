import { Award, HeartHandshake, ShieldCheck, Star } from "lucide-react";

import Container from "@/components/ui/Container";

const trustItems = [
  {
    value: "2,000+",
    label: "Happy Patients",
    description: "Patients who trust our care",
    icon: HeartHandshake,
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Professional dental expertise",
    icon: Award,
  },
  {
    value: "25+",
    label: "Dental Treatments",
    description: "Complete oral care solutions",
    icon: ShieldCheck,
  },
  {
    value: "4.9/5",
    label: "Patient Rating",
    description: "Based on patient reviews",
    icon: Star,
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-[var(--border-light)] bg-[var(--surface)]">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] lg:grid-cols-4 lg:divide-y-0">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group flex items-center gap-3 px-4 py-7 sm:gap-4 sm:px-6 sm:py-8 lg:px-7"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-[0_6px_18px_rgba(9,47,85,0.07)] transition duration-200 group-hover:-translate-y-1 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <div className="text-xl font-black tracking-[-0.03em] text-[var(--heading)] sm:text-2xl">
                    {item.value}
                  </div>

                  <div className="mt-0.5 truncate text-xs font-bold text-[var(--foreground)] sm:text-sm">
                    {item.label}
                  </div>

                  <p className="mt-1 hidden text-[10px] leading-4 text-[var(--muted)] sm:block">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
