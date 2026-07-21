import Image from "next/image";

export function LeadershipHero() {
  return (
    <section className="relative w-full">
      <Image
        src="/leadership.png"
        alt="Leadership hero"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
}
