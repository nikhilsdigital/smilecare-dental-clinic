import type { Metadata } from "next";

import DoctorsHero from "@/components/doctors/DoctorsHero";
import DoctorsGrid from "@/components/doctors/DoctorsGrid";

import { doctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the experienced dental specialists at SmileCare Dental Clinic. Our team provides personalized, modern and compassionate dental care.",
};

export default function DoctorsPage() {
  return (
    <main>
      <DoctorsHero />

      <DoctorsGrid doctors={doctors} />
    </main>
  );
}
