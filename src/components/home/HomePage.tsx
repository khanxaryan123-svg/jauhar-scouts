import Image from "next/image";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { Navbar } from "@/components/home/Navbar";
import { NewsAiSection } from "@/components/home/NewsAiSection";
import { ProgrammesSection } from "@/components/home/ProgrammesSection";

export function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <ProgrammesSection />
      <NewsAiSection />
      <Footer />
    </main>
  );
}
