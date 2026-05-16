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
    name: "Lucas Moreau",
    role: "Utilisateur Premium",
    content: "Vraiment top ! Au début, j'étais sceptique sur l'IPTV, mais ça fonctionne sérieusement bien. Aucune coupure pendant la Ligue 1, c'était le plus important pour moi. L'installation sur mon Apple TV a été faite en 5 minutes.",
    time: "Il y a 2 jours",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    border: "border-accent-cyan/30",
  },
  {
    name: "Camille Dubois",
    role: "Client Vérifié",
    content: "Enfin un fournisseur qui a toutes les chaînes françaises sans prise de tête. La qualité des films est vraiment incroyable. Seul le moteur de recherche est parfois un peu lent sur mon vieux Samsung TV, mais à part ça, rien à redire.",
    time: "Il y a 1 semaine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4.5,
    border: "border-accent-purple/30",
  },
  {
    name: "Théo Lefèvre",
    role: "Passionné de Sport",
    content: "Super service. J'avais une question sur le paiement et j'ai reçu une réponse via WhatsApp presque immédiatement. Je l'utilise depuis un mois et je suis totalement conquis. J'ai résilié Netflix entre-temps.",
    time: "Il y a 3 semaines",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 5,
    border: "border-accent-cyan/30",
  },
  {
    name: "Claire Fontaine",
    role: "Client Vérifié",
    content: "Mon mari regarde le foot et moi mes séries, idéal de pouvoir regarder sur deux écrans en même temps. L'installation a demandé un peu de réflexion pour une novice comme moi, mais le guide m'a bien aidée.",
    time: "Il y a 1 mois",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 4.5,
    border: "border-emerald-500/30",
  },
  {
    name: "Antoine Petit",
    role: "Abonné Premium",
    content: "La meilleure qualité que j'ai vue jusqu'à présent. J'en ai essayé beaucoup d'autres mais c'est le premier qui fournit vraiment du 4K constant sans mise en mémoire tampon. Je le recommande à tous les amateurs de sport.",
    time: "Il y a 2 mois",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    border: "border-blue-500/30",
  },
  {
    name: "Manon Laurent",
    role: "Client Vérifié",
    content: "Quel plaisir d'avoir à nouveau toutes les chaînes françaises maintenant que je vis à l'étranger. Ça fonctionne parfaitement sur l'iPad et le PC. Génial !",
    time: "Il y a 3 mois",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    border: "border-[#EF4135]/35",
  },
  {
    name: "Nicolas Girard",
    role: "Client Vérifié",
    content: "Le service client est vraiment en or. Ils m'ont aidé tard le soir encore pour l'installation sur ma box Formuler. Le changement de chaînes est aussi très rapide, on se croirait sur un vrai câble TV.",
    time: "Il y a 4 mois",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    rating: 5,
    border: "border-orange-500/30",
  },
];
