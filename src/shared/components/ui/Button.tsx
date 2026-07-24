import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/shared/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-brand bg-brand text-black hover:bg-brand-light hover:border-brand-light",
  outline: "border-white/25 bg-transparent text-white hover:border-brand hover:text-brand",
  ghost: "border-transparent bg-white/[0.06] text-white hover:bg-white/[0.12]",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border px-6 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
      {showArrow && <ArrowUpRight aria-hidden="true" className="size-4" />}
    </Link>
  );
}
