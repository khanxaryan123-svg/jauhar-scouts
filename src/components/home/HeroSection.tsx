import Image from "next/image";
import { Navbar } from "./Navbar";

export function HeroSection() {
  return (
    <section className="relative w-full pt-52">
      <Image
        src="/ChatGPT Image Jul 20, 2026, 03_43_07 PM.png"
        alt="Jauhar Scouts hero section"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
      
      {/* Navbar overlay */}
      <Navbar />
      
      {/* Buttons Overlay */}
      <div className="absolute top-[55%] left-[8%] flex flex-col sm:flex-row gap-3 pointer-events-auto">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm shadow-lg hover:bg-blue-700 transition">
          JOIN THE ADVENTURE
          <span className="text-yellow-400 text-base font-bold">→</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 font-bold text-sm shadow-lg border-2 border-slate-700 hover:bg-slate-50 transition">
          DISCOVER SCOUTING
          <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
