import { footerLinkGroups } from "@/lib/home-data";

export function AdventureFooter() {
  return (
    <footer className="relative">
      {/* Main Footer (no unit locator banner) */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 pt-8 pb-4 text-white">
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
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition w-12 h-12 flex items-center justify-center">
                  <img
                    src="/facebook icon.png?v=1"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition w-12 h-12 flex items-center justify-center">
                  <img
                    src="/X.png?v=1"
                    alt="X"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition w-12 h-12 flex items-center justify-center">
                  <img
                    src="/Instagram icon.png?v=1"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition w-12 h-12 flex items-center justify-center">
                  <img
                    src="/Youtube icon.png?v=1"
                    alt="YouTube"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition w-12 h-12 flex items-center justify-center">
                  <img
                    src="/Tiktok icon.png?v=1"
                    alt="TikTok"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full"
                  />
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
          {/* Powered by BRDigitech attribution */}
          <div className="mt-8 text-center text-xs text-white/60">
            Powered by BRDigitech
          </div>
        </div>
      </div>
    </footer>
  );
}
