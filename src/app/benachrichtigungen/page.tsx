import type { Metadata } from 'next'
import { Heart, Repeat2, MessageCircle, UserPlus, Bell, Vote } from 'lucide-react'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Benachrichtigungen',
  description: 'Deine Benachrichtigungen auf Bielefeld spricht.',
}

const notifications = [
  {
    id: 1,
    type: 'like',
    icon: Heart,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
    initials: 'MK',
    avatarColor: 'bg-teal-500',
    text: 'Markus K. und 14 weitere haben deinen Beitrag über den Gehweg geliked.',
    time: '3 Min.',
    unread: true,
  },
  {
    id: 2,
    type: 'reply',
    icon: MessageCircle,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    initials: 'ST',
    avatarColor: 'bg-blue-600',
    text: 'Stadt Bielefeld hat auf dein Anliegen geantwortet: „Vielen Dank für Ihren Hinweis. Wir leiten dies ans zuständige Amt weiter."',
    time: '15 Min.',
    unread: true,
  },
  {
    id: 3,
    type: 'repost',
    icon: Repeat2,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    initials: 'LE',
    avatarColor: 'bg-purple-500',
    text: 'Lena aus Schildesche hat deinen Beitrag geteilt.',
    time: '42 Min.',
    unread: true,
  },
  {
    id: 4,
    type: 'follow',
    icon: UserPlus,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    initials: 'GR',
    avatarColor: 'bg-green-600',
    text: 'Grüne Bielefeld folgt dir jetzt.',
    time: '1 Std.',
    unread: true,
  },
  {
    id: 5,
    type: 'poll',
    icon: Vote,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    initials: 'BS',
    avatarColor: 'bg-green-700',
    text: 'Neue Abstimmung in deinem Stadtteil: „Soll der Kesselbrink öfter für Veranstaltungen gesperrt werden?"',
    time: '2 Std.',
    unread: false,
  },
  {
    id: 6,
    type: 'like',
    icon: Heart,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
    initials: 'AY',
    avatarColor: 'bg-rose-500',
    text: 'Aysun T. hat deinen Kommentar geliked.',
    time: '3 Std.',
    unread: false,
  },
  {
    id: 7,
    type: 'mention',
    icon: Bell,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    initials: 'JN',
    avatarColor: 'bg-indigo-500',
    text: 'Jöllenbecker Nachbarschaft hat dich in einem Beitrag erwähnt: „@ich — danke für deinen Bericht!"',
    time: '5 Std.',
    unread: false,
  },
  {
    id: 8,
    type: 'like',
    icon: Heart,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-50',
    initials: 'NS',
    avatarColor: 'bg-pink-500',
    text: 'Nina S. und 8 weitere haben deinen Beitrag geliked.',
    time: '7 Std.',
    unread: false,
  },
  {
    id: 9,
    type: 'poll',
    icon: Vote,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    initials: 'GR',
    avatarColor: 'bg-green-600',
    text: 'Die Abstimmung „Mehr Fahrradwege in Brackwede" wurde abgeschlossen — 78 % stimmten dafür.',
    time: '9 Std.',
    unread: false,
  },
  {
    id: 10,
    type: 'repost',
    icon: Repeat2,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
    initials: 'MK',
    avatarColor: 'bg-teal-500',
    text: 'Markus K. hat deinen Beitrag über den Spielplatz geteilt.',
    time: 'Gestern',
    unread: false,
  },
  {
    id: 11,
    type: 'follow',
    icon: UserPlus,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    initials: 'KY',
    avatarColor: 'bg-emerald-500',
    text: 'Kemal Y. und 3 weitere folgen dir jetzt.',
    time: 'Gestern',
    unread: false,
  },
  {
    id: 12,
    type: 'mention',
    icon: Bell,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    initials: 'SW',
    avatarColor: 'bg-cyan-600',
    text: 'Stadtwerke Bielefeld hat auf dein Anliegen reagiert und das Ticket als „in Bearbeitung" markiert.',
    time: 'Di.',
    unread: false,
  },
]

const unreadCount = notifications.filter(n => n.unread).length

export default function BenachrichtigungenPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-gray-900 text-lg">Benachrichtigungen</h1>
              <p className="text-sm text-gray-400">Neuigkeiten rund um dich</p>
            </div>
            {unreadCount > 0 && (
              <span className="bg-green-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                {unreadCount} neu
              </span>
            )}
          </div>
        </div>

        <div className="bg-white divide-y divide-gray-100">
          {notifications.map((n) => {
            const Icon = n.icon
            return (
              <div
                key={n.id}
                className={`flex items-start gap-3 px-4 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors ${n.unread ? 'bg-green-50/40' : ''}`}
              >
                <div className={`w-9 h-9 rounded-full ${n.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`w-4 h-4 ${n.iconColor}`} />
                </div>
                <div className={`w-8 h-8 rounded-full ${n.avatarColor} flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5`}>
                  {n.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm leading-snug ${n.unread ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                    {n.text}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                </div>
                {n.unread && (
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                )}
              </div>
            )
          })}
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
