import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="relative">
        <Image
          src="/Footer image.png"
          alt="Jauhar Scouts Footer"
          width={1440}
          height={800}
          className="w-full h-auto"
          priority
        />
        
        {/* Logo and Social Media Overlay */}
        <div className="absolute bottom-5 left-4 md:bottom-20 md:left-10 flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/JS logo With Simple name.png"
            alt="Jauhar Scouts Logo"
            width={60}
            height={60}
            className="h-auto"
          />
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/facebook icon.png"
                alt="Facebook"
                width={24}
                height={24}
                className="h-auto hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Instagram icon.png"
                alt="Instagram"
                width={24}
                height={24}
                className="h-auto hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/X.png"
                alt="X"
                width={24}
                height={24}
                className="h-auto hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Youtube icon.png"
                alt="YouTube"
                width={24}
                height={24}
                className="h-auto hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/Tiktok icon.png"
                alt="TikTok"
                width={24}
                height={24}
                className="h-auto hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* DISCOVER SCOUTING Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[24%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">About Us</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Membership</a>
        </div>

        {/* PROGRAMMES & SKILLS Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[36%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Event Calendar</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Activities</a>
        </div>

        {/* SCOUT LIFE Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[46%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Nestle Hub</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Community Hub</a>
        </div>

        {/* AI SCOUT HUB Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[54%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">AI Scout Mentor</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Smart Planners</a>
        </div>

        {/* SCOUT JOURNEY Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[64%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">My Journey</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Achievements</a>
        </div>

        {/* CONTACT US Submenu */}
        <div className="hidden md:flex absolute bottom-24 left-[73%] text-white flex flex-col gap-1.5">
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Info 31 Elliott</a>
          <a href="#" className="text-[13px] font-normal hover:text-orange-400 transition-colors">Mon–Pursat BM</a>
        </div>

        {/* FIND A GROUP Button Overlay */}
        <div className="absolute top-[60%] left-4 md:top-[68%] md:left-20">
          <button className="bg-orange-600 text-white px-6 py-3 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-md hover:bg-orange-700 transition flex items-center gap-2 md:gap-3">
             FIND A GROUP →
          </button>
        </div>

        {/* Search and View Map Overlay */}
        <div className="hidden md:flex absolute top-[50%] left-[76%] transform -translate-x-1/2 flex flex-col items-center gap-16">
          {/* Search Input Row */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-lg">
            <input
              type="text"
              placeholder="Enter city or district..."
              className="px-4 py-2 text-gray-700 focus:outline-none rounded"
            />
            <button className="bg-green-700 text-white p-2 rounded hover:bg-green-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          {/* VIEW MAP Button */}
          <button className="bg-blue-900 text-white px-12 py-3 rounded-lg font-bold text-lg border-2 border-white hover:bg-blue-950 transition-colors">
            VIEW MAP
          </button>
        </div>

        {/* VIEW YOUR JOURNEY Button */}
        <div className="hidden md:flex absolute top-[30%] left-[05%]">
          <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg border-2 border-yellow-400 hover:bg-blue-800 transition flex items-center gap-2">
            VIEW YOUR JOURNEY
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Powered by BRDigitech attribution */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-white/60">
          Powered by BRDigitech
        </div>


      </div>
    </footer>
  );
}
