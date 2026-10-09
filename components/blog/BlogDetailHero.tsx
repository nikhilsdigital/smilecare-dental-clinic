import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";

import type { BlogData } from "@/data/blogs";

type BlogDetailHeroProps = {
  blog: BlogData;
};

export default function BlogDetailHero({ blog }: BlogDetailHeroProps) {
  return (
    <section className="bg-[var(--surface)]">
      <div className="container py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)] transition hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Category */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge bg-[var(--surface-blue)] text-[var(--primary)]">
              {blog.category}
            </span>

            <span className="text-sm text-[var(--muted)]">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[var(--heading)] sm:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {blog.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-[var(--border)] pb-7">
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <CalendarDays size={17} className="text-[var(--primary)]" />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <Clock3 size={17} className="text-[var(--primary)]" />
              <span>{blog.readTime}</span>
            </div>

            <div className="text-sm font-bold text-[var(--heading)]">
              By {blog.author}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(9,47,85,0.10)]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
