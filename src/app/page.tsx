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
import { FounderSection } from "@/src/features/founder/components/FounderSection";
import { PartnersSection } from "@/src/features/partners/components/PartnersSection";
import { CTASection } from "@/src/features/cta/components/CTASection";
import { createPageMetadata } from "@/src/shared/lib/seo";
import { company } from "@/src/shared/data/site-content";

export const metadata: Metadata = createPageMetadata({
  title: `${company.name} | Electronics Distribution in Kuwait`,
  description:
    "GTS (Gold Tech Store) imports and distributes smartphones, electronics, and accessories to retailers, distributors, e-commerce platforms, telecoms, and government entities across Kuwait and the Gulf.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main id="main-content">
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
      <FounderSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
