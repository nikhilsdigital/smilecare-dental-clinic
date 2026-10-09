"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, Maximize2 } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type GalleryCategory =
  | "All"
  | "Clinic"
  | "Treatments"
  | "Technology"
  | "Smiles";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
};

const categories: GalleryCategory[] = [
  "All",
  "Clinic",
  "Treatments",
  "Technology",
  "Smiles",
];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Dental Clinic",
    category: "Clinic",
    image: "/images/gallery/gallery-01.jpg",
  },
  {
    id: 2,
    title: "Comfortable Treatment Room",
    category: "Clinic",
    image: "/images/gallery/gallery-02.jpg",
  },
  {
    id: 3,
    title: "Professional Dental Treatment",
    category: "Treatments",
    image: "/images/gallery/gallery-03.jpg",
  },
  {
    id: 4,
    title: "Advanced Dental Equipment",
    category: "Technology",
    image: "/images/gallery/gallery-04.jpg",
  },
  {
    id: 5,
    title: "Modern Dental Technology",
    category: "Technology",
    image: "/images/gallery/gallery-05.jpg",
  },
  {
    id: 6,
    title: "Comfort-Focused Treatment",
    category: "Treatments",
    image: "/images/gallery/gallery-06.jpg",
  },
  {
    id: 7,
    title: "Beautiful Smile",
    category: "Smiles",
    image: "/images/gallery/gallery-07.jpg",
  },
  {
    id: 8,
    title: "Confident Smile",
    category: "Smiles",
    image: "/images/gallery/gallery-08.jpg",
  },
  {
    id: 9,
    title: "SmileCare Clinic Interior",
    category: "Clinic",
    image: "/images/gallery/gallery-09.jpg",
  },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="section bg-white">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Clinic Gallery"
          title="See Our Clinic & Care"
          description="Take a closer look at our clinic environment, treatment spaces, dental technology and patient-focused approach."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-xs font-extrabold transition-all duration-200 ${
                  isActive
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_8px_20px_rgba(22,132,232,0.18)]"
                    : "border-[var(--border)] bg-white text-[var(--muted)] hover:border-[#b8dcf3] hover:bg-[var(--surface-blue)] hover:text-[var(--primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[26px] border border-[var(--border)] bg-white shadow-[0_6px_25px_rgba(9,47,85,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b8dcf3] hover:shadow-[0_22px_50px_rgba(9,47,85,0.12)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-blue)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#092f55]/65 via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[var(--primary-dark)] shadow-sm">
                  {item.category}
                </span>

                {/* View Icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[var(--primary)] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 size={15} />
                </div>

                {/* Bottom Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-white" />

                    <h3 className="text-sm font-extrabold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-12 rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
            <p className="text-sm font-semibold text-[var(--muted)]">
              No gallery images found in this category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
