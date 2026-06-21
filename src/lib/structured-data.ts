import { SITE } from "./seo";

// ─── Organization Schema ───────────────────────────────────────────────────
export function organizationSchema(phoneNumber?: string) {
  const contactPoint: Record<string, string> = {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE.url}/support/contact`,
  };

  // Include phone in schema when available (improves SEO/local search)
  if (phoneNumber) {
    contactPoint.telephone = `+${phoneNumber}`;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-goed-iptv.png`,
    description: SITE.description,
    contactPoint,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    sameAs: [] as string[],
  };
}

// ─── Website Schema ────────────────────────────────────────────────────────
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "nl",
  };
}

// ─── BreadcrumbList Schema ─────────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}`,
    })),
  };
}

// ─── FAQPage Schema ────────────────────────────────────────────────────────
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Product Schema ────────────────────────────────────────────────────────
export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Premium IPTV Abonnement",
    image: `${SITE.url}/images/logo-goed-iptv.png`,
    description: "Het beste premium IPTV abonnement van Nederland met duizenden kanalen en een uitgebreide VOD-bibliotheek in 4K/8K.",
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "AggregateOffer",
      url: `${SITE.url}/#pakketten`,
      priceCurrency: "EUR",
      lowPrice: "14.99",
      highPrice: "69.99",
      offerCount: "4",
      availability: "https://schema.org/InStock"
    },
  };
}
