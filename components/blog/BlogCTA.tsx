import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="section bg-[var(--navy)]">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[var(--navy)] to-[#0d477d] px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--primary)]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Need Personalised Advice?
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Your Smile Deserves Expert Care
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                If you have questions about your dental health, our team is
                ready to help. Schedule a consultation and discuss your concerns
                with our dental professionals.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/appointment" className="btn btn-primary">
                <CalendarDays size={17} />
                Book Appointment
              </Link>

              <Link href="/contact" className="btn btn-light">
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
