import { adventureActivities } from "@/lib/adventure-data";

export function AdventureActivities() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Adventure Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adventureActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="h-40 flex items-center justify-center text-7xl" style={{backgroundColor: activity.color}}>
                {activity.id === 1 && "🏕️"}
                {activity.id === 2 && "🥾"}
                {activity.id === 3 && "🧗"}
                {activity.id === 4 && "🧭"}
                {activity.id === 5 && "🔥"}
                {activity.id === 6 && "🌲"}
                {activity.id === 7 && "🏔️"}
                {activity.id === 8 && "🎯"}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{activity.title}</h3>
                <p className="text-slate-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}