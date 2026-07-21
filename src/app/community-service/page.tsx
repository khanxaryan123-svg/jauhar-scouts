import Link from "next/link";
import { AdventureNavbar } from "@/components/adventure/AdventureNavbar";
import { AdventureFooter } from "@/components/adventure/AdventureFooter";
import { CommunityHero } from "@/components/community-service/CommunityHero";
import { AboutCommunity } from "@/components/community-service/AboutCommunity";
import { CommunityProgrammes } from "@/components/community-service/CommunityProgrammes";
import { OurImpact } from "@/components/community-service/OurImpact";
import { BenefitsVolunteering } from "@/components/community-service/BenefitsVolunteering";
import { CommunityFaq } from "@/components/community-service/CommunityFaq";
import { CommunityCta } from "@/components/community-service/CommunityCta";

export default function CommunityServicePage() {
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
        <CommunityHero />
        <AboutCommunity />
        <CommunityProgrammes />
        <OurImpact />
        <BenefitsVolunteering />
        <CommunityFaq />
        <CommunityCta />
      </main>
      <AdventureFooter />
    </div>
  );
}
