import PostComposer from "@/components/PostComposer";
import PostCard from "@/components/PostCard";
import RightPanel from "@/components/RightPanel";
import { feedPosts } from "@/lib/posts";

export default function HomePage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      {/* Feed */}
      <div className="flex-1 min-w-0">
        {/* Feed header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-30 backdrop-blur-sm bg-white/95">
          <h1 className="font-bold text-gray-900 text-lg">Startseite</h1>
          <p className="text-sm text-gray-400">Was bewegt Bielefeld heute?</p>
        </div>

        {/* Composer */}
        <PostComposer />

        {/* Posts */}
        <div>
          {feedPosts.map((post) => (
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
