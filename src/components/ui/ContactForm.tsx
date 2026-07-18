"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/20 bg-cream p-8 text-center">
        <p className="text-2xl font-display font-bold text-gradient-gold">Thank You!</p>
        <p className="mt-3 text-ink/60">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="car" className="block text-sm font-medium mb-1.5">
            Car Make & Model
          </label>
          <input
            id="car"
            name="car"
            type="text"
            className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
            placeholder="e.g. Hyundai Creta"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1.5">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
        >
          <option value="">Select a service</option>
          <option>Periodic Maintenance</option>
          <option>Mechanical Repair</option>
          <option>Electrical</option>
          <option>Air Conditioning</option>
          <option>Body Shop / Accident Repair</option>
          <option>Detailing / Coating</option>
          <option>Tyres & Wheels</option>
          <option>Premium Car Service</option>
          <option>Fleet Maintenance</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-y"
          placeholder="Describe what your car needs..."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600 w-full sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
