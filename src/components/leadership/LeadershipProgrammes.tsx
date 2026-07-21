import { leadershipProgrammes } from "@/lib/leadership-data";

export function LeadershipProgrammes() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Leadership Programmes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipProgrammes.map((programme) => (
            <div key={programme.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className={`h-40 flex items-center justify-center text-7xl bg-gradient-to-br ${programme.color}`}>
                {programme.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{programme.title}</h3>
                <p className="text-slate-600">{programme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
