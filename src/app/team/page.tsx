import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TEAM } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Our Team",
  description:
    "Meet the team behind Shivrudra Cars — factory-trained technicians, luxury specialists and dedicated service advisors.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <Breadcrumb items={[{ name: "Our Team", href: "/team" }]} />
        <div data-reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Meet the <span className="text-gradient-gold">Team</span>
          </h1>
          <p className="mt-6 text-lg text-ink/60 max-w-2xl">
            The skilled professionals who keep your car in expert hands — from diagnosis to delivery.
          </p>
        </div>
      </Section>

      {/* ── Team Grid ── */}
      <Section className="bg-cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-reveal-children>
          {TEAM.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection />
    </>
  );
}
