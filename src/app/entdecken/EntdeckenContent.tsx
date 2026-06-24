"use client";
import { useState } from "react";
import { TrendingUp, MapPin, Flame, Users, Check, X } from "lucide-react";

const featuredTopics = [
  { emoji: "🚲", title: "Radweg Jöllenbeck", desc: "984 Beiträge · Aktive Diskussion", badge: "Trending", badgeColor: "bg-orange-100 text-orange-700" },
  { emoji: "🏟️", title: "DSC Arminia", desc: "5.124 Beiträge · Heimspiel Samstag", badge: "Sport", badgeColor: "bg-blue-100 text-blue-700" },
  { emoji: "🌳", title: "Teutoburger Wald", desc: "612 Beiträge · Wandertipps & Natur", badge: "Natur", badgeColor: "bg-green-100 text-green-700" },
  { emoji: "🎪", title: "Stadtfest 2026", desc: "1.872 Beiträge · 20.–22. August", badge: "Event", badgeColor: "bg-purple-100 text-purple-700" },
];

const nearbyPosts = [
  { initials: "MK", color: "bg-teal-500", author: "Markus K.", stadtteil: "Brackwede", content: "Der Gehweg an der Hauptstraße wird endlich repariert! Die Stadt hat bestätigt: Baustart Ende Juli. 🎉", likes: 89 },
  { initials: "LE", color: "bg-purple-500", author: "Lena aus Schildesche", stadtteil: "Schildesche", content: "Open-Air-Kino war ein voller Erfolg. Über 200 Menschen im Bürgerpark! Danke an alle 🎬🌿", likes: 143 },
  { initials: "KY", color: "bg-emerald-500", author: "Kemal Y.", stadtteil: "Brackwede", content: "Wir suchen noch 3 Freiwillige für Samstag im Nachbarschaftsgarten. Meldet euch! 🌱", likes: 54 },
];

const popularChannels = [
  { emoji: "🏙️", name: "Stadtentwicklung", members: "3.241 Mitglieder" },
  { emoji: "🚌", name: "Öffentlicher Nahverkehr", members: "2.108 Mitglieder" },
  { emoji: "🌿", name: "Natur & Umwelt", members: "1.847 Mitglieder" },
  { emoji: "🎓", name: "Bildung & Schulen", members: "1.392 Mitglieder" },
  { emoji: "🏪", name: "Lokaler Handel", members: "978 Mitglieder" },
  { emoji: "🎉", name: "Events & Freizeit", members: "2.654 Mitglieder" },
];

const newPeople = [
  { initials: "TR", color: "bg-slate-500", name: "Thomas R.", stadtteil: "Schildesche", bio: "Stadtentwicklung & Architektur" },
  { initials: "NS", color: "bg-pink-500", name: "Nina S.", stadtteil: "Sennestadt", bio: "Community & Nachbarschaft" },
  { initials: "SW", color: "bg-cyan-600", name: "Stadtwerke Bielefeld", stadtteil: "Mitte", bio: "Energie & Infrastruktur · Offiziell", verified: true },
];

