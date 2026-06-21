import type { SixSectionContent } from "./types";
import home from "./home";
import iptvKopen from "./iptv-kopen";
import iptvAbonnement from "./iptv-abonnement";
import iptvAanbieder from "./iptv-aanbieder";
import iptvNederland from "./iptv-nederland";
import iptvSmartersPro from "./iptv-smarters-pro";

/**
 * All 6-section pages, keyed by slug (same as the URL path segment).
 */
export const SIX_SECTION_PAGES: Record<string, SixSectionContent> = {
  "": home,
  "iptv-kopen": iptvKopen,
  "iptv-abonnement": iptvAbonnement,
  "iptv-aanbieder": iptvAanbieder,
  "iptv-nederland": iptvNederland,
  "iptv-smarters-pro": iptvSmartersPro,
} as const;

export type { SixSectionContent, SixFaq, SixHero, SixUvpItem, SixFeatureItem, SixHowStep, SixTrustItem, SixCta } from "./types";
