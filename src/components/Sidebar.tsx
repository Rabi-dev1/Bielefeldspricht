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
  { href: "/benachrichtigungen", icon: Bell, label: "Benachrichtigungen" },
  { href: "/nachrichten", icon: Mail, label: "Nachrichten" },
  { href: "/gespeichert", icon: Bookmark, label: "Gespeichert" },
  { href: "/themen", icon: Radio, label: "Kanäle" },
  { href: "/abstimmungen", icon: Calendar, label: "Veranstaltungen" },
  { href: "/ueber-uns", icon: Info, label: "Bürgerinfo" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-64 xl:w-72 bg-white border-r border-gray-200 px-4 py-5 z-40">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 px-3 mb-6">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900 text-sm leading-tight">Bielefeld</div>
            <div className="text-green-600 font-semibold text-xs">spricht.</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-green-50 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-green-600" : "text-gray-500"}`} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Post button */}
        <div className="mt-4">
          <Link
            href="/melden"
            className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors text-sm"
          >
            <PenSquare className="w-4 h-4" />
            Beitrag schreiben
          </Link>
        </div>

        {/* User */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs">
              Du
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900">@du_aus_bielefeld</div>
              <div className="text-xs text-gray-400">Mitglied seit 2026</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex items-center justify-around px-2 py-2 z-40">
        {navItems.slice(0, 5).map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 p-2 rounded-lg ${
                active ? "text-green-600" : "text-gray-400"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px]">{label}</span>
            </Link>
          );
        })}
        <Link
          href="/melden"
          className="flex flex-col items-center gap-0.5 p-2 rounded-lg text-green-600"
        >
          <PenSquare className="w-5 h-5" />
          <span className="text-[10px]">Posten</span>
        </Link>
      </nav>
    </>
  );
}
