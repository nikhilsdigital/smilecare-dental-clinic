"use client";

import { FormEvent, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Teeth Whitening",
  "Preventive Care",
];

const doctors = [
  "Any Available Doctor",
  "Dr. Ananya Menon",
  "Dr. Rahul Nair",
  "Dr. Meera Thomas",
];

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  /* =========================================================
     SUCCESS MESSAGE
     ========================================================= */

  if (submitted) {
    return (
      <div className="rounded-[28px] border border-[#bdebd4] bg-[#f1fcf6] p-8 text-center shadow-[0_12px_35px_rgba(9,47,85,0.06)] sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e0f8eb] text-[var(--success)]">
          <CheckCircle2 size={34} strokeWidth={2} />
        </div>

        <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-[var(--heading)]">
          Appointment Request Sent
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
          Thank you for contacting SmileCare Dental Clinic. Our team will review
          your request and contact you to confirm your appointment.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-primary mt-7"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[var(--border)] bg-white p-5 shadow-[0_15px_45px_rgba(9,47,85,0.07)] sm:p-8 lg:p-10"
    >
      {/* =====================================================
          FORM HEADER
          ===================================================== */}

      <div className="mb-8">
        <span className="eyebrow">Appointment Details</span>

        <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[var(--heading)] sm:text-3xl">
          Tell us how we can help
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
          Fill in your details below and our clinic team will contact you to
          confirm your appointment.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* =====================================================
            FULL NAME
            ===================================================== */}

        <div>
          <label htmlFor="name" className="form-label">
            Full Name
          </label>

          <div className="relative">
            <UserRound
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted-light)]"
            />

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Enter your full name"
              className="form-input h-12 w-full pr-4"
              style={{
                paddingLeft: "48px",
              }}
            />
          </div>
        </div>

        {/* =====================================================
            PHONE
            ===================================================== */}

        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>

          <div className="relative">
            <Phone
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted-light)]"
            />

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="Enter your phone number"
              className="form-input h-12 w-full pr-4"
              style={{
                paddingLeft: "48px",
              }}
            />
          </div>
        </div>

        {/* =====================================================
            EMAIL
            ===================================================== */}

        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>

          <div className="relative">
            <Mail
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted-light)]"
            />

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className="form-input h-12 w-full pr-4"
              style={{
                paddingLeft: "48px",
              }}
            />
          </div>
        </div>

        {/* =====================================================
            SERVICE
            ===================================================== */}

        <div>
          <label htmlFor="service" className="form-label">
            Select Service
          </label>

          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className="form-input h-12 w-full cursor-pointer px-4"
          >
            <option value="" disabled>
              Choose a dental service
            </option>

            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* =====================================================
            DOCTOR
            ===================================================== */}

        <div>
          <label htmlFor="doctor" className="form-label">
            Preferred Doctor
          </label>

          <select
            id="doctor"
            name="doctor"
            required
            defaultValue=""
            className="form-input h-12 w-full cursor-pointer px-4"
          >
            <option value="" disabled>
              Choose a doctor
            </option>

            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        {/* =====================================================
            DATE
            ===================================================== */}

        <div>
          <label htmlFor="date" className="form-label">
            Preferred Date
          </label>

          <div className="relative">
            <CalendarDays
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted-light)]"
            />

            <input
              id="date"
              name="date"
              type="date"
              required
              className="form-input h-12 w-full pr-4"
              style={{
                paddingLeft: "48px",
              }}
            />
          </div>
        </div>

        {/* =====================================================
            TIME
            ===================================================== */}

        <div>
          <label htmlFor="time" className="form-label">
            Preferred Time
          </label>

          <div className="relative">
            <Clock3
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[var(--muted-light)]"
            />

            <select
              id="time"
              name="time"
              required
              defaultValue=""
              className="form-input h-12 w-full cursor-pointer pr-4"
              style={{
                paddingLeft: "48px",
              }}
            >
              <option value="" disabled>
                Choose a preferred time
              </option>

              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="17:00">05:00 PM</option>
              <option value="18:00">06:00 PM</option>
              <option value="19:00">07:00 PM</option>
            </select>
          </div>
        </div>

        {/* =====================================================
            MESSAGE
            ===================================================== */}

        <div className="sm:col-span-2">
          <label htmlFor="message" className="form-label">
            Message / Dental Concern
          </label>

          <div className="relative">
            <MessageSquare
              aria-hidden="true"
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-4 top-4 z-10 text-[var(--muted-light)]"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Tell us briefly about your dental concern..."
              className="form-input min-h-[130px] w-full pr-4 pt-3"
              style={{
                paddingLeft: "48px",
              }}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          SUBMIT BUTTON
          ===================================================== */}

      <div className="mt-7">
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          <Send size={17} />
          Request Appointment
        </button>
      </div>

      {/* =====================================================
          FORM NOTE
          ===================================================== */}

      <p className="mt-4 text-[10px] leading-5 text-[var(--muted)]">
        By submitting this form, you are requesting an appointment. Our clinic
        team will contact you to confirm the date and time.
      </p>
    </form>
  );
}
