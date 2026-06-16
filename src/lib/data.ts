export type IssueStatus = "Neu" | "In Bearbeitung" | "Erledigt" | "In Abstimmung";
export type IssueCategory =
  | "Straße"
  | "Beleuchtung"
  | "Grünfläche"
  | "Sicherheit"
  | "Verkehr"
  | "Sauberkeit"
  | "Barrierefreiheit"
  | "Sonstiges";

export interface Issue {
  id: number;
  category: IssueCategory;
  title: string;
  description: string;
  location: string;
  affectedCount: number;
  status: IssueStatus;
  upvotes: number;
  date: string;
}

export interface Poll {
  id: number;
  question: string;
  description: string;
  yesPercent: number;
  totalVotes: number;
  deadline: string;
  active: boolean;
}

export const issues: Issue[] = [
  {
    id: 1,
    category: "Beleuchtung",
    title: "Straßenlaterne defekt — seit 3 Wochen dunkel",
    description: "Die Laterne am Kesselbrink (Ecke Niederwall) funktioniert seit Wochen nicht. Abends ist die Stelle sehr dunkel und gefährlich.",
    location: "Kesselbrink, Mitte",
    affectedCount: 47,
    status: "In Bearbeitung",
    upvotes: 34,
    date: "vor 2 Tagen",
  },
  {
    id: 2,
    category: "Straße",
    title: "Gehweg stark beschädigt — Stolpergefahr",
    description: "Auf der Jöllenbecker Straße (Höhe Hausnummer 45) gibt es große Risse im Gehweg. Besonders für ältere Menschen und Rollstuhlfahrer sehr gefährlich.",
    location: "Jöllenbecker Str., Schildesche",
    affectedCount: 23,
    status: "Neu",
    upvotes: 18,
    date: "vor 5 Tagen",
  },
  {
    id: 3,
    category: "Grünfläche",
    title: "Fehlende Parkbank am Stadtpark-Eingang",
    description: "Am nördlichen Eingang des Stadtparks (Richtung Jahnplatz) gibt es keine Sitzgelegenheit mehr. Die alte Bank wurde entfernt, aber nie ersetzt.",
    location: "Stadtpark, Mitte",
    affectedCount: 31,
    status: "Neu",
    upvotes: 22,
    date: "vor 1 Woche",
  },
  {
    id: 4,
    category: "Sauberkeit",
    title: "Mülleimer am Alten Markt überquellen",
    description: "Die Mülleimer rund um den Alten Markt werden zu selten geleert. Besonders am Wochenende nach dem Markt liegt viel Müll herum.",
    location: "Alter Markt, Mitte",
    affectedCount: 58,
    status: "Erledigt",
    upvotes: 45,
    date: "vor 2 Wochen",
  },
  {
    id: 5,
    category: "Barrierefreiheit",
    title: "Ausgang Nord am Hauptbahnhof nicht barrierefrei",
    description: "Der nördliche Ausgang des Hauptbahnhofs hat einen defekten Aufzug. Seit über einem Monat müssen Rollstuhlfahrer und Eltern mit Kinderwagen lange Umwege nehmen.",
    location: "Hauptbahnhof, Mitte",
    affectedCount: 89,
    status: "In Bearbeitung",
    upvotes: 67,
    date: "vor 3 Wochen",
  },
  {
    id: 6,
    category: "Verkehr",
    title: "Tempo 30 Zone auf der Schildescher Straße gefordert",
    description: "Die Schildescher Straße ist eine Schulstraße. Viele Eltern und Anwohner fordern eine Tempo-30-Zone zum Schutz der Kinder.",
    location: "Schildescher Str., Schildesche",
    affectedCount: 112,
    status: "In Abstimmung",
    upvotes: 98,
    date: "vor 1 Monat",
  },
  {
    id: 7,
    category: "Grünfläche",
    title: "Spielplatz in Stieghorst sanierungsbedürftig",
    description: "Der Spielplatz am Stieghorster Park ist in schlechtem Zustand. Mehrere Geräte sind gesperrt. Kinder aus dem ganzen Stadtteil spielen hier täglich.",
    location: "Stieghorster Park, Stieghorst",
    affectedCount: 64,
    status: "Neu",
    upvotes: 51,
    date: "vor 4 Tagen",
  },
  {
    id: 8,
    category: "Sicherheit",
    title: "Fehlende Querungshilfe vor Grundschule Brackwede",
    description: "Vor der Grundschule an der Hauptstraße in Brackwede fehlt ein Zebrastreifen oder eine Ampel. Eltern und Lehrer sind sehr besorgt.",
    location: "Hauptstraße, Brackwede",
    affectedCount: 76,
    status: "In Bearbeitung",
    upvotes: 83,
    date: "vor 1 Woche",
  },
];

export const polls: Poll[] = [
  {
    id: 1,
    question: "Soll die Innenstadt an Wochenenden für Autos gesperrt werden?",
    description: "Die Stadt Bielefeld prüft, ob der Bereich rund um den Alten Markt und die Bahnhofstraße an Samstagen autofrei gestaltet werden soll.",
    yesPercent: 67,
    totalVotes: 234,
    deadline: "noch 5 Tage",
    active: true,
  },
  {
    id: 2,
    question: "Mehr Fahrradwege in Brackwede — ja oder nein?",
    description: "Der Bezirk Brackwede soll ein neues Fahrradwegenetz bekommen. Dafür müssten einige Parkplätze umgebaut werden.",
    yesPercent: 78,
    totalVotes: 189,
    deadline: "noch 12 Tage",
    active: true,
  },
  {
    id: 3,
    question: "Neuer Spielplatz im Stieghorster Park?",
    description: "Der bestehende Spielplatz soll durch eine moderne Anlage mit Kletterturm, Wasserspiel und Ruhezone für alle Altersgruppen ersetzt werden.",
    yesPercent: 91,
    totalVotes: 156,
    deadline: "noch 3 Tage",
    active: true,
  },
  {
    id: 4,
    question: "Soll der Wochenmarkt auf den Kesselbrink verlegt werden?",
    description: "Da der Alte Markt saniert werden soll, wird überlegt, den beliebten Wochenmarkt für 2 Jahre auf den Kesselbrink auszuweichen.",
    yesPercent: 44,
    totalVotes: 312,
    deadline: "Abgestimmt",
    active: false,
  },
];

export const categoryColors: Record<IssueCategory, string> = {
  Straße: "bg-orange-100 text-orange-700",
  Beleuchtung: "bg-yellow-100 text-yellow-700",
  Grünfläche: "bg-green-100 text-green-700",
  Sicherheit: "bg-red-100 text-red-700",
  Verkehr: "bg-blue-100 text-blue-700",
  Sauberkeit: "bg-purple-100 text-purple-700",
  Barrierefreiheit: "bg-teal-100 text-teal-700",
  Sonstiges: "bg-gray-100 text-gray-700",
};

export const statusColors: Record<IssueStatus, string> = {
  Neu: "bg-blue-100 text-blue-700",
  "In Bearbeitung": "bg-orange-100 text-orange-700",
  Erledigt: "bg-green-100 text-green-700",
  "In Abstimmung": "bg-purple-100 text-purple-700",
};
