import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

import type { BlogData } from "@/data/blogs";

type BlogArticleProps = {
  blog: BlogData;
};

export default function BlogArticle({ blog }: BlogArticleProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* =================================================
              ARTICLE CONTENT
          ================================================== */}

          <article className="min-w-0">
            <div className="space-y-6">
              {blog.content.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base leading-8 text-[var(--muted)] ${
                    index === 0
                      ? "text-lg font-medium leading-9 text-[var(--foreground)]"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-10 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <h2 className="text-2xl font-black tracking-[-0.02em] text-[var(--heading)]">
                Key Takeaways
              </h2>

              <div className="mt-5 space-y-4">
                {[
                  "Maintain a consistent oral hygiene routine.",
                  "Do not ignore unusual changes in your teeth or gums.",
                  "Visit your dentist regularly for professional evaluation.",
                  "Follow personalised dental advice based on your oral health.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-1 shrink-0 text-[var(--primary)]"
                    />

                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-[var(--navy)] p-7 sm:p-9">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Need Expert Advice?
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-[-0.02em] text-white sm:text-3xl">
                Have questions about your dental health?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Our dental team is here to help you understand your treatment
                options and maintain a healthier smile.
              </p>

              <div className="mt-6">
                <Link href="/appointment" className="btn btn-primary">
                  Book an Appointment
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </article>

          {/* =================================================
              SIDEBAR
          ================================================== */}

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--primary)]">
                  <CalendarDays size={20} />
                </div>

                <div>
                  <div className="text-sm font-bold text-[var(--heading)]">
                    Need a Checkup?
                  </div>

                  <div className="text-xs text-[var(--muted)]">
                    Schedule your visit
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                Don't wait until a dental problem becomes serious. Schedule a
                consultation with our experienced dental team.
              </p>

              <Link href="/appointment" className="btn btn-primary mt-5 w-full">
                Book Appointment
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Back to Blog */}
            <Link
              href="/blog"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-white px-5 py-3.5 text-sm font-bold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              <ArrowRight size={16} className="rotate-180" />
              View All Articles
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
