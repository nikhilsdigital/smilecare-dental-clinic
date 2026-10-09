import Image from "next/image";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: HeartHandshake,
    title: "Patient First",
    description:
      "Every treatment begins by understanding your concerns, expectations and individual needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    description:
      "We follow modern clinical standards and focus on safe, precise and responsible dental care.",
  },
  {
    icon: Sparkles,
    title: "Modern Dentistry",
    description:
      "Advanced techniques and technology help us deliver comfortable and effective treatment.",
  },
];

export default function OurStory() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_65px_rgba(9,47,85,0.11)]">
              <div className="relative aspect-[4/4.7]">
                <Image
                  src="/images/why-choose-us.png"
                  alt="Dentist providing personalized care to a patient"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -right-3 bottom-5 rounded-2xl border border-white bg-white px-5 py-4 shadow-[0_18px_45px_rgba(9,47,85,0.14)] sm:right-[-18px]">
              <div className="text-2xl font-black text-[var(--heading)]">
                2K+
              </div>

              <div className="mt-0.5 text-[10px] font-bold text-[var(--muted)]">
                Happy Patients
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A Dental Clinic Built Around People"
              description="SmileCare Dental Clinic was created with a simple belief: visiting the dentist should feel comfortable, clear and reassuring."
            />

            <div className="mt-7 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p>
                Our team combines professional dental expertise with a
                patient-centered approach. From your first consultation to
                follow-up care, we take the time to listen, explain and guide
                you through every step.
              </p>

              <p>
                Whether you need routine preventive care, cosmetic treatment,
                orthodontic treatment or advanced restorative dentistry, our
                goal is to provide high-quality care in a clean and welcoming
                environment.
              </p>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "Personalized treatment plans",
                "Comfort-focused dental experience",
                "Modern and hygienic clinic environment",
                "Experienced dental professionals",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f8ef] text-[var(--success)]">
                    <CheckCircle2 size={15} />
                  </span>

                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-3 text-sm font-extrabold text-[var(--heading)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-5 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
