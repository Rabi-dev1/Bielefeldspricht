import type { Metadata } from "next";
import ProfilContent from "./ProfilContent";
import RightPanel from "@/components/RightPanel";

export const metadata: Metadata = {
  title: "Mein Profil",
  description: "Dein Profil auf Bielefeld spricht.",
};

export default function ProfilPage() {
  return (
    <div className="flex gap-6 w-full max-w-4xl px-0 sm:px-4 py-0 sm:py-6">
      <div className="flex-1 min-w-0">
        <ProfilContent />
      </div>
      <RightPanel />
    </div>
  );
}
