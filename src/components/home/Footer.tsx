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
      </div>
    </footer>
  );
}
