import { HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { DoctorData } from "@/data/doctors";

type DoctorAboutProps = {
  doctor: DoctorData;
};

export default function DoctorAbout({ doctor }: DoctorAboutProps) {
  return (
    <section className="section bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* About */}
          <div>
            <SectionHeading
              eyebrow="About The Doctor"
              title={`Meet ${doctor.name}`}
              description={doctor.about}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <Stethoscope size={20} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[var(--heading)]">
                  Expertise
                </h3>

                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  Specialized dental knowledge
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <HeartHandshake size={20} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[var(--heading)]">
                  Patient First
                </h3>

                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  Care designed around you
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-[var(--heading)]">
                  Safe Care
                </h3>

                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                  Modern clinical approach
                </p>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <span className="eyebrow">Professional Information</span>

            <div className="mt-7 space-y-5">
              <div className="flex items-start justify-between gap-5 border-b border-[var(--border)] pb-5">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  Name
                </span>

                <span className="text-right text-sm font-extrabold text-[var(--heading)]">
                  {doctor.name}
                </span>
              </div>

              <div className="flex items-start justify-between gap-5 border-b border-[var(--border)] pb-5">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  Specialization
                </span>

                <span className="text-right text-sm font-extrabold text-[var(--heading)]">
                  {doctor.specialization}
                </span>
              </div>

              <div className="flex items-start justify-between gap-5 border-b border-[var(--border)] pb-5">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  Qualification
                </span>

                <span className="text-right text-sm font-extrabold text-[var(--heading)]">
                  {doctor.qualification}
                </span>
              </div>

              <div className="flex items-start justify-between gap-5 border-b border-[var(--border)] pb-5">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  Experience
                </span>

                <span className="text-right text-sm font-extrabold text-[var(--heading)]">
                  {doctor.experience}
                </span>
              </div>

              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-semibold text-[var(--muted)]">
                  Patient Rating
                </span>

                <span className="text-right text-sm font-extrabold text-[var(--heading)]">
                  {doctor.rating} / 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
