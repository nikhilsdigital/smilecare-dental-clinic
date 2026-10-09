import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about SmileCare Dental Clinic, our mission, experienced team and patient-centered approach to modern dentistry.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <OurStory />

      <MissionVision />
    </main>
  );
}
