import { Link } from ".";
import {
  getIptvStreamingPath,
  IPTV_STREAMING_PAGES,
} from "@/content/iptv-streaming-pages";

export const NAV_LINKS: Link[] = [
  {
    label: "iptv service",
    href: "/",
  },
  {
    label: "iptv france",
    href: "/iptv-streaming/iptv-france",
  },
  {
    label: "tarifs",
    href: "/#pricing",
  },
  {
    label: "abonnement iptv",
    href: "/iptv-streaming/iptv-abonnement",
  },
  {
    label: "meilleur iptv",
    href: "/iptv-streaming/meilleur-iptv",
  },
  {
    label: "fournisseur iptv",
    href: "/iptv-streaming/fournisseur-iptv",
  },
  {
    label: "contact",
    href: "/support/contact",
  },
];

export const productsFooterLinks: Link[] = [
  {
    label: "Fonctionnalités",
    href: "#features",
  },
  {
    label: "Tarifs",
    href: "#pricing",
  },
  {
    label: "Liste des chaînes",
    href: "#features",
  },
  {
    label: "Bibliothèque VOD",
    href: "#features",
  },
];

export const supportFooterLinks: Link[] = [
  {
    label: "Centre d'aide",
    href: "/support",
  },
  {
    label: "Guides d'installation",
    href: "/support/guides",
  },
  {
    label: "Contactez-nous",
    href: "/support/contact",
  },
  {
    label: "Statut du système",
    href: "/support/status",
  },
];

export const socialLinks: Link[] = [
  {
    label: "WhatsApp",
    href: "/support/contact",
  },
];

export const heroStats = [
  { label: "Chaînes Live", value: "25K+", color: "text-[#3B82F6]" },
  { label: "Qualité Ultra HD", value: "4K", color: "text-[#EF4135]" },
  { label: "Films & Séries", value: "∞", color: "text-[#F4C430]" },
  { label: "Pays", value: "190+", color: "text-[#3B82F6]" },
];

