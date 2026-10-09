import { Phone, Mail, MapPin, Clock3, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@smilecare.com",
    href: "mailto:info@smilecare.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Your City, Kerala, India",
    href: "#map",
  },
  {
    icon: Clock3,
    title: "Opening Hours",
    value: "Mon - Sat · 9 AM - 8 PM",
    href: "#",
  },
];

export default function ContactInfo() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact Information</span>

          <h2 className="section-title mt-3">Let’s Start a Conversation</h2>

          <p className="section-subtitle mx-auto mt-4">
            Reach us through phone, email or visit our clinic. Our team is ready
            to assist you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="card card-hover group p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-base font-black text-[var(--heading)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
