import { successStories } from "@/lib/leadership-data";

export function SuccessStories() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="text-8xl mb-4">{story.avatar}</div>
              <p className="text-lg text-slate-600 italic mb-4">"{story.quote}"</p>
              <h3 className="text-xl font-bold text-slate-800">{story.name}</h3>
              <p className="text-slate-500">{story.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
