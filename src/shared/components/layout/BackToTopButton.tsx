"use client";

import { ArrowUp } from "lucide-react";
import { footer } from "@/src/shared/data/site-content";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 text-xs text-white/35 transition-colors hover:text-brand"
    >
      {footer.backToTop}
      <ArrowUp aria-hidden="true" className="size-3.5" />
    </button>
  );
}
