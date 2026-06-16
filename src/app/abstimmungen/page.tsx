import type { Metadata } from 'next'
import PollCard from '@/components/PollCard'
import { polls } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Abstimmungen',
  description: 'Stimme über aktuelle Themen in Bielefeld ab. Deine Meinung zu Verkehr, Stadtentwicklung und mehr.',
}

export default function AbstimmungenPage() {
  const activePolls = polls.filter(p => p.active)
  const completedPolls = polls.filter(p => !p.active)

  return (
    <div className="min-h-screen bg-[#f8f4ef]">
      <div className="bg-[#1a3a5c] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-3">Aktuelle Abstimmungen</h1>
          <p className="text-blue-200 text-lg">Deine Meinung zu lokalen Entscheidungen in Bielefeld</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-6">Laufende Abstimmungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePolls.map(poll => <PollCard key={poll.id} poll={poll} />)}
          </div>
        </section>

        {completedPolls.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl font-bold text-[#1a3a5c] mb-6">Abgeschlossene Abstimmungen</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {completedPolls.map(poll => <PollCard key={poll.id} poll={poll} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
