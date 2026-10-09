import type { Metadata } from "next";

import AppointmentHero from "@/components/appointment/AppointmentHero";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import AppointmentInfo from "@/components/appointment/AppointmentInfo";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your dental appointment at SmileCare Dental Clinic. Choose your preferred service, doctor, date and time.",
};

export default function AppointmentPage() {
  return (
    <main>
      <AppointmentHero />

      <section className="section bg-white">
        <div className="container">
          <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            <AppointmentForm />

            <AppointmentInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
