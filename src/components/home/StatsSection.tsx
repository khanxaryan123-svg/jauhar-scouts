import { stats } from "@/lib/home-data";

export function StatsSection() {
  return (
    <section className="bg-white py-8">
      <div className="section-shell">
        <div className="rounded-[2rem] border-4 border-blue-950 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-8 shadow-[0_20px_50px_rgba(30,58,138,0.5)]">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="mb-3 flex items-center justify-center gap-4">
                  <div className="rounded-full bg-gradient-to-br from-blue-400/40 to-blue-300/20 p-3 text-4xl shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                    {stat.emoji}
                  </div>
                  <p className="text-5xl font-black text-yellow-300 drop-shadow-[0_2px_8px_rgba(250,204,21,0.4)]">
                    {stat.value}
                  </p>
                </div>
                <p className="text-base font-bold leading-tight text-white drop-shadow-md">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
