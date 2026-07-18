import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  STATS,
  TRUST_POINTS,
  SERVICE_PROCESS,
  BRANDS_SERVED,
  PREMIUM_BRANDS,
  OTHER_BRANDS,
  TESTIMONIALS,
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
          HERO — Full-bleed background image (mirrored) with overlay
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image — mirrored */}
        <Image
          src="/service/car-repair_41050-7681.avif"
          alt=""
          fill
          priority
          className="object-cover hero-image-mirror"
          aria-hidden="true"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
        {/* Grid texture on top */}
        <div className="absolute inset-0 grid-texture opacity-20" />
        {/* Ambient glow */}
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

          {/* Mini trust badges */}
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
          TESTIMONIALS — Horizontal scroll with snap
          ══════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real reviews from real car owners across Pune."
        />
        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 scrollbar-none">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="min-w-[320px] max-w-[360px] flex-shrink-0 snap-start rounded-2xl border border-ink/8 bg-white p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.car} · {t.area}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-gold text-sm mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <CtaSection />
    </>
  );
}
