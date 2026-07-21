import Image from "next/image";

export function AdventureHero() {
  return (
    <section className="relative w-full">
      <Image
        src="/adventure.png"
        alt="Adventure hero"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
}