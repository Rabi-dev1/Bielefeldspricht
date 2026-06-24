"use client";
import { useState } from "react";
import PostComposer from "@/components/PostComposer";
import PostCard from "@/components/PostCard";
import RightPanel from "@/components/RightPanel";
import { feedPosts, Post } from "@/lib/posts";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>(feedPosts);
  const [toast, setToast] = useState(false);

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
    setPosts([newPost, ...posts]);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  }

  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      {/* Feed */}
      <div className="flex-1 min-w-0">
        {/* Toast */}
        {toast && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <span>✓</span> Beitrag erfolgreich geteilt!
          </div>
        )}

        {/* Feed header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 backdrop-blur-sm bg-white/95">
          <h1 className="font-bold text-gray-900 text-lg">Startseite</h1>
          <p className="text-sm text-gray-400">Was bewegt Bielefeld heute?</p>
        </div>

        {/* Composer */}
        <PostComposer onPost={addPost} />

        {/* Posts */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load more */}
        <div className="bg-white py-6 text-center border-b border-gray-200">
          <button className="text-sm text-green-600 font-semibold hover:underline">
            Weitere Beiträge laden
          </button>
        </div>
      </div>

      {/* Right panel */}
      <RightPanel />
    </div>
  );
}
