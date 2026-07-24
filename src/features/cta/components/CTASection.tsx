import { callToAction } from "@/src/shared/data/site-content";
import { Container } from "@/src/shared/components/ui/Container";
import { ButtonLink } from "@/src/shared/components/ui/Button";
import { Reveal } from "@/src/shared/components/ui/Reveal";
import { PixelPattern } from "@/src/shared/components/layout/PixelPattern";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-black sm:py-24">
      <PixelPattern className="-right-16 -top-16 w-72 opacity-15 [&>span]:border-black/40 [&>span]:bg-black" />
      <Container className="relative">
        <Reveal className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">{callToAction.eyebrow}</p>
            <h2 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{callToAction.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65">{callToAction.description}</p>
          </div>
          <ButtonLink href="/contact-us" className="shrink-0 border-black bg-black text-white hover:border-dark-olive hover:bg-dark-olive">{callToAction.button}</ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
