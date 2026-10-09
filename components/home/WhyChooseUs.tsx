import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Stethoscope,
    title: "Experienced Dental Specialists",
    description:
      "Our experienced dental professionals provide personalized treatment with careful attention to every patient.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced & Safe Technology",
    description:
      "Modern dental technology helps us provide precise, efficient and comfortable treatments.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "We take time to understand your concerns and create a treatment plan around your individual needs.",
  },
  {
    icon: Sparkles,
    title: "Comfortable Experience",
    description:
      "A calm, clean and welcoming environment designed to make every dental visit more comfortable.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        {/* =====================================================
            WHY CHOOSE US
        ====================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative">
            <div className="relative mx-auto max-w-[560px]">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[32px] shadow-[0_25px_65px_rgba(9,47,85,0.12)]">
                <div className="relative aspect-[4/4.6]">
                  <Image
                    src="/images/why-choose-us.png"
                    alt="Friendly dental team providing professional patient care"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#092f55]/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* =================================================
                  EXPERIENCE CARD
              ================================================== */}

              <div className="absolute -bottom-5 right-3 w-[220px] rounded-2xl border border-white bg-white p-4 shadow-[0_20px_50px_rgba(9,47,85,0.14)] sm:right-[-15px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                    <Clock3 size={20} />
                  </div>

                  <div>
                    <div className="text-lg font-black text-[var(--heading)]">
                      15+ Years
                    </div>

                    <p className="text-xs text-[var(--muted)]">
                      Trusted dental experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div
                className="pointer-events-none absolute -left-8 -top-8 -z-10 h-28 w-28 rounded-full border-[16px] border-[#dff3ff]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Dental Care Designed Around You"
              description="We combine clinical expertise, modern technology and compassionate care to create a dental experience you can feel confident about."
            />

            {/* Features */}
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-[var(--border)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b8dcf3] hover:shadow-[0_15px_35px_rgba(9,47,85,0.08)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-base font-extrabold text-[var(--heading)]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[var(--muted)]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={17} />
              </Link>

              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--muted)]">
                <CheckCircle2 size={16} className="text-[var(--success)]" />
                Trusted & patient-focused care
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ABOUT CLINIC
        ====================================================== */}

        <div className="mt-28 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About SmileCare"
              title="Modern Dentistry With a Human Touch"
              description="At SmileCare Dental Clinic, we believe exceptional dentistry is about more than treating teeth. It is about helping people feel healthier, more confident and comfortable."
            />

            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {[
                "Personalized treatment plans",
                "Modern and hygienic dental facilities",
                "Experienced and compassionate professionals",
                "Comfort-focused patient experience",
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

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-extrabold text-[var(--primary)]"
              >
                Discover Our Clinic
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* About Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_25px_65px_rgba(9,47,85,0.10)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/about-clinic.png"
                  alt="Modern SmileCare Dental Clinic interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small Info Card */}
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-white bg-white p-4 shadow-[0_18px_45px_rgba(9,47,85,0.13)] sm:left-[-15px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                  <HeartHandshake size={19} />
                </div>

                <div>
                  <div className="text-sm font-black text-[var(--heading)]">
                    Patient First
                  </div>

                  <p className="mt-0.5 text-[10px] text-[var(--muted)]">
                    Care with compassion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
