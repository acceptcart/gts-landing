import type { Metadata } from "next";
import { company, contact } from "@/src/shared/data/site-content";

export const siteUrl = "https://gts.kw";

export const seo = {
  title: `${company.name} | Electronics Distribution in Kuwait`,
  titleTemplate: `%s | ${company.name}`,
  description: company.description,
  keywords: [
    "GTS Kuwait",
    "Gold Tech Store",
    "electronics distributor Kuwait",
    "smartphone wholesale Kuwait",
    "B2B electronics supply Kuwait",
    "electronics wholesale Hawally",
    "government electronics tenders Kuwait",
    "mobile phones distributor Kuwait",
    "corporate electronics supply",
    "Gulf electronics distribution",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? [...seo.keywords],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_KW",
      type: "website",
      images: [
        {
          url: absoluteUrl("/logo.png"),
          width: 1200,
          height: 630,
          alt: `${company.name} — ${company.legalName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/logo.png")],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/logo.png"),
    description: company.description,
    email: contact.email.value,
    telephone: contact.phone.value,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nora Commercial Complex, Abdullah Al Othman St.",
      addressLocality: "Hawally",
      addressCountry: "KW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.3328,
      longitude: 48.0281,
    },
    sameAs: [contact.linkedin.href, contact.website.href, contact.whatsapp.href],
    areaServed: [
      { "@type": "Country", name: "Kuwait" },
      { "@type": "Place", name: "Gulf Region" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phone.value,
        contactType: "sales",
        areaServed: "KW",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    description: company.description,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en",
  };
}
