import { impactStats } from "@/lib/community-service-data";

export function OurImpact() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-4xl mb-4">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-black text-slate-800 mb-2">{stat.count}</p>
              <h3 className="text-lg font-bold text-slate-700 text-center">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
