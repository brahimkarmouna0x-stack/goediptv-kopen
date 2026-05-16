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
  
  if (lowerSlug.includes("nederland") || lowerSlug.includes("dutch") || lowerSlug.includes("kpn") || 
      lowerSlug.includes("ziggo") || lowerSlug.includes("nederlandse")) {
    return "REGION";
  }
  
  if (lowerSlug.includes("4k") || lowerSlug.includes("hd") || lowerSlug.includes("kwaliteit") || lowerSlug.includes("ultra")) {
    return "QUALITY";
  }
  
  if (lowerSlug.includes("kopen") || lowerSlug.includes("abonnement") || lowerSlug.includes("aanbieder") || 
      lowerSlug.includes("provider") || lowerSlug.includes("krijgen") || lowerSlug.includes("bestellen")) {
    return "ACTION";
  }

  if (lowerSlug.includes("gratis") || lowerSlug.includes("free") || lowerSlug.includes("test") || 
      lowerSlug.includes("proef") || lowerSlug.includes("playlist") || lowerSlug.includes("m3u")) {
    return "VALUE";
  }

  if (lowerSlug.includes("illegaal") || lowerSlug.includes("boete") || lowerSlug.includes("legaal") || lowerSlug.includes("veilig")) {
    return "LEGAL";
  }

  return "GENERAL";
};

