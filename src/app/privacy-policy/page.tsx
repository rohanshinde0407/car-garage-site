import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name} — how we collect, use and protect your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <div className="prose prose-ink max-w-3xl mx-auto">
        <h1>Privacy Policy</h1>
        <p>
          <strong>Effective Date:</strong> 1 January 2024
        </p>
        <p>
          {SITE.legalName} (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) operates the website{" "}
          <strong>{SITE.url}</strong>. This Privacy Policy explains how we collect, use, share and
          protect your personal information when you use our website and services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, phone number, email address and vehicle
            details when you submit an enquiry form, book a service or contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Pages visited, time spent, browser type, device information
            and referring URLs, collected automatically through analytics tools.
          </li>
          <li>
            <strong>Communication Data:</strong> Messages sent via our contact form, WhatsApp or
            email.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process and confirm service bookings and enquiries.</li>
          <li>To communicate with you about your vehicle&apos;s service status.</li>
          <li>To improve our website, services and customer experience.</li>
          <li>To send you service reminders, if you have opted in.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, rent or trade your personal information. We may share data with trusted
          service providers (analytics, hosting) solely for operating our website, and with
          insurance companies where required for claim processing with your consent.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable technical and organisational measures to protect your data. However,
          no method of transmission over the internet is 100% secure.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of or deletion of your personal data by contacting us
          at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2 id="cookies">Cookies</h2>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing
          experience and collect usage data. You can control cookies through your browser settings.
        </p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for website functionality.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how visitors use the site.
          </li>
        </ul>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with an
          updated effective date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this policy, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>.
        </p>
      </div>
    </Section>
  );
}
