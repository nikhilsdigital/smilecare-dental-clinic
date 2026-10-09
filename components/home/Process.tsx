import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Heart,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Book Your Appointment",
    description:
      "Choose a convenient date and time that works best for you and request your dental appointment.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Meet Your Dentist",
    description:
      "Our dental specialist will understand your concerns, examine your oral health and explain your options.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Get Your Treatment",
    description:
      "Receive a personalized treatment plan using modern technology and comfortable clinical techniques.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Enjoy Your Smile",
    description:
      "Follow your personalized care plan and leave with a healthier, more confident and happier smile.",
  },
];

export default function Process() {
  return (
    <section className="section overflow-hidden bg-white">
      <Container>
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <SectionHeading
          eyebrow="How It Works"
          title="Your Dental Journey, Made Simple"
          description="From your first appointment to your final treatment, we make every step clear, comfortable and stress-free."
          align="center"
        />

        {/* =====================================================
            PROCESS STEPS
        ====================================================== */}

        <div className="relative mt-14">
          {/* Desktop connecting line */}
          <div
            className="absolute left-[12.5%] right-[12.5%] top-[34px] hidden h-px bg-gradient-to-r from-[#d9edf9] via-[var(--primary)] to-[#d9edf9] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="group relative text-center">
                  {/* =================================================
                      STEP ICON
                  ================================================== */}

                  <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-8 border-white bg-[var(--surface-blue)] text-[var(--primary)] shadow-[0_8px_25px_rgba(9,47,85,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />

                    {/* Number */}
                    <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[var(--navy)] px-1 text-[9px] font-black text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="mx-auto mt-6 max-w-[260px]">
                    <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[var(--heading)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-[28px] bg-[var(--surface)] px-6 py-8 text-center sm:flex-row sm:text-left">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--primary)] shadow-sm">
            <CalendarDays size={20} />
          </div>

          <div className="flex-1">
            <h3 className="text-base font-extrabold text-[var(--heading)]">
              Ready to take care of your smile?
            </h3>

            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              Book your consultation and take the first step toward better oral
              health.
            </p>
          </div>

          <Link href="/appointment" className="btn btn-primary btn-sm shrink-0">
            Book Appointment
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
