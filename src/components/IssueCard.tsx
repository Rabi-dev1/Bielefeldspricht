"use client";
import { useState } from "react";
import { ThumbsUp, MapPin, Users } from "lucide-react";
import { Issue, categoryColors, statusColors } from "@/lib/data";

interface Props {
  issue: Issue;
}

export default function IssueCard({ issue }: Props) {
  const [upvoted, setUpvoted] = useState(false);
  const [count, setCount] = useState(issue.upvotes);

  function toggle() {
    if (upvoted) {
      setCount((c) => c - 1);
    } else {
      setCount((c) => c + 1);
    }
    setUpvoted(!upvoted);
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col gap-3">
      {/* Header badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[issue.category]}`}>
          {issue.category}
        </span>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[issue.status]}`}>
          {issue.status}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 text-base leading-snug">{issue.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{issue.description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" />
          {issue.location}
        </span>
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          {issue.affectedCount} Personen betroffen
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-gray-100">
        <span className="text-xs text-gray-400">{issue.date}</span>
        <button
          onClick={toggle}
          className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full active:scale-95 transition-all ${
            upvoted
              ? "bg-green-600 text-white"
              : "bg-green-50 text-green-700 hover:bg-green-100"
          }`}
        >
          <ThumbsUp className="w-3.5 h-3.5" />
          {count}
        </button>
      </div>
    </div>
  );
}
