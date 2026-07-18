import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${SITE.name} services.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <Section>
      <Breadcrumb items={[{ name: "Refund Policy", href: "/refund-policy" }]} />
      <div className="prose prose-ink max-w-3xl mx-auto">
        <h1>Refund &amp; Cancellation Policy</h1>
        <p>
          <strong>Effective Date:</strong> 1 January 2024
        </p>
        <p>
          At {SITE.legalName}, we strive to deliver quality service and fair pricing. This policy
          outlines our approach to refunds and cancellations.
        </p>

        <h2>Service Cancellations</h2>
        <ul>
          <li>
            You may cancel a booked service at no charge by informing us at least 4 hours before
            your scheduled slot.
          </li>
          <li>Walk-in services can be cancelled before work begins at no cost.</li>
        </ul>

        <h2>Refunds on Completed Services</h2>
        <ul>
          <li>
            If you are not satisfied with the quality of our work, please bring your vehicle back
            within 7 days. We will inspect and rectify the issue at no additional charge.
          </li>
          <li>
            Refunds for completed services are considered on a case-by-case basis after
            inspection.
          </li>
          <li>
            Parts that have been fitted and used are generally non-refundable, as per
            manufacturer terms.
          </li>
        </ul>

        <h2>Advance Payments</h2>
        <ul>
          <li>
            Advance payments made for special-order parts are refundable only if the part has not
            been ordered or can be returned to the supplier.
          </li>
          <li>
            Refunds on advance payments, where applicable, will be processed within 7–10 working
            days.
          </li>
        </ul>

        <h2>Warranty Claims</h2>
        <p>
          If a defect in our workmanship or a replaced part is found within the warranty period,
          we will repair or replace it at no cost. This is not a refund but a warranty obligation
          — details are provided on your invoice.
        </p>

        <h2>How to Request a Refund</h2>
        <p>
          Contact us with your invoice number and a description of the issue:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </li>
          <li>
            Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
          </li>
          <li>Visit either branch in person with your invoice.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For any concerns, please reach out — we value your trust and will always work towards a
          fair resolution.
        </p>
      </div>
    </Section>
  );
}
