"use client";
import { useState } from "react";
import { MessageCircle, Repeat2, Heart, Share, BadgeCheck } from "lucide-react";
import { Post } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  Verkehr: "bg-orange-100 text-orange-700",
  Veranstaltung: "bg-purple-100 text-purple-700",
  Markt: "bg-amber-100 text-amber-700",
  Anliegen: "bg-red-100 text-red-700",
  Sport: "bg-blue-100 text-blue-700",
  Politik: "bg-green-100 text-green-700",
  Gastronomie: "bg-yellow-100 text-yellow-700",
  Sonstiges: "bg-gray-100 text-gray-700",
};

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [reposted, setReposted] = useState(false);
  const [reposts, setReposts] = useState(post.reposts);

  function toggleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  function toggleRepost() {
    setReposted(!reposted);
    setReposts(reposted ? reposts - 1 : reposts + 1);
  }

  return (
    <article className="bg-white border-b border-gray-200 px-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full ${post.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {post.avatarInitials}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-gray-900 text-sm">{post.author}</span>
              {post.verified && (
                <BadgeCheck className="w-4 h-4 text-green-600 shrink-0" />
              )}
              <span className="text-gray-400 text-sm">{post.handle}</span>
              <span className="text-gray-300 text-sm">·</span>
              <span className="text-gray-400 text-sm">{post.time}</span>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
              📍 {post.stadtteil}
            </span>
          </div>

          {/* Post text */}
          <p className="text-gray-800 text-sm leading-relaxed mt-1.5 mb-2">
            {post.content}
          </p>

          {/* Hashtags */}
          {post.hashtags && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {post.hashtags.map((tag) => (
                <span key={tag} className="text-green-600 text-xs font-medium hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Category */}
          <div className="mb-3">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[post.category] || categoryColors.Sonstiges}`}>
              {post.category}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5 text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors group">
              <div className="p-1.5 rounded-full group-hover:bg-blue-50">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-xs">{post.comments}</span>
            </button>
            <button
              onClick={toggleRepost}
              className={`flex items-center gap-1.5 transition-colors group ${reposted ? "text-green-600" : "hover:text-green-600"}`}
            >
              <div className="p-1.5 rounded-full group-hover:bg-green-50">
                <Repeat2 className="w-4 h-4" />
              </div>
              <span className="text-xs">{reposts}</span>
            </button>
            <button
              onClick={toggleLike}
              className={`flex items-center gap-1.5 transition-colors group ${liked ? "text-red-500" : "hover:text-red-500"}`}
            >
              <div className="p-1.5 rounded-full group-hover:bg-red-50">
                <Heart className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`} />
              </div>
              <span className="text-xs">{likes}</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-green-600 transition-colors group ml-auto">
              <div className="p-1.5 rounded-full group-hover:bg-green-50">
                <Share className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
