import type { Metadata } from "next";

import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsOverview from "@/components/reviews/ReviewsOverview";
import ReviewsGrid from "@/components/reviews/ReviewsGrid";
import ReviewsCTA from "@/components/reviews/ReviewsCTA";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews and experiences from SmileCare Dental Clinic. Discover why patients trust our dental team.",
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsHero />

      <ReviewsOverview />

      <ReviewsGrid />

      <ReviewsCTA />
    </main>
  );
}
