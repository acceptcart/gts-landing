import { values } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function ValuesSection() {
  return (
    <section className="bg-black py-24 sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow={values.eyebrow} title={values.title} /></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08} className="group border border-white/10 bg-white/[0.035] p-7 transition-colors hover:border-brand/50 hover:bg-brand/[0.045] sm:p-9">
                <Icon aria-hidden="true" className="size-8 text-brand" strokeWidth={1.5} />
                <h3 className="mt-12 font-heading text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/50">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
