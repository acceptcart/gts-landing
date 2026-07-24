import { differentiators } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { Reveal } from "@/src/shared/components/ui/Reveal";

export function DifferentiatorsSection() {
  return (
    <section className="overflow-hidden bg-brand py-16 text-black sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-black/25 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">{differentiators.eyebrow}</p>
              <h2 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-none tracking-[-0.05em] sm:text-5xl">{differentiators.title}</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.07} className="border-b border-black/20 py-8 sm:border-r sm:px-6 lg:border-b-0 first:pl-0 last:border-r-0">
                <Icon aria-hidden="true" className="size-7" strokeWidth={1.6} />
                <h3 className="mt-7 font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-black/55">{item.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
