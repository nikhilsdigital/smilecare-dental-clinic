import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section id="map" className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Find Our Clinic</span>

          <h2 className="section-title mt-3">Visit SmileCare Dental Clinic</h2>

          <p className="section-subtitle mx-auto mt-4">
            We are conveniently located and ready to welcome you for
            comfortable, modern dental care.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_15px_50px_rgba(9,47,85,0.07)]">
          {/* Map Placeholder */}
          <div className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(135deg,#edf6ff,#f7fbff)] p-6">
            <div className="max-w-md rounded-[1.5rem] border border-white bg-white p-8 text-center shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)]">
                <MapPin size={25} />
              </div>

              <h3 className="mt-5 text-xl font-black text-[var(--heading)]">
                SmileCare Dental Clinic
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Your City, Kerala, India
              </p>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6"
              >
                <Navigation size={17} />
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
