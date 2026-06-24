import type { Metadata } from 'next'
import { TrendingUp, MapPin, Flame, Users } from 'lucide-react'
import RightPanel from '@/components/RightPanel'

export const metadata: Metadata = {
  title: 'Entdecken',
  description: 'Entdecke neue Themen, Orte und Menschen in Bielefeld.',
}

const featuredTopics = [
  { emoji: '🚲', title: 'Radweg Jöllenbeck', desc: '984 Beiträge · Aktive Diskussion', badge: 'Trending', badgeColor: 'bg-orange-100 text-orange-700' },
  { emoji: '🏟️', title: 'DSC Arminia', desc: '5.124 Beiträge · Heimspiel Samstag', badge: 'Sport', badgeColor: 'bg-blue-100 text-blue-700' },
  { emoji: '🌳', title: 'Teutoburger Wald', desc: '612 Beiträge · Wandertipps & Natur', badge: 'Natur', badgeColor: 'bg-green-100 text-green-700' },
  { emoji: '🎪', title: 'Stadtfest 2026', desc: '1.872 Beiträge · 20.–22. August', badge: 'Event', badgeColor: 'bg-purple-100 text-purple-700' },
]

const nearbyPosts = [
  { initials: 'MK', color: 'bg-teal-500', author: 'Markus K.', stadtteil: 'Brackwede', content: 'Der Gehweg an der Hauptstraße wird endlich repariert! Die Stadt hat bestätigt: Baustart Ende Juli. 🎉', likes: 89 },
  { initials: 'LE', color: 'bg-purple-500', author: 'Lena aus Schildesche', stadtteil: 'Schildesche', content: 'Open-Air-Kino war ein voller Erfolg. Über 200 Menschen im Bürgerpark! Danke an alle 🎬🌿', likes: 143 },
  { initials: 'KY', color: 'bg-emerald-500', author: 'Kemal Y.', stadtteil: 'Brackwede', content: 'Wir suchen noch 3 Freiwillige für Samstag im Nachbarschaftsgarten. Meldet euch! 🌱', likes: 54 },
]

const popularChannels = [
  { emoji: '🏙️', name: 'Stadtentwicklung', members: '3.241 Mitglieder' },
  { emoji: '🚌', name: 'Öffentlicher Nahverkehr', members: '2.108 Mitglieder' },
  { emoji: '🌿', name: 'Natur & Umwelt', members: '1.847 Mitglieder' },
  { emoji: '🎓', name: 'Bildung & Schulen', members: '1.392 Mitglieder' },
  { emoji: '🏪', name: 'Lokaler Handel', members: '978 Mitglieder' },
  { emoji: '🎉', name: 'Events & Freizeit', members: '2.654 Mitglieder' },
]

const newPeople = [
  { initials: 'TR', color: 'bg-slate-500', name: 'Thomas R.', stadtteil: 'Schildesche', bio: 'Stadtentwicklung & Architektur' },
  { initials: 'NS', color: 'bg-pink-500', name: 'Nina S.', stadtteil: 'Sennestadt', bio: 'Community & Nachbarschaft' },
  { initials: 'SW', color: 'bg-cyan-600', name: 'Stadtwerke Bielefeld', stadtteil: 'Mitte', bio: 'Energie & Infrastruktur · Offiziell', verified: true },
]

export default function EntdeckenPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 bg-white/95 backdrop-blur-sm">
          <h1 className="font-bold text-gray-900 text-lg">Entdecken</h1>
          <p className="text-sm text-gray-400">Neues aus Bielefeld</p>
        </div>

        {/* Search */}
        <div className="bg-white border-b border-gray-200 px-4 py-3">
          <input
            type="text"
            placeholder="Bielefeld durchsuchen …"
            className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
        </div>

        <div className="bg-white space-y-0">
          {/* Trending Topics */}
          <section className="border-b border-gray-200 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Angesagte Themen</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {featuredTopics.map((t) => (
                <div key={t.title} className="border border-gray-200 rounded-xl p-3 hover:border-green-300 hover:bg-green-50/30 cursor-pointer transition-colors">
                  <span className="text-2xl">{t.emoji}</span>
                  <p className="font-semibold text-gray-900 text-sm mt-1">{t.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
                  <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-2 ${t.badgeColor}`}>{t.badge}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby Posts */}
          <section className="border-b border-gray-200 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">In deiner Nähe</h2>
            </div>
            <div className="space-y-3">
              {nearbyPosts.map((p) => (
                <div key={p.author} className="flex gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className={`w-9 h-9 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-gray-900">{p.author}</span>
                      <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">{p.stadtteil}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">{p.content}</p>
                    <p className="text-xs text-gray-400 mt-1">♥ {p.likes}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Channels */}
          <section className="border-b border-gray-200 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Beliebte Kanäle</h2>
            </div>
            <div className="space-y-2">
              {popularChannels.map((c) => (
                <div key={c.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{c.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                      <p className="text-xs text-gray-400">{c.members}</p>
                    </div>
                  </div>
                  <button className="text-xs bg-green-600 text-white font-medium px-3 py-1.5 rounded-full hover:bg-green-700 transition-colors">
                    Beitreten
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* New People */}
          <section className="px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Vorgeschlagene Personen</h2>
            </div>
            <div className="space-y-3">
              {newPeople.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {p.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                      {p.verified && (
                        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">{p.stadtteil} · {p.bio}</p>
                  </div>
                  <button className="text-xs border border-green-600 text-green-600 font-medium px-3 py-1.5 rounded-full hover:bg-green-50 transition-colors shrink-0">
                    Folgen
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <RightPanel />
    </div>
  )
}
