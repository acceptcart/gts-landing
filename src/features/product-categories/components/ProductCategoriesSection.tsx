import { products } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { SectionHeading } from "@/src/shared/components/ui/SectionHeading";
import { Reveal } from "@/src/shared/components/ui/Reveal";
import { cn } from "@/src/shared/lib/utils";

export function ProductCategoriesSection() {
  return (
    <section id="products" className="bg-white py-24 text-black sm:py-32">
      <Container>
        <Reveal><SectionHeading eyebrow={products.eyebrow} title={products.title} invert /></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {products.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.08}
                className={cn(
                  "group relative min-h-80 overflow-hidden bg-black p-7 text-white lg:col-span-2",
                  index > 2 && "lg:col-span-3",
                )}
              >
                <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/15 blur-3xl transition-transform duration-500 group-hover:scale-150" />
                <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-50" />
                <div className="relative flex h-full flex-col">
                  <Icon aria-hidden="true" className="size-12 text-brand" strokeWidth={1.3} />
                  <div className="mt-auto">
                    <span className="text-xs font-semibold tracking-[0.18em] text-brand">CATEGORY / 0{index + 1}</span>
                    <h3 className="mt-3 font-heading text-3xl font-bold">{item.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-white/55">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
