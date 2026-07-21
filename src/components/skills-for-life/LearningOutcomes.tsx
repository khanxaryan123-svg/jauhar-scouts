import { learningOutcomes } from "@/lib/skills-for-life-data";

export function LearningOutcomes() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Learning Outcomes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {learningOutcomes.map((outcome) => (
            <div key={outcome.id} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-4xl mb-4">
                {outcome.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 text-center">{outcome.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
