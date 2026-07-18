import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

/** Build per-page metadata with canonical + OpenGraph consistency. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/og/home.jpg",
  noIndex = false,
}: PageSeo): Metadata {
  const canonical = path === "/" ? "/" : path;
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url: `${SITE.url}${canonical}`,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
  };
}
