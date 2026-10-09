import type { Metadata } from "next";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore SmileCare Dental Clinic, our modern treatment rooms, advanced dental technology and patient-focused care environment.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />

      <GalleryGrid />

      <GalleryCTA />
    </main>
  );
}
