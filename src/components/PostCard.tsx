"use client";
import { useState, useRef } from "react";
import { MessageCircle, Repeat2, Heart, Share, BadgeCheck } from "lucide-react";
import { Post } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  Verkehr:       "bg-orange-100 text-orange-700",
  Veranstaltung: "bg-purple-100 text-purple-700",
  Markt:         "bg-amber-100 text-amber-700",
  Anliegen:      "bg-red-100 text-red-700",
  Sport:         "bg-blue-100 text-blue-700",
  Politik:       "bg-green-100 text-green-700",
  Gastronomie:   "bg-yellow-100 text-yellow-700",
  Infrastruktur: "bg-cyan-100 text-cyan-700",
  Kultur:        "bg-violet-100 text-violet-700",
  Community:     "bg-pink-100 text-pink-700",
  Stadtentwicklung: "bg-sky-100 text-sky-700",
  Plattform:     "bg-teal-100 text-teal-700",
  Sonstiges:     "bg-gray-100 text-gray-700",
};

export default function PostCard({ post, isNew }: { post: Post; isNew?: boolean }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [reposted, setReposted] = useState(false);
  const [reposts, setReposts] = useState(post.reposts);
  const [likeKey, setLikeKey] = useState(0);
  const [repostKey, setRepostKey] = useState(0);
  const heartRef = useRef<SVGSVGElement>(null);

  function toggleLike() {
    setLiked(prev => !prev);
    setLikes(prev => liked ? prev - 1 : prev + 1);
    setLikeKey(k => k + 1);
  }

  function toggleRepost() {
    setReposted(prev => !prev);
    setReposts(prev => reposted ? prev - 1 : prev + 1);
    setRepostKey(k => k + 1);
  }

  return (
    <article
      className={`bg-white border-b border-gray-100 px-4 py-4 transition-colors duration-150 active:bg-gray-50 cursor-pointer
        ${isNew ? 'animate-post-enter' : ''}
        hover:bg-gray-50/60`}
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className={`w-11 h-11 rounded-full ${post.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm`}>
          {post.avatarInitials}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-1">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 min-w-0">
              <span className="font-bold text-gray-900 text-[15px] leading-tight">{post.author}</span>
              {post.verified && <BadgeCheck className="w-4 h-4 text-green-600 shrink-0" />}
              <span className="text-gray-400 text-sm hidden sm:inline">{post.handle}</span>
              <span className="text-gray-300 text-sm">·</span>
              <span className="text-gray-400 text-sm">{post.time}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100 shrink-0 ml-1">
              📍 {post.stadtteil}
            </span>
          </div>

          {/* Post text */}
          <p className="text-[15px] text-gray-800 leading-snug mt-2 mb-2.5">
            {post.content}
          </p>

          {/* Hashtags */}
          {post.hashtags && post.hashtags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {post.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="text-green-600 text-sm font-medium hover:underline cursor-pointer hover:text-green-700 transition-colors"
                >
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

          {/* Actions — wider tap targets on mobile */}
          <div className="flex items-center justify-between -ml-2">
            {/* Comment */}
            <button
              className="flex items-center gap-1 text-gray-400 hover:text-blue-500 transition-colors group min-w-[44px]"
              onClick={e => e.stopPropagation()}
            >
              <span className="p-2 rounded-full group-hover:bg-blue-50 group-active:scale-90 transition-all">
                <MessageCircle className="w-[18px] h-[18px]" />
              </span>
              <span className="text-[13px] font-medium">{post.comments}</span>
            </button>

            {/* Repost */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleRepost(); }}
              className={`flex items-center gap-1 transition-colors group min-w-[44px] ${reposted ? "text-green-600" : "text-gray-400 hover:text-green-600"}`}
            >
              <span className="p-2 rounded-full group-hover:bg-green-50 group-active:scale-90 transition-all">
                <Repeat2 key={repostKey} className={`w-[18px] h-[18px] ${reposted ? 'animate-heart-pop' : ''}`} />
              </span>
              <span key={`r-${repostKey}`} className={`text-[13px] font-medium ${reposted ? 'animate-count-bump' : ''}`}>
                {reposts}
              </span>
            </button>

            {/* Like — with pop animation */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleLike(); }}
              className={`flex items-center gap-1 transition-colors group min-w-[44px] ${liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
            >
              <span className="p-2 rounded-full group-hover:bg-red-50 group-active:scale-90 transition-all">
                <Heart
                  ref={heartRef}
                  key={likeKey}
                  className={`w-[18px] h-[18px] transition-all ${liked ? "fill-red-500 animate-heart-pop" : ""}`}
                />
              </span>
              <span key={`l-${likeKey}`} className={`text-[13px] font-medium ${liked ? 'animate-count-bump' : ''}`}>
                {likes}
              </span>
            </button>

            {/* Share */}
            <button
              className="flex items-center text-gray-400 hover:text-green-600 transition-colors group min-w-[44px] justify-end"
              onClick={e => e.stopPropagation()}
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
