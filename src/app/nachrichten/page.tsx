import type { Metadata } from 'next'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Nachrichten',
  description: 'Deine privaten Nachrichten auf Bielefeld spricht.',
}

const conversations = [
  {
    id: 1,
    name: "Markus K.",
    handle: "@markus_brackwede",
    initials: "MK",
    color: "bg-teal-500",
    lastMessage: "Danke für deine Unterstützung beim Gehweg-Thema! 💪",
    time: "5 Min.",
    unread: 2,
  },
  {
    id: 2,
    name: "Stadt Bielefeld",
    handle: "@stadt_bielefeld",
    initials: "ST",
    color: "bg-blue-600",
    lastMessage: "Ihr Anliegen wurde an das Tiefbauamt weitergeleitet.",
    time: "23 Min.",
    unread: 1,
    verified: true,
  },
  {
    id: 3,
    name: "Lena aus Schildesche",
    handle: "@lena_bi",
    initials: "LE",
    color: "bg-purple-500",
    lastMessage: "Kommst du heute Abend zum Open-Air-Kino?",
    time: "1 Std.",
    unread: 0,
  },
  {
    id: 4,
    name: "Grüne Bielefeld",
    handle: "@gruene_bi",
    initials: "GR",
    color: "bg-green-600",
    lastMessage: "Wir laden dich zur Bürgerversammlung am Dienstag ein.",
    time: "3 Std.",
    unread: 0,
    verified: true,
  },
  {
    id: 5,
    name: "Kemal Y.",
    handle: "@kemal_brackwede",
    initials: "KY",
    color: "bg-emerald-500",
    lastMessage: "Super, wir sehen uns Samstag im Nachbarschaftsgarten!",
    time: "Gestern",
    unread: 0,
  },
  {
    id: 6,
    name: "Nina S.",
    handle: "@nina_sennestadt",
    initials: "NS",
    color: "bg-pink-500",
    lastMessage: "Hast du das Sommerkonzert der Musikschule schon gehört?",
    time: "Gestern",
    unread: 0,
  },
  {
    id: 7,
    name: "Aysun T.",
    handle: "@aysun_bi",
    initials: "AY",
    color: "bg-rose-500",
    lastMessage: "Die Stadt hat geantwortet! Der Spielplatz wird im August renoviert.",
    time: "Di.",
    unread: 0,
  },
  {
    id: 8,
    name: "Jöllenbecker Nachbarschaft",
    handle: "@joellenbeck_bi",
    initials: "JN",
    color: "bg-indigo-500",
    lastMessage: "Danke für deine Teilnahme an der Abstimmung 🙏",
    time: "Mo.",
    unread: 0,
  },
]

export default function NachrichtenPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
          <h1 className="font-bold text-gray-900 text-lg">Nachrichten</h1>
          <p className="text-sm text-gray-400">Deine privaten Unterhaltungen</p>
        </div>

        {/* Search */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <input
            type="text"
            placeholder="Nachrichten durchsuchen"
            className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        {/* Conversations */}
        <div className="bg-white divide-y divide-gray-100">
          {conversations.map((c) => (
            <div
              key={c.id}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className={`w-12 h-12 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                {c.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900 text-sm">{c.name}</span>
                    {c.verified && (
                      <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{c.time}</span>
                    {c.unread > 0 && (
                      <span className="w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
                <p className={`text-sm truncate mt-0.5 ${c.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                  {c.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
