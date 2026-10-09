import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMain from "@/components/contact/ContactMain";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Us | SmileCare Dental Clinic",
  description:
    "Contact SmileCare Dental Clinic for dental consultations, appointments and treatment enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactMain />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
