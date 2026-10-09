import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { doctors, getDoctorBySlug } from "@/data/doctors";

import DoctorProfileHero from "@/components/doctors/DoctorProfileHero";
import DoctorAbout from "@/components/doctors/DoctorAbout";
import DoctorExpertise from "@/components/doctors/DoctorExpertise";
import DoctorProfileCTA from "@/components/doctors/DoctorProfileCTA";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
    };
  }

  return {
    title: doctor.name,
    description: doctor.shortBio,
  };
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;

  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <main>
      <DoctorProfileHero doctor={doctor} />

      <DoctorAbout doctor={doctor} />

      <DoctorExpertise doctor={doctor} />

      <DoctorProfileCTA doctor={doctor} />
    </main>
  );
}
