import { AdventureNavbar } from "@/components/adventure/AdventureNavbar";
import { AdventureFooter } from "@/components/adventure/AdventureFooter";
import Link from "next/link";
import { SkillsHero } from "@/components/skills-for-life/SkillsHero";
import { AboutSkills } from "@/components/skills-for-life/AboutSkills";
import { SkillCategories } from "@/components/skills-for-life/SkillCategories";
import { LearningOutcomes } from "@/components/skills-for-life/LearningOutcomes";
import { SkillsFaq } from "@/components/skills-for-life/SkillsFaq";
import { SkillsCta } from "@/components/skills-for-life/SkillsCta";

export default function SkillsForLifePage() {
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
      <SkillsHero />
      <AboutSkills />
      <SkillCategories />
      <LearningOutcomes />
      <SkillsFaq />
      <SkillsCta />
      <AdventureFooter />
    </div>
  );
}
