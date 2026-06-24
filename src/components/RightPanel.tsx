import { TrendingUp, Calendar, Users, Search } from "lucide-react";
import { trendingTopics, upcomingEvents, stadtteile } from "@/lib/posts";

export default function RightPanel() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-80 xl:w-96">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Bielefeld durchsuchen"
          className="w-full bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-200"
        />
      </div>

      {/* Trending */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <TrendingUp className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Trends in Bielefeld</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {trendingTopics.map((topic) => (
            <div key={topic.tag} className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="text-sm font-semibold text-green-700">{topic.tag}</div>
              <div className="text-xs text-gray-400 mt-0.5">{topic.count}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming events */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <Calendar className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Demnächst in der Stadt</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {upcomingEvents.map((event) => (
            <div key={event.name} className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="text-sm font-semibold text-gray-800">{event.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">
                {event.date} · {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stadtteil channels */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
          <Users className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-gray-900 text-sm">Stadtteil-Kanäle</h3>
        </div>
        <div className="px-4 py-3 flex flex-wrap gap-2">
          {stadtteile.map((st) => (
            <button
              key={st}
              className="text-xs bg-green-600 text-white font-medium px-3 py-1.5 rounded-full hover:bg-green-700 transition-colors"
            >
              {st}
            </button>
          ))}
        </div>
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
