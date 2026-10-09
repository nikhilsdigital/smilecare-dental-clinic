import { CheckCircle2, HeartHandshake } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceData } from "@/data/services";

type Props = {
  service: ServiceData;
};

export default function ServiceBenefitsDetail({ service }: Props) {
  return (
    <section className="section bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Benefits */}
          <div>
            <SectionHeading
              eyebrow="Treatment Benefits"
              title="What This Treatment Can Offer"
              description="Your dentist will evaluate your individual needs and explain which benefits are relevant to your situation."
            />

            <div className="mt-8 space-y-3">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e8f8ef] text-[var(--success)]">
                    <CheckCircle2 size={17} />
                  </span>

                  <span className="text-sm font-bold text-[var(--foreground)]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="rounded-[30px] bg-[var(--surface)] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-sm">
              <HeartHandshake size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-[var(--heading)]">
              Who May Benefit?
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              This treatment may be considered for patients experiencing or
              looking for the following. A professional consultation is required
              to determine whether it is right for you.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-xl bg-white p-3"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-[var(--primary)]"
                  />

                  <span className="text-xs font-semibold leading-5 text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
