import Link from "next/link";
import { MessageSquare } from "lucide-react";

const links = {
  Plattform: [
    { href: "/themen", label: "Alle Themen" },
    { href: "/abstimmungen", label: "Abstimmungen" },
    { href: "/melden", label: "Anliegen melden" },
    { href: "/ueber-uns", label: "Über uns" },
  ],
  Rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/cookies", label: "Cookie-Richtlinie" },
  ],
  Kontakt: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "mailto:hallo@bielefeldspricht.de", label: "hallo@bielefeldspricht.de" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a3a5c] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-[#4a7c59]" />
              <span className="font-serif font-bold text-lg">Bielefeld spricht</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              Die Bürgerplattform für Bielefeld. Gemeinsam gestalten wir unsere Stadt.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-300 mb-3">{group}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-blue-100 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Bielefeld spricht. Alle Rechte vorbehalten.</p>
          <p>Gemacht mit ♥ für Bielefeld</p>
        </div>
      </div>
    </footer>
  );
}
