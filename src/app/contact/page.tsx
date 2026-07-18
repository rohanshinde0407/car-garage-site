import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { SITE, BRANCHES } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Book a car service, get a quote or visit Shivrudra Cars at our Rahatani or Pimple Saudagar workshops in Pune.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative overflow-hidden bg-ink-gradient py-20 md:py-28">
        <Image
          src="/service/fixing-engine-car.avif"
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="container-x relative z-10">
          <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          <div data-reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-lg">
              Book a service, ask a question or visit us at either branch.
            </p>
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <Section id="booking" className="bg-cream">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Book a Service</h2>
          <div className="hairline w-16 mb-8" />
          <ContactForm />
        </div>
      </Section>

      {/* ── Branches ── */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Branches</h2>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto" data-reveal-children>
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="gradient-border rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold">{branch.name}</h3>
              <p className="mt-2 text-sm text-ink/60">
                {branch.addressLine}, {branch.locality}, {branch.city} — {branch.postalCode}
              </p>
              <p className="mt-2 text-sm text-ink/60">{branch.hours}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${branch.phoneHref}`}
                  className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-ink-700 transition-colors"
                >
                  Call {branch.phone}
                </a>
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/15 px-5 py-2 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
                >
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WhatsApp CTA ── */}
      <section data-reveal className="relative overflow-hidden bg-ink-gradient py-16 md:py-24 text-white text-center">
        <div className="absolute inset-0 grid-texture opacity-15" />
        <div className="container-x relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Prefer WhatsApp?</h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Send us a message and we&apos;ll get back to you quickly.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20service.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
