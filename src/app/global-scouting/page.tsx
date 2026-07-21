import Link from "next/link";
import { AdventureNavbar } from "@/components/adventure/AdventureNavbar";
import { AdventureFooter } from "@/components/adventure/AdventureFooter";
import { GlobalHero } from "@/components/global-scouting/GlobalHero";
import { AboutGlobal } from "@/components/global-scouting/AboutGlobal";
import { WorldScouting } from "@/components/global-scouting/WorldScouting";
import { GlobalOpportunities } from "@/components/global-scouting/GlobalOpportunities";
import { GlobalBenefits } from "@/components/global-scouting/GlobalBenefits";
import { GlobalFaq } from "@/components/global-scouting/GlobalFaq";
import { GlobalCta } from "@/components/global-scouting/GlobalCta";

export default function GlobalScoutingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AdventureNavbar />
      <main className="flex-1">
        <div className="px-6 py-8" style={{ backgroundColor: "#F2EFE9" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
        <GlobalHero />
        <AboutGlobal />
        <WorldScouting />
        <GlobalOpportunities />
        <GlobalBenefits />
        <GlobalFaq />
        <GlobalCta />
      </main>
      <AdventureFooter />
    </div>
  );
}
