import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceBenefits from "@/components/services/ServiceBenefits";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore SmileCare Dental Clinic's general, cosmetic, implant, orthodontic, whitening and preventive dental treatments.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />

      <ServicesGrid />

      <ServiceBenefits />

      <ServicesCTA />
    </main>
  );
}
