export interface Post {
  id: number;
  author: string;
  handle: string;
  avatarInitials: string;
  avatarColor: string;
  time: string;
  stadtteil: string;
  content: string;
  comments: number;
  reposts: number;
  likes: number;
  category: string;
  verified?: boolean;
  image?: string;
  hashtags?: string[];
}

export const feedPosts: Post[] = [
  {
    id: 1,
    author: "Stadt Bielefeld",
    handle: "@stadt_bielefeld",
    avatarInitials: "ST",
    avatarColor: "bg-blue-600",
    time: "12 Min.",
    stadtteil: "Mitte",
    content: "🚧 Achtung Anwohner:innen der Detmolder Straße: Ab Montag startet die zweite Bauphase. Alle Infos zur Umleitung findet ihr im Verkehrs-Kanal. Bitte plant mehr Zeit ein!",
    comments: 21,
    reposts: 38,
    likes: 142,
    category: "Verkehr",
    verified: true,
    hashtags: ["#Bielefeld", "#Baustelle"],
  },
  {
    id: 2,
    author: "Lena aus Schildesche",
    handle: "@lena_bi",
    avatarInitials: "LE",
    avatarColor: "bg-purple-500",
    time: "32 Min.",
    stadtteil: "Schildesche",
    content: "Heute Abend Open-Air-Kino im Bürgerpark! Jemand Lust mitzukommen? 🎬🌿 Eintritt frei, Decke mitbringen. Wir freuen uns auf einen lauen Sommerabend!",
    comments: 18,
    reposts: 12,
    likes: 87,
    category: "Veranstaltung",
    hashtags: ["#Schildesche", "#SommerInBielefeld"],
  },
  {
    id: 3,
    author: "Bielefelder Wochenmarkt",
    handle: "@wochenmarkt_bi",
    avatarInitials: "BI",
    avatarColor: "bg-orange-500",
    time: "1 Std.",
    stadtteil: "Altstadt",
    content: "Frische Erdbeeren aus der Region sind da! 🍓 Schaut am Samstag am Klosterplatz vorbei — wir freuen uns auf euch. Auch Biolebensmittel, frisches Brot und regionale Käsesorten gibt es wieder.",
    comments: 9,
    reposts: 54,
    likes: 213,
    category: "Markt",
    verified: true,
    hashtags: ["#Wochenmarkt", "#Regional"],
  },
  {
    id: 4,
    author: "Markus K.",
    handle: "@markus_brackwede",
    avatarInitials: "MK",
    avatarColor: "bg-teal-500",
    time: "2 Std.",
    stadtteil: "Brackwede",
    content: "Der Gehweg an der Hauptstraße (Höhe Sparkasse) ist seit Wochen kaputt. Ich habe mehrere Male bei der Stadt angerufen — keine Reaktion. Wer hat ähnliche Erfahrungen gemacht? Zusammen machen wir das sichtbar! 💪",
    comments: 34,
    reposts: 67,
    likes: 189,
    category: "Anliegen",
    hashtags: ["#Brackwede", "#GehwegMelden"],
  },
  {
    id: 5,
    author: "DSC Arminia Bielefeld",
    handle: "@arminia_bsc",
    avatarInitials: "AR",
    avatarColor: "bg-blue-800",
    time: "3 Std.",
    stadtteil: "Mitte",
    content: "🔵⚪ Heimspiel am Samstag! Wir brauchen eure Unterstützung auf der Alm. Tickets noch verfügbar — kommt zahlreich! Gemeinsam ist Bielefeld unschlagbar. ⚽ #DSCArminia #Bielefeld",
    comments: 67,
    reposts: 132,
    likes: 421,
    category: "Sport",
    verified: true,
    hashtags: ["#DSCArminia", "#Bielefeld"],
  },
  {
    id: 6,
    author: "Grüne Bielefeld",
    handle: "@gruene_bi",
    avatarInitials: "GR",
    avatarColor: "bg-green-600",
    time: "4 Std.",
    stadtteil: "Gadderbaum",
    content: "📊 Abstimmungsergebnis: 78 % der Befragten wünschen sich mehr Fahrradwege in Brackwede. Der Stadtrat berät nächste Woche darüber. Eure Stimmen haben Gewicht — danke fürs Mitmachen!",
    comments: 45,
    reposts: 89,
    likes: 312,
    category: "Politik",
    verified: true,
    hashtags: ["#Fahrrad", "#Verkehrswende"],
  },
  {
    id: 7,
    author: "Aysun T.",
    handle: "@aysun_bi",
    avatarInitials: "AY",
    avatarColor: "bg-rose-500",
    time: "5 Std.",
    stadtteil: "Stieghorst",
    content: "Der Spielplatz am Stieghorster Park macht mir Sorgen. Mehrere Geräte sind gesperrt, Schaukeln kaputt. Unsere Kinder spielen dort täglich. Wann wird endlich etwas repariert?",
    comments: 28,
    reposts: 43,
    likes: 156,
    category: "Anliegen",
    hashtags: ["#Stieghorst", "#Spielplatz"],
  },
  {
    id: 8,
    author: "Café Kiepenkerl",
    handle: "@kiepenkerl_bi",
    avatarInitials: "CA",
    avatarColor: "bg-amber-600",
    time: "6 Std.",
    stadtteil: "Mitte",
    content: "☕ Sonntags-Brunch ab 10 Uhr! Hausgemachte Waffeln, Rührei vom Biobauern und frisch gepresste Säfte. Kommt vorbei — Reservierungen unter 0521/123456. Wir freuen uns auf euch!",
    comments: 14,
    reposts: 28,
    likes: 98,
    category: "Gastronomie",
    verified: false,
    hashtags: ["#Brunch", "#Bielefeld"],
  },
];

export const trendingTopics = [
  { tag: "#Sparrenburg", count: "2.341 Beiträge" },
  { tag: "#Stadtfest2026", count: "1.872 Beiträge" },
  { tag: "#RadwegJöllenbeck", count: "984 Beiträge" },
  { tag: "#TeutoburgerWald", count: "612 Beiträge" },
  { tag: "#DSCArminia", count: "5.124 Beiträge" },
];

export const upcomingEvents = [
  { name: "Leinewebermarkt", date: "12.–15. Juli", location: "Innenstadt" },
  { name: "Carnival der Kulturen", date: "29. Juni", location: "Kesselbrink" },
  { name: "Nacht der Klänge", date: "6. Juli", location: "Sparrenburg" },
  { name: "Bielefelder Bürgerfest", date: "20. Juli", location: "Alter Markt" },
];

export const stadtteile = [
  "Mitte", "Schildesche", "Brackwede", "Stieghorst",
  "Gadderbaum", "Jöllenbeck", "Sennestadt", "Altstadt",
];
