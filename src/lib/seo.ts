import type { Metadata } from "next";

// ─── Site configuration ────────────────────────────────────────────────────
export const SITE = {
  name: "IPTV SERVICE",
  url: "https://iptvstreaming.nl",
  locale: "fr_FR",
  localeAlt: "nl_NL",
  description:
    "Streaming 4K illimité avec 25 000+ chaînes et zéro buffering. Découvrez le meilleur service IPTV premium en France avec IPTV SERVICE.",
  twitterHandle: undefined as string | undefined,
} as const;

// ─── Absolute URL helper ───────────────────────────────────────────────────
export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

// ─── OpenGraph image (1200×630 recommended for social sharing) ──────────────
export const OG_IMAGE = {
  url: `${SITE.url}/images/logo.webp`,
  width: 512,
  height: 512,
  alt: SITE.name,
};

// ─── Build canonical + alternate metadata ───────────────────────────────────
export function canonicalMetadata(
  path: string,
  language?: string,
): Pick<Metadata, "alternates"> {
  return {
    alternates: {
      canonical: absoluteUrl(path),
      ...(language && language !== "fr"
        ? { languages: { [language]: absoluteUrl(path) } }
        : {}),
    },
  };
}

// ─── OpenGraph defaults builder ────────────────────────────────────────────
export function openGraphMetadata({
  title,
  description,
  path,
  type = "website",
  locale,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: string;
}): Metadata["openGraph"] {
  return {
    type,
    locale: locale || SITE.locale,
    url: absoluteUrl(path),
    siteName: SITE.name,
    title,
    description,
    images: [OG_IMAGE],
  };
}

// ─── Twitter card defaults builder ─────────────────────────────────────────
export function twitterMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  };
}

// ─── Full page metadata builder (avoids repetition) ────────────────────────
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  locale,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: locale || SITE.locale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : { robots: { index: true, follow: true } }),
  };
}
