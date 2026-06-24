"use client";
import { useState } from "react";
import { MapPin, Calendar, BadgeCheck, Settings } from "lucide-react";
import PostCard from "@/components/PostCard";
import { feedPosts } from "@/lib/posts";

const MY_POSTS = feedPosts.slice(0, 5).map((p, i) => ({
  ...p,
  id: 9000 + i,
  author: "Du",
  handle: "@du_aus_bielefeld",
  avatarInitials: "Du",
  avatarColor: "bg-green-500",
  time: ["Gerade eben", "12 Min.", "1 Std.", "3 Std.", "Gestern"][i],
  stadtteil: "Mitte",
}));

const tabs = ["Beiträge", "Antworten", "Medien", "Likes"] as const;

export default function ProfilContent() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Beiträge");
  const [following, setFollowing] = useState(false);

  return (
    <>
      {/* Cover */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600" />
        {/* Avatar */}
        <div className="absolute -bottom-6 left-4">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-md">
            Du
          </div>
        </div>
        {/* Settings */}
        <div className="absolute bottom-3 right-4 flex gap-2">
          <button
            onClick={() => setFollowing((f) => !f)}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full active:scale-95 transition-all border ${
              following
                ? "border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-500"
                : "bg-green-600 text-white border-green-600 hover:bg-green-700"
            }`}
          >
            {following ? "Folge ich" : "Profil teilen"}
          </button>
          <button className="p-1.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50 active:scale-90 transition-all text-gray-600">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Profile info */}
      <div className="bg-white px-4 pt-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-1.5 mb-0.5">
          <h1 className="font-black text-xl text-gray-900">Du aus Bielefeld</h1>
          <BadgeCheck className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-sm text-gray-400 mb-3">@du_aus_bielefeld</p>
        <p className="text-[15px] text-gray-700 leading-snug mb-3">
          Bielefelder durch und durch 🏰 Stadtteil Mitte · Nachbarschaft, Natur und alles was die Stadt bewegt.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mb-3">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Mitte, Bielefeld</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Dabei seit Juni 2026</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span><strong className="text-gray-900 font-bold">128</strong> <span className="text-gray-400">Folge ich</span></span>
          <span><strong className="text-gray-900 font-bold">42</strong> <span className="text-gray-400">Follower</span></span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 flex sticky top-0 z-20">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              tab === t ? "text-green-700 font-semibold border-green-600" : "text-gray-500 hover:bg-gray-50 border-transparent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white min-h-screen">
        {tab === "Beiträge" && MY_POSTS.map((p) => <PostCard key={p.id} post={p} />)}
        {tab !== "Beiträge" && (
          <div className="px-6 py-20 text-center text-gray-400">
            <p className="text-base font-medium text-gray-600 mb-1">Noch nichts hier</p>
            <p className="text-sm">Dieser Bereich ist noch leer.</p>
          </div>
        )}
      </div>
    </>
  );
}
