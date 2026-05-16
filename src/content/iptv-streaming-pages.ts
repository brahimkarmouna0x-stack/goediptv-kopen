export type VaultFaq = {
  question: string;
  answer: string;
};

export type VaultInternalLink = {
  label: string;
  href: string;
  description: string;
};

export type VaultSection = {
  heading: string;
  body: string;
  points: string[];
};

export type IptvStreamingPage = {
  slug: string;
  keyword: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introCopy: string;
  benefits: string[];
  sections: VaultSection[];
  faqs: VaultFaq[];
  internalLinks: VaultInternalLink[];
  language: "nl" | "en" | "fr" | "es" | "de";
  intent:
    | "general"
    | "netherlands"
    | "app"
    | "device"
    | "subscription"
    | "legal"
    | "playlist"
    | "quality"
    | "provider"
    | "adult";
  isCentered?: boolean;
  heroBg?: string;
};

const basePath = "/iptv-streaming";

export const IPTV_STREAMING_SLUGS = [
  "iptv",
  "iptv-ott-service",
  "iptv-service",
  "service-iptv",
  "meilleur-service-iptv",
  "iptv-services",
  "services-iptv",
  "iptv-smarters-pro",
  "abonnement-iptv",
  "iptv-abonnement",
  "iptv-boitier",
  "iptv-smart-player",
  "iptv-smarters",
  "boitier-iptv",
  "iptv-france",
  "iptv-stream-player",
  "smart-iptv",
  "iptv-premium",
  "free-popular-iptv-playlist",
  "iptv-illegal",
  "iptv-pro",
  "iptv-smarter-pro",
  "iptv-smarters-pro-apk",
  "meilleur-iptv",
  "code-iptv",
  "france-iptv",
  "ip-smart-iptv",
  "iptv-smarters-player",
  "iptv-tv",
  "application-iptv",
  "code-iptv-gratuit-2025",
  "iptv-app",
  "iptv-application",
  "iptv-smarters-pro-gratuit",
  "smart-iptv-ip",
  "app-iptv",
  "code-downloader-iptv-gratuit-2025",
  "french-iptv",
  "iptv-gratuit",
  "iptv-smarter",
  "iptv-smarters-pro-android",
  "iptv-smarters-pro-windows",
  "iron-iptv",
  "setting-iptv",
  "xtream-iptv",
  "zen-iptv",
  "atlas-iptv",
  "comment-avoir-les-codes-iptv-gratuit",
  "telecharger-iptv-gratuit",
  "abonnement-iptv-12-mois-smart-tv",
  "atlas-pro-iptv",
  "decodeur-iptv-avec-code",
  "hot-iptv",
  "iptv-free-trial",
  "iptv-legal",
  "iptv-player",
  "lynk-iptv",
  "m3u-iptv",
  "meilleur-abonnement-iptv",
  "premium-iptv",
  "programme-tv-iptv",
  "pure-iptv",
  "set-iptv",
  "smarters-iptv-pro",
  "smartone-iptv",
  "xenon-iptv",
  "appli-iptv",
  "arcom-iptv",
  "code-iptv-smarters-pro-gratuit-2025",
  "ip-iptv",
  "iptv-4k",
  "iptv-laws",
  "iptv-prix",
  "iptv-smart-player-pro",
  "iptv-ss",
  "premium-iptv-tv",
  "programme-iptv",
  "smarter-iptv",
  "smarters-iptv",
  "test-iptv",
  "telecharger-iptv-smarters-pro-apk",
  "abonnement-iptv-france",
  "agence-iptv",
  "boitier-iptv-amazon",
  "box-iptv",
  "decodeur-iptv",
  "fournisseur-iptv",
  "iptv-amende",
  "iptv-atlas",
  "iptv-az",
  "iptv-box",
  "iptv-code",
  "iptv-gratuit-sans-code",
  "iptv-pas-cher",
  "iptv-smart",
  "iptv-smarter-player-pro",
  "iptv-smarters-lite",
  "iptv-test-gratuit",
  "iptv-with-4k",
  "king-iptv",
  "legality-of-iptv",
  "mario-iptv",
  "meilleur-application-iptv",
  "meilleurs-iptv",
  "net-iptv",
] as const;

type RawSlug = (typeof IPTV_STREAMING_SLUGS)[number];

