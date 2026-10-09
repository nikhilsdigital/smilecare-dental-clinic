import type { Metadata } from "next";

import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata: Metadata = {
  title: "Dental Blog | SmileCare Dental Clinic",
  description:
    "Read dental health tips, treatment guides and expert advice from SmileCare Dental Clinic.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </>
  );
}
