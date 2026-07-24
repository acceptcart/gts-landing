import { cn } from "@/src/shared/lib/utils";

type PixelPatternProps = {
  className?: string;
};

export function PixelPattern({ className }: PixelPatternProps) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute grid grid-cols-7 gap-2 opacity-20", className)}>
      {Array.from({ length: 35 }, (_, index) => (
        <span
          key={index}
          className={cn(
            "aspect-square border border-brand/40",
            [2, 3, 9, 10, 11, 16, 23, 24, 25, 31].includes(index) && "bg-brand",
          )}
        />
      ))}
    </div>
  );
}
