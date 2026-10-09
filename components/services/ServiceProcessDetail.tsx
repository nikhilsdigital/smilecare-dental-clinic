import { ArrowDown, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { ServiceData } from "@/data/services";

type Props = {
  service: ServiceData;
};

export default function ServiceProcessDetail({ service }: Props) {
  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="Treatment Journey"
          title="What to Expect"
          description="Every patient is different, so your dentist will personalize the treatment according to your individual needs."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-5 md:grid-cols-2">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-[0_6px_25px_rgba(9,47,85,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-sm font-black text-white shadow-[0_8px_20px_rgba(22,132,232,0.22)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[var(--heading)]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < service.process.length - 1 && (
                  <div className="mt-5 hidden justify-center md:flex">
                    <ArrowDown size={17} className="text-[var(--border)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-3 rounded-2xl border border-[#cde9d9] bg-[#f0fbf5] p-4">
          <CheckCircle2 size={19} className="shrink-0 text-[var(--success)]" />

          <p className="text-xs font-semibold leading-5 text-[#267354]">
            Your dentist will explain your treatment options, expected outcomes
            and appropriate follow-up care before proceeding.
          </p>
        </div>
      </Container>
    </section>
  );
}
