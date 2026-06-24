"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Repeat2, Heart, Share, BadgeCheck, Bookmark, MoreHorizontal, Flag, Link2, BellOff } from "lucide-react";
import { Post } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  Verkehr:          "bg-orange-100 text-orange-700",
  Veranstaltung:    "bg-purple-100 text-purple-700",
  Markt:            "bg-amber-100 text-amber-700",
  Anliegen:         "bg-red-100 text-red-700",
  Sport:            "bg-blue-100 text-blue-700",
  Politik:          "bg-green-100 text-green-700",
  Gastronomie:      "bg-yellow-100 text-yellow-700",
  Infrastruktur:    "bg-cyan-100 text-cyan-700",
  Kultur:           "bg-violet-100 text-violet-700",
  Community:        "bg-pink-100 text-pink-700",
  Humor:            "bg-yellow-100 text-yellow-800",
  Diskussion:       "bg-sky-100 text-sky-700",
  Stadtentwicklung: "bg-teal-100 text-teal-700",
  Plattform:        "bg-teal-100 text-teal-700",
  Sonstiges:        "bg-gray-100 text-gray-700",
};

interface Props {
  post: Post;
  isNew?: boolean;
}

export default function PostCard({ post, isNew }: Props) {
  const [liked,    setLiked]    = useState(false);
  const [likes,    setLikes]    = useState(post.likes);
  const [reposted, setReposted] = useState(false);
  const [reposts,  setReposts]  = useState(post.reposts);
  const [saved,    setSaved]    = useState(false);
  const [likeKey,  setLikeKey]  = useState(0);
  const [repostKey,setRepostKey]= useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [reported, setReported] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!showMenu) return;
    function handler(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showMenu]);

  function toggleLike() {
    setLiked(p => !p);
    setLikes(p => liked ? p - 1 : p + 1);
    setLikeKey(k => k + 1);
  }

  function toggleRepost() {
    setReposted(p => !p);
    setReposts(p => reposted ? p - 1 : p + 1);
    setRepostKey(k => k + 1);
  }

  function report() {
    setReported(true);
    setShowMenu(false);
  }

  function copyLink() {
    navigator.clipboard.writeText(`https://bielefeldspricht.de/post/${post.id}`).catch(() => {});
    setShowMenu(false);
  }

  if (reported) {
    return (
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-5 flex items-center justify-between">
        <p className="text-sm text-gray-400">Beitrag gemeldet. Danke für dein Feedback.</p>
        <button onClick={() => setReported(false)} className="text-xs text-green-600 hover:underline">
          Rückgängig
        </button>
      </div>
    );
  }

  return (
    <article
      className={`bg-white border-b border-gray-100 px-4 py-4 transition-colors duration-150 hover:bg-gray-50/60 cursor-pointer ${isNew ? "animate-post-enter" : ""}`}
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className={`w-11 h-11 rounded-full ${post.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
          {post.avatarInitials}
        </div>

        <div className="flex-1 min-w-0">
          {/* Header row */}
          <div className="flex items-start justify-between gap-1">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0">
              <span className="font-bold text-gray-900 text-[15px] leading-tight">{post.author}</span>
              {post.verified && <BadgeCheck className="w-4 h-4 text-green-600 shrink-0" />}
              <span className="text-gray-400 text-sm hidden sm:inline">{post.handle}</span>
              <span className="text-gray-300 text-sm">·</span>
              <span className="text-gray-400 text-sm">{post.time}</span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100 hidden sm:inline-flex">
                📍 {post.stadtteil}
              </span>

              {/* 3-dot menu */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowMenu(s => !s); }}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full active:scale-90 transition-all ml-1"
                  aria-label="Mehr Optionen"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {showMenu && (
                  <div className="absolute right-0 top-8 z-30 bg-white border border-gray-200 rounded-xl shadow-xl w-44 py-1 text-sm">
                    <button
                      onClick={(e) => { e.stopPropagation(); setSaved(s => !s); setShowMenu(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 text-gray-700 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${saved ? "fill-green-600 text-green-600" : ""}`} />
                      {saved ? "Gespeichert ✓" : "Speichern"}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); copyLink(); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 text-gray-700 transition-colors"
                    >
                      <Link2 className="w-4 h-4" />
                      Link kopieren
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setShowMenu(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 active:bg-gray-100 text-gray-700 transition-colors"
                    >
                      <BellOff className="w-4 h-4" />
                      Stummschalten
                    </button>
                    <hr className="border-gray-100 my-1" />
                    <button
                      onClick={(e) => { e.stopPropagation(); report(); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-red-50 active:bg-red-100 text-red-500 transition-colors"
                    >
                      <Flag className="w-4 h-4" />
                      Melden
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stadtteil badge mobile */}
          <span className="sm:hidden inline-flex items-center gap-0.5 text-[11px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100 mt-1">
            📍 {post.stadtteil}
          </span>

          {/* Post text — preserve newlines */}
          <p className="text-[15px] text-gray-800 leading-snug mt-2 mb-2.5 whitespace-pre-line">
            {post.content}
          </p>

          {/* Hashtags */}
          {post.hashtags && post.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {post.hashtags.map((tag) => (
                <span key={tag} className="text-green-600 text-sm font-medium hover:underline cursor-pointer hover:text-green-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Category */}
          <div className="mb-3">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? categoryColors.Sonstiges}`}>
              {post.category}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between -ml-2">
            {/* Comment */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors group min-w-[52px]"
            >
              <span className="p-2 rounded-full group-hover:bg-blue-50 group-active:scale-90 transition-all">
                <MessageCircle className="w-[18px] h-[18px]" />
              </span>
              <span className="text-[13px] font-medium">{post.comments}</span>
            </button>

            {/* Repost */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleRepost(); }}
              className={`flex items-center gap-1 transition-colors group min-w-[52px] ${reposted ? "text-green-600" : "text-gray-400 hover:text-green-600"}`}
            >
              <span className="p-2 rounded-full group-hover:bg-green-50 group-active:scale-90 transition-all">
                <Repeat2 key={repostKey} className={`w-[18px] h-[18px] ${reposted ? "animate-heart-pop" : ""}`} />
              </span>
              <span key={`r-${repostKey}`} className={`text-[13px] font-medium ${reposted ? "animate-count-bump" : ""}`}>
                {reposts}
              </span>
            </button>

            {/* Like */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleLike(); }}
              className={`flex items-center gap-1 transition-colors group min-w-[52px] ${liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
            >
              <span className="p-2 rounded-full group-hover:bg-red-50 group-active:scale-90 transition-all">
                <Heart
                  key={likeKey}
                  className={`w-[18px] h-[18px] transition-all ${liked ? "fill-red-500 animate-heart-pop" : ""}`}
                />
              </span>
              <span key={`l-${likeKey}`} className={`text-[13px] font-medium ${liked ? "animate-count-bump" : ""}`}>
                {likes}
              </span>
            </button>

            {/* Bookmark */}
            <button
              onClick={(e) => { e.stopPropagation(); setSaved(s => !s); }}
              className={`flex items-center transition-colors group min-w-[44px] justify-center ${saved ? "text-green-600" : "text-gray-400 hover:text-green-600"}`}
              aria-label="Speichern"
            >
              <span className="p-2 rounded-full group-hover:bg-green-50 group-active:scale-90 transition-all">
                <Bookmark className={`w-[18px] h-[18px] ${saved ? "fill-green-600 animate-heart-pop" : ""}`} />
              </span>
            </button>

            {/* Share */}
            <button
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-gray-400 hover:text-green-600 transition-colors group min-w-[44px] justify-end"
              aria-label="Teilen"
            >
              <span className="p-2 rounded-full group-hover:bg-green-50 group-active:scale-90 transition-all">
                <Share className="w-[18px] h-[18px]" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
