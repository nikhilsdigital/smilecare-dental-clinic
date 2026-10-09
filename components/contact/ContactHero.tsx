import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,132,232,0.28),transparent_42%)]" />

      <div className="container relative">
        <div className="grid min-h-[390px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.75fr]">
          {/* Content */}
          <div>
            <span className="eyebrow bg-white/10 text-white">Get In Touch</span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              We’re Here to Help You
              <span className="block text-[var(--primary)]">
                Smile With Confidence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Have a question about your dental health or want to schedule a
              visit? Contact our friendly dental team and we’ll be happy to
              help.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/appointment" className="btn btn-primary">
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-10 rounded-full bg-[var(--primary)]/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
                <div className="rounded-2xl bg-white p-7 shadow-2xl">
                  <div className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                    SmileCare Dental Clinic
                  </div>

                  <h2 className="mt-3 text-2xl font-black text-[var(--heading)]">
                    Your Smile Starts Here
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Modern dental care, experienced professionals and a
                    comfortable patient-first environment.
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-[var(--primary)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
