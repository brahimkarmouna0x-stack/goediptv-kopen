import type { SixSectionContent } from "./types";

/**
 * HOME (Goed IPTV) — Brand / overview intent
 * SEO focus: "goed iptv", "beste iptv nederland", "premium iptv"
 */
const home: SixSectionContent = {
  slug: "",
  path: "/",
  meta: {
    title: "Goed IPTV – Beste IPTV Abonnement van Nederland",
    description:
      "Goed IPTV biedt het beste IPTV-abonnement van Nederland: directe activering, stabiele 4K-streams, alle Nederlandse zenders en 24/7 support. Start vandaag met een gratis proef.",
  },

  // ── Section 1: Hero ─────────────────────────────────────────────────────
  hero: {
    pill: "Goed IPTV · Premium streaming",
    titleLead: "Goed IPTV — het beste",
    titleHighlight: "IPTV-abonnement van Nederland",
    titleTail: "Stabiel, snel en altijd in 4K",
    subtitle:
      "Ontdek waarom duizenden Nederlandse kijkers elke dag kiezen voor Goed IPTV. Stabiele servers, alle zenders en messcherpe 4K-kwaliteit op élk apparaat.",
    bg: "/images/hero-bg.webp",
  },

  // ── Section 2: UVP ──────────────────────────────────────────────────────
  uvpEyebrow: "Waarom Goed IPTV",
  uvpTitle: "De beste IPTV-ervaring in Nederland",
  uvpSubtitle:
    "Wij combineren stabiliteit, snelheid en service voor een naadloze kijkervaring. Dit maakt ons uniek.",
  uvpItems: [
    {
      title: "Eigen serverinfrastructuur",
      desc: "Onze servers staan in Nederland en België — geen gedeelde buitenlandse infrastructuur. Dat betekent minimale latentie en maximale stabiliteit.",
    },
    {
      title: "Altijd actueel kanaalaanbod",
      desc: "Duizenden kanalen uit 190+ landen, dagelijks bijgewerkt. Nieuwe zenders en VOD worden continu toegevoegd zonder dat u iets hoeft te doen.",
    },
    {
      title: "Nederlandse support, 24/7",
      desc: "Geen chatbots of buitenlandse helpdesks. Ons team spreekt Nederlands en is dag en nacht bereikbaar via WhatsApp met een reactietijd van onder de 5 minuten.",
    },
  ],

  // ── Section 3: SEO Features ─────────────────────────────────────────────
  featuresEyebrow: "Wat u krijgt",
  featuresTitle: "Premium IPTV met unieke voordelen",
  featuresSubtitle:
    "Elk abonnement bevat deze eigenschappen — zonder extra kosten.",
  featuresItems: [
    {
      title: "4K & 8K Ultra HD",
      desc: "Messcherpe beeldkwaliteit met HDR-ondersteuning. Stream films, sport en series in de hoogst mogelijke resolutie zonder haperingen.",
    },
    {
      title: "Nul buffering",
      desc: "Dankzij adaptieve bitrate-technologie past de streamkwaliteit zich automatisch aan uw verbinding aan. Geen vastlopers meer tijdens een spannende wedstrijd.",
    },
    {
      title: "Alle Nederlandse zenders",
      desc: "NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN, Ziggo Sport en alle regionale zenders — in HD en 4K.",
    },
    {
      title: "Werkt op elk apparaat",
      desc: "Smart TV, Fire TV Stick, Android TV, Apple TV, iPhone, iPad, tablet, Windows, Mac en MAG-boxen. Eén abonnement, al uw schermen.",
    },
    {
      title: "VOD-bibliotheek",
      desc: "Duizenden films en series on demand, met ondertiteling en in de best mogelijke kwaliteit. Altijd iets nieuws om te ontdekken.",
    },
    {
      title: "Gratis proefperiode",
      desc: "Test de volledige dienst een uur lang gratis — zonder creditcard, zonder risico. Ontdek zelf waarom Goed IPTV de beste keuze is.",
    },
  ],

  // ── Section 4: How It Works ─────────────────────────────────────────────
  howEyebrow: "Aan de slag",
  howTitle: "In 3 stappen klaar om te streamen",
  howSubtitle:
    "Van ontdekking tot kijken in minder dan 10 minuten. Geen installatiekosten of technische kennis nodig.",
  howSteps: [
    {
      step: "01",
      title: "Vraag gratis proef aan",
      desc: "Neem contact met ons op via WhatsApp en ontvang direct een gratis proefuur. Test alle kanalen, de beeldkwaliteit en stabiliteit op uw eigen apparaat.",
    },
    {
      step: "02",
      title: "Kies uw ideale abonnement",
      desc: "Selecteer de looptijd en het aantal verbindingen dat past bij uw huishouden. Hoe langer de looptijd, hoe lager de maandprijs — zonder verborgen kosten.",
    },
    {
      step: "03",
      title: "Stream onbeperkt in 4K",
      desc: "Na betaling ontvangt u binnen 5 minuten uw M3U-link en Xtream Codes per e-mail. Voer ze in uw IPTV-app in en geniet direct van duizenden kanalen.",
    },
  ],

  // ── Section 5: Trust ────────────────────────────────────────────────────
  trustEyebrow: "Vertrouwd door duizenden",
  trustTitle: "Waarom kijkers voor Goed IPTV kiezen",
  trustSubtitle:
    "Onze cijfers en klantbeoordelingen spreken voor zich. Sluit u aan bij een groeiende community tevreden kijkers.",
  trustItems: [
    {
      title: "10.000+ actieve gebruikers",
      desc: "Elke dag kiezen meer Nederlanders voor Goed IPTV. Onze community groeit snel dankzij tevreden leden die ons aanbevelen.",
    },
    {
      title: "4,9/5 op Google",
      desc: "Gewaardeerd met de hoogste score onder IPTV-aanbieders in Nederland. Onze klanten waarderen onze stabiliteit, support en beeldkwaliteit.",
    },
    {
      title: "Niet-goed-geld-terug-garantie",
      desc: "Niet tevreden binnen de proefperiode? U krijgt uw geld zonder gedoe terug. Geen vragen, geen administratieve rompslomp.",
    },
    {
      title: "Veilig betalen",
      desc: "Alle transacties verlopen via SSL-versleutelde verbindingen met iDEAL, creditcard of PayPal. Uw gegevens zijn te allen tijde beschermd.",
    },
  ],
  showStats: true,
  showTestimonials: true,

  // ── Section 6: FAQ (exactly 8) ──────────────────────────────────────────
  faqs: [
    {
      question: "Wat is Goed IPTV precies?",
      answer:
        "Goed IPTV is een premium IPTV-dienst die live televisie, sport, films en series levert via uw internetverbinding. Geen kabel of schotel nodig. U streamt op elk apparaat met duizenden kanalen in 4K-kwaliteit, tegen een vaste prijs zonder jaarcontract.",
    },
    {
      question: "Hoe verschilt Goed IPTV van andere aanbieders?",
      answer:
        "Wij onderscheiden ons met een eigen serverinfrastructuur in Nederland en België, 24/7 Nederlandstalige support (geen chatbots), een dagelijks bijgewerkt kanaalaanbod en een niet-goed-geld-terug-garantie. Kwaliteit en service staan bij ons centraal, niet alleen de laagste prijs.",
    },
    {
      question: "Op welke apparaten werkt Goed IPTV?",
      answer:
        "Op vrijwel alle moderne apparaten: Samsung, LG en Sony Smart TV's, Amazon Fire TV Stick, Android TV-boxen, Apple TV, iPhone, iPad, Android-telefoons, Windows- en Mac-computers, en MAG/Formuler-boxen. Uw abonnement werkt op meerdere apparaten tegelijk.",
    },
    {
      question: "Kan ik eerst gratis testen voordat ik een abonnement neem?",
      answer:
        "Ja, u ontvangt een gratis proefuur met volledige toegang tot alle kanalen, sport en de VOD-bibliotheek. Vraag uw proef aan via WhatsApp en ervaar zelf de kwaliteit op uw eigen apparaat — zonder risico of verplichtingen.",
    },
    {
      question: "Welke Nederlandse zenders en sport kan ik kijken?",
      answer:
        "Alle populaire Nederlandse zenders: NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5, ESPN, Ziggo Sport en alle regionale omroepen. Daarnaast live Eredivisie, Champions League, Formule 1, MotoGP, NBA, NFL en meer — in HD en 4K.",
    },
    {
      question: "Is Goed IPTV veilig en betrouwbaar?",
      answer:
        "Absoluut. Wij hanteren de hoogste veiligheidsstandaarden met SSL-versleutelde betalingen en strikte privacyrichtlijnen. Onze servers hebben een gegarandeerde uptime van 99,9% en worden 24/7 gemonitord. Uw gegevens delen wij nooit met derden.",
    },
    {
      question: "Welke betalingsmethoden worden geaccepteerd?",
      answer:
        "U kunt veilig betalen met iDEAL, creditcard (Visa, Mastercard) en PayPal. Alle betalingen verlopen via een beveiligde, versleutelde omgeving. Direct na ontvangst van uw betaling wordt uw account binnen enkele minuten geactiveerd.",
    },
    {
      question: "Kan ik mijn abonnement opzeggen of aanpassen?",
      answer:
        "Ja, u kunt op elk moment upgraden naar meer verbindingen of een langere looptijd. Opzeggen is eenvoudig via ons supportteam — zonder opzegkosten of verborgen kosten. Uw service blijft actief tot het einde van de betaalde periode.",
    },
  ],

  // ── Final CTA ────────────────────────────────────────────────────────────
  cta: {
    title: "Start vandaag met Goed IPTV",
    description:
      "Sluit u aan bij duizenden tevreden kijkers in Nederland. Ontvang direct toegang tot alle kanalen, sport en films — of begin met een gratis proef.",
  },
};

export default home;
