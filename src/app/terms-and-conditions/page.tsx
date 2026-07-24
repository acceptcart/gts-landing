import type { Metadata } from "next";
import { terms } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { TermsContent } from "@/src/features/terms/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website and B2B commercial terms template for GTS Kuwait.",
  alternates: { canonical: "/terms-and-conditions" },
};

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
