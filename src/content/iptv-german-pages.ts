import { absoluteUrl, OG_IMAGE } from "@/lib/seo";

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 2 — RICH PAGE SCHEMA
//  ---------------------------------------------------------------------------
//  This is the new type system that the rebuilt dynamic route + PageRenderer
//  (Phase 4) and the section component library (Phase 6) consume. It is added
//  ALONGSIDE the legacy `IptvGermanPage`/`Vault*` types so the app keeps
//  compiling during the migration; the legacy types below are removed once the
//  route is switched over to `IPTV_GERMAN_PAGES` of type `IPTVPage[]`.
//
//  Design notes:
//   • `metaTitle` is the FINAL <title> string (keyword-first, brand included,
//     ≤60 chars) and is emitted via `title.absolute` to avoid the root layout's
//     `%s | IPTV German` template double-suffixing the brand.
//   • URL-bearing fields (`canonicalUrl`, `ogImage`, hreflang values) are
//     absolute and built from `SITE.url` in `@/lib/seo`.
//   • `sections` is a discriminated union rendered by a switch in PageRenderer;
//     each `type` maps to one lazy-loaded section component.
// ═════════════════════════════════════════════════════════════════════════════

export type PageLanguage = "de" | "en";

/** Search intent — drives the section mix and copy a page receives. */
export type PageIntent =
  | "general" // broad informational ("was ist iptv")
  | "guide" // how-to / informational deep-dive
  | "app" // player / app pages (smarters, tivimate, …)
  | "device" // boxes, smart TV, receivers
  | "subscription" // commercial: abos, prices, buying
  | "provider" // choosing/comparing providers
  | "legal" // legality, fines, risks
  | "playlist" // m3u / playlist / free
  | "quality" // 4K / bitrate / performance
  | "landing"; // high-intent commercial landing

/** schema.org type a page emits as JSON-LD (see Phase 4 `JsonLd`). */
export type StructuredDataType =
  | "FAQPage"
  | "Article"
  | "Product"
  | "BreadcrumbList"
  | "WebPage";

export type Breadcrumb = { label: string; href: string };

export type CTAButton = { label: string; href: string };

export type PageFaq = { question: string; answer: string };

export type InternalLink = {
  label: string;
  href: string;
  description?: string;
};

// ── Section payload sub-types ────────────────────────────────────────────────

/** A single feature card. `icon` is a lucide-react icon name. */
export type Feature = {
  icon?: string;
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string; // formatted incl. currency, e.g. "12,99 €"
  period?: string; // e.g. "/ Monat"
  description?: string;
  features: string[];
  cta: CTAButton;
  highlighted?: boolean; // "Beliebteste" tier
  badge?: string;
};

/** A comparison row. Each value lines up with `ComparisonSection.columns`. */
export type ComparisonRow = {
  label: string;
  values: (boolean | string)[];
};

export type DevicePlatform =
  | "android"
  | "ios"
  | "smart-tv"
  | "browser"
  | "box"
  | "windows"
  | "other";

export type DeviceCard = {
  name: string;
  icon?: string;
  platform: DevicePlatform;
  steps: number; // number of setup steps
  href?: string;
};

export type Step = {
  title: string;
  description: string;
};

export type Review = {
  author: string;
  country?: string; // label or emoji flag, e.g. "🇩🇪"
  rating: number; // 1–5
  text: string;
};

export type ChannelCategory = {
  name: string;
  count?: number;
  examples: string[];
};

// ── Discriminated union of renderable sections ───────────────────────────────
export type PageSection =
  | { type: "richText"; heading?: string; html: string }
  | { type: "features"; heading?: string; subheading?: string; items: Feature[] }
  | {
      type: "pricing";
      heading?: string;
      subheading?: string;
      tiers: PricingTier[];
    }
  | {
      type: "comparison";
      heading?: string;
      subheading?: string;
      columns: string[];
      rows: ComparisonRow[];
    }
  | {
      type: "devices";
      heading?: string;
      subheading?: string;
      list: DeviceCard[];
    }
  | { type: "howItWorks"; heading?: string; subheading?: string; steps: Step[] }
  | {
      type: "testimonials";
      heading?: string;
      subheading?: string;
      reviews: Review[];
    }
  | {
      type: "channelList";
      heading?: string;
      subheading?: string;
      categories: ChannelCategory[];
    }
  | { type: "faq"; heading?: string; items: PageFaq[] }
  | {
      type: "cta";
      heading: string;
      text?: string;
      cta: CTAButton;
      variant: "primary" | "secondary";
    };

export type PageSectionType = PageSection["type"];

export type HeroBlock = {
  headline: string; // H1 — contains the exact-match primary keyword
  subheadline: string;
  cta: CTAButton;
  badgeTags: string[]; // 3–4 trust signals, e.g. ["4K/8K", "7-Tage Test"]
  background?: string; // optional hero background image (absolute or /public)
};

/** The rebuilt page model. Replaces the legacy `IptvGermanPage` after Phase 4. */
export type IPTVPage = {
  slug: string;
  keyword: string; // primary keyword (used for search index + labels)
  lang: PageLanguage;
  intent: PageIntent;
  hreflang: { de: string; en?: string };
  metaTitle: string; // final <title>, keyword-first, ≤60 chars
  metaDescription: string; // ≤155 chars, action verb + benefit + CTA
  canonicalUrl: string; // absolute
  ogImage: string; // absolute
  structuredData: StructuredDataType;
  breadcrumbs: Breadcrumb[];
  hero: HeroBlock;
  sections: PageSection[]; // ≥5 per page
  faq: PageFaq[]; // ≥5 per page
  internalLinks: InternalLink[]; // ≥4 per page
  updatedAt: string; // ISO date
};

// ═══════════════════════════ LEGACY TYPES (pre-migration) ═══════════════════
// Still consumed by the current route + VaultPageTemplate; removed in Phase 4.

export type VaultFaq = {
  question: string;
  answer: string;
};

export type VaultInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type VaultSection = {
  heading: string;
  body: string;
  points: string[];
};

export type IptvGermanPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introCopy: string;
  benefits: string[];
  sections: VaultSection[];
  faqs: VaultFaq[];
  internalLinks: VaultInternalLink[];
  language: "nl" | "en" | "fr" | "es" | "de";
  intent:
    | "general"
    | "netherlands"
    | "app"
    | "device"
    | "subscription"
    | "legal"
    | "playlist"
    | "quality"
    | "provider"
    | "adult";
  isCentered?: boolean;
  heroBg?: string;
};

const basePath = "/iptv-german";

export const IPTV_GERMAN_SLUGS = [
  "iptv",
  "iptv-ott-service",
  "iptv-service",
  "service-iptv",
  "meilleur-service-iptv",
  "iptv-services",
  "services-iptv",
  "iptv-smarters-pro",
  "abonnement-iptv",
  "iptv-abonnement",
  "iptv-boitier",
  "iptv-smart-player",
  "iptv-smarters",
  "boitier-iptv",
  "iptv-deutschland",
  "iptv-stream-player",
  "smart-iptv",
  "iptv-premium",
  "free-popular-iptv-playlist",
  "iptv-illegal",
  "iptv-pro",
  "iptv-smarter-pro",
  "iptv-smarters-pro-apk",
  "meilleur-iptv",
  "code-iptv",
  "france-iptv",
  "ip-smart-iptv",
  "iptv-smarters-player",
  "iptv-tv",
  "application-iptv",
  "code-iptv-gratuit-2025",
  "iptv-app",
  "iptv-application",
  "iptv-smarters-pro-gratuit",
  "smart-iptv-ip",
  "app-iptv",
  "code-downloader-iptv-gratuit-2025",
  "french-iptv",
  "iptv-gratuit",
  "iptv-smarter",
  "iptv-smarters-pro-android",
  "iptv-smarters-pro-windows",
  "iron-iptv",
  "setting-iptv",
  "xtream-iptv",
  "zen-iptv",
  "atlas-iptv",
  "comment-avoir-les-codes-iptv-gratuit",
  "telecharger-iptv-gratuit",
  "abonnement-iptv-12-mois-smart-tv",
  "atlas-pro-iptv",
  "decodeur-iptv-avec-code",
  "hot-iptv",
  "iptv-free-trial",
  "iptv-legal",
  "iptv-player",
  "lynk-iptv",
  "m3u-iptv",
  "meilleur-abonnement-iptv",
  "premium-iptv",
  "programme-tv-iptv",
  "pure-iptv",
  "set-iptv",
  "smarters-iptv-pro",
  "smartone-iptv",
  "xenon-iptv",
  "appli-iptv",
  "arcom-iptv",
  "code-iptv-smarters-pro-gratuit-2025",
  "ip-iptv",
  "iptv-4k",
  "iptv-laws",
  "iptv-prix",
  "iptv-smart-player-pro",
  "iptv-ss",
  "premium-iptv-tv",
  "programme-iptv",
  "smarter-iptv",
  "smarters-iptv",
  "test-iptv",
  "telecharger-iptv-smarters-pro-apk",
  "abonnement-iptv-france",
  "agence-iptv",
  "boitier-iptv-amazon",
  "box-iptv",
  "decodeur-iptv",
  "fournisseur-iptv",
  "iptv-amende",
  "iptv-atlas",
  "iptv-az",
  "iptv-box",
  "iptv-code",
  "iptv-gratuit-sans-code",
  "iptv-pas-cher",
  "iptv-smart",
  "iptv-smarter-player-pro",
  "iptv-smarters-lite",
  "iptv-test-gratuit",
  "iptv-with-4k",
  "king-iptv",
  "legality-of-iptv",
  "mario-iptv",
  "meilleur-application-iptv",
  "meilleurs-iptv",
  "net-iptv",
] as const;

