import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="relative">
        <Image
          src="/footer image.png"
          alt="Jauhar Scouts Footer"
          width={1440}
          height={800}
          className="w-full h-auto"
          priority
        />
        
        {/* VIEW YOUR JOURNEY Button Overlay */}
        <a
          href="#"
          className="absolute top-[10%] left-[5%] sm:top-[8%] sm:left-[3%] md:top-[6%] md:left-[2%] inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition hover:scale-105"
        >
          VIEW YOUR JOURNEY
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
        
        {/* FIND A GROUP Button Overlay */}
        <a
          href="#"
          className="absolute bottom-[20%] left-[5%] sm:bottom-[25%] sm:left-[8%] md:bottom-[30%] md:left-[10%] inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm cursor-pointer transition hover:scale-105"
        >
          FIND A GROUP
          <span className="text-base font-bold">→</span>
        </a>
      </div>
    </footer>
  );
}
