import type { Metadata } from 'next'
import PollCard from '@/components/PollCard'
import { polls } from '@/lib/data'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Veranstaltungen & Abstimmungen',
  description: 'Stimme über aktuelle Themen in Bielefeld ab.',
}

export default function AbstimmungenPage() {
  const activePolls = polls.filter(p => p.active)
  const completedPolls = polls.filter(p => !p.active)

  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-30 bg-white/90 backdrop-blur-md">
          <h1 className="font-bold text-gray-900 text-lg">Abstimmungen</h1>
          <p className="text-sm text-gray-400">Deine Stimme zählt in Bielefeld</p>
        </div>
        <div className="bg-white min-h-screen px-4 py-5 space-y-8">
          <section>
            <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-4">Laufende Abstimmungen</h2>
            <div className="space-y-4">
              {activePolls.map(poll => <PollCard key={poll.id} poll={poll} />)}
            </div>
          </section>
          {completedPolls.length > 0 && (
            <section>
              <h2 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-4">Abgeschlossene Abstimmungen</h2>
              <div className="space-y-4 opacity-75">
                {completedPolls.map(poll => <PollCard key={poll.id} poll={poll} />)}
              </div>
            </section>
          )}
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
