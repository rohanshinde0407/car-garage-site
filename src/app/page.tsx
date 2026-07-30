import Image from "next/image";
import Link from "next/link";
import {
  STATS,
  TRUST_POINTS,
  SERVICE_PROCESS,
  BRANDS_SERVED,
  PREMIUM_BRANDS,
  OTHER_BRANDS,
} from "@/lib/content";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { BrandsMarquee } from "@/components/ui/BrandsMarquee";
import { CtaSection } from "@/components/ui/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          HERO — Full-bleed background image with overlay
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        <Image
          src="/service/premium_car_inspection.jpg"
          alt=""
          fill
          priority
          className="object-cover hero-image"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />

        <div className="container-x relative z-10 py-20 md:py-28 text-white">
          <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-gold pulse-dot" />
            <span className="text-xs font-medium text-gold-300">Trusted by 25,000+ car owners in Pune</span>
          </div>

          <h1 data-reveal className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl">
            Pune&apos;s Trusted{" "}
            <span className="text-gradient-gold">Multi-Brand</span>{" "}
            Car Workshop
          </h1>

          <p data-reveal className="mt-6 text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
            Transparent pricing, genuine parts and expert care — from routine servicing to premium luxury diagnostics. Two workshops, 50+ services, one standard of excellence.
          </p>

          <div data-reveal className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact#booking"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
            >
              Book a Service
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              Explore 50+ Services
            </Link>
          </div>

          <div data-reveal className="mt-10 flex items-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="text-gold">★</span> 4.9 Google Rating
            </span>
            <span className="h-3 w-px bg-white/15" />
            <span>Genuine OEM Parts</span>
            <span className="h-3 w-px bg-white/15 hidden sm:block" />
            <span className="hidden sm:inline">Service Warranty</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STATS BAR — Floating glass card overlapping hero
          ══════════════════════════════════════════════════════════ */}
      <section className="relative -mt-10 z-20 pb-8">
        <div className="container-x">
          <div
            className="rounded-2xl bg-ink-gradient border border-white/10 p-6 md:p-8 shadow-2xl"
            data-reveal
          >
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4" data-reveal-children>
              {STATS.map((stat) => (
                <StatCounter key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TRUST INDICATORS — Cards with gradient borders
          ══════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="Why Choose Shivrudra Cars"
          subtitle="Built on transparency, craftsmanship and genuine care."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
          {TRUST_POINTS.map((point, i) => (
            <div
              key={point.title}
              className="gradient-border rounded-2xl p-6 card-hover hover:shadow-soft"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold font-display font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg font-semibold">{point.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink/60">{point.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE PROCESS — Visual timeline flow
          ══════════════════════════════════════════════════════════ */}
      <Section className="bg-cream">
        <SectionHeading
          title="How It Works"
          subtitle="From booking to delivery — a seamless, six-step process."
        />
        <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
          {SERVICE_PROCESS.map((item, i) => (
            <div key={item.step} className="relative p-6 group">
              {i < SERVICE_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 w-1/2 h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white font-display font-bold text-sm group-hover:bg-gold transition-colors duration-500">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          SERVICE CATEGORIES — Image cards with overlay
          ══════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="Our Services"
          subtitle="50+ expert services across 7 categories."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal-children>
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/services#${cat.id}`}
              className="group relative overflow-hidden rounded-2xl h-64 card-hover hover:shadow-soft"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-300 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-white/60 line-clamp-2">{cat.summary}</p>
                <p className="mt-2 text-xs font-medium text-gold">
                  {cat.services.length} services →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          PREMIUM SHOWCASE — Full-bleed split with BMW
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="grid md:grid-cols-2 min-h-[480px]">
          <div className="relative h-72 md:h-auto">
            <Image
              src="/service/bmw.jpg"
              alt="BMW premium car service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent md:hidden" />
          </div>
          <div className="flex items-center py-12 md:py-20 px-6 md:px-12 lg:px-16 bg-ink-gradient">
            <div>
              <p data-reveal className="text-xs font-medium text-gold uppercase tracking-widest mb-4">Premium Division</p>
              <h2 data-reveal className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient-gold">Luxury Cars</span> Deserve Expert Care
              </h2>
              <p data-reveal className="mt-5 text-white/60 leading-relaxed">
                Our dedicated premium division offers dealership-level service for BMW, Mercedes-Benz, Audi, Volvo, Jaguar and more — with OEM diagnostics, genuine parts and concierge pickup at honest prices.
              </p>
              <div data-reveal className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { val: "9+", label: "Luxury Brands" },
                  { val: "OEM", label: "Diagnostics" },
                  { val: "100%", label: "Genuine Parts" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-gradient-gold">{s.val}</p>
                    <p className="text-xs text-white/40 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link
                data-reveal
                href="/premium-cars"
                className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold-600 hover:shadow-gold"
              >
                Explore Premium Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FROM OUR WORKSHOP — Service-focused bento grid
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream" />
        <div className="container-x relative z-10">
          <div className="text-center" data-reveal>
            <p className="text-xs font-medium text-gold uppercase tracking-widest mb-3">From Our Workshop</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Precision at <span className="text-gradient-gold">Every Step</span>
            </h2>
            <p className="mt-4 text-ink/50 max-w-lg mx-auto">
              Every vehicle that enters our workshop receives the same meticulous attention — from diagnostics to the final quality check.
            </p>
          </div>

          {/* Bento grid */}
          <div className="mt-14 grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[200px]" data-reveal-children>
            {/* Large hero card */}
            <div className="col-span-4 md:col-span-3 row-span-2 group relative overflow-hidden rounded-2xl">
              <Image src="/service/fortuner.jpg" alt="Full service inspection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 backdrop-blur-sm px-3 py-1 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-medium text-gold-300">Complete Service</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white">Bumper-to-Bumper Inspection</h3>
                <p className="mt-2 text-sm text-white/50 max-w-sm">Multi-point quality check with photo-backed digital report — so you know exactly what your car needs.</p>
              </div>
            </div>

            {/* Top right tall card */}
            <div className="col-span-2 md:col-span-3 row-span-1 group relative overflow-hidden rounded-2xl">
              <Image src="/service/mercedies.jpg" alt="OEM diagnostics" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 backdrop-blur-sm px-3 py-1 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-medium text-gold-300">OEM Diagnostics</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">Brand-Specific Diagnostics</h3>
              </div>
            </div>

            {/* Bottom right — two cards side by side */}
            <div className="col-span-2 md:col-span-1 row-span-1 group relative overflow-hidden rounded-2xl">
              <Image src="/service/mastang.jpg" alt="Paint correction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-medium text-gold">Detailing</p>
                <p className="text-sm font-semibold text-white mt-0.5">Paint Correction</p>
              </div>
            </div>

            <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl">
              <Image src="/service/premium_car.jpg" alt="Ceramic coating" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-medium text-gold">Protection</p>
                <p className="text-sm font-semibold text-white mt-0.5">Ceramic & Graphene Coating</p>
              </div>
            </div>
          </div>

          {/* Bottom stat strip */}
          <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 text-center">
            {[
              { val: "25,000+", label: "Cars Serviced" },
              { val: "50+", label: "Expert Services" },
              { val: "2", label: "Workshops in Pune" },
              { val: "4.9★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{s.val}</p>
                <p className="text-xs text-ink/40 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BRANDS MARQUEE — Logo strip
          ══════════════════════════════════════════════════════════ */}
      <section data-reveal className="py-12 bg-cream border-y border-ink/5">
        <div className="container-x mb-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-ink/40">
            Trusted by owners of 23+ brands
          </p>
        </div>
        <BrandsMarquee brands={[...BRANDS_SERVED, ...PREMIUM_BRANDS, ...OTHER_BRANDS]} />
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <CtaSection />
    </>
  );
}
