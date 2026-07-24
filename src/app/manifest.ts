import type { MetadataRoute } from "next";
import { company } from "@/src/shared/data/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} — ${company.legalName}`,
    short_name: company.name,
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#D2EF25",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
