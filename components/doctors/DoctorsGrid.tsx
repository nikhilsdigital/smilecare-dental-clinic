import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { DoctorData } from "@/data/doctors";

type DoctorsGridProps = {
  doctors: DoctorData[];
};

export default function DoctorsGrid({ doctors }: DoctorsGridProps) {
  return (
    <section className="section bg-white">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Team"
          title="Experienced Professionals, Personalized Care"
          description="Meet our dedicated dental specialists who are committed to providing comfortable, modern and patient-focused dental care."
          align="center"
        />

        {/* Doctors Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.slug}
              className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#b8dcf3] hover:shadow-[0_24px_55px_rgba(9,47,85,0.13)]"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden bg-[var(--surface-blue)]">
                <div className="relative aspect-[4/4.4]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#092f55]/45 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                  <Award size={14} className="text-[var(--primary)]" />

                  <span className="text-[10px] font-extrabold text-[var(--heading)]">
                    {doctor.experience}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm">
                  <Star size={14} className="fill-[#f5b83d] text-[#f5b83d]" />

                  <span className="text-xs font-black text-[var(--heading)]">
                    {doctor.rating}
                  </span>
                </div>
              </div>

              {/* Doctor Content */}
              <div className="p-6 sm:p-7">
                <h2 className="text-xl font-extrabold tracking-[-0.025em] text-[var(--heading)] transition-colors duration-200 group-hover:text-[var(--primary)]">
                  {doctor.name}
                </h2>

                <p className="mt-1 text-sm font-bold text-[var(--primary)]">
                  {doctor.specialization}
                </p>

                {/* Qualification + Reviews */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[var(--surface-blue)] px-3 py-1.5 text-[10px] font-bold text-[var(--primary-dark)]">
                    {doctor.qualification}
                  </span>

                  <span className="rounded-full bg-[#f3f7fa] px-3 py-1.5 text-[10px] font-bold text-[var(--muted)]">
                    {doctor.reviews}
                  </span>
                </div>

                {/* Bio */}
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                  {doctor.shortBio}
                </p>

                {/* Bottom Actions */}
                <div className="mt-6 flex items-center justify-between border-t border-[var(--border-light)] pt-5">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="group/link flex items-center gap-2 text-xs font-extrabold text-[var(--primary)]"
                  >
                    View Profile
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/appointment"
                    aria-label={`Book appointment with ${doctor.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)] transition-all duration-200 hover:bg-[var(--primary)] hover:text-white"
                  >
                    <CalendarDays size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
