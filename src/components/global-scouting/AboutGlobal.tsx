import Image from "next/image";

export function AboutGlobal() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-800 mb-6">About Global Scouting</h2>
            <p className="text-lg text-slate-700 mb-4">
            Scouting connects millions of young people around the world through shared values, adventures, and service.
            </p>
            <p className="text-lg text-slate-700">
            Through global programs, scouts build lasting friendships, learn about other cultures, and work together to create a better world.
            </p>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/global scouting about.png"
                alt="About Global Scouting"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
