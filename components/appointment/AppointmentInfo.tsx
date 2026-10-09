import Link from "next/link";
import {
  Clock3,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function AppointmentInfo() {
  return (
    <div className="space-y-5">
      {/* Clinic Information */}
      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
        <span className="eyebrow">Clinic Information</span>

        <div className="mt-7 space-y-5">
          {/* Phone */}
          <a href="tel:+919876543210" className="group flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm transition-colors group-hover:bg-[var(--primary)] group-hover:text-white">
              <Phone size={19} />
            </div>

            <div>
              <p className="text-xs font-bold text-[var(--muted)]">Call Us</p>

              <p className="mt-1 text-sm font-extrabold text-[var(--heading)]">
                +91 98765 43210
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-xs font-bold text-[var(--muted)]">
                Clinic Location
              </p>

              <p className="mt-1 text-sm font-extrabold leading-6 text-[var(--heading)]">
                SmileCare Dental Clinic
                <br />
                Your City, Kerala, India
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--primary)] shadow-sm">
              <Clock3 size={19} />
            </div>

            <div>
              <p className="text-xs font-bold text-[var(--muted)]">
                Opening Hours
              </p>

              <p className="mt-1 text-sm font-extrabold leading-6 text-[var(--heading)]">
                Monday – Saturday
                <br />
                9:00 AM – 8:00 PM
              </p>

              <p className="mt-1 text-xs font-semibold text-[var(--success)]">
                Sunday — Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Book With Us */}
      <div className="rounded-[28px] bg-[var(--navy)] p-6 shadow-[0_20px_50px_rgba(9,47,85,0.12)] sm:p-7">
        <h3 className="text-lg font-black text-white">Why choose SmileCare?</h3>

        <div className="mt-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <HeartHandshake size={17} />
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white">
                Patient-Centered Care
              </h4>

              <p className="mt-1 text-xs leading-5 text-white/60">
                Treatment designed around your individual needs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <ShieldCheck size={17} />
            </div>

            <div>
              <h4 className="text-sm font-extrabold text-white">
                Safe & Modern Treatment
              </h4>

              <p className="mt-1 text-xs leading-5 text-white/60">
                Modern technology and professional clinical care.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/doctors"
          className="mt-7 inline-flex items-center text-xs font-extrabold text-white transition-colors hover:text-[#8fd5ff]"
        >
          Meet Our Doctors
        </Link>
      </div>
    </div>
  );
}
