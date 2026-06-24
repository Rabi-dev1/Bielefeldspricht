"use client";
import { useState } from "react";
import { TrendingUp, Calendar, Users, Search, Check, X } from "lucide-react";
import { trendingTopics, upcomingEvents, stadtteile } from "@/lib/posts";

export default function RightPanel() {
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState<Set<string>>(new Set());
  const [savedEvents, setSavedEvents] = useState<Set<string>>(new Set());

  function toggleChannel(st: string) {
    setSubscribed((prev) => {
      const next = new Set(prev);
      if (next.has(st)) next.delete(st);
      else next.add(st);
      return next;
    });
  }

  function toggleEvent(name: string) {
    setSavedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <aside className="hidden lg:flex flex-col gap-4 w-80 xl:w-96">
      {/* Search */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative"
      >
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Bielefeld durchsuchen"
          className="w-full bg-white border border-gray-200 rounded-2xl pl-10 pr-9 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 active:scale-90 transition-all"
            aria-label="Suche löschen"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Trending */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Trends in Bielefeld</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {trendingTopics.map((topic) => (
            <button
              key={topic.tag}
              onClick={() => setQuery(topic.tag)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <div className="text-sm font-semibold text-green-700">{topic.tag}</div>
              <div className="text-xs text-gray-400 mt-0.5">{topic.count}</div>
            </button>
          ))}
        </div>
        <button className="w-full text-left px-4 py-3 text-sm text-green-600 font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors">
          Mehr anzeigen
        </button>
      </div>

      {/* Upcoming events */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <Calendar className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Demnächst in der Stadt</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {upcomingEvents.map((event) => {
            const saved = savedEvents.has(event.name);
            return (
              <div
                key={event.name}
                className="flex items-center justify-between gap-2 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-800 truncate">{event.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    {event.date} · {event.location}
                  </div>
                </div>
                <button
                  onClick={() => toggleEvent(event.name)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 active:scale-95 transition-all ${
                    saved
                      ? "bg-green-100 text-green-700"
                      : "border border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  {saved ? "✓ Dabei" : "Merken"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stadtteil channels */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <Users className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Stadtteil-Kanäle</h3>
        </div>
        <div className="px-4 py-3 flex flex-wrap gap-2">
          {stadtteile.map((st) => {
            const isSub = subscribed.has(st);
            return (
              <button
                key={st}
                onClick={() => toggleChannel(st)}
                className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full active:scale-95 transition-all ${
                  isSub
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {isSub && <Check className="w-3 h-3" />}
                {st}
              </button>
            );
          })}
        </div>
        {subscribed.size > 0 && (
          <p className="px-4 pb-3 text-xs text-gray-400">
            Du folgst {subscribed.size} {subscribed.size === 1 ? "Kanal" : "Kanälen"}.
          </p>
        )}
      </div>

      {/* Footer links */}
      <div className="px-1">
        <p className="text-xs text-gray-400 leading-relaxed">
          © 2026 Bielefeld spricht ·{" "}
          <a href="/impressum" className="hover:underline">Impressum</a> ·{" "}
          <a href="/datenschutz" className="hover:underline">Datenschutz</a> ·{" "}
          <a href="/kontakt" className="hover:underline">Hilfe</a>
        </p>
      </div>
    </aside>
  );
}
