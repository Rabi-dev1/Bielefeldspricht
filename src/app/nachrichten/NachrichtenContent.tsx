"use client";
import { useState } from "react";
import { X, Check } from "lucide-react";

interface Conversation {
  id: number;
  name: string;
  handle: string;
  initials: string;
  color: string;
  lastMessage: string;
  time: string;
  unread: number;
  verified?: boolean;
}

const initial: Conversation[] = [
  { id: 1, name: "Markus K.", handle: "@markus_brackwede", initials: "MK", color: "bg-teal-500", lastMessage: "Danke für deine Unterstützung beim Gehweg-Thema! 💪", time: "5 Min.", unread: 2 },
  { id: 2, name: "Stadt Bielefeld", handle: "@stadt_bielefeld", initials: "ST", color: "bg-blue-600", lastMessage: "Ihr Anliegen wurde an das Tiefbauamt weitergeleitet.", time: "23 Min.", unread: 1, verified: true },
  { id: 3, name: "Lena aus Schildesche", handle: "@lena_bi", initials: "LE", color: "bg-purple-500", lastMessage: "Kommst du heute Abend zum Open-Air-Kino?", time: "1 Std.", unread: 0 },
  { id: 4, name: "Grüne Bielefeld", handle: "@gruene_bi", initials: "GR", color: "bg-green-600", lastMessage: "Wir laden dich zur Bürgerversammlung am Dienstag ein.", time: "3 Std.", unread: 0, verified: true },
  { id: 5, name: "Kemal Y.", handle: "@kemal_brackwede", initials: "KY", color: "bg-emerald-500", lastMessage: "Super, wir sehen uns Samstag im Nachbarschaftsgarten!", time: "Gestern", unread: 0 },
  { id: 6, name: "Nina S.", handle: "@nina_sennestadt", initials: "NS", color: "bg-pink-500", lastMessage: "Hast du das Sommerkonzert der Musikschule schon gehört?", time: "Gestern", unread: 0 },
  { id: 7, name: "Aysun T.", handle: "@aysun_bi", initials: "AY", color: "bg-rose-500", lastMessage: "Die Stadt hat geantwortet! Der Spielplatz wird im August renoviert.", time: "Di.", unread: 0 },
  { id: 8, name: "Jöllenbecker Nachbarschaft", handle: "@joellenbeck_bi", initials: "JN", color: "bg-indigo-500", lastMessage: "Danke für deine Teilnahme an der Abstimmung 🙏", time: "Mo.", unread: 0 },
];

export default function NachrichtenContent() {
  const [conversations, setConversations] = useState(initial);
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  function openConversation(id: number) {
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
    setOpenId(id);
  }

  function markAllRead() {
    setConversations((prev) => prev.map((c) => ({ ...c, unread: 0 })));
  }

  const totalUnread = conversations.reduce((s, c) => s + c.unread, 0);
  const q = query.trim().toLowerCase();
  const filtered = q
    ? conversations.filter((c) => c.name.toLowerCase().includes(q) || c.lastMessage.toLowerCase().includes(q))
    : conversations;

  const active = conversations.find((c) => c.id === openId);

  return (
    <>
      {/* Search + actions */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nachrichten durchsuchen"
            className="w-full bg-gray-100 rounded-full px-4 pr-9 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 active:scale-90 transition-all" aria-label="Suche löschen">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {totalUnread > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs font-semibold text-green-600 hover:text-green-700 whitespace-nowrap active:scale-95 transition-all"
          >
            Alle gelesen
          </button>
        )}
      </div>

      {/* Conversations */}
      <div className="bg-white divide-y divide-gray-100">
        {filtered.map((c) => (
          <button
            key={c.id}
            onClick={() => openConversation(c.id)}
            className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            <div className={`w-12 h-12 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="font-semibold text-gray-900 text-sm truncate">{c.name}</span>
                  {c.verified && (
                    <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-gray-400">{c.time}</span>
                  {c.unread > 0 && (
                    <span className="w-5 h-5 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
              <p className={`text-sm truncate mt-0.5 ${c.unread > 0 ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                {c.lastMessage}
              </p>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="px-4 py-16 text-center text-gray-400 text-sm">
            Keine Unterhaltung gefunden.
          </div>
        )}
      </div>

      {/* Conversation modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/30 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-xl flex flex-col max-h-[80vh] animate-banner-drop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <div className={`w-9 h-9 rounded-full ${active.color} flex items-center justify-center text-white font-bold text-xs`}>
                {active.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-900 truncate">{active.name}</div>
                <div className="text-xs text-gray-400">{active.handle}</div>
              </div>
              <button onClick={() => setOpenId(null)} className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-full active:scale-90 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-gray-700 max-w-[75%] shadow-sm">
                  {active.lastMessage}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-green-600 text-white rounded-2xl rounded-tr-sm px-3 py-2 text-sm max-w-[75%] shadow-sm">
                  Hi {active.name.split(" ")[0]}, danke für die Nachricht! 👍
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 px-4 py-3 border-t border-gray-100">
              <input
                type="text"
                placeholder="Nachricht schreiben …"
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
              />
              <button type="submit" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 active:scale-90 transition-all">
                <Check className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