const titleOverrides: Partial<Record<RawSlug, string>> = {
  iptv: "Guide IPTV pour un streaming stable et conscient",
  "iptv-illegal": "IPTV illégal : faits, risques et choix sûrs",
  "iptv-amende": "Amende IPTV illégale : ce qu'il faut savoir",
  "free-popular-iptv-playlist":
    "Playlist IPTV populaire gratuite : recherche sécurisée sans piratage",
};

const formatKeyword = (slug: string) =>
  slug
    .replace(/-/g, " ")
    .replace(/\biptv\b/gi, "IPTV")
    .replace(/\b4k\b/gi, "4K")
    .replace(/\bkpn\b/gi, "KPN")
    .replace(/\bcz\b/gi, "CZ")
    .replace(/\bss\b/gi, "SS")
    .replace(/\big\b/gi, "IG")
    .replace(/\bm3u\b/gi, "M3U")
    .replace(/\bandroid\b/gi, "Android")
    .replace(/\bwindows\b/gi, "Windows")
    .replace(/\breddit\b/gi, "Reddit")
    .replace(/\bmytvonline\b/gi, "MYTVOnline");

const titleCase = (value: string) =>
  value.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

const detectLanguage = (slug: string): IptvStreamingPage["language"] => {
  if (slug.includes("aplicacion")) return "es";
  if (slug.includes("appli")) return "fr";
  if (slug.includes("bestes") || slug.includes("bester")) return "de";
  if (
    slug.includes("best-") ||
    slug.includes("top-rated") ||
    slug.includes("free")
  ) {
    return "en";
  }
  return "nl";
};

const detectIntent = (slug: string): IptvStreamingPage["intent"] => {
  if (
    slug.includes("illegaal") ||
    slug.includes("boete") ||
    slug.includes("illegal") ||
    slug.includes("amende") ||
    slug.includes("laws") ||
    slug.includes("legal")
  )
    return "legal";
  if (slug.includes("porn")) return "adult";
  if (
    slug.includes("playlist") ||
    slug.includes("m3u") ||
    slug.includes("gratis") ||
    slug.includes("gratuit") ||
    slug.includes("free")
  ) {
    return "playlist";
  }
  if (
    slug.includes("nederland") ||
    slug.includes("dutch") ||
    slug.includes("kpn") ||
    slug.includes("nederlandse") ||
    slug.includes("france") ||
    slug.includes("french")
  ) {
    return "netherlands";
  }
  if (
    slug.includes("app") ||
    slug.includes("application") ||
    slug.includes("player") ||
    slug.includes("smarters") ||
    slug.includes("tivimate") ||
    slug.includes("smartone") ||
    slug.includes("smart-one") ||
    slug.includes("net-iptv") ||
    slug.includes("set-iptv") ||
    slug.includes("ss-iptv") ||
    slug.includes("flix") ||
    slug.includes("xtream") ||
    slug.includes("appli")
  ) {
    return "app";
  }
  if (
    slug.includes("box") ||
    slug.includes("kastje") ||
    slug.includes("amiko") ||
    slug.includes("boitier") ||
    slug.includes("decodeur")
  )
    return "device";
  if (slug.includes("4k")) return "quality";
  if (
    slug.includes("aanbieder") ||
    slug.includes("aanbieders") ||
    slug.includes("provider") ||
    slug.includes("suppliers") ||
    slug.includes("fournisseur") ||
    slug.includes("agence")
  ) {
    return "provider";
  }
  if (
    slug.includes("abonnement") ||
    slug.includes("abbonement") ||
    slug.includes("kopen") ||
    slug.includes("test") ||
    slug.includes("prix") ||
    slug.includes("pas-cher")
  ) {
    return "subscription";
  }
  return "general";
};

const languageAngle: Record<IptvStreamingPage["language"], string> = {
  nl: "pour les téléspectateurs français",
  en: "for international streamers",
  fr: "pour les utilisateurs francophones",
  es: "para usuarios hispanohablantes",
  de: "fur deutschsprachige Nutzer",
};

const intentCopy: Record<
  IptvStreamingPage["intent"],
  {
    label: string;
    promise: string;
    benefitSeed: string[];
    setup: string;
    safety: string;
  }
