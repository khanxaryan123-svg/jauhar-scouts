import { adventureStats } from "@/lib/adventure-data";

export function AdventureStats() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {adventureStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-white">
              <p className="text-5xl md:text-6xl font-black mb-2 relative inline-block" 
                 style={{
                   textShadow: "0 1px 0 #1e3a8a, 0 2px 0 #1e3a8a, 0 3px 0 #1e3a8a, 0 4px 0 #1e3a8a, 0 5px 0 #1e3a8a, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15)"
                 }}>
                {stat.count}
              </p>
              <p className="text-lg md:text-xl font-semibold relative"
                 style={{
                   textShadow: "0 1px 0 #1e3a8a, 0 2px 0 #1e3a8a, 0 3px 0 #1e3a8a, 0 4px 1px rgba(0,0,0,0.1)"
                 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}