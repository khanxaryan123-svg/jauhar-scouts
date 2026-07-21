import Image from "next/image";

export function CommunityHero() {
  return (
    <section className="relative w-full">
      <Image
        src="/community service.png"
        alt="Community Service hero"
        width={1440}
        height={1000}
        priority
        className="w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
}
