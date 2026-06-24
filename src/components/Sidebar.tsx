"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, Hash, Bell, Mail, Bookmark,
  Radio, Calendar, Info, PenSquare, Leaf
} from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Startseite" },
  { href: "/entdecken", icon: Hash, label: "Entdecken" },
  { href: "/benachrichtigungen", icon: Bell, label: "Benachrichtigungen", badge: 4 },
  { href: "/nachrichten", icon: Mail, label: "Nachrichten", badge: 3 },
  { href: "/gespeichert", icon: Bookmark, label: "Gespeichert" },
  { href: "/themen", icon: Radio, label: "Kanäle" },
  { href: "/abstimmungen", icon: Calendar, label: "Abstimmungen" },
  { href: "/ueber-uns", icon: Info, label: "Bürgerinfo" },
];

const mobileNav = navItems.slice(0, 5);

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 xl:w-72 bg-white border-r border-gray-100 px-4 py-5 z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 px-3 mb-7 group">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">Bielefeld</div>
            <div className="text-green-600 font-bold text-xs tracking-wide">spricht.</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map(({ href, icon: Icon, label, badge }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[15px] font-medium transition-all active:scale-95 ${
                  active
                    ? "bg-green-50 text-green-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="relative">
                  <Icon className={`w-[22px] h-[22px] ${active ? "text-green-600" : "text-gray-500"}`} />
                  {badge && !active && (
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </div>
                {label}
                {badge && !active && (
                  <span className="ml-auto text-[11px] font-bold text-white bg-green-600 px-1.5 py-0.5 rounded-full">
                    {badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Post button */}
        <div className="mt-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 active:scale-95 transition-all text-sm shadow-sm"
          >
            <PenSquare className="w-4 h-4" />
            Beitrag schreiben
          </button>
        </div>

        {/* User */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm">
              Du
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">@du_aus_bielefeld</div>
              <div className="text-xs text-gray-400">Mitglied seit 2026</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 flex items-center px-1 pb-safe z-40 shadow-[0_-1px_12px_rgba(0,0,0,0.06)]">
        {mobileNav.map(({ href, icon: Icon, label, badge }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 flex-1 py-3 px-1 rounded-xl transition-all active:scale-90 ${
                active ? "text-green-600" : "text-gray-400"
              }`}
            >
              <div className="relative">
                <Icon className={`w-[22px] h-[22px] ${active ? "stroke-[2.5]" : ""}`} />
                {badge && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-green-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-medium ${active ? "font-semibold" : ""}`}>{label}</span>
            </Link>
          );
        })}
        {/* Floating post button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-center gap-0.5 flex-1 py-3 px-1 text-green-600 active:scale-90 transition-all"
        >
          <div className="w-[38px] h-[38px] bg-green-600 rounded-full flex items-center justify-center shadow-md -mt-4">
            <PenSquare className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] font-medium text-green-600 mt-0.5">Posten</span>
        </button>
      </nav>
    </>
  );
}
