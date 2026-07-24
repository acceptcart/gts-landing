import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Footer } from "@/src/shared/components/layout/Footer";
import { Navbar } from "@/src/shared/components/layout/Navbar";
import { company, navigation } from "@/src/shared/data/site-content";
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
  metadataBase: new URL("https://gts.kw"),
  title: {
    default: `${company.name} | Electronics Distribution in Kuwait`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "electronics distributor Kuwait",
    "smartphone wholesale Kuwait",
    "B2B electronics supply",
    "GTS Kuwait",
    "government electronics tenders",
  ],
  openGraph: {
    title: `${company.name} — The Backbone of Electronics Distribution`,
    description: company.description,
    url: "https://gts.kw",
    siteName: company.name,
    locale: "en_KW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Electronics Distribution`,
    description: company.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
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
