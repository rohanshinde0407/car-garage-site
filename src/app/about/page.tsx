import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { CORE_VALUES, TIMELINE, TEAM } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn about Shivrudra Cars — Pune's trusted multi-brand and premium car workshop founded in 2015 by Samadhan Pawar.",
  path: "/about",
});

export default function AboutPage() {
  const founder = TEAM[0];

  return (
    <>
      {/* ── Hero with workshop image ── */}
      <section className="relative overflow-hidden bg-ink-gradient py-20 md:py-28">
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="container-x relative z-10 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Breadcrumb items={[{ name: "About Us", href: "/about" }]} />
            <h1 data-reveal className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About <span className="text-gradient-gold">Shivrudra Cars</span>
            </h1>
            <p data-reveal className="mt-6 text-lg text-white/60 max-w-lg">
              What started as a small workshop in Rahatani has grown into Pune&apos;s trusted name for multi-brand and luxury car care — built on honesty, craftsmanship and genuine parts.
            </p>
          </div>
          <div data-reveal className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/service/auto-mechanic-repairing-car-engine-auto-repair-shop-car-service-maintenance-concept_981948-16160.avif"
              alt="Shivrudra Cars workshop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <Section className="bg-cream">
        <div className="grid gap-8 md:grid-cols-2" data-reveal-children>
          <div className="gradient-border rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              To deliver dealership-quality car care with the transparency and personal attention of a trusted neighbourhood workshop — for every car and every owner.
            </p>
          </div>
          <div className="gradient-border rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-ink/60 leading-relaxed">
              To be the most trusted name in multi-brand and premium car service in Pune — setting the standard for honest pricing, quality workmanship and customer experience.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Core Values ── */}
      <Section>
        <SectionHeading title="Our Core Values" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-children>
          {CORE_VALUES.map((v, i) => (
            <div key={v.title} className="gradient-border rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold font-display font-bold text-sm mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Timeline ── */}
      <Section className="bg-cream">
        <SectionHeading title="Our Journey" />
        <div className="mt-12 max-w-2xl mx-auto" data-reveal-children>
          {TIMELINE.map((item, i) => (
            <div key={item.year} className="relative pl-14 pb-12 last:pb-0">
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[19px] top-12 h-full w-px bg-gradient-to-b from-gold/40 to-transparent" />
              )}
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white text-xs font-bold shadow-gold">
                {item.year.slice(-2)}
              </div>
              <h3 className="font-display text-lg font-semibold">
                {item.year} — {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Founder ── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-ink text-white font-display font-bold text-3xl shadow-soft">
            SP
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold">{founder.name}</h2>
          <p className="mt-1 text-sm font-medium text-gold">{founder.role}</p>
          <div className="hairline my-6 mx-auto w-24" />
          <p className="text-ink/60 leading-relaxed">{founder.bio}</p>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection />
    </>
  );
}
