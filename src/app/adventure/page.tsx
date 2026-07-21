import { AdventureNavbar } from "@/components/adventure/AdventureNavbar";
import { AdventureFooter } from "@/components/adventure/AdventureFooter";
import Link from "next/link";
import { AdventureHero } from "@/components/adventure/AdventureHero";
import { AboutAdventure } from "@/components/adventure/AboutAdventure";
import { AdventureActivities } from "@/components/adventure/AdventureActivities";
import { AdventureGallery } from "@/components/adventure/AdventureGallery";
import { SkillsYoullLearn } from "@/components/adventure/SkillsYoullLearn";
import { UpcomingCamps } from "@/components/adventure/UpcomingCamps";
import { SafetyGuidelines } from "@/components/adventure/SafetyGuidelines";
import { AdventureStats } from "@/components/adventure/AdventureStats";
import { FinalCTA } from "@/components/adventure/FinalCTA";

export default function AdventurePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="relative">
        <AdventureNavbar />
      </div>
      <div className="py-4 px-6" style={{ backgroundColor: "#F2EFE9" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-800 font-semibold hover:text-blue-700 transition-colors">
            <span>←</span> Back to Home
          </Link>
        </div>
      </div>
      <AdventureHero />
      <AboutAdventure />
      <AdventureActivities />
      <AdventureGallery />
      <SkillsYoullLearn />
      <UpcomingCamps />
      <SafetyGuidelines />
      <AdventureStats />
      <FinalCTA />
      <AdventureFooter />
    </div>
  );
}