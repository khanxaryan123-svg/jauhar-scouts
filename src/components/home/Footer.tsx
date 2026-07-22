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

        {/* Powered by BRDigitech attribution */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-white/60">
          Powered by BRDigitech
        </div>
      </div>
    </footer>
  );
}
