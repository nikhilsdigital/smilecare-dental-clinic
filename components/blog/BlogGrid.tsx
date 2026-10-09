"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import { blogs } from "@/data/blogs";

const categories = [
  "All",
  "General Dentistry",
  "Preventive Care",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Orthodontics",
];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Latest Articles</span>

          <h2 className="section-title mt-3">
            Learn More About Your
            <span className="text-gradient"> Dental Health</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4">
            Helpful articles and expert guidance to help you understand your
            oral health and make better dental care decisions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2.5 text-sm font-bold transition ${
                activeCategory === category
                  ? "bg-[var(--primary)] text-white shadow-[0_8px_20px_rgba(22,132,232,0.18)]"
                  : "border border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white shadow-[0_12px_35px_rgba(9,47,85,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(9,47,85,0.10)]"
            >
              {/* Image */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-[var(--surface)]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[var(--primary)] shadow-sm">
                  {blog.category}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--muted)]">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {blog.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-black leading-snug tracking-[-0.02em] text-[var(--heading)]">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="transition hover:text-[var(--primary)]"
                  >
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="mt-5 border-t border-[var(--border-light)] pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-[var(--muted)]">
                        Written by
                      </div>

                      <div className="mt-1 text-sm font-bold text-[var(--heading)]">
                        {blog.author}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white"
                      aria-label={`Read ${blog.title}`}
                    >
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
            <h3 className="text-xl font-black text-[var(--heading)]">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
