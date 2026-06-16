import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Für Bürgerinnen und Bürger in Bielefeld',
  description: 'Bielefeld spricht ist die Plattform für aktive Bielefelderinnen und Bielefelder. Melde Anliegen, stimme ab und gestalte deine Stadt mit.',
}

export default function BuergerBielefeldPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ef]">
      <div className="bg-[#1a3a5c] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Für Bürgerinnen und Bürger in Bielefeld</h1>
          <p className="text-blue-200 text-lg">Deine Plattform für aktive Mitgestaltung — einfach, inklusiv und für alle.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-serif text-3xl font-bold text-[#1a3a5c] mb-4">Bielefeld gehört euch</h2>
          <p>Egal ob du seit 30 Jahren in Schildesche wohnst oder erst vor Kurzem nach Bielefeld gezogen bist — du kennst deine Straße, deinen Park, deinen Stadtteil besser als jede Behörde. Und genau dieses Wissen macht den Unterschied.</p>
          <p className="mt-4">Bielefeld spricht gibt dir die Möglichkeit, dieses Wissen einzubringen. Nicht in einem Formular, das niemand liest. Sondern auf einer Plattform, auf der andere Bielefelderinnen und Bielefelder dein Anliegen sehen, kommentieren und mitunterstützen können.</p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-4">Für wen ist Bielefeld spricht?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Für Berufstätige', desc: 'Kein Zeit für lange Formulare? Kein Problem. Ein Anliegen einreichen dauert keine 3 Minuten.' },
              { title: 'Für Ältere', desc: 'Große Schrift, klare Buttons, kein Fachjargon. Auch ohne Technik-Kenntnisse problemlos nutzbar.' },
              { title: 'Für Eltern', desc: 'Schulwege, Spielplätze, Querungshilfen — du weißt, was Kinder brauchen. Mach es sichtbar.' },
              { title: 'Für Engagierte', desc: 'Du willst mehr als nur melden? Stimme ab, teile Anliegen und zeige, was dir in Bielefeld wichtig ist.' },
            ].map(p => (
              <div key={p.title} className="bg-white rounded-2xl p-5 border border-[#e8e0d5]">
                <h3 className="font-semibold text-[#1a3a5c] mb-1">{p.title}</h3>
                <p className="text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-4">Was passiert mit meinem Anliegen?</h2>
          <p>Jedes eingereichte Anliegen wird von unserem Team geprüft und erhält einen Status-Badge. Du kannst jederzeit sehen, ob dein Anliegen in Bearbeitung ist, zur Abstimmung steht oder bereits erledigt wurde. So weißt du immer, was mit deiner Meldung passiert.</p>
        </section>
        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <Link href="/melden" className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#15304d] transition-colors">
            Anliegen melden <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/themen" className="inline-flex items-center justify-center gap-2 border-2 border-[#1a3a5c] text-[#1a3a5c] font-semibold px-6 py-3.5 rounded-full hover:bg-[#f0f4f8] transition-colors">
            Themen entdecken
          </Link>
        </div>
      </div>
    </div>
  )
}
