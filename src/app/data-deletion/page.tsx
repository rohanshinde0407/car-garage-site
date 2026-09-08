import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = pageMetadata({
  title: "Data Deletion Instructions",
  description: `How to request deletion of your personal data held by ${SITE.name}.`,
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <Section>
      <Breadcrumb items={[{ name: "Data Deletion Instructions", href: "/data-deletion" }]} />
      <div className="prose prose-ink max-w-3xl mx-auto">
        <h1>Data Deletion Instructions</h1>
        <p>
          <strong>Effective Date:</strong> 1 January 2024
        </p>
        <p>
          {SITE.legalName} does not require an account or login to enquire about or book a
          service — there is no &quot;delete my account&quot; button in an app, so deletion
          requests are handled directly by our team.
        </p>

        <h2>How to Request Deletion</h2>
        <p>
          Email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a> from the phone number you used to
          contact us or book a service, and ask us to delete your personal data. We verify the
          request against that phone number before making any change, so that someone else
          cannot delete your records on your behalf.
        </p>

        <h2>What We Delete</h2>
        <p>
          Within 30 days of a verified request, we remove your name, phone number, vehicle
          details, enquiry and booking history, and any service photographs from active use.
        </p>
        <p>
          Job card and invoice records tied to completed, paid work are retained in read-only
          form for the period Indian tax law requires (currently up to six years), even after a
          deletion request. We&apos;ll confirm which of your records, if any, fall into this
          category when you ask.
        </p>

        <h2>WhatsApp Communications</h2>
        <p>
          If you&apos;ve messaged us or received service updates via WhatsApp, deleting your
          data with us also stops any further messages — we only use WhatsApp to reach you about
          your own enquiry or vehicle, never for anything else.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this process, contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>.
        </p>
      </div>
    </Section>
  );
}