> = {
  general: {
    label: "Orientation IPTV",
    promise:
      "une façon claire de comprendre la télévision en direct, les films et les séries via Internet",
    benefitSeed: [
      "structure claire des chaînes",
      "affichage stable",
      "démarrage rapide sur plusieurs appareils",
    ],
    setup:
      "Commencez par votre appareil, choisissez un lecteur fiable et vérifiez que votre réseau est assez stable pour la HD ou la 4K.",
    safety:
      "Utilisez uniquement des sources pour lesquelles vous avez l'autorisation et évitez les listes inconnues qui pourraient violer les droits ou la vie privée.",
  },
  netherlands: {
    label: "IPTV Française",
    promise:
      "un guide pratique pour les chaînes locales, les préférences linguistiques et le visionnage en France",
    benefitSeed: [
      "Focus chaînes françaises",
      "EPG en français",
      "support adapté aux habitudes locales",
    ],
    setup:
      "Faites attention aux groupes de chaînes françaises, aux fuseaux horaires corrects dans l'EPG et aux applications qui fonctionnent bien sur Smart TV et Android TV.",
    safety:
      "Vérifiez toujours la provenance du contenu et choisissez des conditions transparentes plutôt que des promesses anonymes.",
  },
  app: {
    label: "Application et lecteur",
    promise:
      "une expérience fluide avec une installation claire, EPG et listes de lecture",
    benefitSeed: [
      "Support M3U et Xtream",
      "navigation agréable",
      "compatible avec les lecteurs populaires",
    ],
    setup:
      "Installez le lecteur depuis un store fiable, ajoutez vos données avec soin et testez le temps de zapping, l'EPG et les sous-titres.",
    safety:
      "Conservez vos identifiants en sécurité et téléchargez les applications uniquement depuis des sources de confiance.",
  },
  device: {
    label: "Configuration appareil",
    promise: "une aide au choix sereine pour les box, boîtiers et appareils TV",
    benefitSeed: [
      "utilisation optimisée pour la télécommande",
      "matériel compatible 4K",
      "connexion filaire ou WiFi stable",
    ],
    setup:
      "Mettez à jour le firmware, utilisez l'Ethernet si possible et choisissez un lecteur léger adapté au processeur de votre appareil.",
    safety:
      "Évitez les boîtiers préchargés avec des listes obscures ; cela peut être dangereux et présenter des risques juridiques.",
  },
  subscription: {
    label: "Choix d'abonnement",
    promise:
      "une façon pragmatique de comparer les forfaits, les périodes d'essai et les attentes",
    benefitSeed: [
      "durée claire",
      "pas de paramètres cachés",
      "assistance à l'activation",
    ],
    setup:
      "Comparez la durée du forfait, les connexions simultanées, les possibilités de test et le support avant de payer.",
    safety:
      "Choisissez des fournisseurs transparents sur les conditions, les moyens de contact et l'utilisation responsable.",
  },
  legal: {
    label: "Contexte juridique",
    promise: "explication neutre des risques, des droits et du streaming responsable",
    benefitSeed: [
      "explication factuelle",
      "aucune instruction illégale",
      "accent sur les choix sûrs",
    ],
    setup:
      "Vérifiez si un service possède les droits de contenu, lisez les conditions et soyez prudent face aux offres extrêmement bon marché.",
    safety:
      "Cette page fournit des informations générales et n'encourage aucun accès non autorisé aux chaînes ou aux flux.",
  },
  playlist: {
    label: "Sécurité des playlists",
    promise:
      "informations sûres sur les listes M3U sans flux piratés ni téléchargements douteux",
    benefitSeed: [
      "explication des formats de playlist",
      "contrôle respectueux de la vie privée",
      "aucun lien de streaming illégal",
    ],
    setup:
      "Utilisez M3U uniquement comme format pour des sources légitimes et testez les listes dans un lecteur sans partager de données personnelles.",
    safety:
      "Nous ne publions pas de playlists piratées et déconseillons d'ouvrir des liens de streaming inconnus.",
  },
  quality: {
    label: "Streaming 4K",
    promise: "conseils sur la qualité d'image, le débit binaire et la stabilité du réseau",
    benefitSeed: [
      "Focus 4K et Full HD",
      "moins de mise en mémoire tampon",
      "attentes de vitesse réalistes",
    ],
    setup:
      "Utilisez une connexion rapide, des câbles HDMI adaptés et un lecteur prenant en charge le décodage matériel.",
    safety:
      "Ne faites pas de la qualité le seul critère ; la fiabilité, les droits et le support restent importants.",
  },
  provider: {
    label: "Sélection du fournisseur",
    promise:
      "une checklist pratique pour évaluer les fournisseurs et le support",
    benefitSeed: [
      "critères de sélection transparents",
      "support et disponibilité",
      "compatibilité claire",
    ],
    setup:
      "Renseignez-vous sur les applications supportées, les possibilités de test, l'EPG, les connexions simultanées et l'aide à l'installation.",
    safety:
      "Méfiez-vous des fournisseurs sans informations d'entreprise, canal de contact ou conditions de service claires.",
  },
  adult: {
    label: "Contenu adulte",
    promise:
      "informations respectueuses de la vie privée sur les filtres, les paramètres d'âge et le visionnage responsable",
    benefitSeed: [
      "contrôle parental",
      "paramètres de confidentialité",
      "choix conscient des chaînes",
    ],
    setup:
      "Vérifiez si votre lecteur prend en charge les profils, la protection par code PIN et le verrouillage des chaînes.",
    safety:
      "Assurez-vous que le contenu est disponible légalement et verrouillez les catégories adultes pour les mineurs.",
  },
};

