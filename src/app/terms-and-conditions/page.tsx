import type { Metadata } from "next";
import { terms } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { TermsContent } from "@/src/features/terms/components/TermsContent";
import { createPageMetadata } from "@/src/shared/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the GTS Kuwait website and B2B wholesale/distribution commercial framework.",
  path: "/terms-and-conditions",
  noIndex: false,
});

export default function TermsPage() {
  return (
    <main id="main-content" className="bg-white text-black">
      <header className="bg-black pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{terms.eyebrow}</p>
          <h1 className="mt-5 font-heading text-5xl font-bold leading-none tracking-[-0.06em] sm:text-7xl">{terms.title}</h1>
        </Container>
      </header>
      <section className="py-20 sm:py-28">
        <Container><TermsContent /></Container>
      </section>
    </main>
  );
}
