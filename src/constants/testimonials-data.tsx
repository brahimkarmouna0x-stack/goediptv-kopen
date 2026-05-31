export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  border: string;
  time: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Lukas Weber",
    role: "Premium Nutzer",
    content: "Wirklich top! Am Anfang war ich skeptisch bei IPTV, aber es funktioniert einwandfrei. Keine Unterbrechungen während der Bundesliga, das war mir am wichtigsten. Die Installation auf meinem Apple TV war in 5 Minuten erledigt.",
    time: "Vor 2 Tagen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Sophie Müller",
    role: "Verifizierte Kundin",
    content: "Endlich ein Anbieter, der alle deutschen Sender ohne Probleme bietet. Die Filmqualität ist wirklich unglaublich. Nur die Suche ist manchmal etwas langsam auf meinem alten Samsung TV, aber sonst gibt es nichts zu beanstanden.",
    time: "Vor 1 Woche",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.5,
    border: "border-rouge-500/30",
  },
  {
    name: "Felix Wagner",
    role: "Sportbegeisterter",
    content: "Hervorragender Service. Ich hatte eine Frage zur Zahlung und habe fast sofort eine Antwort über WhatsApp erhalten. Ich nutze es seit einem Monat und bin völlig überzeugt. Habe Netflix zwischenzeitlich gekündigt.",
    time: "Vor 3 Wochen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
  {
    name: "Anna Schmidt",
    role: "Verifizierte Kundin",
    content: "Mein Mann schaut Fußball und ich meine Serien - ideal, dass wir auf zwei Bildschirmen gleichzeitig sehen können. Die Einrichtung war für mich als Anfängerin etwas knifflig, aber die Anleitung hat sehr geholfen.",
    time: "Vor 1 Monat",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    border: "border-france-400/30",
  },
  {
    name: "Maximilian Fischer",
    role: "Premium Abonnent",
    content: "Die beste Qualität, die ich bisher gesehen habe. Ich habe viele andere ausprobiert, aber dies ist der erste Anbieter, der wirklich konstantes 4K ohne Pufferung liefert. Ich empfehle es allen Sportfans.",
    time: "Vor 2 Monaten",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/30",
  },
  {
    name: "Laura Hoffmann",
    role: "Verifizierte Kundin",
    content: "Welch eine Freude, wieder alle deutschen Sender zu haben, jetzt wo ich im Ausland lebe. Es funktioniert perfekt auf iPad und PC. Großartig!",
    time: "Vor 3 Monaten",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    border: "border-rouge-500/35",
  },
  {
    name: "Jonas Richter",
    role: "Verifizierter Kunde",
    content: "Der Kundenservice ist wirklich goldwert. Sie haben mir spät abends noch bei der Installation auf meiner Formuler-Box geholfen. Der Senderwechsel ist auch sehr schnell, fühlt sich an wie echtes Kabelfernsehen.",
    time: "Vor 4 Monaten",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    border: "border-france-400/30",
  },
];
