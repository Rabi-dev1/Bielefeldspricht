"use client";
import { useState, useRef } from "react";
import { Image, MapPin, Smile } from "lucide-react";

const MAX = 280;
const RADIUS = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface Props {
  onPost?: (content: string) => void;
}

export default function PostComposer({ onPost }: Props) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function submit() {
    if (!text.trim()) return;
    onPost?.(text.trim());
    setText("");
    textareaRef.current?.focus();
  }

  const len = text.length;
  const remaining = MAX - len;
  const over = remaining < 0;
  const nearLimit = remaining <= 20 && !over;
  const progress = Math.min(len / MAX, 1);
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="flex gap-3">
        <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
          Du
        </div>
        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Was passiert in deinem Stadtteil?"
            rows={3}
            className="w-full resize-none text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent leading-snug"
          />
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-0.5 -ml-1.5">
              <button className="p-2 text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-90 rounded-full transition-all">
                <Image className="w-[18px] h-[18px]" />
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-90 rounded-full transition-all">
                <MapPin className="w-[18px] h-[18px]" />
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-90 rounded-full transition-all">
                <Smile className="w-[18px] h-[18px]" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              {/* Circular progress */}
              {len > 0 && (
                <svg width="26" height="26" viewBox="0 0 26 26" className="-rotate-90">
                  <circle cx="13" cy="13" r={RADIUS} fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                  <circle
                    cx="13" cy="13" r={RADIUS}
                    fill="none"
                    stroke={over ? "#ef4444" : nearLimit ? "#f97316" : "#16a34a"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={dashOffset}
                    className="transition-all duration-100"
                  />
                  {nearLimit && (
                    <text
                      x="13" y="13"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize="7"
                      fill={over ? "#ef4444" : "#f97316"}
                      transform="rotate(90 13 13)"
                      fontWeight="600"
                    >
                      {remaining}
                    </text>
                  )}
                </svg>
              )}
              <button
                onClick={submit}
                disabled={!text.trim() || over}
                className="bg-green-600 text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-green-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                Posten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
