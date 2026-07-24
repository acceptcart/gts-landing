import { ArrowUpRight } from "lucide-react";
import { offers } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function OffersSection() {
  return (
    <section className="bg-[#f2f2ed] py-24 text-black sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow={offers.eyebrow} title={offers.title} invert /></Reveal>
        <div className="mt-14 grid border-l border-t border-black/15 md:grid-cols-2 lg:grid-cols-3">
          {offers.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08} className="group border-b border-r border-black/15 bg-transparent p-7 transition-colors hover:bg-brand sm:p-9">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-8" strokeWidth={1.5} />
                  <ArrowUpRight aria-hidden="true" className="size-5 opacity-30 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-12 font-heading text-2xl font-bold leading-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-black/60">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
