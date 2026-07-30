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

const SHOWCASE_CARS = [
  { src: "/service/bmw.jpg", alt: "BMW premium service", label: "BMW" },
  { src: "/service/mercedies.jpg", alt: "Mercedes-Benz service", label: "Mercedes-Benz" },
  { src: "/service/mastang.jpg", alt: "Ford Mustang detailing", label: "Mustang" },
  { src: "/service/fortuner.jpg", alt: "Toyota Fortuner service", label: "Fortuner" },
  { src: "/service/fortuner_1st.jpg", alt: "Toyota Fortuner premium", label: "Fortuner" },
  { src: "/service/premium_car.jpg", alt: "Premium car care", label: "Premium" },
];

export default function PremiumCarsPage() {
  return (
    <div className="bg-ink text-white">
      {/* ── HERO — Full-screen with BMW background ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <Image
          src="/service/bmw.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />
        <div className="absolute inset-0 grid-texture opacity-10" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gold/8 rounded-full blur-[150px]" />

        <div className="container-x relative z-10 py-20 md:py-28">
          <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold pulse-dot" />
            <span className="text-xs font-medium text-gold-300">Premium Division</span>
          </div>
          <h1 data-reveal className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl leading-[1.05]">
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
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold backdrop-blur-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <div data-reveal className="mt-10 flex items-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5"><span className="text-gold">★</span> OEM Diagnostics</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Genuine Parts</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span className="hidden sm:inline">Concierge Service</span>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE GALLERY — Staggered masonry with parallax feel ── */}
      <section className="relative bg-ink-gradient py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-8" />
        <div className="container-x relative z-10">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center text-gradient-gold">
            Cars We&apos;ve Cared For
          </h2>
          <p data-reveal className="mt-4 text-center text-white/50 max-w-lg mx-auto">
            From everyday luxury to high-performance machines — every car receives specialist attention.
          </p>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5" data-reveal-children>
            {SHOWCASE_CARS.map((car, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 ${
                  i === 0 || i === 5 ? "row-span-2 h-80 md:h-[420px]" : "h-48 md:h-52"
                }`}
              >
                <Image
                  src={car.src}
                  alt={car.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-medium text-gold">{car.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── PREMIUM BRANDS — Glass cards with logos ── */}
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

      {/* ── MERCEDES FEATURE — Full-bleed split ── */}
      <section className="relative overflow-hidden bg-ink-gradient">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="relative h-72 md:h-auto">
            <Image
              src="/service/mercedies.jpg"
              alt="Mercedes-Benz specialist service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent md:hidden" />
          </div>
          <div className="flex items-center py-12 md:py-20 px-6 md:px-12 lg:px-16">
            <div>
              <p data-reveal className="text-xs font-medium text-gold uppercase tracking-widest mb-4">OEM-Level Expertise</p>
              <h2 data-reveal className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient-gold">European Marque</span> Specialists
              </h2>
              <p data-reveal className="mt-5 text-white/60 leading-relaxed">
                Our luxury division employs factory-trained technicians with brand-specific diagnostic platforms. From routine servicing to complex ECU programming, your premium vehicle receives the same standard of care as an authorised dealership — without the markup.
              </p>
              <div data-reveal className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { val: "9+", label: "Luxury Brands" },
                  { val: "12", label: "Specialist Services" },
                  { val: "OEM", label: "Diagnostics" },
                  { val: "100%", label: "Genuine Parts" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-gold/15 bg-white/5 p-4 text-center">
                    <p className="font-display text-2xl font-bold text-gradient-gold">{s.val}</p>
                    <p className="text-xs text-white/50 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── PREMIUM SERVICES — Cards with hover ── */}
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

      {/* ── MUSTANG FEATURE — Full-bleed reverse split ── */}
      <section className="relative overflow-hidden bg-ink-gradient">
        <div className="grid md:grid-cols-2 min-h-[500px]">
          <div className="flex items-center py-12 md:py-20 px-6 md:px-12 lg:px-16 order-2 md:order-1">
            <div>
              <p data-reveal className="text-xs font-medium text-gold uppercase tracking-widest mb-4">Performance Care</p>
              <h2 data-reveal className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient-gold">Performance Vehicles</span> Deserve Expert Hands
              </h2>
              <p data-reveal className="mt-5 text-white/60 leading-relaxed">
                From high-revving muscle cars to turbocharged performance machines — our specialists understand the engineering that makes these vehicles extraordinary. We deliver precision service with the attention to detail your car demands.
              </p>
              <div data-reveal className="mt-8 space-y-4" data-reveal-children>
                {[
                  "Turbocharger inspection, repair and replacement",
                  "DSG and automatic transmission specialist service",
                  "Air suspension diagnosis and calibration",
                  "ECU coding, flashing and service resets",
                  "Concours-level paint correction and ceramic coating",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-gold text-xs flex-shrink-0">✓</span>
                    <p className="text-white/70 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-72 md:h-auto order-1 md:order-2">
            <Image
              src="/service/mastang.jpg"
              alt="Ford Mustang specialist care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ink md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent md:hidden" />
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── WHY CHOOSE US — Over Fortuner background ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/service/fortuner_1st.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 grid-texture opacity-8" />

        <div className="container-x relative z-10">
          <h2 data-reveal className="text-3xl md:text-4xl font-bold text-center text-gradient-gold">
            Why Choose Our Premium Division
          </h2>
          <p data-reveal className="mt-4 text-center text-white/50 max-w-lg mx-auto">
            Every detail matters when it comes to luxury car care.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-children>
            {[
              { title: "OEM Diagnostics", desc: "Brand-specific diagnostic platforms for pinpoint accuracy.", icon: "01" },
              { title: "Factory-Trained", desc: "Technicians certified on European and Japanese luxury marques.", icon: "02" },
              { title: "Genuine Parts", desc: "Authentic OEM parts sourced specifically for your vehicle.", icon: "03" },
              { title: "Concierge Service", desc: "White-glove pickup, delivery and a dedicated service advisor.", icon: "04" },
              { title: "No Dealership Markup", desc: "Premium quality at transparent, honest pricing.", icon: "05" },
              { title: "Service Warranty", desc: "Workmanship warranty on all labour and genuine parts.", icon: "06" },
              { title: "Digital Inspection", desc: "Photo-backed reports so you see exactly what your car needs.", icon: "07" },
              { title: "Customer Lounge", desc: "Relax in comfort while we care for your vehicle.", icon: "08" },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-shimmer rounded-2xl border border-gold/15 p-6 card-hover hover:border-gold/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold font-display font-bold text-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* ── CONCIERGE CTA — Over premium_car background ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/service/premium_car.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />

        <div className="container-x relative z-10">
          <div data-reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-medium text-gold uppercase tracking-widest mb-4">Concierge Experience</p>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-gold">
              Schedule Your Premium Service
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
              Experience concierge-level care for your luxury vehicle. Book online or reach out on WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#booking"
                className="rounded-full bg-gold px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
              >
                Book Now
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20premium%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-10 py-4 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold backdrop-blur-sm"
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
