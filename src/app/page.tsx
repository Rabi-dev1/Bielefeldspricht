"use client";
import { useState, useEffect } from "react";
import PostComposer from "@/components/PostComposer";
import PostCard from "@/components/PostCard";
import RightPanel from "@/components/RightPanel";
import { feedPosts, Post } from "@/lib/posts";

// Simulated incoming posts that trickle in after load
const incomingPosts: Post[] = [
  {
    id: 900,
    author: "Fahrrad Bielefeld e.V.",
    handle: "@fahrrad_bi",
    avatarInitials: "FB",
    avatarColor: "bg-lime-600",
    time: "Gerade eben",
    stadtteil: "Jöllenbeck",
    content: "🚴‍♀️ Radtour entlang des Teutoburger Walds — Sonntag 9 Uhr ab Kesselbrink. Alle Level willkommen, Helm pflicht! Meldet euch hier an.",
    comments: 5,
    reposts: 11,
    likes: 34,
    category: "Sport",
    hashtags: ["#Radfahren", "#Bielefeld"],
  },
  {
    id: 901,
    author: "Bielefeld Spielt",
    handle: "@bielefeld_spielt",
    avatarInitials: "BP",
    avatarColor: "bg-yellow-500",
    time: "Gerade eben",
    stadtteil: "Altstadt",
    content: "🎲 Das große Bürger-Spielfest kehrt zurück! 5. Juli am Alten Markt. Brett- und Kartenspiele für alle Altersgruppen. Freier Eintritt!",
    comments: 8,
    reposts: 19,
    likes: 61,
    category: "Veranstaltung",
    hashtags: ["#Bielefeld", "#Stadtfest2026"],
  },
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(feedPosts);
  const [newPosts, setNewPosts] = useState<Post[]>([]);
  const [toast, setToast] = useState(false);
  const [newIds, setNewIds] = useState<Set<number>>(new Set());
  const incomingRef = { current: 0 };

  // Simulate incoming posts after a delay
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    incomingPosts.forEach((p, i) => {
      timers.push(setTimeout(() => {
        setNewPosts(prev => [p, ...prev]);
      }, 18000 + i * 25000));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  function loadNewPosts() {
    const ids = new Set(newPosts.map(p => p.id));
    setNewIds(ids);
    setPosts(prev => [...newPosts, ...prev]);
    setNewPosts([]);
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
    const id = newPost.id;
    setNewIds(new Set([id]));
    setPosts(prev => [newPost, ...prev]);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    setTimeout(() => setNewIds(new Set()), 600);
  }

  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        {/* Toast */}
        {toast && (
          <div className="fixed top-4 left-1/2 z-50 animate-toast-in bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Beitrag erfolgreich geteilt!
          </div>
        )}

        {/* Feed header */}
        <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-30 backdrop-blur-md bg-white/90">
          <h1 className="font-bold text-gray-900 text-lg">Startseite</h1>
          <p className="text-sm text-gray-400">Was bewegt Bielefeld heute?</p>
        </div>

        {/* Composer */}
        <PostComposer onPost={addPost} />

        {/* "New posts" live banner */}
        {newPosts.length > 0 && (
          <button
            onClick={loadNewPosts}
            className="w-full py-3 text-sm font-semibold text-green-600 bg-green-50 border-b border-green-100 hover:bg-green-100 transition-colors animate-banner-drop"
          >
            ↑ {newPosts.length} neue Beiträge anzeigen
          </button>
        )}

        {/* Posts */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} isNew={newIds.has(post.id)} />
          ))}
        </div>

        {/* Load more */}
        <div className="bg-white py-6 text-center border-b border-gray-100">
          <button className="text-sm text-green-600 font-semibold hover:text-green-700 transition-colors active:scale-95">
            Weitere Beiträge laden
          </button>
        </div>
      </div>

      <RightPanel />
    </div>
  );
}
