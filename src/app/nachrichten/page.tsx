import RightPanel from '@/components/RightPanel'

export default function Page() {
  const titles: Record<string, string> = {
    entdecken: 'Entdecken',
    benachrichtigungen: 'Benachrichtigungen',
    nachrichten: 'Nachrichten',
    gespeichert: 'Gespeichert',
  }
  const label = 'nachrichten'
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30">
          <h1 className="font-bold text-gray-900 text-lg">{titles[label]}</h1>
        </div>
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">Demnächst verfügbar</p>
            <p className="text-sm mt-1">Diese Funktion wird bald freigeschaltet.</p>
          </div>
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
