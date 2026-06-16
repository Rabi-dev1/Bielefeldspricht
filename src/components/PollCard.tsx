"use client";
import { useState } from "react";
import { Clock, Users } from "lucide-react";
import { Poll } from "@/lib/data";

interface Props {
  poll: Poll;
}

export default function PollCard({ poll }: Props) {
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);
  const [yesP, setYesP] = useState(poll.yesPercent);
  const [total, setTotal] = useState(poll.totalVotes);

  function vote(choice: "yes" | "no") {
    if (voted || !poll.active) return;
    setVoted(choice);
    const newTotal = total + 1;
    setTotal(newTotal);
    if (choice === "yes") {
      const newYesCount = Math.round((yesP / 100) * total) + 1;
      setYesP(Math.round((newYesCount / newTotal) * 100));
    } else {
      const yesCount = Math.round((yesP / 100) * total);
      setYesP(Math.round((yesCount / newTotal) * 100));
    }
  }

  const noP = 100 - yesP;
  const showResult = voted !== null || !poll.active;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e8e0d5] flex flex-col gap-4">
      <div>
        <h3 className="font-semibold text-[#1a3a5c] text-base leading-snug mb-1.5">{poll.question}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{poll.description}</p>
      </div>

      {/* Voting or result */}
      {showResult ? (
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className="text-[#4a7c59]">Ja</span>
              <span className="text-[#4a7c59]">{yesP}%</span>
            </div>
            <div className="h-2.5 bg-[#e8e0d5] rounded-full overflow-hidden">
              <div className="h-full bg-[#4a7c59] rounded-full transition-all duration-500" style={{ width: `${yesP}%` }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span className="text-gray-500">Nein</span>
              <span className="text-gray-500">{noP}%</span>
            </div>
            <div className="h-2.5 bg-[#e8e0d5] rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 rounded-full transition-all duration-500" style={{ width: `${noP}%` }} />
            </div>
          </div>
          {voted && (
            <p className="text-xs text-[#4a7c59] font-medium pt-1">✓ Du hast abgestimmt</p>
          )}
        </div>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => vote("yes")}
            className="flex-1 py-2.5 rounded-xl bg-[#4a7c59] text-white text-sm font-semibold hover:bg-[#3d6849] transition-colors"
          >
            Ja
          </button>
          <button
            onClick={() => vote("no")}
            className="flex-1 py-2.5 rounded-xl border-2 border-gray-300 text-gray-600 text-sm font-semibold hover:border-gray-400 transition-colors"
          >
            Nein
          </button>
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-gray-400 pt-1 border-t border-[#f0ebe4]">
        <span className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5" />
          {total.toLocaleString("de-DE")} Stimmen
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {poll.deadline}
        </span>
      </div>
    </div>
  );
}
