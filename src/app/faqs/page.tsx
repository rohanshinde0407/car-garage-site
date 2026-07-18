import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { FAQ_GROUPS, ALL_FAQS } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description:
    "Answers to frequently asked questions about car servicing, pricing, premium care, insurance, fleet maintenance and more at Shivrudra Cars Pune.",
  path: "/faqs",
});

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS)} />

      {/* ── Hero ── */}
      <Section>
        <Breadcrumb items={[{ name: "FAQs", href: "/faqs" }]} />
        <div data-reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h1>
          <p className="mt-6 text-lg text-ink/60 max-w-2xl">
            Everything you need to know about our services, pricing, warranty and more.
          </p>
        </div>
      </Section>

      {/* ── FAQ Accordion ── */}
      <Section className="bg-cream">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion groups={FAQ_GROUPS} />
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        title="Still Have Questions?"
        subtitle="Reach out on WhatsApp or give us a call — we're happy to help."
      />
    </>
  );
}