type RawSlug = (typeof IPTV_GERMAN_SLUGS)[number];

const titleOverrides: Partial<Record<RawSlug, string>> = {
  iptv: "IPTV-Guide für stabiles und sicheres Streaming",
  "iptv-illegal": "Illegales IPTV: Fakten, Risiken und sichere Alternativen",
  "iptv-amende": "IPTV-Strafen in Deutschland: Was Sie wissen müssen",
  "free-popular-iptv-playlist":
    "IPTV-Playlist sicher nutzen: Legal und ohne Risiko streamen",
};

const formatKeyword = (slug: string) =>
  slug
    .replace(/-/g, " ")
    .replace(/\biptv\b/gi, "IPTV")
    .replace(/\b4k\b/gi, "4K")
    .replace(/\bdeutschland\b/gi, "Deutschland")
    .replace(/\bkpn\b/gi, "KPN")
    .replace(/\bcz\b/gi, "CZ")
    .replace(/\bss\b/gi, "SS")
    .replace(/\big\b/gi, "IG")
    .replace(/\bm3u\b/gi, "M3U")
    .replace(/\bandroid\b/gi, "Android")
    .replace(/\bwindows\b/gi, "Windows")
    .replace(/\breddit\b/gi, "Reddit")
    .replace(/\bmytvonline\b/gi, "MYTVOnline")
    .replace(/\bswiss\b/gi, "Swiss")
    .replace(/\bosterreich\b/gi, "Österreich");

const titleCase = (value: string) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const detectLanguage = (slug: string): IptvGermanPage["language"] => {
  if (slug.includes("aplicacion")) return "es";
  if (slug.includes("appli")) return "fr";
  if (slug.includes("bestes") || slug.includes("bester") || slug.includes("deutschland") || slug.includes("german")) return "de";
  if (
    slug.includes("best-") ||
    slug.includes("top-rated") ||
    slug.includes("free")
  ) {
    return "en";
  }
  return "de";
};

const detectIntent = (slug: string): IptvGermanPage["intent"] => {
  if (
    slug.includes("illegaal") ||
    slug.includes("boete") ||
    slug.includes("illegal") ||
    slug.includes("amende") ||
    slug.includes("laws") ||
    slug.includes("legal")
  )
    return "legal";
  if (slug.includes("porn")) return "adult";
  if (
    slug.includes("playlist") ||
    slug.includes("m3u") ||
    slug.includes("gratis") ||
    slug.includes("gratuit") ||
    slug.includes("free")
  ) {
    return "playlist";
  }
  if (
    slug.includes("deutschland") ||
    slug.includes("german") ||
    slug.includes("nederland") ||
    slug.includes("dutch") ||
    slug.includes("kpn") ||
    slug.includes("nederlandse") ||
    slug.includes("france") ||
    slug.includes("french")
  ) {
    return "netherlands";
  }
  if (
    slug.includes("app") ||
    slug.includes("application") ||
    slug.includes("player") ||
    slug.includes("smarters") ||
    slug.includes("tivimate") ||
    slug.includes("smartone") ||
    slug.includes("smart-one") ||
    slug.includes("net-iptv") ||
    slug.includes("set-iptv") ||
    slug.includes("ss-iptv") ||
    slug.includes("flix") ||
    slug.includes("xtream") ||
    slug.includes("appli")
  ) {
    return "app";
  }
  if (
    slug.includes("box") ||
    slug.includes("kastje") ||
    slug.includes("amiko") ||
    slug.includes("boitier") ||
    slug.includes("decodeur")
  )
    return "device";
  if (slug.includes("4k")) return "quality";
  if (
    slug.includes("aanbieder") ||
    slug.includes("aanbieders") ||
    slug.includes("provider") ||
    slug.includes("suppliers") ||
    slug.includes("fournisseur") ||
    slug.includes("agence")
  ) {
    return "provider";
  }
  if (
    slug.includes("abonnement") ||
    slug.includes("abbonement") ||
    slug.includes("kopen") ||
    slug.includes("test") ||
    slug.includes("prix") ||
    slug.includes("pas-cher")
  ) {
    return "subscription";
  }
  return "general";
};

const languageAngle: Record<IptvGermanPage["language"], string> = {
  nl: "für deutschsprachige Zuschauer",
  en: "for international streamers",
  fr: "pour les utilisateurs francophones",
  es: "para usuarios hispanohablantes",
  de: "für deutschsprachige Nutzer",
};

const intentCopy: Record<
  IptvGermanPage["intent"],
  {
    label: string;
    promise: string;
    benefitSeed: string[];
    setup: string;
    safety: string;
  }
> = {
  general: {
    label: "IPTV Orientierung",
    promise:
      "eine klare Möglichkeit, Live-TV, Filme und Serien über das Internet zu verstehen",
    benefitSeed: [
      "klare Senderstruktur",
      "stabile Anzeige",
      "schneller Start auf mehreren Geräten",
    ],
    setup:
      "Beginnen Sie mit Ihrem Gerät, wählen Sie einen zuverlässigen Player und stellen Sie sicher, dass Ihr Netzwerk stabil genug für HD oder 4K ist.",
    safety:
      "Nutzen Sie nur Quellen, für die Sie die Berechtigung haben, und vermeiden Sie unbekannte Listen, die gegen Rechte oder die Privatsphäre verstoßen könnten.",
  },
  netherlands: {
    label: "IPTV Deutschland",
    promise:
      "ein praktischer Leitfaden für lokale Sender, regionale Inhalte und deutschsprachiges Fernsehen",
    benefitSeed: [
      "Fokus auf deutsche Sender",
      "EPG auf Deutsch",
      "Support angepasst an lokale Gewohnheiten",
    ],
    setup:
      "Achten Sie auf deutsche Sendergruppen, korrekte Zeitzonen im EPG und Apps, die gut auf Smart TV und Android TV funktionieren.",
    safety:
      "Überprüfen Sie immer die Herkunft der Inhalte und wählen Sie transparente Bedingungen statt anonymer Versprechen.",
  },
  app: {
    label: "App und Player",
    promise:
      "ein reibungsloses Erlebnis mit klarer Einrichtung, EPG und Playlists",
    benefitSeed: [
      "M3U und Xtream Support",
      "angenehme Navigation",
      "kompatibel mit gängigen Playern",
    ],
    setup:
      "Installieren Sie den Player aus einem vertrauenswürdigen Store, fügen Sie Ihre Daten sorgfältig hinzu und testen Sie Zapping-Zeit, EPG und Untertitel.",
    safety:
      "Bewahren Sie Ihre Zugangsdaten sicher auf und laden Sie Apps nur aus vertrauenswürdigen Quellen herunter.",
  },
  device: {
    label: "Gerätekonfiguration",
    promise: "eine hilfreiche Orientierung für Boxen, Receiver und TV-Geräte",
    benefitSeed: [
      "optimiert für Fernbedienung",
      "4K-kompatible Hardware",
      "stabile Kabel- oder WLAN-Verbindung",
    ],
    setup:
      "Aktualisieren Sie die Firmware, verwenden Sie wenn möglich Ethernet und wählen Sie einen leichten Player, der zum Prozessor Ihres Geräts passt.",
    safety:
      "Vermeiden Sie vorinstallierte Boxen mit obskuren Listen; dies kann gefährlich sein und rechtliche Risiken bergen.",
  },
  subscription: {
    label: "Abonnement-Wahl",
    promise:
      "eine pragmatische Möglichkeit, Pakete, Testphasen und Erwartungen zu vergleichen",
    benefitSeed: [
      "klare Laufzeit",
      "keine versteckten Parameter",
      "Unterstützung bei der Aktivierung",
    ],
    setup:
      "Vergleichen Sie Paketlaufzeit, gleichzeitige Verbindungen, Testmöglichkeiten und Support, bevor Sie zahlen.",
    safety:
      "Wählen Sie Anbieter, die transparent über Bedingungen, Kontaktmöglichkeiten und verantwortungsvolle Nutzung informieren.",
  },
  legal: {
    label: "Rechtlicher Kontext",
    promise: "neutrale Erklärung von Risiken, Rechten und verantwortungsvollem Streaming",
    benefitSeed: [
      "sachliche Erklärung",
      "keine illegalen Anleitungen",
      "Fokus auf sichere Wahl",
    ],
    setup:
      "Prüfen Sie, ob ein Dienst die Inhaltsrechte besitzt, lesen Sie die Bedingungen und seien Sie vorsichtig bei extrem günstigen Angeboten.",
    safety:
      "Diese Seite enthält allgemeine Informationen und ermutigt nicht zu unbefugtem Zugriff auf Sender oder Streams.",
  },
  playlist: {
    label: "Playlist-Sicherheit",
    promise:
      "sichere Informationen über M3U-Listen ohne gehackte Streams oder zweifelhafte Downloads",
    benefitSeed: [
      "Erklärung von Playlist-Formaten",
      "datenschutzfreundliche Kontrolle",
      "keine illegalen Streaming-Links",
    ],
    setup:
      "Verwenden Sie M3U nur als Format für legitime Quellen und testen Sie Listen in einem Player, ohne persönliche Daten weiterzugeben.",
    safety:
      "Wir veröffentlichen keine geknackten Playlists und raten vom Öffnen unbekannter Streaming-Links ab.",
  },
  quality: {
    label: "4K Streaming",
    promise: "Tipps zu Bildqualität, Bitrate und Netzwerkstabilität",
    benefitSeed: [
      "Fokus auf 4K und Full HD",
      "weniger Pufferung",
      "realistische Geschwindigkeitserwartungen",
    ],
    setup:
      "Verwenden Sie eine schnelle Verbindung, geeignete HDMI-Kabel und einen Player mit Hardware-Decodierung.",
    safety:
      "Machen Sie Qualität nicht zum einzigen Kriterium; Zuverlässigkeit, Rechte und Support bleiben wichtig.",
  },
  provider: {
    label: "Anbieter-Orientierung",
    promise:
      "ein ausgewogener Ansatz zur Anbieterwahl, ohne Voreingenommenheit oder Marketing",
    benefitSeed: [
      "neutraler Vergleich",
      "Service-Prüfung",
      "Transparenz der Bedingungen",
    ],
    setup:
      "Prüfen Sie die Seriosität des Anbieters, Kontaktmöglichkeiten, Support-Verfügbarkeit und Kundenbewertungen vor dem Abonnieren.",
    safety:
      "Vorsicht bei Anbietern ohne Unternehmensinformationen, Kontaktkanal oder klare Servicebedingungen.",
  },
  adult: {
    label: "Erwachseneninhalt",
    promise:
      "datenschutzfreundliche Informationen zu Filtern, Alterseinstellungen und verantwortungsvollem Sehen",
    benefitSeed: [
      "Kindersicherung",
      "Datenschutzeinstellungen",
      "bewusste Senderauswahl",
    ],
    setup:
      "Prüfen Sie, ob Ihr Player Profile, PIN-Schutz und Sendersperren unterstützt.",
    safety:
      "Stellen Sie sicher, dass der Inhalt legal verfügbar ist, und sperren Sie Erwachsenenkategorien für Minderjährige.",
  },
};