export const categories = [
  {
    name: "Sport",
    count: "2.400+ Kanalen",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Films",
    count: "50.000+ Titels",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Series",
    count: "15.000+ Shows",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "Enfants",
    count: "800+ Chaînes",
    image:
      "https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "TV Live",
    count: "Direct en temps réel",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
  {
    name: "International",
    count: "190+ Pays",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=82&auto=format&fit=crop&crop=entropy",
  },
];

export const features = [
  {
    title: "Streaming Ultra HD",
    description:
      "Résolution 4K cristalline avec prise en charge HDR. Vivez chaque image avec un détail à couper le souffle.",
    icon: "tv",
    color: "text-[#3B82F6]",
    gradient: "from-[#0055A4]/25 to-[#3B82F6]/20",
    hoverBorder: "hover:border-[#0055A4]/40",
  },
  {
    title: "Serveurs Rapides",
    description:
      "Réseau CDN mondial avec 99,9% de disponibilité. Contenu livré depuis le serveur edge le plus proche.",
    icon: "server",
    color: "text-[#EF4135]",
    gradient: "from-[#EF4135]/20 to-[#EF4135]/15",
    hoverBorder: "hover:border-[#EF4135]/35",
  },
  {
    title: "Zéro Buffering",
    description:
      "Le streaming à débit adaptatif assure une lecture fluide, même sur les connexions plus lentes.",
    icon: "bolt",
    color: "text-[#3B82F6]",
    gradient: "from-[#3B82F6]/20 to-[#3B82F6]/15",
    hoverBorder: "hover:border-[#3B82F6]/35",
  },
  {
    title: "Support Multi-Appareils",
    description:
      "Regardez sur Smart TV, téléphone, tablette ou ordinateur portable. Synchronisation transparente entre tous vos appareils.",
    icon: "mobile",
    color: "text-[#F4C430]",
    gradient: "from-[#F4C430]/20 to-[#EF4135]/15",
    hoverBorder: "hover:border-[#F4C430]/35",
  },
  {
    title: "Chaînes Mondiales",
    description:
      "Accès au contenu de 190+ pays. Chaînes locales et internationales en un seul endroit.",
    icon: "globe",
    color: "text-[#EF4135]",
    gradient: "from-[#EF4135]/20 to-[#EF4135]/15",
    hoverBorder: "hover:border-[#EF4135]/35",
  },
  {
    title: "Support 24/7",
    description:
      "Aide experte 24h/24 et 7j/7. Temps de réponse moyen de moins de 5 minutes.",
    icon: "headset",
    color: "text-[#3B82F6]",
    gradient: "from-[#0055A4]/25 to-[#3B82F6]/20",
    hoverBorder: "hover:border-[#0055A4]/40",
  },
];

export const pricingPlans = [
  {
    name: "Mensuel",
    price: "14,99",
    period: "mois",
    description: "Parfait pour essayer",
    features: [
      "25 000+ Chaînes Live",
      "Qualité HD & Full HD",
      "1 Connexion Appareil",
      "EPG & Catch-up",
    ],
    missingFeatures: ["4K Ultra HD", "Bibliothèque VOD"],
    isPopular: false,
    hoverBorder: "hover:border-[#0055A4]/40",
  },
  {
    name: "Trimestriel",
    price: "34,99",
    period: "3 mois",
    description: "Meilleur rapport qualité-prix pour les téléspectateurs réguliers",
    features: [
      "25 000+ Chaînes Live",
      "Qualité Full HD & 4K",
      "2 Connexions Appareils",
      "EPG & Catch-up",
      "Bibliothèque VOD de Base",
    ],
    missingFeatures: ["Synchronisation Multi-Écran"],
    isPopular: true,
    hoverBorder: "hover:border-[#0055A4]/40",
  },
  {
    name: "Annuel",
    price: "89,99",
    period: "an",
    description: "L'expérience premium ultime",
    features: [
      "25 000+ Chaînes Live",
      "4K Ultra HD & Prêt pour la 8K",
      "4 Connexions Appareils",
      "Accès Complet à la Bibliothèque VOD",
      "Support 24/7 Prioritaire",
      "Synchronisation Multi-Écran",
    ],
    missingFeatures: [],
    isPopular: false,
    hoverBorder: "hover:border-[#EF4135]/35",
  },
];

export const faqs = [
  {
    question: "Quels appareils sont pris en charge ?",
    answer:
      "IPTV SERVICE fonctionne sur presque tous les appareils modernes, y compris les Smart TV (Samsung, LG, Sony), les téléphones et tablettes Android, les iPhones et iPads, les ordinateurs Windows et Mac, l'Amazon Fire Stick, les boîtiers Android TV et les appareils MAG. Nous supportons également les applications IPTV populaires comme IPTV Smarters, TiviMate et VLC.",
  },
  {
    question: "Comment configurer mon abonnement ?",
    answer:
      "L'installation prend moins de 5 minutes. Après l'achat, vous recevrez un e-mail avec votre URL de liste de lecture M3U et les détails de l'API Xtream Codes. Saisissez ces informations dans votre application IPTV préférée et vous êtes prêt à streamer. Notre équipe de support est disponible 24h/24 et 7j/7 pour vous aider.",
  },
  {
    question: "Puis-je regarder sur plusieurs appareils en même temps ?",
    answer:
      "Oui ! Selon votre abonnement, vous pouvez streamer sur 1 à 3 appareils simultanément. L'abonnement Trimestriel prend en charge 2 connexions et l'abonnement Annuel prend en charge 4 connexions. Cela signifie que toute votre famille peut profiter de différents contenus en même temps sur différents appareils.",
  },
  {
    question: "Y a-t-il un essai gratuit disponible ?",
    answer:
      "Oui ! Nous proposons un essai gratuit de 24 heures pour vous permettre de découvrir notre service avant de prendre une décision. L'essai comprend un accès complet à toutes les chaînes et au contenu VOD. Contactez notre équipe de support pour demander votre essai gratuit.",
  },
  {
    question: "Quelle vitesse Internet ai-je besoin ?",
    answer:
      "Pour un streaming optimal, nous recommandons : qualité SD (10 Mbps), qualité HD (15 Mbps) et 4K Ultra HD (25 Mbps). Notre technologie de streaming adaptatif ajuste automatiquement la qualité en fonction de votre connexion pour éviter la mise en mémoire tampon.",
  },
  {
    question: "Comment puis-je annuler mon abonnement ?",
    answer:
      "Vous pouvez annuler à tout moment depuis votre tableau de bord ou en contactant notre équipe de support. Il n'y a pas de frais d'annulation ni de coûts cachés. Votre service reste actif jusqu'à la fin de votre période de facturation en cours.",
  },
];
export const FOOTER_PAGES: Link[] = IPTV_STREAMING_PAGES.map((page) => ({
  label: page.keyword.toLowerCase(),
  href: getIptvStreamingPath(page.slug),
}));
