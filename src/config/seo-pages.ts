export interface SEOPageConfig {
  slug: string;
  title: string;
  description: string;
  heroPill: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  faqEntries: { question: string; answer: string }[];
  pricingPill?: string;
  pricingTitle?: string;
  pricingSubtitle?: string;
  featuresTitle?: string;
  ctaTitle?: string;
}

// Function to generate a title case keyword from a slug
const formatKeyword = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Determines the intent/category of the keyword for tailored content
const getKeywordIntent = (slug: string) => {
  const lowerSlug = slug.toLowerCase();
  
  if (lowerSlug.includes("app") || lowerSlug.includes("application") || lowerSlug.includes("player") || 
      lowerSlug.includes("smarters") || lowerSlug.includes("tivimate") || lowerSlug.includes("flix") || 
      lowerSlug.includes("smartone") || lowerSlug.includes("net-iptv") || lowerSlug.includes("set-iptv") ||
      lowerSlug.includes("ss-iptv")) {
    return "SOFTWARE";
  }
  
  if (lowerSlug.includes("box") || lowerSlug.includes("fire-stick") || lowerSlug.includes("mag") || 
      lowerSlug.includes("kastje") || lowerSlug.includes("amiko") || lowerSlug.includes("shield")) {
    return "HARDWARE";
  }
  
  if (lowerSlug.includes("deutschland") || lowerSlug.includes("german") || lowerSlug.includes("nederland") || lowerSlug.includes("dutch") || lowerSlug.includes("kpn") || 
      lowerSlug.includes("ziggo") || lowerSlug.includes("nederlandse")) {
    return "REGION";
  }
  
  if (lowerSlug.includes("4k") || lowerSlug.includes("hd") || lowerSlug.includes("kwaliteit") || lowerSlug.includes("ultra")) {
    return "QUALITY";
  }
  
  if (lowerSlug.includes("kaufen") || lowerSlug.includes("abonnement") || lowerSlug.includes("anbieter") || 
      lowerSlug.includes("provider") || lowerSlug.includes("bestellen") || lowerSlug.includes("preise")) {
    return "ACTION";
  }

  if (lowerSlug.includes("gratis") || lowerSlug.includes("kostenlos") || lowerSlug.includes("free") || lowerSlug.includes("test") || 
      lowerSlug.includes("probe") || lowerSlug.includes("playlist") || lowerSlug.includes("m3u")) {
    return "VALUE";
  }

  if (lowerSlug.includes("illegal") || lowerSlug.includes("strafe") || lowerSlug.includes("legal") || lowerSlug.includes("sicher") || lowerSlug.includes("recht")) {
    return "LEGAL";
  }

  return "GENERAL";
};

