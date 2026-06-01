import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HashScrollManager from "@/components/shared/HashScrollManager";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import Analytics from "@/components/analytics/Analytics";
import WebVitals from "@/components/analytics/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goediptv-kopen.nl"),
  applicationName: "goediptv-kopen",
  title: {
    default: "goediptv-kopen — Beste IPTV Abonnement van Nederland",
    template: "%s | goediptv-kopen",
  },
  description:
    "Onbeperkt 4K-streaming met 25.000+ kanalen en nul buffering. Ontdek het beste premium IPTV abonnement van Nederland bij goediptv-kopen.",
  keywords: [
    "iptv abonnement",
    "iptv abonnementen",
    "iptv aanbieder",
    "beste iptv providers",
    "premium iptv nederland",
    "iptv in nederland",
    "goedkoop iptv",
    "iptv vergelijken",
    "iptv bestellen",
    "iptv pakket",
    "iptv 4k",
    "iptv kopen",
  ],
  authors: [{ name: "goediptv-kopen" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-72x72.png", type: "image/png", sizes: "72x72" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-128x128.png", type: "image/png", sizes: "128x128" },
      { url: "/favicon-144x144.png", type: "image/png", sizes: "144x144" },
      { url: "/favicon-152x152.png", type: "image/png", sizes: "152x152" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-256x256.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://goediptv-kopen.nl",
    siteName: "goediptv-kopen",
    title: "goediptv-kopen — Beste IPTV Abonnement van Nederland",
    description:
      "Onbeperkt 4K-streaming met 25.000+ kanalen en nul buffering.",
    images: [
      {
        url: "/images/site-logo.png",
        width: 1505,
        height: 1352,
        alt: "goediptv-kopen – Premium IPTV abonnement in Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "goediptv-kopen — Beste IPTV Abonnement van Nederland",
    description:
      "Onbeperkt 4K-streaming met 25.000+ kanalen en nul buffering.",
    images: ["/images/site-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification — only emitted when the token is set.
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

// Theme color + color scheme belong in the viewport export in Next.js 16.
export const viewport: Viewport = {
  themeColor: "#060B16",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Analytics (env-gated, afterInteractive) + Core Web Vitals reporting */}
        <Analytics />
        <WebVitals />

        {/* Skip-to-content link for keyboard users — first focusable element */}
        <a
          href="#main-content"
          id="skip-to-content"
          className="fixed -top-40 left-4 z-[9999] rounded-xl bg-rouge-500 px-6 py-3 font-black text-blanc-50 shadow-lg transition-all focus:top-4 focus:outline-2 focus:outline-france-400"
        >
          Naar inhoud springen
        </a>

        <NavBar />
        <HashScrollManager />

        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
