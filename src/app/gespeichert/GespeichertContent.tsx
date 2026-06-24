"use client";
import { useState } from "react";
import { Bookmark, BookmarkX } from "lucide-react";
import PostCard from "@/components/PostCard";
import { feedPosts } from "@/lib/posts";

// A curated subset of feed posts treated as "saved"
const savedIds = [4, 6, 7, 9, 13];

export default function GespeichertContent() {
  const [removed, setRemoved] = useState<Set<number>>(new Set());

  const saved = feedPosts.filter((p) => savedIds.includes(p.id) && !removed.has(p.id));

  function unsave(id: number) {
    setRemoved((prev) => new Set(prev).add(id));
  }

  if (saved.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center py-20 text-gray-400 px-6">
          <Bookmark className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          <p className="text-lg font-medium text-gray-600">Keine gespeicherten Beiträge</p>
          <p className="text-sm mt-1">Tippe bei einem Beitrag auf das Lesezeichen, um ihn hier zu sammeln.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <p className="px-4 py-3 text-sm text-gray-400 border-b border-gray-100">
        {saved.length} gespeicherte Beiträge
      </p>
      {saved.map((post) => (
        <div key={post.id} className="relative group">
          <PostCard post={post} />
          <button
            onClick={() => unsave(post.id)}
            className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-red-500 bg-white border border-gray-200 px-2.5 py-1.5 rounded-full active:scale-95 transition-all shadow-sm"
          >
            <BookmarkX className="w-3.5 h-3.5" />
            Entfernen
          </button>
        </div>
      ))}
    </div>
  );
}
