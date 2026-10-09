import ContactForm from "@/components/contact/ContactForm";

export default function ContactMain() {
  return (
    <section className="section bg-[var(--surface)]">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Left Content */}
          <div>
            <span className="eyebrow">Send Us a Message</span>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[var(--heading)] sm:text-4xl">
              We’re Ready to Answer Your Questions
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)]">
              Whether you want to know more about a treatment, have a question
              about your appointment or simply want to speak with our team, feel
              free to contact us.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {[
                "Friendly and professional dental team",
                "Modern and comfortable clinic environment",
                "Personalised treatment guidance",
                "Convenient appointment scheduling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-blue)] text-[var(--primary)]">
                    ✓
                  </div>

                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Clinic Hours */}
            <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-6">
              <h3 className="text-lg font-black text-[var(--heading)]">
                Clinic Hours
              </h3>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[var(--muted)]">Monday - Saturday</span>

                  <span className="font-bold text-[var(--heading)]">
                    9:00 AM - 8:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[var(--muted)]">Sunday</span>

                  <span className="font-bold text-[var(--primary)]">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
