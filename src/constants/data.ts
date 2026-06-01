import { Link } from ".";
import {
  getIptvGermanPath,
  IPTV_GERMAN_PAGES,
} from "@/content/iptv-german-pages";

export const NAV_LINKS: Link[] = [
  {
    label: "IPTV German",
    href: "/",
  },
  {
    label: "Best IPTV German",
    href: "/iptv-german/iptv-deutschland",
  },
  {
    label: "Preise",
    href: "/#pricing",
  },
  {
    label: "IPTV kaufen",
    href: "/iptv-german/iptv-abonnement",
  },
  {
    label: "IPTV Abo",
    href: "/iptv-german/iptv-abonnement",
  },
  {
    label: "bester IPTV",
    href: "/iptv-german/meilleur-iptv",
  },
  {
    label: "IPTV Anbieter",
    href: "/iptv-german/fournisseur-iptv",
  },
  {
    label: "Kontakt",
    href: "/support/contact",
  },
];

export const productsFooterLinks: Link[] = [
  {
    label: "Funktionen",
    href: "#features",
  },
  {
    label: "Preise",
    href: "#pricing",
  },
  {
    label: "Senderliste",
    href: "#features",
  },
  {
    label: "VOD-Bibliothek",
    href: "#features",
  },
];

export const supportFooterLinks: Link[] = [
  {
    label: "Hilfe-Center",
    href: "/support",
  },
  {
    label: "Installationsanleitungen",
    href: "/support/guides",
  },
  {
    label: "Kontakt",
    href: "/support/contact",
  },
  {
    label: "Systemstatus",
    href: "/support/status",
  },
];

export const categories = [
  {
    name: "Sport",
    count: "2.400+ Sender",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Filme",
    count: "50.000+ Titel",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Serien",
    count: "15.000+ Shows",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Kinder",
    count: "800+ Sender",
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "TV Live",
    count: "Live in Echtzeit",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "International",
    count: "190+ Länder",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
];

export const features = [
  {
    title: "Ultra HD Streaming",
    description:
      "Kristallklare 4K-Auflösung mit HDR-Unterstützung. Erleben Sie jedes Bild mit atemberaubender Detailtreue.",
    icon: "tv",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Schnelle Server",
    description:
      "Globales CDN-Netzwerk mit 99,9% Verfügbarkeit. Inhalte werden vom nächstgelegenen Edge-Server geliefert.",
    icon: "server",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Null Buffering",
    description:
      "Adaptives Bitrate-Streaming sorgt für flüssige Wiedergabe, auch bei langsameren Verbindungen.",
    icon: "bolt",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "Multi-Geräte Support",
    description:
      "Streamen Sie auf Smart TV, Handy, Tablet oder Laptop. Nahtlose Synchronisierung zwischen all Ihren Geräten.",
    icon: "mobile",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
  {
    title: "Weltweite Sender",
    description:
      "Zugriff auf Inhalte aus 190+ Ländern. Lokale und internationale Sender an einem Ort.",
    icon: "globe",
    color: "text-france-400",
    gradient: "from-france-600/30 to-france-400/15",
    hoverBorder: "hover:border-france-500/40",
  },
  {
    title: "24/7 Support",
    description:
      "Fachkundige Hilfe rund um die Uhr. Durchschnittliche Antwortzeit unter 5 Minuten.",
    icon: "headset",
    color: "text-rouge-400",
    gradient: "from-rouge-600/30 to-rouge-500/15",
    hoverBorder: "hover:border-rouge-500/40",
  },
];

export const faqs = [
  {
    question: "Welche Geräte werden unterstützt?",
    answer:
      "IPTV German funktioniert auf nahezu allen modernen Geräten, darunter Smart-TVs (Samsung, LG, Sony), Android-Handys und -Tablets, iPhones und iPads, Windows- und Mac-Computer, Amazon Fire Stick, Android-TV-Boxen und MAG-Geräte. Wir unterstützen auch gängige IPTV-Apps wie IPTV Smarters, TiviMate und VLC.",
  },
  {
    question: "Wie richte ich mein Abonnement ein?",
    answer:
      "Die Einrichtung dauert weniger als 5 Minuten. Nach dem Kauf erhalten Sie eine E-Mail mit Ihrer M3U-Playlist-URL und den Xtream-Codes-API-Daten. Geben Sie diese Informationen in Ihre bevorzugte IPTV-App ein und schon können Sie streamen. Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung.",
  },
  {
    question: "Kann ich auf mehreren Geräten gleichzeitig sehen?",
    answer:
      "Ja! Je nach Abonnement können Sie auf 1 bis 4 Geräten gleichzeitig streamen. Das Jahresabo unterstützt 4 Verbindungen. Ihre ganze Familie kann also gleichzeitig verschiedene Inhalte auf unterschiedlichen Geräten genießen.",
  },
  {
    question: "Gibt es eine kostenlose Testversion?",
    answer:
      "Ja! Wir bieten eine 24-stündige kostenlose Testversion an, damit Sie unseren Dienst vor einer Entscheidung testen können. Die Testversion beinhaltet vollen Zugriff auf alle Sender und VOD-Inhalte. Kontaktieren Sie unser Support-Team, um Ihre kostenlose Testversion anzufordern.",
  },
  {
    question: "Welche Internetgeschwindigkeit benötige ich?",
    answer:
      "Für optimales Streaming empfehlen wir: SD-Qualität (10 Mbps), HD-Qualität (15 Mbps) und 4K Ultra HD (25 Mbps). Unsere adaptive Streaming-Technologie passt die Qualität automatisch an Ihre Verbindung an, um Pufferung zu vermeiden.",
  },
  {
    question: "Wie kann ich mein Abonnement kündigen?",
    answer:
      "Sie können jederzeit über Ihr Dashboard oder durch Kontaktaufnahme mit unserem Support-Team kündigen. Es fallen keine Kündigungsgebühren oder versteckten Kosten an. Ihr Service bleibt bis zum Ende Ihres aktuellen Abrechnungszeitraums aktiv.",
  },
];
export const FOOTER_PAGES: Link[] = IPTV_GERMAN_PAGES.map((page) => ({
  label: page.keyword.toLowerCase(),
  href: getIptvGermanPath(page.slug),
}));