// Generates generic but highly relevant SEO content based on the keyword's intent
export const getSEOPageConfig = (slug: string): SEOPageConfig => {
  const keyword = formatKeyword(slug);
  const intent = getKeywordIntent(slug);

  // Default fallbacks (GENERAL)
  let title = `Der Beste ${keyword} 2024 | Premium-Qualität & 4K`;
  let description = `Sie suchen ${keyword} ? Entdecken Sie das ultimative Seherlebnis mit 25.000+ Sendern, VOD und 4K-Qualität. Testen Sie noch heute ohne Unterbrechung!`;
  const heroPill = `${keyword} Premium Dienst`;
  let heroTitle = `Die Ultimative Wahl Für `;
  let heroSubtitle = `Erleben Sie ultimative Freiheit mit ${keyword}. Sehen Sie über 25.000 Live-TV-Sender, die neuesten Filme und Serien in atemberaubender 4K-Qualität auf all Ihren Geräten.`;
  
  let pricingPill = `Preise für ${keyword}`;
  let pricingTitle = `Wählen Sie Ihr ${keyword} Paket`;
  const pricingSubtitle = `Speziell ausgewählte und optimierte Abonnements für Ihr Interesse an ${keyword}.`;
  let featuresTitle = `Warum Unseren ${keyword} Dienst Wählen?`;
  let ctaTitle = `Jetzt Mit ${keyword} Starten`;

  const faqEntries = [
    {
      question: `Was macht Ihren ${keyword} Dienst zur besten Wahl?`,
      answer: `Unser Dienst bietet unübertroffene Stabilität, ein riesiges Katalog von über 25.000 Sendern in 4K/FHD und ist mit fast allen Geräten kompatibel. Perfekt abgestimmt auf Ihre Suche nach ${keyword}.`
    },
    {
      question: `Kann ich ${keyword} vor dem Kauf testen?`,
      answer: `Absolut! Wir bieten eine risikofreie Testphase an, damit Sie die Qualität und Stabilität unseres Dienstes selbst erleben können, bevor Sie sich für ein Abonnement entscheiden.`
    },
    {
      question: `Welche Internetgeschwindigkeit brauche ich für ${keyword}?`,
      answer: `Für ein flüssiges Seherlebnis empfehlen wir mindestens 15 Mbps für HD-Qualität und 25 Mbps für 4K-Streams. Unsere Server sind für ${keyword} optimiert.`
    }
  ];

  // Tailor content based on intent
  switch (intent) {
    case "SOFTWARE":
      title = `${keyword} Perfekte Integration | IPTV 4K Dienst`;
      description = `Genießen Sie unseren nahtlosen IPTV-Dienst, perfekt optimiert für ${keyword}. Sehen Sie 25.000+ Sender und VOD ohne Pufferung auf Ihrem bevorzugten Player.`;
      heroTitle = `Nahtloses Streaming mit `;
      heroSubtitle = `Verbinden Sie Ihre Geräte und Anwendungen mühelos. Unser Premium-Dienst funktioniert perfekt mit ${keyword} für das beste 4K-Seherlebnis.`;
      pricingTitle = `Abonnements für ${keyword}`;
      featuresTitle = `${keyword} Funktionen & Vorteile`;
      faqEntries[0] = {
        question: `Wie installiere ich Ihren Dienst auf ${keyword}?`,
        answer: `Die Einrichtung unseres Dienstes mit ${keyword} ist einfach. Nach dem Kauf erhalten Sie sofort Ihren M3U-Link oder Ihre Xtream Codes Anmeldedaten zur Verwendung in ${keyword}.`
      };
      break;

    case "HARDWARE":
      title = `Bestes IPTV für ${keyword} | Stabil & 4K`;
      description = `Holen Sie das Beste aus Ihrem ${keyword} mit unserem Premium-IPTV-Dienst heraus. Entdecken Sie 25.000+ Sender und genießen Sie ein flüssiges 4K-Erlebnis.`;
      heroTitle = `Optimieren Sie Ihr `;
      heroSubtitle = `Unser Dienst ist speziell für Geräte wie ${keyword} optimiert. Genießen Sie ultraschnelle Kanalwechsel und kristallklare Bildqualität auf Ihrer Box.`;
      pricingPill = `${keyword} Angebote`;
      pricingTitle = `Der Beste Plan für Ihr ${keyword}`;
      faqEntries[0] = {
        question: `Ist dieser Dienst mit meinem ${keyword} kompatibel?`,
        answer: `Ja, unser IPTV-Dienst ist vollständig mit ${keyword} kompatibel. Ob Sie MAG, Android Box oder Fire Stick verwenden, wir bieten umfassende Unterstützung.`
      };
      break;

    case "REGION":
      title = `Die #1 ${keyword} Anbieter | IPTV Premium 4K`;
      description = `Entdecken Sie die beste Qualität mit dem zuverlässigsten ${keyword} Anbieter. Alle lokalen und internationalen Sender in einem Paket.`;
      heroTitle = `Der Bestbewertete Anbieter Für `;
      heroSubtitle = `Genießen Sie unbegrenzte Unterhaltung mit dem zuverlässigsten ${keyword} Dienst. Bringen Sie die besten Inhalte direkt in Ihr Wohnzimmer.`;
      pricingTitle = `Exklusive ${keyword} Angebote`;
      ctaTitle = `Jetzt ${keyword} Mitglied Werden`;
      faqEntries[0] = {
        question: `Bieten Sie auch lokale Sender für ${keyword} an?`,
        answer: `Aber ja! Zusätzlich zu über 25.000 internationalen Sendern bieten wir ein vollständiges Angebot aller relevanten lokalen Sender und Premium-Sportkanäle für ${keyword}.`
      };
      break;

    case "VALUE":
      title = `${keyword} IPTV | Kostenlos Testen & 4K`;
      description = `Entdecken Sie die beste IPTV ${keyword} Erfahrung. Streamen Sie sofort und genießen Sie die Qualität unserer Premium-Sender und VOD.`;
      heroTitle = `Noch Heute Starten Mit `;
      heroSubtitle = `Warum warten? Erleben Sie selbst die Stabilität und Qualität unseres Dienstes. Mit ${keyword} erhalten Sie einen Vorgeschmack auf die ultimative Unterhaltungswelt.`;
      pricingTitle = `${keyword} Pakete & Testmöglichkeiten`;
      faqEntries[1] = {
        question: `Was ist im ${keyword} Paket enthalten?`,
        answer: `Sie erhalten vollen Zugriff auf unser Angebot mit 25.000+ Sendern, Filmen und Serien, um die komplette ${keyword} Erfahrung zu testen.`
      };
      break;

    case "LEGAL":
      title = `${keyword} & Sicheres Streaming | Was Sie Wissen Sollten`;
      description = `Alles über ${keyword} und wie Sie Premium-IPTV-Streaming sicher und zuverlässig genießen können, ohne Sorgen.`;
      heroTitle = `Genießen Sie Sicher `;
      heroSubtitle = `Wir legen großen Wert auf Ihre Privatsphäre und Sicherheit. Erfahren Sie, wie unser Dienst Ihnen ein sorgenfreies und stabiles Seherlebnis in Bezug auf ${keyword} bietet.`;
      pricingTitle = `Sorgenfreie ${keyword} Abonnements`;
      faqEntries[0] = {
        question: `Wie garantieren Sie meine Privatsphäre bei ${keyword}?`,
        answer: `Unsere Server sind gesichert und wir speichern keine persönlichen Sehdaten. Ihre Sicherheit und Anonymität stehen im Mittelpunkt der Nutzung unseres Dienstes für ${keyword}.`
      };
      break;

    case "QUALITY":
      title = `${keyword} Kristallklares IPTV | Ultra HD Erlebnis`;
      description = `Gehen Sie mit ${keyword} auf die nächste Stufe. Erleben Sie Fernsehen wie nie zuvor mit unseren Premium-4K- und 8K-Streams.`;
      heroTitle = `Ein Atemberaubendes Erlebnis `;
      heroSubtitle = `Schluss mit Kompromissen bei der Bildqualität. Unsere Server liefern die höchste Bandbreite für ${keyword}, damit Sie jedes Detail gestochen scharf sehen.`;
      pricingTitle = `${keyword} Premium Pakete`;
      break;

    case "ACTION":
      title = `${keyword} IPTV | Sofortige Aktivierung & 4K`;
      description = `Kaufen Sie ${keyword} sicher und schnell. Wählen Sie Ihr Paket und genießen Sie 25.000+ Sender auf all Ihren Geräten in wenigen Minuten.`;
      heroTitle = `Einfach und Schnell `;
      heroSubtitle = `Bereit für den Wechsel? Treten Sie unserer Community bei und entdecken Sie, warum tausende Kunden uns für ${keyword} wählen.`;
      pricingPill = `Angebot: ${keyword}`;
      break;
  }

  // Allow manual overrides for specific slugs
  const overrides: Record<string, Partial<SEOPageConfig>> = {
    "iptv-nederland": {
      title: "Bester IPTV Anbieter Deutschland 2024 | 4K & VOD",
      heroTitle: "Der #1 IPTV Anbieter in ",
      heroTitleHighlight: "Deutschland",
    },
    "iptv-illegaal": {
      title: "Ist IPTV Illegal? Fakten & Sicheres Streaming",
      heroTitle: "Klarheit Über ",
      heroTitleHighlight: "Illegales Streaming",
      heroSubtitle: "Erfahren Sie alles über die Regulierung und wie Sie Unterhaltung verantwortungsvoll und risikofrei genießen können.",
    },
    "iptv-playlist-m3u-2024": {
      title: "IPTV M3U Playlist 2024 | Kostenloser & Premium Download",
      heroTitle: "Die Stabilste ",
      heroTitleHighlight: "M3U Playlist 2024",
      heroSubtitle: "Direkter Zugriff auf tausende Sender. Unsere M3U-Playlists sind für jeden Player optimiert und bieten höchste 4K-Qualität.",
    },
    "iptv-proefperiode": {
      title: "Kostenlose IPTV Testphase | Testen Sie Unseren 4K Dienst",
      heroTitle: "Starten Sie Ihre ",
      heroTitleHighlight: "Kostenlose IPTV Testphase",
      heroSubtitle: "Erleben Sie selbst die Geschwindigkeit und Qualität unserer Premium-Sender. Unverbindlich, 24 Stunden unbegrenztes Streaming.",
    },
    "beste-iptv-aanbieder-nederland": {
      title: "Bester IPTV Anbieter Deutschland 2024 | Top Bewertet",
      heroTitle: "Der Absolut ",
      heroTitleHighlight: "Beste IPTV Anbieter",
      heroSubtitle: "Entdecken Sie, warum wir 3 Jahre in Folge zum besten IPTV Anbieter Deutschlands gewählt wurden. Qualität, die Sie sehen können.",
    },
    "iptv-smarters": {
      title: "IPTV Smarters Pro Einrichtung | Beste Playerfahrung",
      heroTitle: "Holen Sie Das Beste Aus ",
      heroTitleHighlight: "IPTV Smarters Heraus",
      heroSubtitle: "Unser Dienst ist vollständig für die IPTV Smarters Pro App optimiert. Genießen Sie eine intuitive Oberfläche und ultraschnelle Streams.",
    },
    "tivimate": {
      title: "TiviMate IPTV Premium | Stabiles 4K Streaming",
      heroTitle: "Der Perfekte Partner Für ",
      heroTitleHighlight: "TiviMate",
      heroSubtitle: "Kombinieren Sie den besten Player mit dem besten Dienst. Wir unterstützen alle TiviMate-Funktionen, einschließlich EPG und Catch-up.",
    },
    "firestick": {
      title: "IPTV auf Firestick Einrichten | 4K Streaming Guide",
      heroTitle: "Verwandeln Sie Ihren ",
      heroTitleHighlight: "Amazon Firestick",
      heroSubtitle: "Machen Sie Ihren Firestick zu einem leistungsstarken Entertainment-Center. Unsere App ist leicht, schnell und für die Fire Stick Fernbedienung optimiert.",
    }
  };

  const currentOverride = overrides[slug] || {};

  return {
    slug,
    title: currentOverride.title || title,
    description: currentOverride.description || description,
    heroPill: currentOverride.heroPill || heroPill,
    heroTitle: currentOverride.heroTitle || heroTitle,
    heroTitleHighlight: currentOverride.heroTitleHighlight || keyword,
    heroSubtitle: currentOverride.heroSubtitle || heroSubtitle,
    faqEntries: currentOverride.faqEntries || faqEntries,
    pricingPill: currentOverride.pricingPill || pricingPill,
    pricingTitle: currentOverride.pricingTitle || pricingTitle,
    pricingSubtitle: currentOverride.pricingSubtitle || pricingSubtitle,
    featuresTitle: currentOverride.featuresTitle || featuresTitle,
    ctaTitle: currentOverride.ctaTitle || ctaTitle,
  };
};
