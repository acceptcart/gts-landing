import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Footer } from "@/src/shared/components/layout/Footer";
import { Navbar } from "@/src/shared/components/layout/Navbar";
import { JsonLd } from "@/src/shared/components/seo/JsonLd";
import { company, contact, navigation } from "@/src/shared/data/site-content";
import {
  absoluteUrl,
  organizationJsonLd,
  seo,
  websiteJsonLd,
} from "@/src/shared/lib/seo";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: seo.title,
    template: seo.titleTemplate,
  },
  description: seo.description,
  applicationName: company.name,
  authors: [{ name: company.legalName, url: absoluteUrl() }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "business",
  keywords: [...seo.keywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${company.name} — Grow Your Business. We Handle the Supply`,
    description: seo.description,
    url: absoluteUrl(),
    siteName: company.name,
    locale: "en_KW",
    type: "website",
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1200,
        height: 630,
        alt: `${company.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Electronics Distribution`,
    description: seo.description,
    images: [absoluteUrl("/logo.png")],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-KW": "/",
      en: "/",
    },
  },
  robots: {
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
  other: {
    "contact:phone_number": contact.phone.value,
    "contact:email": contact.email.value,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#D2EF25" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-brand px-4 py-2 font-semibold text-black transition-transform focus:translate-y-0"
        >
          {navigation.skip}
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
