import { MetadataRoute } from "next";
import { FOOTER_PAGES } from "@/constants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvstreaming.nl";

  // Static routes with priority and frequency
  const staticRoutes = [
    { url: "", priority: 1.0, freq: "weekly" as const },
    { url: "/popular", priority: 0.9, freq: "weekly" as const },
    { url: "/support", priority: 0.8, freq: "weekly" as const },
    { url: "/support/guides", priority: 0.8, freq: "monthly" as const },
    { url: "/support/contact", priority: 0.8, freq: "monthly" as const },
    { url: "/support/status", priority: 0.6, freq: "daily" as const },
    { url: "/privacy-policy", priority: 0.4, freq: "yearly" as const },
    { url: "/terms-of-service", priority: 0.4, freq: "yearly" as const },
    { url: "/cookie-policy", priority: 0.4, freq: "yearly" as const },
    { url: "/iptv-streaming", priority: 0.9, freq: "weekly" as const },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  // Dynamic SEO pages from FOOTER_PAGES
  const dynamicPages = FOOTER_PAGES.map((page) => ({
    url: `${baseUrl}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicPages];
}
