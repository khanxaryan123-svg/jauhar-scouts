import Image from "next/image";

export function GlobalHero() {
  return (
    <section className="relative w-full">
      <Image
        src="/global scouting.png"
        alt="Global Scouting hero"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
}
