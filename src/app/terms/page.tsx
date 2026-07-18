import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${SITE.name} services and website.`,
  path: "/terms",
});

const TERMS_SECTIONS = [
  {
    title: "Services",
    content: [
      "We provide car servicing, repair, detailing and related automotive services at our workshops in Pune.",
      "All work is performed only after providing you with a written estimate and receiving your explicit approval.",
      "Service timelines are communicated upfront and we make every effort to deliver on time.",
    ],
  },
  {
    title: "Estimates & Pricing",
    content: [
      "All estimates are provided in writing — digitally or on paper — before any work begins.",
      "Additional work discovered during servicing will be communicated to you with a revised estimate for approval before proceeding.",
      "Prices are subject to change based on parts availability, supplier pricing and scope of work.",
      "Final invoices reflect only approved work and parts. There are no hidden charges.",
    ],
  },
  {
    title: "Parts & Warranty",
    content: [
      "We use genuine OEM and reputed OES parts unless an alternative is agreed upon with you in advance.",
      "A workmanship warranty is provided on all labour performed. Duration and terms are specified on your invoice.",
      "Part warranties are passed through as per the manufacturer's or supplier's terms.",
      "Warranty does not cover damage caused by misuse, neglect, accidents, unauthorized modifications or normal wear and tear.",
    ],
  },
  {
    title: "Vehicle Collection",
    content: [
      "Vehicles must be collected within 3 working days of receiving a service completion notification.",
      "We are not liable for vehicles left beyond this period, though we will make reasonable efforts to keep them safe.",
      "Storage charges may apply for vehicles not collected within 7 days of notification.",
    ],
  },
  {
    title: "Liability",
    content: [
      "Our liability is limited to the cost of the specific service performed. We are not liable for indirect, incidental or consequential damages.",
      "We take reasonable care of your vehicle while in our custody but are not liable for pre-existing conditions, undisclosed defects or damage caused by third parties.",
      "Any claims must be raised within 7 days of service delivery with your invoice as reference.",
    ],
  },
  {
    title: "Pickup & Delivery",
    content: [
      "Doorstep pickup and delivery services are offered at our discretion and based on availability.",
      "Vehicles are transported with due care. However, we are not responsible for damage caused by road conditions or events beyond our control during transit.",
      "Premium customers receive complimentary concierge pickup and drop as part of the premium service package.",
    ],
  },
  {
    title: "Booking & Cancellations",
    content: [
      "Online and WhatsApp bookings are requests subject to confirmation — a booking request does not guarantee a slot until confirmed by our team.",
      "Cancellations made at least 4 hours before the scheduled slot incur no charges.",
      "Repeated no-shows may affect future booking priority.",
    ],
  },
  {
    title: "Website Use",
    content: [
      "Content on this website is for general information purposes only and does not constitute a binding offer or professional advice.",
      "We reserve the right to update, modify or remove website content at any time without prior notice.",
      "All images, text, branding and design on this website are the intellectual property of Shivrudra Cars.",
    ],
  },
  {
    title: "Privacy & Data",
    content: [
      "Your use of this website is also governed by our Privacy Policy.",
      "We collect only the personal information necessary to process your service requests and improve your experience.",
      "We do not sell or share your personal data with third parties for marketing purposes.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by and construed in accordance with the laws of India.",
      "Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink-gradient py-20 md:py-28">
        <div className="absolute inset-0 grid-texture opacity-15" />
        <div className="container-x relative z-10">
          <Breadcrumb items={[{ name: "Terms & Conditions", href: "/terms" }]} />
          <div data-reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Terms &amp; <span className="text-gradient-gold">Conditions</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl">
              The terms that govern your use of our services and website. Please read them carefully.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
              <span>Effective: 1 January 2024</span>
              <span className="h-3 w-px bg-white/15" />
              <span>Last updated: 1 January 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <Section>
        <div className="max-w-3xl mx-auto" data-reveal>
          <p className="text-ink/70 leading-relaxed">
            By using the website and services of{" "}
            <strong className="text-ink">{SITE.legalName}</strong> (&quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;), you agree to the following terms and
            conditions. These terms apply to all customers, visitors and users of our
            website and services.
          </p>
        </div>
      </Section>

      {/* ── Quick Navigation ── */}
      <section className="pb-8">
        <div className="container-x max-w-3xl mx-auto" data-reveal>
          <div className="rounded-2xl border border-ink/8 bg-cream p-6">
            <p className="text-sm font-semibold text-ink/80 mb-3">Jump to section</p>
            <div className="flex flex-wrap gap-2">
              {TERMS_SECTIONS.map((section, i) => (
                <a
                  key={section.title}
                  href={`#section-${i + 1}`}
                  className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/60 hover:border-gold hover:text-gold transition-colors"
                >
                  {String(i + 1).padStart(2, "0")}. {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Terms Sections ── */}
      <section className="pb-16 md:pb-24">
        <div className="container-x max-w-3xl mx-auto space-y-8" data-reveal-children>
          {TERMS_SECTIONS.map((section, i) => (
            <div
              key={section.title}
              id={`section-${i + 1}`}
              className="gradient-border rounded-2xl p-6 md:p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold font-display font-bold text-sm flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-xl md:text-2xl font-bold">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    <p className="text-sm leading-relaxed text-ink/65">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact & Related Links ── */}
      <Section className="bg-cream">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-2xl md:text-3xl font-bold">Questions About These Terms?</h2>
          <div className="hairline my-6 mx-auto w-24" />
          <p className="text-ink/60 leading-relaxed">
            If you have any questions or concerns about these terms, please don&apos;t
            hesitate to reach out. We&apos;re happy to help.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-700 transition-colors"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gold hover:underline">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-ink/15" />
            <Link href="/refund-policy" className="text-gold hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        title="Ready to Book Your Service?"
        subtitle="Transparent pricing, genuine parts and expert care — always."
      />
    </>
  );
}
