import { cn } from "@/src/shared/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
        <span aria-hidden="true" className="h-px w-8 bg-brand" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-heading text-4xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl",
          invert ? "text-black" : "text-white",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-6 text-base leading-8 sm:text-lg", invert ? "text-black/70" : "text-white/60")}>
          {intro}
        </p>
      )}
    </div>
  );
}
