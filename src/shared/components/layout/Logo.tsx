import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/shared/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="GTS home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="GTS"
        width={140}
        height={48}
        priority
        className="h-10 w-auto object-contain sm:h-11"
      />
    </Link>
  );
}
