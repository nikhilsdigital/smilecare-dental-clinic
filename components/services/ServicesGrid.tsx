import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Routine dental care focused on maintaining healthy teeth, gums and overall oral health.",
    image: "/images/services/general-dentistry.png",
    href: "/services/general-dentistry",
    treatments: ["Dental Checkups", "Fillings", "Dental Cleaning"],
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Improve the appearance of your smile with personalized cosmetic dental treatments.",
    image: "/images/services/cosmetic-dentistry.png",
    href: "/services/cosmetic-dentistry",
    treatments: ["Smile Makeover", "Veneers", "Cosmetic Restoration"],
  },
  {
    number: "03",
    title: "Dental Implants",
    description:
      "Replace missing teeth with strong, natural-looking and long-lasting dental implants.",
    image: "/images/services/dental-implants.png",
    href: "/services/dental-implants",
    treatments: [
      "Single Implants",
      "Implant Restoration",
      "Implant Consultation",
    ],
  },
  {
    number: "04",
    title: "Orthodontics",
    description:
      "Straighten teeth and improve your bite with modern orthodontic treatment options.",
    image: "/images/services/orthodontics.png",
    href: "/services/orthodontics",
    treatments: ["Braces", "Clear Aligners", "Bite Correction"],
  },
  {
    number: "05",
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional teeth whitening designed for safe and natural-looking results.",
    image: "/images/services/teeth-whitening.png",
    href: "/services/teeth-whitening",
    treatments: [
      "Professional Whitening",
      "Smile Brightening",
      "Shade Assessment",
    ],
  },
  {
    number: "06",
    title: "Preventive Care",
    description:
      "Protect your oral health with regular examinations, professional cleaning and prevention.",
    image: "/images/services/preventive-care.png",
    href: "/services/preventive-care",
    treatments: ["Oral Examinations", "Professional Cleaning", "Gum Care"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Dental Treatments Designed Around You"
          description="Explore our range of dental services and find the right care for your oral health needs."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_24px_55px_rgba(9,47,85,0.12)]"
            >
              <div className="relative overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#092f55]/50 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-white/95 px-2.5 text-xs font-black text-[var(--primary)] shadow-md">
                  {service.number}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h2 className="text-xl font-extrabold tracking-[-0.025em] text-[var(--heading)] transition-colors group-hover:text-[var(--primary)]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {service.description}
                </p>

                <div className="mt-5 space-y-2">
                  {service.treatments.map((treatment) => (
                    <div
                      key={treatment}
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--foreground)]"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[var(--success)]"
                      />
                      {treatment}
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="group/link mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[var(--primary)]"
                >
                  Explore Treatment
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
