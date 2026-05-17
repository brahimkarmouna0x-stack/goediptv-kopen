import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iptvstreaming.nl"),
  title: {
    default: "IPTV SERVICE — Service IPTV Premium en France",
    template: "%s | IPTV SERVICE",
  },
  description:
    "Streaming 4K illimité avec 25 000+ chaînes et zéro buffering. Découvrez le meilleur service IPTV premium en France avec IPTV SERVICE.",
  keywords: [
    "IPTV",
    "service IPTV",
    "meilleur service IPTV",
    "abonnement IPTV",
    "IPTV France",
    "streaming 4K",
    "IPTV premium",
    "IPTV SERVICE",
  ],
  authors: [{ name: "IPTV SERVICE" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/logo.svg",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://iptvstreaming.nl",
    siteName: "IPTV SERVICE",
    title: "IPTV SERVICE — Service IPTV Premium en France",
    description:
      "Streaming 4K illimité avec 25 000+ chaînes et zéro buffering.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "IPTV SERVICE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV SERVICE — Service IPTV Premium en France",
    description:
      "Streaming 4K illimité avec 25 000+ chaînes et zéro buffering.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`h-full antialiased ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0F172A" />
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://image.tmdb.org" />
        <link rel="dns-prefetch" href="https://image.tmdb.org" />
        <link rel="preconnect" href="https://api.themoviedb.org" />
        <link rel="dns-prefetch" href="https://api.themoviedb.org" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Skip-to-content link for keyboard users — first focusable element */}
        <a
          href="#main-content"
          id="skip-to-content"
          className="fixed -top-40 left-4 z-[9999] rounded-xl bg-rouge-500 px-6 py-3 font-black text-blanc-50 shadow-lg transition-all focus:top-4 focus:outline-2 focus:outline-france-400"
        >
          Aller au contenu
        </a>

        <NavBar />

        <div id="main-content" className="flex-1 flex flex-col">
          {children}
        </div>

        <WhatsAppButton />

        <Footer />
      </body>
    </html>
  );
}
