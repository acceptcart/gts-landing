import type { Metadata } from "next";
import { contact } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { Reveal } from "@/src/shared/components/ui/Reveal";
import { PixelPattern } from "@/src/shared/components/layout/PixelPattern";
import { ContactForm } from "@/src/features/contact/components/ContactForm";
import { ContactInfo } from "@/src/features/contact/components/ContactInfo";
import { ContactMap } from "@/src/features/contact/components/ContactMap";
import { createPageMetadata } from "@/src/shared/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact Gts Kuwait for B2B electronics sourcing, wholesale distribution, government tenders, and long-term supply partnerships. Phone, WhatsApp, email, and Hawally location.",
  path: "/contact-us",
  keywords: [
    "contact Gts Kuwait",
    "electronics wholesale inquiry Kuwait",
    "B2B smartphone supplier contact",
    "Gts Hawally",
  ],
});

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-black">
      <section className="grid-lines relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
        <PixelPattern className="-right-12 top-20 w-72" />
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{contact.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-balance font-heading text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">{contact.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">{contact.intro}</p>
        </Container>
      </section>
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal><ContactForm /></Reveal>
            <Reveal delay={0.1}>
              <ContactInfo />
              <ContactMap />
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
