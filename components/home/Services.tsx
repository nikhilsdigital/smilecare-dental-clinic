import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Complete dental care including checkups, fillings, cleaning and routine oral treatments.",
    image: "/images/services/general-dentistry.png",
    href: "/services/general-dentistry",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with modern cosmetic treatments designed for natural-looking results.",
    image: "/images/services/cosmetic-dentistry.png",
    href: "/services/cosmetic-dentistry",
  },
  {
    number: "03",
    title: "Dental Implants",
    description:
      "Restore missing teeth with strong, natural-looking and long-lasting dental implants.",
    image: "/images/services/dental-implants.png",
    href: "/services/dental-implants",
  },
  {
    number: "04",
    title: "Orthodontics",
    description:
      "Straighten and improve your smile with modern orthodontic solutions for all ages.",
    image: "/images/services/orthodontics.png",
    href: "/services/orthodontics",
  },
  {
    number: "05",
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely with professional teeth whitening treatments.",
    image: "/images/services/teeth-whitening.png",
    href: "/services/teeth-whitening",
  },
  {
    number: "06",
    title: "Preventive Care",
    description:
      "Protect your oral health with regular examinations, professional cleaning and prevention.",
    image: "/images/services/preventive-care.png",
    href: "/services/preventive-care",
  },
];

export default function Services() {
  return (
    <section className="section bg-white">
      <Container>
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Care for Your Smile"
            description="From routine checkups to advanced treatments, our dental team provides personalized care using modern technology and proven techniques."
          />

          {/* Desktop View All */}
          <Link
            href="/services"
            className="group hidden shrink-0 items-center gap-2 pb-1 text-sm font-extrabold text-[var(--primary)] lg:flex"
          >
            View All Services
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group overflow-hidden rounded-[26px] border border-[var(--border)] bg-white shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_22px_50px_rgba(9,47,85,0.12)]"
            >
              {/* =================================================
                  SERVICE IMAGE
              ================================================== */}

              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-blue)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#092f55]/45 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />

                {/* Service Number */}
                <div className="absolute right-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-white/95 px-2.5 text-xs font-black text-[var(--primary)] shadow-md backdrop-blur-sm">
                  {service.number}
                </div>

                {/* Image Bottom Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[var(--primary-dark)] shadow-sm backdrop-blur-sm">
                    Dental Care
                  </span>
                </div>
              </div>

              {/* =================================================
                  SERVICE CONTENT
              ================================================== */}

              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-extrabold tracking-[-0.025em] text-[var(--heading)] transition-colors duration-200 group-hover:text-[var(--primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-5 flex items-center gap-2 text-xs font-extrabold text-[var(--primary)]">
                  Learn More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            MOBILE VIEW ALL
        ====================================================== */}

        <div className="mt-8 lg:hidden">
          <Link href="/services" className="btn btn-secondary w-full">
            View All Services
            <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
