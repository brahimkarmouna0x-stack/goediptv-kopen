import { MetadataRoute } from "next";
import {
  getIptvGermanPath,
  IPTV_GERMAN_PAGES_V2,
} from "@/content/iptv-german-pages";

/** Stable date for legal pages that rarely change (avoids "lastModified" churn) */
const LEGAL_LAST_MOD = new Date("2026-01-15");

/** Build ISO date string for today — content pages actually update */
const today = () => new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goediptv-kopen.nl";

  // Static routes with priority and frequency
  const staticRoutes = [
    { url: "", priority: 1.0, freq: "weekly" as const, lastMod: today },
    { url: "/popular", priority: 0.9, freq: "weekly" as const, lastMod: today },
    { url: "/support", priority: 0.8, freq: "weekly" as const, lastMod: today },
    { url: "/support/guides", priority: 0.8, freq: "monthly" as const, lastMod: today },
    { url: "/support/contact", priority: 0.8, freq: "monthly" as const, lastMod: today },
    { url: "/support/status", priority: 0.6, freq: "daily" as const, lastMod: today },
    { url: "/privacy-policy", priority: 0.4, freq: "yearly" as const, lastMod: () => LEGAL_LAST_MOD },
    { url: "/terms-of-service", priority: 0.4, freq: "yearly" as const, lastMod: () => LEGAL_LAST_MOD },
    { url: "/cookie-policy", priority: 0.4, freq: "yearly" as const, lastMod: () => LEGAL_LAST_MOD },
    { url: "/iptv-gids", priority: 0.9, freq: "weekly" as const, lastMod: today },
    { url: getIptvGermanPath("iptv-nederland"), priority: 0.9, freq: "weekly" as const, lastMod: today },
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastMod(),
    changeFrequency: route.freq,
    priority: route.priority,
  }));

  // All 105 IPTV vault pages — per-page priority + weekly freshness.
  const PRIORITY: Record<string, number> = {
    "iptv-abonnement": 0.9,
    "abonnement-iptv": 0.9,
    "iptv-deutschland": 0.9,
    iptv: 0.8,
    "iptv-smarters-pro": 0.8,
    "meilleur-iptv": 0.8,
  };
  const vaultPages = IPTV_GERMAN_PAGES_V2.map((page) => ({
    url: page.canonicalUrl,
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly" as const,
    priority: PRIORITY[page.slug] ?? 0.7,
  }));

  return [...staticRoutes, ...vaultPages];
}
