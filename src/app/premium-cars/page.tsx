import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { PREMIUM_BRANDS, PREMIUM_SERVICES } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Premium Car Service",
  description:
    "Specialist luxury car service in Pune for BMW, Mercedes-Benz, Audi, Volvo, Jaguar, Land Rover, Porsche, MINI and Lexus — OEM diagnostics, genuine parts and concierge care.",
  path: "/premium-cars",
});

export default function PremiumCarsPage() {
  return (
    <div className="bg-ink text-white">
      {/* ── Dark Hero with image ── */}
      <section className="relative overflow-hidden bg-ink-gradient min-h-[70vh] flex items-center">
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <Image
            src="/service/car-repair_41050-7616.avif"
            alt="Premium car detailing"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        </div>
        <div className="container-x relative z-10 py-20 md:py-28">
          <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-gold pulse-dot" />
            <span className="text-xs font-medium text-gold-300">Premium Division</span>
          </div>
          <h1 data-reveal className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl">
            <span className="text-gradient-gold">Premium Car Care,</span>
            <br />
            Redefined
          </h1>
          <p data-reveal className="mt-6 text-lg md:text-xl text-white/60 max-w-xl">
            Dealership-quality service for luxury marques — with the transparency, personal attention and honest pricing you deserve.
          </p>
          <div data-reveal className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact#booking"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
            >
              Schedule Your Premium Service
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20premium%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── Premium Brands ── */}
      <section data-reveal className="bg-ink-gradient py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient-gold">
            Luxury Brands We Specialise In
          </h2>
          <p className="mt-4 text-center text-white/60 max-w-xl mx-auto">
            Factory-trained technicians and OEM-level diagnostic tools for every marque.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 max-w-3xl mx-auto" data-reveal-children>
            {PREMIUM_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="glass-shimmer rounded-2xl border border-gold/20 p-6 flex flex-col items-center justify-center gap-4 card-hover hover:border-gold/40"
              >
                <div className="h-16 w-full flex items-center justify-center rounded-xl bg-white/95 p-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="font-display text-sm font-semibold text-white/80">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── Premium Services ── */}
      <section data-reveal className="bg-ink-gradient py-16 md:py-24">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient-gold">
            Premium Services
          </h2>
          <p className="mt-4 text-center text-white/60 max-w-xl mx-auto">
            Specialist care designed exclusively for luxury and performance vehicles.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
            {PREMIUM_SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className="glass-shimmer rounded-2xl border border-gold/15 p-6 card-hover hover:border-gold/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold font-display font-bold text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gradient-gold">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── Why Choose Us — Split with image ── */}
      <section data-reveal className="bg-ink-gradient py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/service/laptop_scanning.avif"
              alt="OEM diagnostics on luxury vehicle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">
              Why Choose Our Premium Division
            </h2>
            <div className="mt-8 space-y-5" data-reveal-children>
              {[
                "OEM-level diagnostic platforms for accurate fault-finding",
                "Factory-trained luxury car specialists",
                "Genuine parts sourced specifically for your marque",
                "Personal service advisor — one point of contact throughout",
                "Concierge pickup and drop with white-glove care",
                "Comfortable customer lounge while you wait",
                "Transparent pricing with no dealership markups",
                "Workmanship warranty on all premium services",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold text-xs flex-shrink-0">✓</span>
                  <p className="text-white/80 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── Concierge CTA ── */}
      <section data-reveal className="bg-ink-gradient py-16 md:py-24">
        <div className="container-x">
          <div className="glass-shimmer rounded-2xl border border-gold/20 p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">
              Schedule Your Premium Service
            </h2>
            <p className="mt-4 text-white/60">
              Experience concierge-level care for your luxury vehicle. Book online or reach out on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#booking"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
              >
                Book Now
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20premium%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
