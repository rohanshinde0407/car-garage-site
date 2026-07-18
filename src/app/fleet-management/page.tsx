import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { FLEET_FEATURES } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Fleet Management",
  description:
    "Corporate fleet maintenance in Pune — preventive servicing, AMC plans, doorstep inspection, priority support and consolidated billing by Shivrudra Cars.",
  path: "/fleet-management",
});

export default function FleetManagementPage() {
  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative overflow-hidden bg-ink-gradient py-20 md:py-28">
        <Image
          src="/service/car-repair_41050-7616.avif"
          alt=""
          fill
          className="object-cover opacity-20"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
        <div className="container-x relative z-10">
          <Breadcrumb items={[{ name: "Fleet Management", href: "/fleet-management" }]} />
          <div data-reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Fleet <span className="text-gradient-gold">Management</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              Keep your fleet on the road with preventive maintenance, AMC plans and priority support — designed for businesses of any size.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <Section className="bg-cream">
        <SectionHeading title="What We Offer" subtitle="End-to-end fleet care that reduces downtime and controls costs." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
          {FLEET_FEATURES.map((f, i) => (
            <div key={f.title} className="gradient-border rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold font-display font-bold text-sm mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── AMC Info with image ── */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden" data-reveal>
            <Image
              src="/service/car_scanning.jpg"
              alt="Fleet vehicle inspection"
              fill
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <h2 className="text-2xl md:text-3xl font-bold">Annual Maintenance Contracts</h2>
            <div className="hairline my-4 w-16" />
            <p className="text-ink/60 leading-relaxed">
              Our flexible AMC plans give you predictable costs, priority servicing and a dedicated point of contact. Whether you run 5 vehicles or 500, we tailor a plan that fits your operations and budget.
            </p>
            <p className="mt-4 text-ink/60 leading-relaxed">
              Every plan includes preventive scheduling, doorstep inspection, consolidated monthly billing and real-time service tracking through our fleet dashboard.
            </p>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        title="Let's Talk Fleet Care"
        subtitle="Get a tailored fleet maintenance proposal for your business."
      />
    </>
  );
}
