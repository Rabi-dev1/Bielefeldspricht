"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare } from "lucide-react";

const navLinks = [
  { href: "/themen", label: "Themen" },
  { href: "/abstimmungen", label: "Abstimmungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f9fafb]/95 backdrop-blur border-b border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-[#15803d] text-lg">
            <MessageSquare className="w-6 h-6 text-[#16a34a]" />
            <span className="font-serif">Bielefeld spricht</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-[#15803d] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/melden"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#15803d] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#166534] transition-colors"
            >
              Anliegen melden
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-600"
              aria-label="Menü"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f9fafb] border-t border-[#e5e7eb] px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-[#15803d]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/melden"
            onClick={() => setOpen(false)}
            className="block text-center bg-[#15803d] text-white font-semibold px-4 py-3 rounded-full hover:bg-[#166534] transition-colors mt-2"
          >
            Anliegen melden
          </Link>
        </div>
      )}
    </header>
  );
}
