"use client";
import { useState } from "react";
import { Image, MapPin, Smile, X } from "lucide-react";

const MAX = 280;

export default function PostComposer() {
  const [text, setText] = useState("");
  const [posted, setPosted] = useState(false);

  function submit() {
    if (!text.trim()) return;
    setPosted(true);
    setTimeout(() => {
      setPosted(false);
      setText("");
    }, 2500);
  }

  const remaining = MAX - text.length;
  const over = remaining < 0;
  const nearLimit = remaining <= 20;

  if (posted) {
    return (
      <div className="bg-white border-b border-gray-200 px-4 py-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
          Du
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <span className="text-sm font-medium">✓ Dein Beitrag wurde gepostet!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm shrink-0">
          Du
        </div>
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Was passiert in deinem Stadtteil?"
            rows={3}
            className="w-full resize-none text-gray-800 placeholder-gray-400 text-base focus:outline-none bg-transparent leading-relaxed"
          />
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              {text.length > 0 && (
                <span className={`text-xs font-medium ${over ? "text-red-500" : nearLimit ? "text-orange-500" : "text-gray-400"}`}>
                  {remaining}
                </span>
              )}
              <button
                onClick={submit}
                disabled={!text.trim() || over}
                className="bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
