"use client";
import { useState, useEffect } from "react";
import PostComposer from "@/components/PostComposer";
import PostCard from "@/components/PostCard";
import RightPanel from "@/components/RightPanel";
import { feedPosts, Post } from "@/lib/posts";

const livePosts: Post[] = [
  {
    id: 900,
    author: "Fahrrad Bielefeld e.V.",
    handle: "@fahrrad_bi",
    avatarInitials: "FB",
    avatarColor: "bg-lime-600",
    time: "Gerade eben",
    stadtteil: "Jöllenbeck",
    content: "🚴‍♀️ Sonntagsausfahrt entlang des Teutoburger Walds — morgen 9 Uhr ab Kesselbrink. Alle Level willkommen, Helm Pflicht! Schreibt gerne in die Kommentare ob ihr dabei seid.",
    comments: 5,
    reposts: 11,
    likes: 34,
    category: "Sport",
    hashtags: ["#Radfahren", "#Bielefeld"],
  },
  {
    id: 901,
    author: "Tanja R.",
    handle: "@tanja_r_bi",
    avatarInitials: "TR",
    avatarColor: "bg-rose-400",
    time: "Gerade eben",
    stadtteil: "Altstadt",
    content: "Unpopular opinion: Bielefeld ist die unterschätzteste Stadt Deutschlands. Leute, die noch nie hier waren, stellen sich eine graue Industriestadt vor. Dabei ist es hier wunderschön! 🏰🌳\n\nWer stimmt zu?",
    comments: 38,
    reposts: 29,
    likes: 187,
    category: "Diskussion",
    hashtags: ["#Bielefeld", "#Heimatliebe"],
  },
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(feedPosts);
  const [pending, setPending] = useState<Post[]>([]);
  const [toast, setToast] = useState(false);
  const [newIds, setNewIds] = useState<Set<number>>(new Set());

  // Simulate incoming posts
  useEffect(() => {
    const timers = livePosts.map((p, i) =>
      setTimeout(() => setPending((prev) => [p, ...prev]), 20_000 + i * 30_000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  function flushPending() {
    const ids = new Set(pending.map((p) => p.id));
    setNewIds(ids);
    setPosts((prev) => [...pending, ...prev]);
    setPending([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setNewIds(new Set()), 800);
  }

  function addPost(content: string) {
    const newPost: Post = {
      id: Date.now(),
      author: "Du",
      handle: "@ich",
      avatarInitials: "Du",
      avatarColor: "bg-green-500",
      time: "Gerade eben",
      stadtteil: "Mitte",
      content,
      comments: 0,
      reposts: 0,
      likes: 0,
      category: "Community",
    };
    setNewIds(new Set([newPost.id]));
    setPosts((prev) => [newPost, ...prev]);
    setToast(true);
    setTimeout(() => setToast(false), 3500);
    setTimeout(() => setNewIds(new Set()), 600);
  }

  function loadMore() {
    const older = feedPosts.slice(0, 8).map((p, i) => ({
      ...p,
      id: 2000 + posts.length + i,
      time: "Vor 2 Tagen",
    }));
    setPosts((prev) => [...prev, ...older]);
  }

  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">

        {/* Toast */}
        {toast && (
          <div className="fixed top-4 left-1/2 z-50 animate-toast-in bg-green-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl flex items-center gap-2 pointer-events-none">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Beitrag erfolgreich geteilt!
          </div>
        )}

        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-30 backdrop-blur-md bg-white/90">
          <h1 className="font-bold text-gray-900 text-lg">Startseite</h1>
          <p className="text-sm text-gray-400">Was bewegt Bielefeld heute?</p>
        </div>

        {/* Feed type tabs */}
        <div className="bg-white border-b border-gray-100 flex">
          <button className="flex-1 py-3 text-sm font-semibold text-green-700 border-b-2 border-green-600 transition-colors">
            Für dich
          </button>
          <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 border-b-2 border-transparent transition-colors">
            Folge ich
          </button>
          <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 border-b-2 border-transparent transition-colors">
            Stadtteil
          </button>
        </div>

        {/* Composer */}
        <PostComposer onPost={addPost} />

        {/* New posts banner */}
        {pending.length > 0 && (
          <button
            onClick={flushPending}
            className="w-full py-3 text-sm font-semibold text-green-600 bg-green-50 border-b border-green-100 hover:bg-green-100 active:bg-green-200 transition-colors animate-banner-drop"
          >
            ↑ {pending.length} {pending.length === 1 ? "neuer Beitrag" : "neue Beiträge"} — anzeigen
          </button>
        )}

        {/* Feed */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} isNew={newIds.has(post.id)} />
          ))}
        </div>

        {/* Load more */}
        <div className="bg-white py-8 text-center border-b border-gray-100">
          <button
            onClick={loadMore}
            className="text-sm text-green-600 font-semibold hover:text-green-700 active:scale-95 transition-all px-6 py-2 border border-green-300 rounded-full hover:bg-green-50"
          >
            Weitere Beiträge laden
          </button>
        </div>
      </div>

      <RightPanel />
    </div>
  );
}
