import type { Metadata } from 'next'
import RightPanel from '@/components/RightPanel'
import NachrichtenContent from './NachrichtenContent'

export const metadata: Metadata = {
  title: 'Nachrichten',
  description: 'Deine privaten Nachrichten auf Bielefeld spricht.',
}

export default function NachrichtenPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-30 bg-white/90 backdrop-blur-md">
          <h1 className="font-bold text-gray-900 text-lg">Nachrichten</h1>
          <p className="text-sm text-gray-400">Deine privaten Unterhaltungen</p>
        </div>
        <NachrichtenContent />
      </div>
      <RightPanel />
    </div>
  )
}