const buildMetaDescription = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  index: number,
) => {
  const copy = intentCopy[intent];
  return `${keyword}: ${copy.label.toLowerCase()} mit praktischen Erklärungen zu Einrichtung, Sicherheit, Kompatibilität und Bildqualität. IPTV German Guide ${index + 1}.`;
};

const createFaqs = (
  keyword: string,
  intent: IptvGermanPage["intent"],
  language: IptvGermanPage["language"],
): VaultFaq[] => {
  const copy = intentCopy[intent];
  const localized =
    language === "es"
      ? "La configuracion depende de tu aplicacion, dispositivo y fuente de contenido."
      : language === "fr"
        ? "La configuration depend de votre application, de votre appareil et de la source du contenu."
        : language === "de"
          ? "Die Einrichtung hangt von App, Gerat und Inhaltsquelle ab."
          : "Die Einrichtung hängt von Ihrer App, Ihrem Gerät und der Inhaltsquelle ab.";

  return [
    {
      question: `Worauf sollte ich bei ${keyword} achten?`,
      answer: `${copy.setup} Überprüfen Sie auch den Support, Updates und ob der Dienst Ihren täglichen Sehgewohnheiten entspricht.`,
    },
    {
      question: `Ist ${keyword} für 4K-Streaming geeignet?`,
      answer: `Ja, solange Ihr Gerät, Ihr Player und Ihre Internetverbindung dies unterstützen. Für 4K empfehlen wir eine stabile Verbindung und bevorzugen Ethernet für feste TV-Installationen.`,
    },
    {
      question: `Wie nutze ich ${keyword} sicher?`,
      answer: `${copy.safety} ${localized}`,
    },
  ];
};

const relatedSlugsFor = (
  slug: string,
  intent: IptvGermanPage["intent"],
) => {
  const preferredByIntent: Record<IptvGermanPage["intent"], RawSlug[]> = {
    general: ["iptv", "meilleur-iptv", "abonnement-iptv", "iptv-abonnement"],
    netherlands: ["france-iptv", "french-iptv", "meilleur-iptv", "agence-iptv"],
    app: [
      "iptv-smarters",
      "iptv-smarters-pro",
      "iptv-player",
      "meilleur-application-iptv",
    ],
    device: ["iptv-box", "boitier-iptv", "box-iptv", "decodeur-iptv"],
    subscription: [
      "iptv-abonnement",
      "abonnement-iptv",
      "iptv-prix",
      "test-iptv",
    ],
    legal: ["iptv-illegal", "iptv-amende", "iptv", "fournisseur-iptv"],
    playlist: [
      "m3u-iptv",
      "iptv-gratuit",
      "free-popular-iptv-playlist",
      "iptv-player",
    ],
    quality: ["iptv-4k", "iptv-with-4k", "meilleur-iptv", "iptv-premium"],
    provider: [
      "fournisseur-iptv",
      "agence-iptv",
      "iptv-atlas",
      "meilleur-iptv",
    ],
    adult: ["iptv-app", "smart-iptv", "iptv-player", "iptv"],
  };

  return preferredByIntent[intent]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 4);
};

const createPage = (
  slug: RawSlug,
  index: number,
): Omit<IptvGermanPage, "internalLinks"> => {
  const keyword = formatKeyword(slug);
  const readableKeyword = titleCase(keyword);
  const language = detectLanguage(slug);
  const intent = detectIntent(slug);
  const copy = intentCopy[intent];
  const title =
    titleOverrides[slug] ?? `${readableKeyword}: IPTV German praktischer Leitfaden`;
  const metaTitle = `${title} | IPTV German`;
  const heroHeading =
    slug === "iptv"
      ? "IPTV ohne Rätselraten: Klar wählen, stabil sehen"
      : `${readableKeyword} mit einem pragmatischen IPTV German Ansatz`;

  return {
    slug,
    keyword,
    title,
    metaTitle,
    metaDescription: buildMetaDescription(keyword, intent, index),
    heroHeading,
    language,
    intent,
    introCopy: `${readableKeyword} erfordert mehr als nur einen Suchbegriff. Diese Seite hilft Ihnen dabei, ${copy.promise}, mit besonderem Fokus auf Leistung, Geräteauswahl, Datenschutz und verantwortungsvolle Nutzung ${languageAngle[language]}.`,
    benefits: copy.benefitSeed.map(
      (benefit, benefitIndex) =>
        `${benefit} pour ${keyword} ${benefitIndex + 1}`,
    ),
    sections: [
      {
        heading: `${readableKeyword} in der Praxis`,
        body: `Bei ${keyword} dreht sich alles um die Kombination aus Inhaltsquelle, Player, Gerät und Netzwerk. IPTV German betrachtet dies als umfassendes Seherlebnis, damit Sie nicht nur starten, sondern auch verstehen, warum es flüssig oder instabil läuft.`,
        points: [
          "Prüfen Sie die Kompatibilität, bevor Sie ein Angebot oder eine App wählen.",
          "Nutzen Sie einen klaren EPG und logische Sendergruppen.",
          "Testen Sie die Qualität auf dem Gerät, auf dem Sie tatsächlich sehen werden.",
        ],
      },
      {
        heading: `Einrichtungs-Checkliste für ${readableKeyword}`,
        body: copy.setup,
        points: [
          "Notieren Sie, welche App, TV-Box oder Smart TV Sie verwenden.",
          "Prüfen Sie Ihre Internetgeschwindigkeit und WLAN-Abdeckung am Seh-Ort.",
          "Bewahren Sie Kontodaten und Playlist an einem sicheren Ort auf.",
        ],
      },
      {
        heading: `Sichere und verantwortungsvolle Nutzung von ${readableKeyword}`,
        body: copy.safety,
        points: [
          "Vermeiden Sie unbekannte Downloads, gecrackte Apps und anonyme Listen.",
          "Teilen Sie keine persönlichen Daten mit zweifelhaften Anbietern.",
          "Wählen Sie Quellen mit klaren Bedingungen und zugänglichem Support.",
        ],
      },
    ],
    faqs: createFaqs(keyword, intent, language),
  };
};

const pagesWithoutLinks = IPTV_GERMAN_SLUGS.map(createPage);

export const IPTV_GERMAN_PAGES: IptvGermanPage[] =
  pagesWithoutLinks.map((page) => {
    const isAbonnement =
      page.slug === "iptv-abonnement" || page.slug === "abonnement-iptv";

    return {
      ...page,
      heroHeading: isAbonnement
        ? "IPTV in Deutschland: Erleben Sie Fernsehen neu"
        : page.heroHeading,
      metaTitle: isAbonnement
        ? "IPTV Abo Deutschland 2024 – Live-Streaming, deutsche Sender, 4K/8K, VOD | IPTV German"
        : page.metaTitle,
      metaDescription: isAbonnement
        ? "IPTV Abo & Streaming Deutschland mit 31.000+ Sendern und 140.000+ Filmen & Serien in 4K/8K. Sofortige Aktivierung, stabile Server, alle Geräte unterstützt und Premium-IPTV-Abos für Deutschland, Österreich & die Schweiz."
        : page.metaDescription,
      heroBg: isAbonnement ? "/images/abonnement-bg.webp" : undefined,
      internalLinks: relatedSlugsFor(page.slug, page.intent).map(
        (relatedSlug) => {
          const related = pagesWithoutLinks.find(
            (candidate) => candidate.slug === relatedSlug,
          );
          const label = related?.keyword ?? formatKeyword(relatedSlug);

          return {
            label,
            href: `${basePath}/${relatedSlug}`,
            description: `Erfahren Sie mehr über ${label} in der IPTV German Wissensdatenbank.`,
          };
        },
      ),
    };
  });

