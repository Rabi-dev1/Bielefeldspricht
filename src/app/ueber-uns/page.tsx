import type { Metadata } from 'next'
import { Eye, Users, MessageCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Erfahre mehr über die Mission und das Team hinter Bielefeld spricht — die Bürgerbeteiligungsplattform für Bielefeld.',
}

const values = [
  { icon: Eye, title: 'Transparent', desc: 'Alle Anliegen und Abstimmungsergebnisse sind öffentlich einsehbar. Keine versteckten Prozesse.' },
  { icon: Users, title: 'Inklusiv', desc: 'Alle Bürgerinnen und Bürger Bielefelds sind willkommen — unabhängig von Alter, Herkunft oder technischen Kenntnissen.' },
  { icon: MessageCircle, title: 'Konstruktiv', desc: 'Wir fördern lösungsorientierte Diskussionen. Meckern allein bringt uns nicht weiter.' },
  { icon: MapPin, title: 'Lokal', desc: 'Wir konzentrieren uns auf Bielefeld und seine 17 Stadtteile. Lokal denken, lokal handeln.' },
]

const team = [
  { name: 'Maria Schmidt', role: 'Projektleiterin', bio: 'Maria koordiniert die Plattform und ist das Bindeglied zwischen Bürgerschaft und Stadtverwaltung. Sie lebt seit 15 Jahren in Bielefeld-Mitte.' },
  { name: 'Jonas Weber', role: 'Entwicklung', bio: 'Jonas hat die Plattform technisch aufgebaut und sorgt dafür, dass alles reibungslos funktioniert. Fan der Bielefelder Fahrradinfrastruktur — und ihrer Verbesserungsmöglichkeiten.' },
  { name: 'Anna Müller', role: 'Community', bio: 'Anna kümmert sich um die Gemeinschaft, moderiert Beiträge und hält den Kontakt zu den Nutzerinnen und Nutzern. In ihrer Freizeit engagiert sie sich in Brackwede.' },
]

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <div className="bg-[#15803d] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-5xl font-bold mb-5">Über Bielefeld spricht</h1>
          <p className="text-blue-200 text-xl leading-relaxed">
            Wir glauben, dass Demokratie im Kleinen beginnt — in deinem Stadtteil, auf deiner Straße, in deinem Park.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Mission */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-5">Unsere Mission</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>Bielefeld spricht entstand aus der Überzeugung, dass lokale Demokratie funktioniert, wenn Bürgerinnen und Bürger eine einfache, zugängliche Möglichkeit haben, ihre Stimme zu erheben.</p>
            <p>Zu oft werden Probleme im Alltag ignoriert — nicht weil niemanden etwas stört, sondern weil der Weg zum Stadtbüro zu weit, das Formular zu kompliziert oder die Hürde zur Beteiligung zu hoch ist. Das wollen wir ändern.</p>
            <p>Mit Bielefeld spricht kann jede und jeder in wenigen Minuten ein Anliegen melden, andere unterstützen und über lokale Themen abstimmen. Einfach, transparent und kostenlos.</p>
          </div>
        </section>

        {/* Personas */}
        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb]">
          <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-5">Entwickelt mit und für Bielefelder</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Bielefeld spricht wurde nicht am grünen Tisch entwickelt. Wir haben uns Zeit genommen, echte Bielefelderinnen und Bielefelder zu befragen:
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: 'Claudia, 46', role: 'Mutter aus Stieghorst', quote: '"Ich wünsche mir endlich einen sicheren Schulweg für meine Kinder."' },
              { name: 'Lara, 27', role: 'Studentin aus Mitte', quote: '"Bürgerbeteiligung muss so einfach sein wie eine App."' },
              { name: 'Bette, 74', role: 'Rentnerin aus Schildesche', quote: '"Ich will gehört werden — auch ohne Computer-Kenntnisse."' },
              { name: 'Ralf, 55', role: 'Anwohner aus Brackwede', quote: '"Ich habe nie gedacht, dass meine Meinung etwas bewirken kann."' },
            ].map(p => (
              <div key={p.name} className="bg-[#f9fafb] rounded-xl p-4 border border-[#e5e7eb]">
                <p className="text-gray-700 italic mb-3 text-sm">{p.quote}</p>
                <p className="font-semibold text-[#15803d] text-sm">{p.name}</p>
                <p className="text-gray-500 text-xs">{p.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-8">Unsere Werte</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#f0fdf4] rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#15803d]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#15803d] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="font-serif text-3xl font-bold text-[#15803d] mb-8">Das Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e5e7eb] text-center">
                <div className="w-16 h-16 bg-[#86efac] rounded-full mx-auto mb-4 flex items-center justify-center text-[#15803d] text-2xl font-bold font-serif">
                  {member.name[0]}
                </div>
                <h3 className="font-semibold text-[#15803d]">{member.name}</h3>
                <p className="text-[#16a34a] text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
