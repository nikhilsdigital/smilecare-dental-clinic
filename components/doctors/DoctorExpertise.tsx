import { CheckCircle2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { DoctorData } from "@/data/doctors";

type DoctorExpertiseProps = {
  doctor: DoctorData;
};

export default function DoctorExpertise({ doctor }: DoctorExpertiseProps) {
  return (
    <section className="section bg-[var(--surface)]">
      <Container>
        <SectionHeading
          eyebrow="Areas of Expertise"
          title="Specialized Care for Your Dental Needs"
          description="Our treatment approach combines professional expertise, modern techniques and personalized care based on each patient's individual needs."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctor.expertise.map((item, index) => (
            <div
              key={item}
              className="group rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-[0_6px_25px_rgba(9,47,85,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8dcf3] hover:shadow-[0_16px_35px_rgba(9,47,85,0.09)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Sparkles size={19} />
                </div>

                <div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-[var(--muted-light)]">
                    0{index + 1}
                  </div>

                  <h3 className="mt-1 text-sm font-extrabold leading-5 text-[var(--heading)]">
                    {item}
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[var(--success)]">
                <CheckCircle2 size={13} />
                Personalized Care
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
