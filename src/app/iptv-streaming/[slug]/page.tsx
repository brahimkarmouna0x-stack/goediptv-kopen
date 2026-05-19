import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VaultPageTemplate from "@/components/iptv-streaming/VaultPageTemplate";
import {
  getIptvStreamingPage,
  getIptvStreamingPath,
  IPTV_STREAMING_PAGES,
} from "@/content/iptv-streaming-pages";
import { absoluteUrl, OG_IMAGE } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return IPTV_STREAMING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIptvStreamingPage(slug);

  if (!page) {
    return {
      title: "Page non trouvée | IPTV SERVICE",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const relativeUrl = getIptvStreamingPath(page.slug);
  const canonicalUrl = absoluteUrl(relativeUrl);

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      siteName: "IPTV SERVICE",
      title: page.metaTitle,
      description: page.metaDescription,
      locale: page.language === "nl" ? "nl_NL" : page.language,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function IptvStreamingSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIptvStreamingPage(slug);

  if (!page) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://iptvstreaming.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IPTV SERVICE",
        item: "https://iptvstreaming.nl/iptv-streaming",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `https://iptvstreaming.nl${getIptvStreamingPath(page.slug)}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <VaultPageTemplate page={page} />
    </>
  );
}
