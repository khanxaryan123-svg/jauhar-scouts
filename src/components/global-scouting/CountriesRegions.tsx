import { regions } from "@/lib/global-scouting-data";

export function CountriesRegions() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
        Countries & Regions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div key={region.id} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className={`h-20 w-20 rounded-full bg-gradient-to-br ${region.color} flex items-center justify-center text-4xl mb-4`}>
                {region.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 text-center">{region.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