export const IPTV_GERMAN_PAGE_MAP = new Map(
  IPTV_GERMAN_PAGES.map((page) => [page.slug, page]),
);

export const getIptvGermanPage = (slug: string) =>
  IPTV_GERMAN_PAGE_MAP.get(slug);

export const getIptvGermanPath = (slug: string) => `${basePath}/${slug}`;

// ═════════════════════════════════════════════════════════════════════════════
//  PHASE 3 — RICH CONTENT ENGINE  (emits IPTVPage[] for all 105 slugs)
//  ---------------------------------------------------------------------------
//  Every page gets ≥5 discriminated-union sections, ≥5 FAQs and ≥4 internal
//  links. Content is differentiated by search intent (no near-duplicate copy).
//  Exported under V2 names; Phase 4 switches the route over, after which the
//  legacy block above is removed and these become canonical.
// ═════════════════════════════════════════════════════════════════════════════

const UPDATED_AT = "2026-05-31";
const ORDER_HREF = `${basePath}/iptv-abonnement`;
const OG = OG_IMAGE.url;

/** Truncate to a hard max length, appending an ellipsis at a word boundary. */
const clamp = (value: string, max: number): string => {
  if (value.length <= max) return value;
  const cut = value.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
};

// ── Intent detection (German-market focused; fixes the legacy FR heuristics) ──
const detectIntentV2 = (slug: string): PageIntent => {
  const has = (...keys: string[]) => keys.some((k) => slug.includes(k));
  if (has("illegal", "amende", "laws", "legal", "arcom", "strafe", "abmahn"))
    return "legal";
  if (has("meilleur", "meilleurs", "beste", "bester", "fournisseur", "agence", "anbieter", "provider", "atlas", "king", "mario", "lynk", "iron", "zen", "xenon", "pure"))
    return "provider";
  if (has("playlist", "m3u", "gratuit", "gratis", "kostenlos", "code", "telecharger", "downloader", "free"))
    return "playlist";
  if (has("4k", "8k", "uhd"))
    return "quality";
  if (has("boitier", "decodeur", "box", "kastje", "receiver", "stick", "mag"))
    return "device";
  if (has("smarters", "smarter", "smart-player", "smart-iptv", "tivimate", "smartone", "smart-one", "net-iptv", "set-iptv", "ss-iptv", "iptv-ss", "flix", "xtream", "player", "application", "appli", "app", "smart"))
    return "app";
  if (has("abonnement", "abbonement", "kaufen", "kopen", "prix", "pas-cher", "premium", "test", "trial", "12-mois"))
    return "subscription";
  if (has("deutschland", "german", "germany", "france", "french", "swiss", "osterreich"))
    return "landing";
  if (has("programme", "setting", "comment", "was-ist", "guide"))
    return "guide";
  return "general";
};

// ── Shared content blocks (reused across pages) ──────────────────────────────
const PRICING_TIERS: PricingTier[] = [
  {
    name: "1 Monat",
    price: "12,99 €",
    period: "/ Monat",
    description: "Flexibel zum Ausprobieren",
    features: [
      "25.000+ Live-Sender",
      "140.000+ Filme & Serien",
      "Full HD & 4K",
      "1 Gerät gleichzeitig",
      "24/7 Support",
    ],
    cta: { label: "Jetzt starten", href: ORDER_HREF },
  },
  {
    name: "3 Monate",
    price: "29,99 €",
    period: "/ 3 Monate",
    description: "Bestes Preis-Leistungs-Verhältnis",
    features: [
      "Alles aus dem Monatspaket",
      "4K / 8K Streaming",
      "2 Geräte gleichzeitig",
      "Anti-Buffering-Server",
      "Voller VOD-Zugriff",
    ],
    cta: { label: "Beliebtestes Paket", href: ORDER_HREF },
    highlighted: true,
    badge: "Beliebteste",
  },
  {
    name: "12 Monate",
    price: "79,99 €",
    period: "/ Jahr",
    description: "Nur 6,66 € pro Monat",
    features: [
      "Alles aus dem 3-Monats-Paket",
      "Bis zu 5 Geräte",
      "Priorisierter Support",
      "Kostenlose Updates",
      "Keine Vertragsbindung",
    ],
    cta: { label: "Jahrespaket sichern", href: ORDER_HREF },
  },
];

const COMPARISON_COLUMNS = ["IPTV German", "Andere Anbieter", "Kabel & Sat"];
const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Live-Sender", values: ["25.000+", "wenige tausend", "100–300"] },
  { label: "Filme & Serien (VOD)", values: ["140.000+", "begrenzt", false] },
  { label: "4K / 8K Qualität", values: [true, "teilweise", false] },
  { label: "Geräte gleichzeitig", values: ["bis zu 5", "1–2", "1"] },
  { label: "Vertragsbindung", values: ["keine", "oft 24 Monate", "12–24 Monate"] },
  { label: "Kostenloser Test", values: [true, false, false] },
  { label: "Preis pro Monat ab", values: ["6,66 €", "15–30 €", "ab 40 €"] },
  { label: "24/7 Support", values: [true, "unterschiedlich", "Hotline"] },
];

const DEVICE_CARDS: DeviceCard[] = [
  { name: "Amazon Fire TV Stick", platform: "box", steps: 4, icon: "Tv" },
  { name: "Android TV & Box", platform: "android", steps: 4, icon: "MonitorSmartphone" },
  { name: "Samsung & LG Smart TV", platform: "smart-tv", steps: 5, icon: "Tv" },
  { name: "iPhone & iPad", platform: "ios", steps: 4, icon: "Smartphone" },
  { name: "MAG Box", platform: "box", steps: 3, icon: "Box" },
  { name: "Windows PC", platform: "windows", steps: 3, icon: "Monitor" },
  { name: "Apple TV", platform: "box", steps: 4, icon: "Tv" },
  { name: "Web-Browser", platform: "browser", steps: 2, icon: "Globe" },
];

const TESTIMONIAL_REVIEWS: Review[] = [
  { author: "Markus W.", country: "🇩🇪", rating: 5, text: "Endlich kein Buffering mehr. Die Bundesliga läuft in 4K absolut flüssig – Einrichtung auf dem Fire TV Stick war in 5 Minuten erledigt." },
  { author: "Sandra L.", country: "🇦🇹", rating: 5, text: "Riesige Auswahl an Filmen und Serien, dazu ein Support, der wirklich innerhalb von Minuten antwortet. Klare Empfehlung." },
  { author: "Thomas B.", country: "🇨🇭", rating: 4, text: "Sehr stabil und faire Preise ohne Vertragsbindung. Der 7-Tage-Test hat mich überzeugt – nutze jetzt das Jahrespaket." },
  { author: "Daniela K.", country: "🇩🇪", rating: 5, text: "Läuft auf Smart TV, Handy und Tablet gleichzeitig. Das EPG ist sauber auf Deutsch und die Sender sind top sortiert." },
];

const CHANNEL_CATEGORIES: ChannelCategory[] = [
  { name: "Sport", count: 1200, examples: ["Sky Sport", "DAZN", "Bundesliga", "Champions League"] },
  { name: "Filme & Serien", count: 140000, examples: ["Blockbuster", "Boxsets", "Neuheiten", "Klassiker"] },
  { name: "Nachrichten", count: 800, examples: ["ARD", "ZDF", "n-tv", "WELT"] },
  { name: "Kinder", count: 500, examples: ["KiKA", "Disney", "Nickelodeon", "Super RTL"] },
  { name: "International", count: 20000, examples: ["🇹🇷 Türkçe", "🇬🇧 UK", "🇮🇹 IT", "🇪🇸 ES"] },
  { name: "4K / UHD", count: 600, examples: ["4K Live", "UHD VOD", "HDR", "8K Demo"] },
];

const HOW_STEPS: Step[] = [
  { title: "Paket wählen", description: "Wählen Sie die passende Laufzeit (1, 3 oder 12 Monate) – ganz ohne Vertragsbindung." },
  { title: "Zugangsdaten erhalten", description: "Direkt nach der Bestellung erhalten Sie Ihre Login- bzw. M3U-/Xtream-Daten automatisch per E-Mail." },
  { title: "App installieren", description: "Installieren Sie einen kompatiblen Player auf Ihrem Smart TV, Fire TV Stick, Smartphone oder PC." },
  { title: "Anmelden & streamen", description: "Zugangsdaten eintragen, das EPG lädt automatisch – und Sie streamen sofort in bis zu 4K." },
];

// ── Per-intent profile (label, hero copy, feature cards, deep-dive text) ──────
type IntentProfile = {
  label: string;
  headline: (kw: string) => string;
  subheadline: string;
  badgeTags: string[];
  ctaLabel: string;
  structuredData: StructuredDataType;
  features: Feature[];
  intro: (kw: string) => string;
  deepDive: (kw: string) => { heading: string; html: string };
  metaDescription: (kw: string) => string;
  extraFaqs: (kw: string) => PageFaq[];
};

const F = (icon: string, title: string, description: string): Feature => ({ icon, title, description });

