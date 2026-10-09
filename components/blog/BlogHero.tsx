import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,132,232,0.28),transparent_40%)]" />

      <div className="container relative">
        <div className="grid min-h-[420px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.8fr] lg:py-20">
          {/* Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <BookOpen size={16} />
              Dental Health Journal
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Dental Tips, Health Advice &
              <span className="block text-[var(--primary)]">
                Expert Insights
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Explore helpful dental care tips, treatment guides and expert
              advice from our dental team to help you maintain a healthier, more
              confident smile.
            </p>

            <div className="mt-8">
              <Link href="/appointment" className="btn btn-primary">
                Book a Consultation
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 rounded-[3rem] bg-[var(--primary)]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-6">
                    <div className="text-3xl font-black text-white">15+</div>
                    <div className="mt-2 text-sm text-white/60">
                      Years Experience
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-6">
                    <div className="text-3xl font-black text-white">500+</div>
                    <div className="mt-2 text-sm text-white/60">
                      Happy Patients
                    </div>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-[var(--primary)] p-6">
                    <div className="text-lg font-bold text-white">
                      Your Smile Matters
                    </div>

                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Practical dental information written to help you make
                      informed decisions about your oral health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
