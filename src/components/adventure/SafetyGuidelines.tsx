import { safetyGuidelines } from "@/lib/adventure-data";

export function SafetyGuidelines() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Safety Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyGuidelines.map((guideline) => (
            <div key={guideline.id} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="text-4xl">{guideline.icon}</div>
              <p className="text-slate-700 font-medium">{guideline.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}