import Link from "next/link";
import { CalendarDays, Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="section bg-[var(--surface)]">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--navy)] px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--primary)]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                Need Dental Care?
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Take the First Step Toward a Healthier Smile
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                Schedule a consultation with our experienced dental team and let
                us help you choose the right treatment for your needs.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/appointment" className="btn btn-primary">
                <CalendarDays size={17} />
                Book Appointment
              </Link>

              <a href="tel:+919876543210" className="btn btn-light">
                <Phone size={17} />
                Call Us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
