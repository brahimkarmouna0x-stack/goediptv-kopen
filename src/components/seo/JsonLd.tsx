import { faqSchema } from "@/lib/structured-data";
import { SITE } from "@/lib/seo";
import type { IPTVPage } from "@/content/iptv-german-pages";

/** Escape "<" so a stray HTML tag in content can't break out of the script tag. */
const serialize = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");

/**
 * Emits the page's primary schema.org type (driven by `page.structuredData`)
 * plus a FAQPage block. BreadcrumbList is emitted by the `Breadcrumbs` component
 * so it stays co-located with the visible breadcrumb markup.
 */
export default function JsonLd({ page }: { page: IPTVPage }) {
  const primary = buildPrimarySchema(page);
  const faq = page.faq.length ? faqSchema(page.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(primary) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(faq) }}
        />
      )}
    </>
  );
}

function buildPrimarySchema(page: IPTVPage): Record<string, unknown> {
  const base = {
    "@context": "https://schema.org",
    name: page.metaTitle,
    description: page.metaDescription,
    url: page.canonicalUrl,
    inLanguage: "de",
    image: page.ogImage,
  };

  switch (page.structuredData) {
    case "Product":
      return {
        ...base,
        "@type": "Product",
        brand: { "@type": "Brand", name: SITE.name },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "6.66",
          highPrice: "12.99",
          offerCount: 3,
          url: page.canonicalUrl,
        },
      };
    case "Article":
      return {
        ...base,
        "@type": "Article",
        headline: page.hero.headline,
        datePublished: page.updatedAt,
        dateModified: page.updatedAt,
        author: { "@type": "Organization", name: SITE.name },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE.url}/images/logo-goed-iptv.png`,
          },
        },
      };
    case "WebPage":
    case "FAQPage":
    case "BreadcrumbList":
    default:
      return { ...base, "@type": "WebPage" };
  }
}
