import { Award, HeartHandshake, ShieldCheck, Star } from "lucide-react";

import Container from "@/components/ui/Container";

const overviewItems = [
  {
    value: "4.9/5",
    title: "Overall Rating",
    description: "Excellent patient satisfaction",
    icon: Star,
    star: true,
  },
  {
    value: "500+",
    title: "Patient Reviews",
    description: "Feedback from our patients",
    icon: HeartHandshake,
    star: false,
  },
  {
    value: "15+",
    title: "Years Experience",
    description: "Trusted dental expertise",
    icon: Award,
    star: false,
  },
  {
    value: "98%",
    title: "Patient Satisfaction",
    description: "Focused on quality care",
    icon: ShieldCheck,
    star: false,
  },
];

export default function ReviewsOverview() {
  return (
    <section className="border-y border-[var(--border-light)] bg-white">
      <Container>
        <div className="grid grid-cols-2 divide-x divide-y divide-[var(--border)] lg:grid-cols-4 lg:divide-y-0">
          {overviewItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-center gap-3 px-4 py-7 sm:gap-4 sm:px-6 sm:py-8 lg:px-7"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)] transition-all duration-200 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon
                    size={20}
                    className={
                      item.star
                        ? "fill-[#f5b83d] text-[#f5b83d] group-hover:fill-white group-hover:text-white"
                        : ""
                    }
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-xl font-black tracking-[-0.03em] text-[var(--heading)] sm:text-2xl">
                    {item.value}
                  </div>

                  <div className="mt-0.5 truncate text-xs font-bold text-[var(--foreground)] sm:text-sm">
                    {item.title}
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
