import { AdventureNavbar } from "@/components/adventure/AdventureNavbar";
import { AdventureFooter } from "@/components/adventure/AdventureFooter";
import Link from "next/link";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { AboutLeadership } from "@/components/leadership/AboutLeadership";
import { LeadershipProgrammes } from "@/components/leadership/LeadershipProgrammes";
import { LeadershipQualities } from "@/components/leadership/LeadershipQualities";
import { LeadershipActivities } from "@/components/leadership/LeadershipActivities";
import { LeadershipFaq } from "@/components/leadership/LeadershipFaq";
import { LeadershipCta } from "@/components/leadership/LeadershipCta";

export default function LeadershipPage() {
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
      <LeadershipHero />
      <AboutLeadership />
      <LeadershipProgrammes />
      <LeadershipQualities />
      <LeadershipActivities />
      <LeadershipFaq />
      <LeadershipCta />
      <AdventureFooter />
    </div>
  );
}
