import Image from "next/image";

export function AboutAdventure() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-800 mb-6">What is the Adventure Programme?</h2>
            <p className="text-lg text-slate-700 mb-4">
              The Adventure Programme is a core part of Jauhar Scouts, focusing on outdoor activities 
              that challenge young people to step out of their comfort zones, connect with nature, 
              and develop essential life skills.
            </p>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Outdoor Activities Matter</h3>
            <ul className="text-lg text-slate-700 mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold text-xl">✓</span>
                Build physical fitness and endurance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold text-xl">✓</span>
                Foster teamwork and cooperation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold text-xl">✓</span>
                Develop problem-solving and decision-making skills
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 font-bold text-xl">✓</span>
                Create lasting memories and friendships
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Benefits of Adventure Learning</h3>
            <p className="text-lg text-slate-700">
              Through adventure learning, scouts gain confidence, resilience, and a deep appreciation 
              for the natural world. They learn to lead, follow, and support each other, preparing 
              them for life's challenges.
            </p>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/adventure planing.png"
                alt="Adventure planning"
                width={1000}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}