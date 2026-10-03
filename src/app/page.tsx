import type { Metadata } from "next";
import { Hero } from "@/src/features/hero/components/Hero";
import { AboutSection } from "@/src/features/about/components/AboutSection";
import { VisionMissionSection } from "@/src/features/vision-mission/components/VisionMissionSection";
import { ValuesSection } from "@/src/features/values/components/ValuesSection";
import { OffersSection } from "@/src/features/offers/components/OffersSection";
import { ServicesSection } from "@/src/features/services/components/ServicesSection";
import { ProductCategoriesSection } from "@/src/features/product-categories/components/ProductCategoriesSection";
import { SectorsSection } from "@/src/features/sectors/components/SectorsSection";
import { DifferentiatorsSection } from "@/src/features/differentiators/components/DifferentiatorsSection";
import { StrategicGoalsSection } from "@/src/features/strategic-goals/components/StrategicGoalsSection";
import { PartnersSection } from "@/src/features/partners/components/PartnersSection";
import { CTASection } from "@/src/features/cta/components/CTASection";
import { JsonLd } from "@/src/shared/components/seo/JsonLd";
import { createPageMetadata, webPageJsonLd } from "@/src/shared/lib/seo";
import { company } from "@/src/shared/data/site-content";

const title = `${company.name} | Electronics Distribution in Kuwait`;
const description =
  "Gts (Gold Tech Store) imports and distributes smartphones, electronics, and accessories to retailers, distributors, e-commerce platforms, telecoms, and government entities across Kuwait and the Gulf.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main id="main-content">
      <JsonLd data={webPageJsonLd({ title, description, path: "/" })} />
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <ValuesSection />
      <OffersSection />
      <ServicesSection />
      <ProductCategoriesSection />
      <SectorsSection />
      <DifferentiatorsSection />
      <StrategicGoalsSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
