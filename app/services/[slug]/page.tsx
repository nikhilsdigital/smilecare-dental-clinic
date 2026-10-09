import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug, services } from "@/data/services";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceBenefitsDetail from "@/components/services/ServiceBenefitsDetail";
import ServiceProcessDetail from "@/components/services/ServiceProcessDetail";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceDetailCTA from "@/components/services/ServiceDetailCTA";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailHero service={service} />

      <ServiceBenefitsDetail service={service} />

      <ServiceProcessDetail service={service} />

      <ServiceFAQ service={service} />

      <ServiceDetailCTA service={service} />
    </main>
  );
}
