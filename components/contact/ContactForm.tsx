"use client";

import { FormEvent, useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_15px_50px_rgba(9,47,85,0.07)] sm:p-8 lg:p-10">
      <div>
        <span className="eyebrow">Send a Message</span>

        <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-[var(--heading)]">
          How Can We Help?
        </h2>

        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <h3 className="font-black text-green-800">
                Message Sent Successfully
              </h3>

              <p className="mt-1 text-sm leading-6 text-green-700">
                Thank you for contacting SmileCare Dental Clinic. Our team will
                get back to you shortly.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-bold text-green-700 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="form-label">
              Full Name
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              />

              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="form-input"
                style={{ paddingLeft: "48px" }}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="contact-phone" className="form-label">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              />

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="form-input"
                style={{ paddingLeft: "48px" }}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="form-label">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              />

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="form-input"
                style={{ paddingLeft: "48px" }}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="form-label">
              Subject
            </label>

            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              placeholder="How can we help?"
              className="form-input"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="form-label">
              Message
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-[var(--muted)]"
              />

              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Write your message..."
                className="form-input min-h-[150px]"
                style={{ paddingLeft: "48px" }}
              />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full">
            <Send size={17} />
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