// Generates generic but highly relevant SEO content based on the keyword's intent
export const getSEOPageConfig = (slug: string): SEOPageConfig => {
  const keyword = formatKeyword(slug);
  const intent = getKeywordIntent(slug);

  // Default fallbacks (GENERAL)
  let title = `Le Meilleur ${keyword} en 2024 | Qualité Premium & 4K`;
  let description = `Vous cherchez ${keyword} ? Découvrez l'expérience de visionnage ultime avec 25 000+ chaînes, VOD et qualité 4K. Essayez dès aujourd'hui sans aucune interruption !`;
  const heroPill = `Service ${keyword} Premium`;
  let heroTitle = `Le Choix Ultime Pour `;
  let heroSubtitle = `Vivez la liberté ultime avec ${keyword}. Regardez plus de 25 000 chaînes TV en direct, les derniers films et séries en magnifique 4K sur tous vos appareils.`;
  
  let pricingPill = `Tarifs pour ${keyword}`;
  let pricingTitle = `Choisissez Votre Forfait ${keyword}`;
  const pricingSubtitle = `Des abonnements spécialement sélectionnés et optimisés pour votre intérêt pour ${keyword}.`;
  let featuresTitle = `Pourquoi Choisir Notre Service ${keyword} ?`;
  let ctaTitle = `Commencez Aujourd'hui Avec ${keyword}`;

  const faqEntries = [
    {
      question: `Qu'est-ce qui rend votre service ${keyword} le meilleur choix ?`,
      answer: `Notre service offre une stabilité inégalée, un vaste catalogue de plus de 25 000 chaînes en 4K/FHD et est compatible avec presque tous les appareils. Parfaitement adapté à votre recherche de ${keyword}.`
    },
    {
      question: `Puis-je essayer ${keyword} avant d'acheter ?`,
      answer: `Absolument ! Nous proposons une période d'essai sans risque afin que vous puissiez découvrir par vous-même la qualité et la stabilité de notre service avant de vous engager dans un abonnement.`
    },
    {
      question: `Quelle vitesse Internet ai-je besoin pour ${keyword} ?`,
      answer: `Pour une expérience de visionnage fluide, nous recommandons une vitesse minimale de 15 Mbps pour la qualité HD et de 25 Mbps pour les flux 4K. Nos serveurs sont optimisés pour ${keyword}.`
    }
  ];

  // Tailor content based on intent
  switch (intent) {
    case "SOFTWARE":
      title = `Intégration Parfaite de ${keyword} | Service IPTV 4K`;
      description = `Profitez de notre service IPTV fluide parfaitement optimisé pour ${keyword}. Regardez 25K+ chaînes et VOD sans mise en mémoire tampon sur votre lecteur préféré.`;
      heroTitle = `Streaming Fluide avec `;
      heroSubtitle = `Connectez vos appareils et applications sans effort. Notre service premium fonctionne parfaitement avec ${keyword} pour la meilleure expérience de visionnage en 4K.`;
      pricingTitle = `Abonnements pour ${keyword}`;
      featuresTitle = `${keyword} Fonctionnalités & Avantages`;
      faqEntries[0] = {
        question: `Comment installer votre service sur ${keyword} ?`,
        answer: `Configurer notre service avec ${keyword} est simple. Après l'achat, vous recevez immédiatement votre lien M3U ou vos identifiants Xtream Codes à utiliser dans ${keyword}.`
      };
      break;

    case "HARDWARE":
      title = `Meilleur IPTV pour ${keyword} | Stable & 4K`;
      description = `Tirez le meilleur parti de votre ${keyword} avec notre service IPTV premium. Découvrez 25 000+ chaînes et profitez d'une expérience 4K fluide.`;
      heroTitle = `Optimisez Votre `;
      heroSubtitle = `Notre service est spécialement optimisé pour les appareils tels que ${keyword}. Profitez de temps de changement de chaîne ultra-rapides et d'une qualité d'image cristalline sur votre box.`;
      pricingPill = `Offres ${keyword}`;
      pricingTitle = `Le Meilleur Plan pour Votre ${keyword}`;
      faqEntries[0] = {
        question: `Ce service est-il compatible avec mon ${keyword} ?`,
        answer: `Oui, notre service IPTV est entièrement compatible avec ${keyword}. Que vous utilisiez un MAG, une Android Box ou un Fire Stick, nous offrons une assistance complète.`
      };
      break;

    case "REGION":
      title = `Le #1 Fournisseur ${keyword} | IPTV Premium 4K`;
      description = `Découvrez la meilleure qualité avec le fournisseur ${keyword} le plus fiable. Toutes les chaînes locales et internationales dans un seul pack.`;
      heroTitle = `Le Fournisseur Mieux Noté Pour `;
      heroSubtitle = `Profitez d'une offre illimitée de divertissement avec le service ${keyword} le plus fiable. Apportez le meilleur contenu directement dans votre salon.`;
      pricingTitle = `Offres Exclusives ${keyword}`;
      ctaTitle = `Devenez Membre ${keyword} Maintenant`;
      faqEntries[0] = {
        question: `Proposez-vous aussi des chaînes locales pour ${keyword} ?`,
        answer: `Bien sûr ! En plus de plus de 25 000 chaînes internationales, nous proposons une offre complète de toutes les chaînes locales et sportives premium pertinentes pour ${keyword}.`
      };
      break;

    case "VALUE":
      title = `${keyword} IPTV | Essayez Gratuitement & 4K`;
      description = `Découvrez la meilleure expérience IPTV ${keyword}. Commencez à streamer immédiatement et profitez de la qualité de nos chaînes premium et VOD.`;
      heroTitle = `Commencez Dès Aujourd'hui Avec `;
      heroSubtitle = `Pourquoi attendre ? Découvrez par vous-même la stabilité et la qualité de notre service. Avec ${keyword}, vous obtenez un avant-goût du monde du divertissement ultime.`;
      pricingTitle = `Forfaits ${keyword} & Options d'Essai`;
      faqEntries[1] = {
        question: `Qu'est-ce qui est inclus dans le forfait ${keyword} ?`,
        answer: `Vous obtenez un accès complet à notre offre, incluant 25 000+ chaînes, films et séries, afin de pouvoir tester l'expérience complète de ${keyword}.`
      };
      break;

    case "LEGAL":
      title = `${keyword} & Streaming Sécurisé | Ce Que Vous Devez Savoir`;
      description = `Tout sur ${keyword} et comment profiter du streaming IPTV premium en toute sécurité et fiabilité, sans souci.`;
      heroTitle = `Profitez En Toute Sécurité De `;
      heroSubtitle = `Nous accordons une grande importance à votre vie privée et à votre sécurité. Découvrez comment notre service vous offre une expérience de visionnage sans souci et stable concernant ${keyword}.`;
      pricingTitle = `Abonnements ${keyword} Sans Souci`;
      faqEntries[0] = {
        question: `Comment garantissez-vous ma vie privée pour ${keyword} ?`,
        answer: `Nos serveurs sont sécurisés et nous ne stockons aucune donnée personnelle de visionnage. Votre sécurité et votre anonymat sont au cœur de l'utilisation de notre service pour ${keyword}.`
      };
      break;

    case "QUALITY":
      title = `${keyword} IPTV Cristallin | Expérience Ultra HD`;
      description = `Passez au niveau supérieur avec ${keyword}. Vivez la télévision comme jamais auparavant avec nos flux premium 4K et 8K.`;
      heroTitle = `Vivez Une Expérience À Couper Le Souffle `;
      heroSubtitle = `Fini les compromis sur la qualité d'image. Nos serveurs fournissent le débit le plus élevé pour ${keyword} afin que vous voyiez chaque détail avec netteté.`;
      pricingTitle = `Forfaits ${keyword} Premium`;
      break;

    case "ACTION":
      title = `${keyword} IPTV | Activation Immédiate & 4K`;
      description = `Achetez ${keyword} en toute sécurité et rapidement. Choisissez votre forfait et profitez de 25 000+ chaînes sur tous vos appareils en quelques minutes.`;
      heroTitle = `Simple et Rapide `;
      heroSubtitle = `Prêt à faire le changement ? Rejoignez notre communauté et découvrez pourquoi des milliers de clients nous choisissent pour ${keyword}.`;
      pricingPill = `Promo : ${keyword}`;
      break;
  }

  // Allow manual overrides for specific slugs
  const overrides: Record<string, Partial<SEOPageConfig>> = {
    "iptv-nederland": {
      title: "Meilleur Fournisseur IPTV France 2024 | 4K & VOD",
      heroTitle: "Le #1 Fournisseur IPTV en ",
      heroTitleHighlight: "France",
    },
    "iptv-illegaal": {
      title: "L'IPTV Est-Il Illégal ? Les Faits & Streaming Sécurisé",
      heroTitle: "Clarté Sur ",
      heroTitleHighlight: "Le Streaming Illégal",
      heroSubtitle: "Apprenez tout sur la réglementation et comment profiter des meilleurs divertissements de manière responsable, sans risques.",
    },
    "iptv-playlist-m3u-2024": {
      title: "Playlist IPTV M3U 2024 | Téléchargement Gratuit & Premium",
      heroTitle: "La Plus Stable ",
      heroTitleHighlight: "Playlist M3U de 2024",
      heroSubtitle: "Accès direct à des milliers de chaînes. Nos playlists M3U sont optimisées pour chaque lecteur et offrent la plus haute qualité 4K.",
    },
    "iptv-proefperiode": {
      title: "Période d'Essai IPTV Gratuite | Testez Notre Service 4K",
      heroTitle: "Commencez Votre Essai ",
      heroTitleHighlight: "Gratuit IPTV",
      heroSubtitle: "Découvrez par vous-même la rapidité et la qualité de nos chaînes premium. Sans engagement, 24 heures de streaming illimité.",
    },
    "beste-iptv-aanbieder-nederland": {
      title: "Meilleur Fournisseur IPTV France 2024 | Top Noté",
      heroTitle: "Le Absolument ",
      heroTitleHighlight: "Meilleur Fournisseur IPTV",
      heroSubtitle: "Découvrez pourquoi nous avons été élus meilleur fournisseur IPTV de France 3 années consécutives. Une qualité que vous pouvez voir.",
    },
    "iptv-smarters": {
      title: "Configuration IPTV Smarters Pro | Meilleure Expérience de Lecture",
      heroTitle: "Tirez Le Meilleur De ",
      heroTitleHighlight: "IPTV Smarters",
      heroSubtitle: "Notre service est entièrement optimisé pour l'application IPTV Smarters Pro. Profitez d'une interface intuitive et de flux ultra-rapides.",
    },
    "tivimate": {
      title: "TiviMate IPTV Premium | Streaming 4K Stable",
      heroTitle: "Le Partenaire Parfait Pour ",
      heroTitleHighlight: "TiviMate",
      heroSubtitle: "Combinez le meilleur lecteur avec le meilleur service. Nous supportons toutes les fonctionnalités TiviMate, y compris l'EPG et le catch-up.",
    },
    "firestick": {
      title: "Configurer IPTV sur Firestick | Guide de Streaming 4K",
      heroTitle: "Transformez Votre ",
      heroTitleHighlight: "Amazon Firestick",
      heroSubtitle: "Faites de votre Firestick un puissant centre de divertissement. Notre application est légère, rapide et optimisée pour la télécommande Fire Stick.",
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
