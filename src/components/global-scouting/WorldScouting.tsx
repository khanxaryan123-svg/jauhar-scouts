import { worldScoutingItems } from "@/lib/global-scouting-data";

export function WorldScouting() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
        World Scouting
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worldScoutingItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className={`h-40 flex items-center justify-center text-6xl bg-gradient-to-br ${item.color}`}>
                {item.icon}
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
