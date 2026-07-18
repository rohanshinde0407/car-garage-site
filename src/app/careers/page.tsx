import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { CAREERS, CAREER_PERKS } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the Shivrudra Cars team — explore open roles for service advisors, technicians, detailers and more at our Pune workshops.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <Breadcrumb items={[{ name: "Careers", href: "/careers" }]} />
        <div data-reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Join <span className="text-gradient-gold">Our Team</span>
          </h1>
          <p className="mt-6 text-lg text-ink/60 max-w-2xl">
            Build your career with Pune&apos;s trusted multi-brand and premium car workshop.
          </p>
        </div>
      </Section>

      {/* ── Open Roles ── */}
      <Section className="bg-cream">
        <SectionHeading title="Open Positions" subtitle="We're looking for skilled professionals who share our passion for quality." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
          {CAREERS.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-ink/8 bg-white p-6 card-hover hover:border-gold/30 hover:shadow-soft"
            >
              <h3 className="font-display text-lg font-semibold">{role.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {role.type}
                </span>
                <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
                  {role.location}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{role.summary}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Perks ── */}
      <Section>
        <SectionHeading title="Why Work With Us" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto" data-reveal-children>
          {CAREER_PERKS.map((perk) => (
            <div key={perk} className="flex items-start gap-3">
              <span className="mt-0.5 text-gold flex-shrink-0">✓</span>
              <p className="text-ink/70">{perk}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Apply CTA ── */}
      <section data-reveal className="bg-ink-gradient py-16 md:py-24 text-white text-center">
        <div className="container-x">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Apply?</h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Send your CV and a brief introduction — we&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Career%20Application%20—%20Shivrudra%20Cars`}
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-600"
          >
            Email Your CV
          </a>
        </div>
      </section>
    </>
  );
}