const INTENT_PROFILE: Record<PageIntent, IntentProfile> = {
  general: {
    label: "IPTV Grundlagen",
    headline: (kw) => `${kw} einfach erklärt`,
    subheadline: "Live-TV, Filme und Serien über das Internet – einfach, stabil und in bis zu 4K/8K erklärt.",
    badgeTags: ["Verständlich erklärt", "Praxisnah", "Aktuell 2026"],
    ctaLabel: "Pakete ansehen",
    structuredData: "Article",
    features: [
      F("Tv", "25.000+ Live-Sender", "Vollständige deutsche Senderlandschaft plus internationale Programme an einem Ort."),
      F("Film", "140.000+ VOD-Titel", "Filme und Serien auf Abruf – jederzeit pausieren, fortsetzen oder neu starten."),
      F("Wifi", "Stabil & flüssig", "Optimierte Anti-Buffering-Server sorgen für ein zuverlässiges Bild ohne Aussetzer."),
      F("MonitorSmartphone", "Alle Geräte", "Smart TV, Fire TV Stick, Smartphone, Tablet, Box oder PC – ein Zugang für alles."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> bezeichnet das Fernsehen über das Internet: Statt über Kabel, Satellit oder Antenne werden Sender und Inhalte als Datenstrom übertragen. Das macht riesige Sender- und VOD-Bibliotheken, zeitversetztes Sehen und die Nutzung auf nahezu jedem Gerät möglich.</p><p>Dieser Leitfaden zeigt verständlich, wie ${kw} funktioniert, worauf es bei Qualität und Sicherheit ankommt und wie Sie in wenigen Minuten startklar sind.</p>`,
    deepDive: (kw) => ({
      heading: `Worauf es bei ${kw} wirklich ankommt`,
      html: `<p>Drei Faktoren entscheiden über ein gutes Erlebnis: die <strong>Quelle</strong> der Inhalte, der <strong>Player</strong> und Ihr <strong>Netzwerk</strong>. Eine seriöse Quelle mit gepflegtem EPG, ein schlanker, kompatibler Player und eine stabile Verbindung (idealerweise per LAN) ergeben zusammen ein flüssiges Bild – auch in 4K.</p>`,
    }),
    metaDescription: (kw) =>
      `Was ist ${kw}? Verständlich erklärt: 25.000+ Sender, 140.000+ Filme & Serien, 4K/8K, alle Geräte. Jetzt IPTV German entdecken und 7 Tage testen.`,
    extraFaqs: (kw) => [
      { question: "Was ist der Unterschied zwischen IPTV und klassischem Fernsehen?", answer: `Beim ${kw} werden Inhalte über das Internet statt über Kabel, Satellit oder Antenne übertragen. Das ermöglicht deutlich größere Sender- und VOD-Bibliotheken, zeitversetztes Sehen und die Nutzung auf vielen Geräten gleichzeitig.` },
      { question: `Brauche ich für ${kw} besondere Hardware?`, answer: "Nein, meist genügt ein vorhandenes Gerät wie ein Fire TV Stick, ein Smart TV oder ein Smartphone. Eine stabile Internetverbindung ist wichtiger als teure Hardware." },
    ],
  },
  guide: {
    label: "IPTV Anleitung",
    headline: (kw) => `${kw}: Die komplette Anleitung`,
    subheadline: "Alles, was Sie für einen reibungslosen Start brauchen – verständlich und praxisnah.",
    badgeTags: ["Schritt für Schritt", "Praxisnah", "Aktuell 2026"],
    ctaLabel: "Jetzt loslegen",
    structuredData: "Article",
    features: [
      F("ListChecks", "Klare Schritte", "Von der Installation bis zum ersten Sender – ohne Fachjargon erklärt."),
      F("Settings", "Optimale Einstellungen", "Puffer, EPG, Untertitel und Bildqualität richtig konfigurieren."),
      F("ShieldCheck", "Sicher unterwegs", "Worauf Sie achten sollten, um seriös und legal zu streamen."),
      F("Headphones", "Hilfe bei Problemen", "Typische Fehler und ihre schnellen Lösungen auf einen Blick."),
    ],
    intro: (kw) =>
      `<p>Diese Anleitung führt Sie Schritt für Schritt durch <strong>${kw}</strong> – von der Auswahl des richtigen Players über die Einrichtung mit M3U oder Xtream-Codes bis zur Feinabstimmung von Bildqualität und EPG.</p>`,
    deepDive: (kw) => ({
      heading: `Häufige Fehler bei ${kw} vermeiden`,
      html: `<p>Die meisten Probleme entstehen durch instabiles WLAN, falsche Puffereinstellungen oder unseriöse Quellen. Nutzen Sie nach Möglichkeit LAN, halten Sie die App aktuell und setzen Sie auf einen Anbieter mit transparenten Bedingungen und Support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} Schritt für Schritt einrichten – mit Checkliste, Geräte-Tipps und Sicherheitshinweisen. Jetzt lesen, mit IPTV German starten und 7 Tage testen.`,
    extraFaqs: (kw) => [
      { question: `Wie lange dauert die Einrichtung von ${kw}?`, answer: "In der Regel nur wenige Minuten. Nach Erhalt der Zugangsdaten tragen Sie diese in Ihren Player ein, das EPG lädt automatisch und Sie können sofort streamen." },
      { question: "Was tun, wenn ein Sender nicht lädt?", answer: "Prüfen Sie Ihre Internetverbindung, starten Sie die App neu und leeren Sie ggf. den Cache. Bleibt das Problem bestehen, hilft der 24/7-Support von IPTV German schnell weiter." },
    ],
  },
  app: {
    label: "App & Player",
    headline: (kw) => `${kw} einrichten & optimal nutzen`,
    subheadline: "Einrichtung, EPG und Playlists ohne Frust – kompatibel mit allen gängigen Geräten.",
    badgeTags: ["Einfache Einrichtung", "M3U & Xtream", "Alle Geräte", "24/7 Support"],
    ctaLabel: "Zugang holen",
    structuredData: "Article",
    features: [
      F("Download", "M3U & Xtream", "Volle Unterstützung für M3U-Playlists und Xtream-Codes – schnell eingerichtet."),
      F("CalendarClock", "Sauberes EPG", "Deutsche Programmvorschau mit korrekten Zeitzonen und Logos."),
      F("PlayCircle", "Flüssiges Zapping", "Kurze Umschaltzeiten und stabile Wiedergabe dank optimierter Server."),
      F("MonitorSmartphone", "Geräteübergreifend", "Einmal einrichten, auf Smart TV, Box, Handy und PC nutzen."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> ist ein beliebter Player, um IPTV-Inhalte abzuspielen. Dieser Leitfaden zeigt, wie Sie ${kw} installieren, mit M3U oder Xtream-Codes verbinden und Bild, EPG sowie Untertitel optimal einstellen.</p>`,
    deepDive: (kw) => ({
      heading: `${kw} richtig konfigurieren`,
      html: `<p>Tragen Sie Ihre Zugangsdaten sorgfältig ein (Server, Benutzername, Passwort bzw. M3U-URL). Aktivieren Sie Hardware-Decoding, passen Sie die Puffergröße an Ihr Netzwerk an und laden Sie das EPG für eine vollständige Programmübersicht.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} installieren & einrichten: M3U/Xtream, EPG und alle Geräte. Anleitung von IPTV German – jetzt starten und 7 Tage risikofrei testen.`,
    extraFaqs: (kw) => [
      { question: `Wie richte ich ${kw} mit M3U oder Xtream ein?`, answer: "Öffnen Sie die App, wählen Sie „Playlist hinzufügen“ und tragen Sie entweder die M3U-URL oder Ihre Xtream-Codes (Server, Benutzername, Passwort) ein. Anschließend lädt das EPG automatisch." },
      { question: `Warum ruckelt ${kw} manchmal?`, answer: "Häufige Ursachen sind WLAN-Schwankungen, ein überlastetes Gerät oder ein zu kleiner Puffer. Nutzen Sie LAN, schließen Sie Hintergrund-Apps und erhöhen Sie die Puffergröße in den Einstellungen." },
    ],
  },
  device: {
    label: "Geräte & Einrichtung",
    headline: (kw) => `${kw}: Einrichtung in wenigen Minuten`,
    subheadline: "So bringen Sie Ihr Gerät in wenigen Schritten zum Laufen – stabil und in höchster Qualität.",
    badgeTags: ["Einfache Einrichtung", "Alle Geräte", "4K-fähig", "24/7 Support"],
    ctaLabel: "Zugang holen",
    structuredData: "Article",
    features: [
      F("Box", "Plug & Play", "Für Fire TV Stick, MAG, Android-Box und Smart TV gleichermaßen geeignet."),
      F("Wifi", "Stabil per LAN", "Ethernet-Empfehlung für ruckelfreies 4K bei festen Installationen."),
      F("Cpu", "Hardware-Decoding", "Schonende Wiedergabe, die zur Leistung Ihres Geräts passt."),
      F("RefreshCw", "Immer aktuell", "Firmware- und App-Updates halten die Wiedergabe schnell und sicher."),
    ],
    intro: (kw) =>
      `<p>Mit <strong>${kw}</strong> wird Ihr Fernseher zur vollwertigen Streaming-Zentrale. Wir zeigen, welche Einstellungen für ein flüssiges Bild sorgen und wie Sie das Gerät in wenigen Schritten einrichten.</p>`,
    deepDive: (kw) => ({
      heading: `Optimale Einstellungen für ${kw}`,
      html: `<p>Aktualisieren Sie zuerst die Firmware, verbinden Sie das Gerät möglichst per Ethernet und wählen Sie einen schlanken Player. Aktivieren Sie Hardware-Decoding und stellen Sie die Auflösung passend zu Ihrem Fernseher ein.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} in wenigen Minuten einrichten: Schritt-für-Schritt-Anleitung, Tipps & Support. Jetzt mit IPTV German stabil in 4K streamen.`,
    extraFaqs: (kw) => [
      { question: `Welche Einstellungen sind für ${kw} optimal?`, answer: "Aktualisieren Sie die Firmware, nutzen Sie wenn möglich Ethernet, aktivieren Sie Hardware-Decoding und wählen Sie einen schlanken Player, der zur Leistung Ihres Geräts passt." },
      { question: `Brauche ich für ${kw} ein schnelles Internet?`, answer: "Für Full HD genügen rund 16 Mbit/s, für 4K empfehlen wir 25 Mbit/s oder mehr. Entscheidend ist eine stabile, latenzarme Verbindung – LAN ist WLAN vorzuziehen." },
    ],
  },
  subscription: {
    label: "Abonnement & Preise",
    headline: (kw) => `${kw} – Pakete, Preise & Test`,
    subheadline: "Transparente Pakete ohne Vertragsbindung – mit sofortiger Aktivierung und 7-Tage-Test.",
    badgeTags: ["Ab 6,66 €/Monat", "7-Tage Test", "Keine Vertragsbindung", "Sofort aktiv"],
    ctaLabel: "7 Tage testen",
    structuredData: "Product",
    features: [
      F("CreditCard", "Faire Preise", "Klare Pakete ab 6,66 €/Monat – ohne versteckte Kosten oder Bindung."),
      F("Zap", "Sofort aktiv", "Aktivierung in der Regel innerhalb weniger Minuten nach Bestellung."),
      F("ShieldCheck", "7-Tage-Test", "In Ruhe Stabilität, Sender und Bildqualität prüfen, bevor Sie sich festlegen."),
      F("Server", "Premium-Server", "Anti-Buffering-Infrastruktur für ein flüssiges Bild zur Primetime."),
    ],
    intro: (kw) =>
      `<p>Bei <strong>${kw}</strong> zählt das Gesamtpaket: Laufzeit, Anzahl gleichzeitiger Geräte, Bildqualität, Stabilität und Support. IPTV German bietet transparente Pakete ohne Vertragsbindung und mit sofortiger Aktivierung.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: So vergleichen Sie richtig`,
      html: `<p>Achten Sie nicht nur auf den Preis, sondern auf die Anzahl der Sender und VOD-Titel, gleichzeitige Verbindungen, Serverqualität und Erreichbarkeit des Supports. Ein Testzeitraum ist das beste Mittel, um die Qualität vor dem Kauf zu beurteilen.</p>`,
    }),
    metaDescription: () =>
      `IPTV Abo ab 6,66 €: 25.000+ Sender, 140.000+ VOD, 4K/8K, keine Vertragsbindung. Jetzt Paket wählen, sofort aktivieren und 7 Tage testen.`,
    extraFaqs: (kw) => [
      { question: `Gibt es bei ${kw} eine Vertragsbindung?`, answer: "Nein. Sie wählen flexible Laufzeiten (1, 3 oder 12 Monate) ohne automatische Verlängerung und ohne Kündigungsfrist." },
      { question: `Kann ich ${kw} vorher testen?`, answer: "Ja, ein 7-Tage-Test ist möglich, damit Sie Stabilität, Sender und Bildqualität in Ruhe prüfen können, bevor Sie sich festlegen." },
      { question: "Wie schnell wird mein Zugang aktiviert?", answer: "Die Aktivierung erfolgt in der Regel sofort bzw. innerhalb weniger Minuten nach Zahlungseingang – die Zugangsdaten kommen automatisch per E-Mail." },
    ],
  },
  provider: {
    label: "Anbieter-Vergleich",
    headline: (kw) => `${kw} im Vergleich`,
    subheadline: "Ein neutraler Blick auf Sender, Preise, Qualität und Service – damit Sie richtig wählen.",
    badgeTags: ["Neutraler Vergleich", "Transparent", "7-Tage Test"],
    ctaLabel: "IPTV German testen",
    structuredData: "Article",
    features: [
      F("Scale", "Neutraler Vergleich", "Sender, Preise, Qualität und Support sachlich gegenübergestellt."),
      F("BadgeCheck", "Seriosität prüfen", "Transparente Bedingungen, erreichbarer Support und echte Bewertungen."),
      F("Wallet", "Faire Konditionen", "Klare Preise ohne dubiose „Lifetime“-Versprechen."),
      F("Star", "Bewährte Qualität", "Stabile Server und ein gepflegtes Angebot statt leerer Werbeversprechen."),
    ],
    intro: (kw) =>
      `<p>Bei der Suche nach <strong>${kw}</strong> lohnt ein nüchterner Vergleich. Wir zeigen, welche Kriterien wirklich zählen und woran Sie einen seriösen Dienst erkennen – ohne Marketing-Floskeln.</p>`,
    deepDive: (kw) => ({
      heading: `${kw}: Worauf Sie achten sollten`,
      html: `<p>Seriöse Anbieter nennen transparente Preise, bieten einen erreichbaren Support und einen Testzeitraum und verzichten auf unrealistische Versprechen. Vorsicht bei extrem billigen Lifetime-Angeboten ohne Impressum oder Kontaktmöglichkeit.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: neutral verglichen – Sender, Preis, Qualität & Support. Finden Sie den richtigen Anbieter und testen Sie IPTV German 7 Tage.`,
    extraFaqs: () => [
      { question: "Woran erkenne ich einen seriösen IPTV-Anbieter?", answer: "Achten Sie auf transparente Preise, einen erreichbaren Support, klare Bedingungen, einen Testzeitraum und echte Kundenbewertungen. Misstrauen Sie extrem billigen „Lifetime“-Angeboten." },
      { question: "Was kostet ein guter IPTV-Dienst?", answer: "Seriöse Dienste liegen meist zwischen 7 und 13 € pro Monat, mit Rabatten auf längere Laufzeiten. Auffällig billige Angebote sind oft instabil oder rechtlich problematisch." },
    ],
  },
  legal: {
    label: "Rechtliches",
    headline: (kw) => `${kw}: Was ist erlaubt?`,
    subheadline: "Sachliche Orientierung zu Rechtslage und Risiken – plus sichere, legale Alternativen.",
    badgeTags: ["Sachlich & neutral", "Legale Alternativen", "Datenschutz"],
    ctaLabel: "Legale Alternative ansehen",
    structuredData: "Article",
    features: [
      F("Scale", "Rechtssicher", "IPTV als Technik ist legal – entscheidend ist die Lizenz der Quelle."),
      F("ShieldAlert", "Risiken kennen", "Abmahnungen und Strafen drohen nur bei offensichtlich illegalen Streams."),
      F("Lock", "Datenschutz", "Keine dubiosen Apps, keine Weitergabe persönlicher Daten."),
      F("CheckCircle2", "Sichere Wahl", "Lizenzierte, transparente Dienste statt anonymer Billigangebote."),
    ],
    intro: (kw) =>
      `<p>Beim Thema <strong>${kw}</strong> herrscht viel Unsicherheit. Wichtig: Die IPTV-Technik selbst ist vollkommen legal. Ob ein Angebot legal ist, hängt allein davon ab, ob der Anbieter die nötigen Lizenzen für die ausgestrahlten Inhalte besitzt.</p>`,
    deepDive: () => ({
      heading: "Legal streamen – so geht's sicher",
      html: `<p>Setzen Sie auf Dienste mit transparenten Bedingungen, Impressum und erreichbarem Support. Extrem günstige Angebote mit tausenden Premium-Sendern für wenige Euro sind ein Warnsignal. Im Zweifel gilt: lieber einen seriösen, lizenzierten Anbieter wählen.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: sachliche Fakten zu Recht, Risiken & sicheren Alternativen in Deutschland. Jetzt informieren und mit IPTV German legal streamen.`,
    extraFaqs: (kw) => [
      { question: `Ist ${kw} in Deutschland legal?`, answer: "IPTV als Technik ist legal. Entscheidend ist die Quelle: Nur Anbieter mit den nötigen Lizenzen sind legal. Wir raten ausdrücklich von gehackten oder anonymen Streams ab." },
      { question: "Drohen Strafen bei illegalem IPTV?", answer: "Beim Nutzen offensichtlich illegaler Streams können Abmahnungen und Geldstrafen drohen. Setzen Sie auf transparente, lizenzierte Dienste, um auf der sicheren Seite zu sein." },
    ],
  },
  playlist: {
    label: "Playlists & M3U",
    headline: (kw) => `${kw} sicher nutzen`,
    subheadline: "Playlists richtig verstehen und sicher nutzen – ohne dubiose Downloads oder Links.",
    badgeTags: ["Sicher & seriös", "M3U / Xtream", "Keine dubiosen Links"],
    ctaLabel: "Sichere Quelle ansehen",
    structuredData: "Article",
    features: [
      F("FileCode", "M3U & Xtream", "Verständliche Erklärung der Playlist-Formate und ihrer Einrichtung."),
      F("Lock", "Datenschutzfreundlich", "Keine Weitergabe persönlicher Daten, keine zwielichtigen Downloads."),
      F("ShieldCheck", "Seriöse Quellen", "Worauf Sie achten müssen, um Schadsoftware und Ärger zu vermeiden."),
      F("PlayCircle", "Sofort einsatzbereit", "Listen direkt im Player testen – schnell und unkompliziert."),
    ],
    intro: (kw) =>
      `<p>Eine <strong>${kw}</strong> ist letztlich nur ein Format (meist M3U oder Xtream), das Sender und Streams bündelt. Dieser Leitfaden erklärt, wie Playlists funktionieren und wie Sie sie sicher und seriös einsetzen.</p>`,
    deepDive: () => ({
      heading: "Vorsicht bei kostenlosen Listen",
      html: `<p>Kostenlose Listen aus unbekannten Quellen sind häufig veraltet, instabil oder rechtlich problematisch und können Schadsoftware enthalten. Sicherer ist ein lizenzierter Dienst mit eigenem, gepflegtem Angebot und Support.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw} sicher verstehen & nutzen – ohne dubiose Links. M3U/Xtream richtig einrichten. Jetzt lesen und mit IPTV German sicher streamen.`,
    extraFaqs: (kw) => [
      { question: `Sind kostenlose ${kw} sicher?`, answer: "Kostenlose Listen aus unbekannten Quellen sind oft instabil, veraltet oder rechtlich problematisch und können Schadsoftware enthalten. Sicherer ist ein lizenzierter Dienst mit gepflegtem Angebot." },
      { question: "Wie binde ich eine M3U-Playlist in den Player ein?", answer: "Wählen Sie in Ihrem Player „Playlist hinzufügen“, fügen Sie die M3U-URL ein und warten Sie, bis Sender und EPG geladen sind. Mit Xtream-Codes geben Sie stattdessen Server, Benutzername und Passwort ein." },
    ],
  },
  quality: {
    label: "Bildqualität & 4K",
    headline: (kw) => `${kw} in 4K & 8K`,
    subheadline: "Gestochen scharfes Bild ohne Buffering – mit den richtigen Einstellungen für 4K und 8K.",
    badgeTags: ["4K / 8K", "Anti-Buffering", "Hohe Bitrate"],
    ctaLabel: "In 4K streamen",
    structuredData: "Article",
    features: [
      F("Sparkles", "Brillantes Bild", "Native 4K- und 8K-Streams mit hoher Bitrate für maximale Schärfe."),
      F("Gauge", "Wenig Pufferung", "Optimierte Server und korrekte Einstellungen reduzieren Aussetzer."),
      F("Wifi", "Netzwerk-Tipps", "So richten Sie WLAN und LAN für stabiles High-End-Streaming ein."),
      F("Cpu", "Passende Hardware", "Geräte mit Hardware-Decoding für ruckelfreie UHD-Wiedergabe."),
    ],
    intro: (kw) =>
      `<p>Für <strong>${kw}</strong> kommt es auf das Zusammenspiel von Bandbreite, Hardware und Quelle an. Wir zeigen, welche Werte Sie brauchen und wie Sie Pufferung vermeiden.</p>`,
    deepDive: () => ({
      heading: "Bandbreite, Bitrate & Stabilität",
      html: `<p>Als Richtwert: rund 16 Mbit/s für Full HD, 25 Mbit/s für 4K und mehr für 8K. Wichtiger als die reine Geschwindigkeit ist eine stabile, latenzarme Verbindung. Für feste TV-Installationen ist Ethernet die beste Wahl.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: gestochen scharf streamen ohne Buffering – Bitrate, Hardware & Netzwerk richtig einstellen. Jetzt mit IPTV German in 4K/8K starten.`,
    extraFaqs: (kw) => [
      { question: `Welche Internetgeschwindigkeit brauche ich für ${kw}?`, answer: "Als Richtwert: ca. 16 Mbit/s für Full HD, 25 Mbit/s für 4K und mehr für 8K. Wichtiger als die reine Geschwindigkeit ist eine stabile, latenzarme Verbindung." },
      { question: "Warum kommt es trotz schnellem Internet zu Pufferung?", answer: "Oft liegt es an WLAN-Schwankungen, einem überlasteten Gerät oder einem zu kleinen Puffer. Nutzen Sie LAN, aktivieren Sie Hardware-Decoding und erhöhen Sie die Puffergröße." },
    ],
  },
  landing: {
    label: "Premium IPTV",
    headline: (kw) => `${kw}: Premium-Streaming ohne Limit`,
    subheadline: "25.000+ Sender, 140.000+ Filme & Serien, 4K/8K – auf allen Geräten, ohne Vertragsbindung.",
    badgeTags: ["25.000+ Sender", "4K / 8K", "7-Tage Test", "Keine Vertragsbindung"],
    ctaLabel: "Jetzt 7 Tage testen",
    structuredData: "Product",
    features: [
      F("Tv", "25.000+ Sender", "Komplette deutsche Senderlandschaft plus internationale Programme."),
      F("Film", "140.000+ VOD", "Riesige Film- und Serienbibliothek auf Abruf, jederzeit verfügbar."),
      F("Sparkles", "4K / 8K", "Gestochen scharfes Bild dank hoher Bitrate und Premium-Servern."),
      F("MonitorSmartphone", "Alle Geräte", "Smart TV, Fire TV Stick, Handy, Tablet, Box und PC – ein Zugang."),
    ],
    intro: (kw) =>
      `<p><strong>${kw}</strong> steht für Premium-Streaming ohne Kompromisse: eine riesige Sender- und VOD-Auswahl, brillante 4K/8K-Qualität und stabile Server – alles ohne Vertragsbindung und mit sofortiger Aktivierung.</p>`,
    deepDive: () => ({
      heading: "Warum IPTV German?",
      html: `<p>Wir kombinieren ein gepflegtes Angebot mit Anti-Buffering-Infrastruktur, deutschem EPG und schnellem Support. Dank 7-Tage-Test überzeugen Sie sich selbst von der Qualität, bevor Sie sich festlegen.</p>`,
    }),
    metaDescription: (kw) =>
      `${kw}: Premium-IPTV mit 25.000+ Sendern, 140.000+ Filmen & Serien in 4K/8K. Keine Vertragsbindung. Jetzt 7 Tage testen!`,
    extraFaqs: () => [
      { question: "Was macht IPTV German besser als andere Anbieter?", answer: "Ein gepflegtes Angebot mit 25.000+ Sendern, Anti-Buffering-Servern, deutschem EPG, fairen Preisen ohne Vertragsbindung und einem 7-Tage-Test, mit dem Sie alles risikofrei prüfen können." },
      { question: "Gibt es eine Vertragsbindung oder einen Test?", answer: "Es gibt keine Vertragsbindung – Sie wählen flexible Laufzeiten. Ein 7-Tage-Test ermöglicht es, Stabilität, Sender und Bildqualität vorab zu prüfen." },
    ],
  },
};

// ── Internal-link hubs per intent (all targets exist in IPTV_GERMAN_SLUGS) ────
const INTENT_LINKS: Record<PageIntent, RawSlug[]> = {
  general: ["iptv-deutschland", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "m3u-iptv", "iptv-illegal"],
  guide: ["iptv", "iptv-smarters-pro", "iptv-player", "m3u-iptv", "test-iptv", "iptv-illegal"],
  app: ["iptv-smarters-pro", "iptv-player", "smart-iptv", "iptv-box", "m3u-iptv", "iptv-abonnement"],
  device: ["iptv-box", "iptv-smarters-pro", "smart-iptv", "iptv-abonnement", "iptv-4k", "iptv-player"],
  subscription: ["iptv-abonnement", "iptv-deutschland", "iptv-4k", "test-iptv", "iptv-smarters-pro", "fournisseur-iptv"],
  provider: ["fournisseur-iptv", "meilleur-iptv", "iptv-abonnement", "iptv-deutschland", "test-iptv", "iptv-illegal"],
  legal: ["iptv-illegal", "iptv-amende", "iptv", "iptv-abonnement", "fournisseur-iptv", "test-iptv"],
  playlist: ["m3u-iptv", "iptv-player", "iptv-smarters-pro", "iptv-gratuit", "free-popular-iptv-playlist", "iptv-abonnement"],
  quality: ["iptv-4k", "iptv-with-4k", "iptv-abonnement", "iptv-box", "iptv-deutschland", "iptv-smarters-pro"],
  landing: ["iptv-deutschland", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "iptv-4k", "test-iptv"],
};

// ── Section builders ─────────────────────────────────────────────────────────
const featuresSection = (profile: IntentProfile): PageSection => ({
  type: "features",
  heading: "Das spricht für IPTV German",
  subheading: profile.label,
  items: profile.features,
});

const howSection = (): PageSection => ({
  type: "howItWorks",
  heading: "In 4 Schritten startklar",
  subheading: "So einfach geht's",
  steps: HOW_STEPS,
});

const pricingSection = (): PageSection => ({
  type: "pricing",
  heading: "Pakete & Preise",
  subheading: "Flexibel, fair und ohne Vertragsbindung",
  tiers: PRICING_TIERS,
});

const comparisonSection = (): PageSection => ({
  type: "comparison",
  heading: "IPTV German im Vergleich",
  subheading: "So schlägt sich Premium-IPTV gegen Alternativen",
  columns: COMPARISON_COLUMNS,
  rows: COMPARISON_ROWS,
});

const devicesSection = (): PageSection => ({
  type: "devices",
  heading: "Auf all Ihren Geräten",
  subheading: "Kompatibel mit den beliebtesten Plattformen",
  list: DEVICE_CARDS,
});

const testimonialsSection = (): PageSection => ({
  type: "testimonials",
  heading: "Das sagen unsere Kunden",
  subheading: "Über 12.000 zufriedene Zuschauer",
  reviews: TESTIMONIAL_REVIEWS,
});

const channelSection = (): PageSection => ({
  type: "channelList",
  heading: "25.000+ Sender & 140.000+ VOD",
  subheading: "Ein Überblick über das Angebot",
  categories: CHANNEL_CATEGORIES,
});

const ctaSection = (kw: string): PageSection => ({
  type: "cta",
  heading: `Bereit für ${kw} ohne Kompromisse?`,
  text: "Starten Sie noch heute mit IPTV German – 25.000+ Sender, 4K/8K und voller Support auf allen Geräten.",
  cta: { label: "Jetzt 7 Tage testen", href: ORDER_HREF },
  variant: "primary",
});

const richIntro = (profile: IntentProfile, kw: string): PageSection => ({
  type: "richText",
  heading: `${kw} – das Wichtigste in Kürze`,
  html: profile.intro(kw),
});

const richDeep = (profile: IntentProfile, kw: string): PageSection => {
  const { heading, html } = profile.deepDive(kw);
  return { type: "richText", heading, html };
};

/** Compose the section list for an intent (always ≥5; CTA always closes). */
const buildSectionsFor = (intent: PageIntent, kw: string): PageSection[] => {
  const p = INTENT_PROFILE[intent];
  switch (intent) {
    case "subscription":
      return [richIntro(p, kw), pricingSection(), comparisonSection(), featuresSection(p), testimonialsSection(), channelSection(), ctaSection(kw)];
    case "landing":
      return [richIntro(p, kw), featuresSection(p), comparisonSection(), channelSection(), testimonialsSection(), pricingSection(), ctaSection(kw)];
    case "provider":
      return [richIntro(p, kw), comparisonSection(), featuresSection(p), testimonialsSection(), pricingSection(), richDeep(p, kw), ctaSection(kw)];
    case "device":
      return [richIntro(p, kw), devicesSection(), howSection(), featuresSection(p), comparisonSection(), ctaSection(kw)];
    case "app":
      return [richIntro(p, kw), featuresSection(p), howSection(), devicesSection(), comparisonSection(), ctaSection(kw)];
    case "playlist":
      return [richIntro(p, kw), howSection(), featuresSection(p), richDeep(p, kw), devicesSection(), ctaSection(kw)];
    case "quality":
      return [richIntro(p, kw), featuresSection(p), comparisonSection(), howSection(), devicesSection(), ctaSection(kw)];
    case "legal":
      return [richIntro(p, kw), richDeep(p, kw), featuresSection(p), howSection(), comparisonSection(), ctaSection(kw)];
    case "guide":
      return [richIntro(p, kw), howSection(), featuresSection(p), richDeep(p, kw), comparisonSection(), ctaSection(kw)];
    case "general":
    default:
      return [richIntro(p, kw), featuresSection(p), channelSection(), howSection(), comparisonSection(), ctaSection(kw)];
  }
};

/** Base FAQs shared by every page, plus intent-specific extras (total ≥5). */
const buildFaqsFor = (intent: PageIntent, kw: string): PageFaq[] => {
  const base: PageFaq[] = [
    { question: `Was brauche ich, um ${kw} zu nutzen?`, answer: "Sie benötigen ein internetfähiges Gerät (Smart TV, Fire TV Stick, Smartphone, Box oder PC), eine stabile Verbindung (mind. 16 Mbit/s für Full HD, 25+ Mbit/s für 4K) und einen kompatiblen Player. Die Zugangsdaten erhalten Sie nach der Bestellung sofort per E-Mail." },
    { question: `Ist ${kw} für 4K- und 8K-Streaming geeignet?`, answer: `Ja. Bei ausreichender Bandbreite und einem leistungsfähigen Gerät läuft ${kw} in 4K und teils 8K. Für feste Installationen empfehlen wir LAN/Ethernet statt WLAN, um Buffering zu vermeiden.` },
    { question: `Funktioniert ${kw} auf allen Geräten?`, answer: "In der Regel ja – Android, Android TV, Fire TV, Samsung & LG Smart TV, iPhone/iPad, MAG-Boxen und Windows werden unterstützt. Gleichzeitige Streams hängen vom gewählten Paket ab." },
  ];
  return [...base, ...INTENT_PROFILE[intent].extraFaqs(kw)];
};

/** ≥4 contextual internal links to other existing pages. */
const buildLinksFor = (slug: string, intent: PageIntent): InternalLink[] => {
  const fallback: RawSlug[] = ["iptv", "iptv-deutschland", "iptv-abonnement", "iptv-smarters-pro", "iptv-box", "m3u-iptv"];
  const targets = [...INTENT_LINKS[intent], ...fallback]
    .filter((s, i, arr) => s !== slug && arr.indexOf(s) === i)
    .slice(0, 6);
  return targets.map((target) => {
    const label = titleCase(formatKeyword(target));
    return {
      label,
      href: `${basePath}/${target}`,
      description: `Mehr erfahren: ${label} im IPTV German Ratgeber.`,
    };
  });
};

// ── Per-page bespoke overrides for the highest-value pages ────────────────────
const PAGE_OVERRIDES: Partial<Record<RawSlug, Partial<IPTVPage>>> = {
  "iptv-abonnement": {
    metaTitle: "IPTV Abo Deutschland ab 6,66 € | IPTV German",
    metaDescription: "IPTV Abo Deutschland: 25.000+ Sender, 140.000+ Filme & Serien in 4K/8K, keine Vertragsbindung, sofort aktiv. Jetzt 7 Tage testen!",
    hero: {
      headline: "IPTV Abonnement Deutschland: Fernsehen neu erleben",
      subheadline: "25.000+ Sender, 140.000+ Filme & Serien in 4K/8K – ohne Vertragsbindung, sofort aktiviert und auf jedem Gerät.",
      cta: { label: "Jetzt 7 Tage testen", href: ORDER_HREF },
      badgeTags: ["25.000+ Sender", "4K / 8K", "Keine Vertragsbindung", "Sofort aktiv"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "abonnement-iptv": {
    metaTitle: "IPTV Abonnement kaufen – Premium IPTV | IPTV German",
    hero: {
      headline: "Abonnement IPTV: Premium-Streaming für Deutschland",
      subheadline: "Flexible Pakete ab 6,66 €/Monat mit 25.000+ Sendern, 4K/8K und sofortiger Aktivierung – ganz ohne Vertragsbindung.",
      cta: { label: "Jetzt 7 Tage testen", href: ORDER_HREF },
      badgeTags: ["Ab 6,66 €/Monat", "7-Tage Test", "Keine Vertragsbindung", "4K / 8K"],
      background: "/images/abonnement-bg.webp",
    },
  },
  "iptv-deutschland": {
    metaTitle: "IPTV Deutschland – 25.000+ Sender in 4K | IPTV German",
    metaDescription: "IPTV Deutschland mit allen deutschen Sendern, 140.000+ VOD-Titeln in 4K/8K und deutschem EPG. Keine Vertragsbindung. Jetzt 7 Tage testen!",
  },
  iptv: {
    metaTitle: "Was ist IPTV? Guide für stabiles Streaming | IPTV German",
    metaDescription: "IPTV einfach erklärt: So funktioniert Fernsehen über das Internet – Geräte, Einrichtung, Sicherheit & 4K. Jetzt verstehen und mit IPTV German starten.",
  },
  "iptv-smarters-pro": {
    metaTitle: "IPTV Smarters Pro einrichten (Anleitung) | IPTV German",
    metaDescription: "IPTV Smarters Pro installieren & einrichten: M3U/Xtream, EPG, Untertitel auf allen Geräten. Schritt-für-Schritt-Anleitung von IPTV German.",
  },
};

// ── Assemble one IPTVPage from a slug ────────────────────────────────────────
const buildIptvPage = (slug: RawSlug): IPTVPage => {
  const keyword = formatKeyword(slug);
  const kw = titleCase(keyword);
  const intent = detectIntentV2(slug);
  const profile = INTENT_PROFILE[intent];
  const path = `${basePath}/${slug}`;
  const canonicalUrl = absoluteUrl(path);
  const lang: PageLanguage = "de";

  const metaTitle = clamp(`${kw} | IPTV German`, 60);

  const base: IPTVPage = {
    slug,
    keyword,
    lang,
    intent,
    hreflang: { de: canonicalUrl },
    metaTitle,
    metaDescription: clamp(profile.metaDescription(kw), 155),
    canonicalUrl,
    ogImage: OG,
    structuredData: profile.structuredData,
    breadcrumbs: [
      { label: "Startseite", href: "/" },
      { label: "IPTV German", href: basePath },
      { label: kw, href: path },
    ],
    hero: {
      headline: profile.headline(kw),
      subheadline: profile.subheadline,
      cta: { label: profile.ctaLabel, href: ORDER_HREF },
      badgeTags: profile.badgeTags,
    },
    sections: buildSectionsFor(intent, kw),
    faq: buildFaqsFor(intent, kw),
    internalLinks: buildLinksFor(slug, intent),
    updatedAt: UPDATED_AT,
  };

  const override = PAGE_OVERRIDES[slug];
  if (!override) return base;
  return {
    ...base,
    ...override,
    hero: { ...base.hero, ...(override.hero ?? {}) },
  };
};

export const IPTV_GERMAN_PAGES_V2: IPTVPage[] = IPTV_GERMAN_SLUGS.map(buildIptvPage);

export const IPTV_GERMAN_PAGE_MAP_V2 = new Map(
  IPTV_GERMAN_PAGES_V2.map((page) => [page.slug, page]),
);

export const getIptvGermanPageV2 = (slug: string): IPTVPage | undefined =>
  IPTV_GERMAN_PAGE_MAP_V2.get(slug);
