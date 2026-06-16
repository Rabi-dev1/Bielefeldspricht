import Link from "next/link";
import { ArrowRight, MapPin, ThumbsUp, CheckCircle, MessageCircle, Flag } from "lucide-react";
import IssueCard from "@/components/IssueCard";
import PollCard from "@/components/PollCard";
import FAQAccordion from "@/components/FAQAccordion";
import { issues, polls } from "@/lib/data";

const stats = [
  { value: "1.247", label: "Anliegen gemeldet" },
  { value: "8.934", label: "Stimmen abgegeben" },
  { value: "17", label: "Stadtteile aktiv" },
  { value: "3", label: "Diese Woche erledigt" },
];

const steps = [
  {
    icon: Flag,
    title: "Anliegen melden",
    desc: "In wenigen Klicks ein lokales Problem oder einen Wunsch einreichen — ganz ohne komplizierte Formulare.",
  },
  {
    icon: ThumbsUp,
    title: "Gemeinsam abstimmen",
    desc: "Zeige, wie viele Menschen ein Thema betrifft. Je mehr Stimmen, desto sichtbarer wird das Anliegen.",
  },
  {
    icon: CheckCircle,
    title: "Veränderung sehen",
    desc: "Wir veröffentlichen den Status jedes Anliegens transparent — von Neu bis Erledigt.",
  },
];

const faqItems = [
  {
    question: "Muss ich mich anmelden, um Themen lesen zu können?",
    answer:
      "Nein. Du kannst alle Anliegen und Abstimmungsergebnisse auf Bielefeld spricht lesen, ohne dich anzumelden. Für das Melden eines Anliegens oder das Abstimmen ist optional eine E-Mail-Adresse erforderlich.",
  },
  {
    question: "Wie wird sichergestellt, dass Beiträge sachlich bleiben?",
    answer:
      "Alle eingereichten Anliegen werden von unserem Moderationsteam geprüft, bevor sie öffentlich erscheinen. Beiträge, die beleidigend oder unwahr sind, werden nicht veröffentlicht. Außerdem zeigen wir, wie viele Personen ein Anliegen betrifft — das macht Einzelmeinungen klar erkennbar.",
  },
  {
    question: "Was passiert mit meinem Anliegen nach der Einreichung?",
    answer:
      "Dein Anliegen erhält einen Status: Neu, In Bearbeitung, In Abstimmung oder Erledigt. Wir informieren dich per E-Mail, wenn sich der Status ändert — sofern du deine E-Mail angegeben hast.",
  },
  {
    question: "Kann ich auch als ältere Person die Plattform nutzen?",
    answer:
      "Ja, Bielefeld spricht wurde bewusst einfach und inklusiv gestaltet. Klare Buttons, große Schrift und eine übersichtliche Navigation machen die Plattform für alle Altersgruppen zugänglich.",
  },
  {
    question: "Wie beeinflusst eine Abstimmung wirklich etwas?",
    answer:
      "Abstimmungsergebnisse werden regelmäßig an die zuständigen Stellen der Stadt Bielefeld weitergeleitet. Anliegen mit vielen Stimmen erhalten mehr Aufmerksamkeit. Wir sind eine unabhängige Plattform und machen den Bürgerwillen sichtbar.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a3a5c] to-[#15304d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Für alle Bielefelderinnen und Bielefelder
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Deine Stadt.<br />Deine Stimme.
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              Melde lokale Anliegen, stimme über Stadtthemen ab und gestalte
              Bielefeld gemeinsam mit — einfach, transparent und für alle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/melden"
                className="inline-flex items-center justify-center gap-2 bg-[#4a7c59] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#3d6849] transition-colors text-base"
              >
                Anliegen melden
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/themen"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white/20 transition-colors text-base border border-white/20"
              >
                Themen entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1a3a5c]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a3a5c] mb-3">So funktioniert es</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            In drei einfachen Schritten vom Anliegen zur Veränderung — ohne komplizierte Anmeldung.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#e8e0d5] text-center">
              <div className="w-14 h-14 bg-[#f0f4f8] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-[#1a3a5c]" />
              </div>
              <div className="w-6 h-6 bg-[#1a3a5c] text-white text-xs font-bold rounded-full flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold text-[#1a3a5c] text-base mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent issues */}
      <section className="bg-[#f0f4f8] py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1a3a5c]">Aktuelle Anliegen</h2>
              <p className="text-gray-600 mt-1">Was Bielefelder gerade beschäftigt</p>
            </div>
            <Link href="/themen" className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#1a3a5c] hover:underline">
              Alle anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {issues.slice(0, 6).map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/themen" className="inline-flex items-center gap-1 text-sm font-medium text-[#1a3a5c]">
              Alle Anliegen anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Active polls */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1a3a5c]">Laufende Abstimmungen</h2>
              <p className="text-gray-600 mt-1">Deine Meinung zählt</p>
            </div>
            <Link href="/abstimmungen" className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#1a3a5c] hover:underline">
              Alle anzeigen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {polls.filter((p) => p.active).map((poll) => (
              <PollCard key={poll.id} poll={poll} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 sm:px-6 border-t border-b border-[#e8e0d5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] mb-3">Was Bielefelder sagen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Claudia M., Stieghorst",
                quote: "Endlich eine Möglichkeit, einfach zu sehen, was in meinem Stadtteil gerade los ist. Kein Herumsuchen mehr.",
              },
              {
                name: "Lars K., Brackwede",
                quote: "Ich habe den kaputten Gehweg vor unserer Schule gemeldet. Drei Wochen später war er repariert.",
              },
              {
                name: "Bettina H., Mitte",
                quote: "Auch als ältere Person komme ich gut damit zurecht. Klare Buttons, alles verständlich erklärt.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-[#f8f4ef] rounded-2xl p-5 border border-[#e8e0d5]">
                <div className="flex gap-0.5 mb-3 text-yellow-400 text-lg">★★★★★</div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs font-semibold text-[#1a3a5c]">{t.name}</p>
                <p className="text-xs text-gray-400">Beispielbewertung</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] mb-3">Häufige Fragen</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#4a7c59] text-white py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Jetzt mitmachen
          </h2>
          <p className="text-green-100 mb-8 text-lg leading-relaxed">
            Schon über 1.200 Bielefelderinnen und Bielefelder haben ein Anliegen
            eingereicht. Werde Teil der Gemeinschaft.
          </p>
          <Link
            href="/melden"
            className="inline-flex items-center gap-2 bg-white text-[#4a7c59] font-bold px-8 py-4 rounded-full hover:bg-[#f0f4f8] transition-colors text-base"
          >
            Anliegen melden
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