const buildMetaDescription = (
  keyword: string,
  intent: IptvStreamingPage["intent"],
  index: number,
) => {
  const copy = intentCopy[intent];
  return `${keyword}: ${copy.label.toLowerCase()} avec explications pratiques sur la configuration, la sécurité, la compatibilité et la qualité de visionnage. Guide IPTV SERVICE ${index + 1}.`;
};

const createFaqs = (
  keyword: string,
  intent: IptvStreamingPage["intent"],
  language: IptvStreamingPage["language"],
): VaultFaq[] => {
  const copy = intentCopy[intent];
  const localized =
    language === "es"
      ? "La configuracion depende de tu aplicacion, dispositivo y fuente de contenido."
      : language === "fr"
        ? "La configuration depend de votre application, de votre appareil et de la source du contenu."
        : language === "de"
          ? "Die Einrichtung hangt von App, Gerat und Inhaltsquelle ab."
          : "La bonne configuration dépend de votre application, de votre appareil et de la source du contenu.";

  return [
    {
      question: `À quoi dois-je faire attention avec ${keyword} ?`,
      answer: `${copy.setup} Vérifiez également le support, les mises à jour et si le service correspond à vos habitudes de visionnage quotidiennes.`,
    },
    {
      question: `${keyword} est-il adapté au streaming 4K ?`,
      answer: `Oui, tant que votre appareil, votre lecteur et votre connexion internet le permettent. Pour la 4K, comptez sur une connexion stable et privilégiez l'Ethernet pour les installations TV fixes.`,
    },
    {
      question: `Comment utiliser ${keyword} en toute sécurité ?`,
      answer: `${copy.safety} ${localized}`,
    },
  ];
};

const relatedSlugsFor = (
  slug: string,
  intent: IptvStreamingPage["intent"],
) => {
  const preferredByIntent: Record<IptvStreamingPage["intent"], RawSlug[]> = {
    general: ["iptv", "meilleur-iptv", "abonnement-iptv", "iptv-abonnement"],
    netherlands: ["iptv-france", "french-iptv", "meilleur-iptv", "agence-iptv"],
    app: [
      "iptv-smarters",
      "iptv-smarters-pro",
      "iptv-player",
      "meilleur-application-iptv",
    ],
    device: ["iptv-box", "boitier-iptv", "box-iptv", "decodeur-iptv"],
    subscription: [
      "iptv-abonnement",
      "abonnement-iptv",
      "iptv-prix",
      "test-iptv",
    ],
    legal: ["iptv-illegal", "iptv-amende", "iptv", "fournisseur-iptv"],
    playlist: [
      "m3u-iptv",
      "iptv-gratuit",
      "free-popular-iptv-playlist",
      "iptv-player",
    ],
    quality: ["iptv-4k", "iptv-with-4k", "meilleur-iptv", "iptv-premium"],
    provider: [
      "fournisseur-iptv",
      "agence-iptv",
      "iptv-atlas",
      "meilleur-iptv",
    ],
    adult: ["iptv-app", "smart-iptv", "iptv-player", "iptv"],
  };

  return preferredByIntent[intent]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 4);
};

