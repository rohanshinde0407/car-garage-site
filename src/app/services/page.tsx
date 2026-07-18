import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { SERVICE_CATEGORIES, TOTAL_SERVICES } from "@/lib/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: `Browse ${TOTAL_SERVICES}+ expert car services across 7 categories — from periodic maintenance and mechanical repair to detailing and premium luxury diagnostics.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink-gradient py-20 md:py-28">
        <div className="absolute inset-0 grid-texture opacity-20" />
        <div className="container-x relative z-10">
          <Breadcrumb items={[{ name: "Services", href: "/services" }]} />
          <div data-reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-2xl">
              {TOTAL_SERVICES}+ expert services across 7 categories — everything your car needs under one roof.
            </p>
          </div>

          {/* Category quick-nav */}
          <div data-reveal className="mt-8 flex flex-wrap gap-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Categories ── */}
      {SERVICE_CATEGORIES.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          data-reveal
          className={`py-16 md:py-24 ${idx % 2 === 1 ? "bg-cream" : ""}`}
        >
          <div className="container-x">
            {/* Category header with image */}
            <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center mb-10">
              <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">{cat.title}</h2>
                <p className="mt-3 text-ink/60 leading-relaxed max-w-lg">{cat.summary}</p>
                <p className="mt-2 text-sm font-medium text-gold">{cat.services.length} services</p>
              </div>
            </div>

            {/* Service cards grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
              {cat.services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <CtaSection />
    </>
  );
}
