import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import HashScrollManager from "@/components/shared/HashScrollManager";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { getPhoneNumber } from "@/lib/settings";
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
    "Premium IPTV abonnement van Nederland. Stabiele 4K-streams, duizenden kanalen en nul buffering. Ontdek het beste IPTV aanbod bij Goed IPTV.",
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
  // `?v=3` busts aggressive browser favicon caching after the icon refresh.
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png?v=3", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon-256x256.png?v=3", type: "image/png", sizes: "256x256" },
    ],
    shortcut: ["/favicon.ico?v=3"],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-152x152.png?v=3", sizes: "152x152", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png?v=3", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png?v=3",
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
      "Stabiele 4K-streaming, duizenden kanalen en nul buffering.",
    images: [
      {
        url: "/images/logo-goed-iptv.png",
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
      "Stabiele 4K-streaming, duizenden kanalen en nul buffering.",
    images: ["/images/logo-goed-iptv.png"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = await getPhoneNumber();
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
            __html: JSON.stringify(organizationSchema(phoneNumber)),
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