export default function EntdeckenContent() {
  const [query, setQuery] = useState("");
  const [joined, setJoined] = useState<Set<string>>(new Set());
  const [followed, setFollowed] = useState<Set<string>>(new Set());
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  function toggleJoin(name: string) {
    setJoined((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  function toggleFollow(name: string) {
    setFollowed((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  function toggleLike(author: string) {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      next.has(author) ? next.delete(author) : next.add(author);
      return next;
    });
  }

  const q = query.trim().toLowerCase();
  const filteredTopics = q
    ? featuredTopics.filter((t) => t.title.toLowerCase().includes(q))
    : featuredTopics;
  const filteredChannels = q
    ? popularChannels.filter((c) => c.name.toLowerCase().includes(q))
    : popularChannels;
  const filteredPeople = q
    ? newPeople.filter((p) => p.name.toLowerCase().includes(q))
    : newPeople;

  return (
    <>
      {/* Search */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Themen, Kanäle oder Personen suchen …"
            className="w-full bg-gray-100 rounded-full px-4 pr-10 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 active:scale-90 transition-all"
              aria-label="Suche löschen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-white">
        {/* Trending Topics */}
        {filteredTopics.length > 0 && (
          <section className="border-b border-gray-100 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Angesagte Themen</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {filteredTopics.map((t) => (
                <button
                  key={t.title}
                  onClick={() => setActiveTopic(activeTopic === t.title ? null : t.title)}
                  className={`text-left border rounded-xl p-3 transition-all active:scale-[0.98] ${
                    activeTopic === t.title
                      ? "border-green-400 bg-green-50 ring-1 ring-green-200"
                      : "border-gray-200 hover:border-green-300 hover:bg-green-50/30"
                  }`}
                >
                  <span className="text-2xl">{t.emoji}</span>
                  <p className="font-semibold text-gray-900 text-sm mt-1">{t.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
                  <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-2 ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Nearby Posts */}
        {!q && (
          <section className="border-b border-gray-100 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">In deiner Nähe</h2>
            </div>
            <div className="space-y-3">
              {nearbyPosts.map((p) => {
                const liked = likedPosts.has(p.author);
                return (
                  <div key={p.author} className="flex gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className={`w-9 h-9 rounded-full ${p.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                      {p.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm text-gray-900">{p.author}</span>
                        <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded-full">{p.stadtteil}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-snug">{p.content}</p>
                      <button
                        onClick={() => toggleLike(p.author)}
                        className={`text-xs mt-1.5 font-medium active:scale-95 transition-all ${liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                      >
                        {liked ? "♥" : "♡"} {p.likes + (liked ? 1 : 0)}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Popular Channels */}
        {filteredChannels.length > 0 && (
          <section className="border-b border-gray-100 px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Beliebte Kanäle</h2>
            </div>
            <div className="space-y-2">
              {filteredChannels.map((c) => {
                const isJoined = joined.has(c.name);
                return (
                  <div key={c.name} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xl shrink-0">{c.emoji}</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">{c.name}</p>
                        <p className="text-xs text-gray-400">
                          {isJoined ? `${parseInt(c.members) + 1}.. Mitglieder · Beigetreten` : c.members}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleJoin(c.name)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 active:scale-95 transition-all inline-flex items-center gap-1 ${
                        isJoined
                          ? "bg-green-100 text-green-700"
                          : "bg-green-600 text-white hover:bg-green-700"
                      }`}
                    >
                      {isJoined ? (<><Check className="w-3 h-3" /> Beigetreten</>) : "Beitreten"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* New People */}
        {filteredPeople.length > 0 && (
          <section className="px-4 py-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-green-600" />
              <h2 className="font-semibold text-gray-800 text-sm">Vorgeschlagene Personen</h2>
            </div>
            <div className="space-y-3">
              {filteredPeople.map((p) => {
                const isFollowed = followed.has(p.name);
                return (
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
                      <p className="text-xs text-gray-400 truncate">{p.stadtteil} · {p.bio}</p>
                    </div>
                    <button
                      onClick={() => toggleFollow(p.name)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all shrink-0 active:scale-95 inline-flex items-center gap-1 ${
                        isFollowed
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "border border-green-600 text-green-600 hover:bg-green-50"
                      }`}
                    >
                      {isFollowed ? (<><Check className="w-3 h-3" /> Folge ich</>) : "Folgen"}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Empty state */}
        {q && filteredTopics.length === 0 && filteredChannels.length === 0 && filteredPeople.length === 0 && (
          <div className="px-4 py-16 text-center text-gray-400">
            <p className="text-sm">Keine Ergebnisse für „{query}".</p>
          </div>
        )}
      </div>
    </>
  );
}
