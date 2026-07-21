import { adventureSkills } from "@/lib/adventure-data";

export function SkillsYoullLearn() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Skills You'll Learn
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {adventureSkills.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-4xl mb-4">
                {skill.emoji}
              </div>
              <h3 className="text-lg font-bold text-slate-800 text-center">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}