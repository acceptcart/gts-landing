import type { Metadata } from "next";
import { company, contact } from "@/src/shared/data/site-content";

export const siteUrl = "https://gts.kw";

export const seo = {
  title: `${company.name} | Electronics Distribution in Kuwait`,
  titleTemplate: `%s | ${company.name}`,
  description: company.description,
  keywords: [
    "Gts Kuwait",
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

export const ogImage = {
  url: "/logo.png",
  width: 704,
  height: 284,
  alt: `${company.name} — ${company.legalName}`,
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  if (path === "/" || path === "") return siteUrl;
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
    keywords: [...new Set([...seo.keywords, ...(keywords ?? [])])],
    alternates: {
      canonical: path,
      languages: {
        "en-KW": path,
        en: path,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      locale: "en_KW",
      type: "website",
      images: [
        {
          url: absoluteUrl(ogImage.url),
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
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
    sameAs: [contact.linkedin.href, contact.whatsapp.href],
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
    inLanguage: "en-KW",
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = "WebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-KW",
    primaryImageOfPage: absoluteUrl(ogImage.url),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
