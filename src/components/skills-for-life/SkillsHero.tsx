import Image from "next/image";

export function SkillsHero() {
  return (
    <section className="relative w-full">
      <Image
        src="/skills for life.png"
        alt="Skills for Life hero"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
}
