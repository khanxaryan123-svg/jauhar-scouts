import { globalOpportunities } from "@/lib/global-scouting-data";

export function GlobalOpportunities() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
        Global Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {globalOpportunities.map((opp) => (
            <div key={opp.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="h-40 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-6xl">
                {opp.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{opp.title}</h3>
                <p className="text-slate-600 mb-4">{opp.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">{opp.difficulty}</span>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-indigo-700 to-purple-500 px-4 py-2 font-bold text-white hover:from-indigo-800 hover:to-purple-600 transition-all">
                Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
