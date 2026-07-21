import { Search } from "lucide-react";
import { footerLinkGroups } from "@/lib/home-data";

export function Footer() {
  return (
    <footer className="relative">
      {/* Find a Scout Group Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-6">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-center md:text-left">
                <h3 className="text-white font-bold text-lg md:text-xl">FIND A SCOUT GROUP NEAR YOU!</h3>
                <p className="text-blue-100 text-sm">Connect with scouts in your area and begin your adventure today.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <input
                  type="text"
                  placeholder="Enter city or district..."
                  className="w-full px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-yellow-400"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-4 rounded-r-lg transition-all duration-200 shadow-[0_4px_0_0_#166534] hover:shadow-[0_2px_0_0_#166534] hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5">
                  <Search size={20} />
                </button>
              </div>
              <button className="bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-blue-900 font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-[0_4px_0_0_#92400e] hover:shadow-[0_2px_0_0_#92400e] hover:-translate-y-0.5 active:shadow-none active:translate-y-0.5 whitespace-nowrap">
                VIEW MAP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 pt-8 pb-4 text-white">
        <div className="relative -top-8">
          <svg viewBox="0 0 1440 100" className="w-full fill-current text-slate-800">
            <path d="M0,50 C300,0 600,100 900,50 C1200,0 1440,100 1440,100 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="section-shell relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Side: Brand & Social */}
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-blue-900 font-bold px-4 py-2 rounded-lg shadow-lg">
                  FIND A GROUP →
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white">
                  📘
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white">
                  𝕏
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white">
                  📷
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white">
                  📺
                </a>
                <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white">
                  💼
                </a>
              </div>
            </div>

            {/* Middle: Link Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {footerLinkGroups.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold text-yellow-300 uppercase tracking-wider">{group.title}</h4>
                  {group.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href="#"
                      className="text-sm text-white hover:text-yellow-300 transition"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Side: World Scouting */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-white whitespace-nowrap">A Member of World Scouting</span>
              <div className="flex items-center gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 bg-purple-800 text-2xl">
                  ⚜️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
