"use client";
import { useState, useRef, useEffect } from "react";
import { Image, MapPin, Smile, X } from "lucide-react";

const MAX = 280;
const RADIUS = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const EMOJIS = [
  "😊","😂","🥹","🔥","💪","🙏","👍","❤️",
  "🎉","🌿","📍","🚲","⚽","☕","🍓","🌧️",
  "🏰","🌱","🎬","🍕","🚌","🏡","📢","✨",
];

interface Props {
  onPost?: (content: string) => void;
}

export default function PostComposer({ onPost }: Props) {
  const [text, setText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);

  // Close emoji picker when clicking outside
  useEffect(() => {
    if (!showEmoji) return;
    function handleClickOutside(e: MouseEvent) {
      if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
        setShowEmoji(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmoji]);

  function submit() {
    if (!text.trim()) return;
    onPost?.(text.trim());
    setText("");
    setShowEmoji(false);
    textareaRef.current?.focus();
  }

  function insertEmoji(emoji: string) {
    setText((t) => (t + emoji).slice(0, MAX));
    setShowEmoji(false);
    textareaRef.current?.focus();
  }

  function insertText(snippet: string) {
    setText((t) => (t.trimEnd() + " " + snippet + " ").slice(0, MAX));
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
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm">
          Du
        </div>

        <div className="flex-1">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) submit(); }}
            placeholder="Was passiert in deinem Stadtteil?"
            rows={3}
            className="w-full resize-none text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent leading-snug"
          />

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            {/* Toolbar */}
            <div className="relative flex items-center gap-0.5 -ml-1.5" ref={emojiRef}>
              <button
                onClick={() => insertText("📷")}
                aria-label="Foto"
                className="p-2 text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-90 rounded-full transition-all"
              >
                <Image className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => insertText("📍 Mitte")}
                aria-label="Standort"
                className="p-2 text-green-600 hover:bg-green-50 active:bg-green-100 active:scale-90 rounded-full transition-all"
              >
                <MapPin className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => setShowEmoji((s) => !s)}
                aria-label="Emoji"
                className={`p-2 rounded-full transition-all active:scale-90 ${
                  showEmoji ? "bg-green-100 text-green-700" : "text-green-600 hover:bg-green-50"
                }`}
              >
                <Smile className="w-[18px] h-[18px]" />
              </button>

              {/* Emoji picker — closes on outside click or emoji click */}
              {showEmoji && (
                <div className="absolute bottom-12 left-0 z-20 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 w-64">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500">Emoji auswählen</span>
                    <button
                      onClick={() => setShowEmoji(false)}
                      className="text-gray-400 hover:text-gray-600 active:scale-90 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-8 gap-1">
                    {EMOJIS.map((e) => (
                      <button
                        key={e}
                        onClick={() => insertEmoji(e)}
                        className="text-xl p-1 hover:bg-gray-100 rounded-lg active:scale-90 transition-all"
                        aria-label={e}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: progress ring + post button */}
            <div className="flex items-center gap-3">
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

          {/* Keyboard hint */}
          {text.length > 0 && (
            <p className="text-[11px] text-gray-300 mt-1.5">
              Strg+Enter zum Posten
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