const createPage = (
  slug: RawSlug,
  index: number,
): Omit<IptvStreamingPage, "internalLinks"> => {
  const keyword = formatKeyword(slug);
  const readableKeyword = titleCase(keyword);
  const language = detectLanguage(slug);
  const intent = detectIntent(slug);
  const copy = intentCopy[intent];
  const title =
    titleOverrides[slug] ?? `${readableKeyword}: guide IPTV SERVICE pratique`;
  const metaTitle = `${title} | IPTV SERVICE`;
  const heroHeading =
    slug === "iptv"
      ? "IPTV sans bruit : choisir clairement, regarder stablement"
      : `${readableKeyword} avec une approche IPTV SERVICE pragmatique`;

  return {
    slug,
    keyword,
    title,
    metaTitle,
    metaDescription: buildMetaDescription(keyword, intent, index),
    heroHeading,
    language,
    intent,
    introCopy: `${readableKeyword} nécessite plus qu'un terme de recherche. Cette page vous aide à ${copy.promise}, avec une attention particulière pour les performances, le choix de l'appareil, la confidentialité et l'utilisation responsable ${languageAngle[language]}.`,
    benefits: copy.benefitSeed.map(
      (benefit, benefitIndex) =>
        `${benefit} pour ${keyword} ${benefitIndex + 1}`,
    ),
    sections: [
      {
        heading: `${readableKeyword} en pratique`,
        body: `Avec ${keyword}, tout tourne autour d'une combinaison de source de contenu, lecteur, appareil et réseau. IPTV SERVICE aborde cela comme une expérience de visionnage complète, pour que vous ne vous contentiez pas de démarrer, mais que vous compreniez aussi pourquoi cela fonctionne de manière fluide ou instable.`,
        points: [
          "Vérifiez la compatibilité avant de choisir un forfait ou une application.",
          "Utilisez un EPG clair et des groupes de chaînes logiques.",
          "Testez la qualité sur l'appareil sur lequel vous allez réellement regarder.",
        ],
      },
      {
        heading: `Checklist de configuration pour ${readableKeyword}`,
        body: copy.setup,
        points: [
          "Notez quelle application, box TV ou Smart TV vous utilisez.",
          "Vérifiez votre vitesse Internet et la couverture WiFi à l'endroit où vous regardez.",
          "Conservez les données de compte et de playlist dans un endroit sûr.",
        ],
      },
      {
        heading: `Utilisation sécurisée et responsable de ${readableKeyword}`,
        body: copy.safety,
        points: [
          "Évitez les téléchargements inconnus, les applications crackées et les listes anonymes.",
          "Ne partagez pas de données personnelles avec des fournisseurs douteux.",
          "Choisissez des sources avec des conditions claires et un support accessible.",
        ],
      },
    ],
    faqs: createFaqs(keyword, intent, language),
  };
};

const pagesWithoutLinks = IPTV_STREAMING_SLUGS.map(createPage);

export const IPTV_STREAMING_PAGES: IptvStreamingPage[] =
  pagesWithoutLinks.map((page) => {
    const isAbonnement =
      page.slug === "iptv-abonnement" || page.slug === "abonnement-iptv";

    return {
      ...page,
      heroHeading: isAbonnement
        ? "IPTV en France : Vivez la télévision autrement"
        : page.heroHeading,
      introCopy: isAbonnement
        ? "Abonnement IPTV & Streaming France avec 31 000+ chaînes et 140 000+ films & séries en 4K/8K. Activation immédiate, serveurs stables, tous les appareils supportés et abonnements IPTV premium pour la France, la Belgique & l'Europe."
        : page.introCopy,
      isCentered: isAbonnement,
      heroBg: isAbonnement ? "/images/abonnement-bg.webp" : undefined,
      internalLinks: relatedSlugsFor(page.slug, page.intent).map(
        (relatedSlug) => {
          const related = pagesWithoutLinks.find(
            (candidate) => candidate.slug === relatedSlug,
          );
          const label = related?.keyword ?? formatKeyword(relatedSlug);

          return {
            label,
            href: `${basePath}/${relatedSlug}`,
            description: `En savoir plus sur ${label} dans la base de connaissances IPTV SERVICE.`,
          };
        },
      ),
    };
  });

export const IPTV_STREAMING_PAGE_MAP = new Map(
  IPTV_STREAMING_PAGES.map((page) => [page.slug, page]),
);

export const getIptvStreamingPage = (slug: string) =>
  IPTV_STREAMING_PAGE_MAP.get(slug);

export const getIptvStreamingPath = (slug: string) => `${basePath}/${slug}`;
