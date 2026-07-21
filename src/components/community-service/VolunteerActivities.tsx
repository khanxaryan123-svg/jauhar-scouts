import { volunteerActivities } from "@/lib/community-service-data";

export function VolunteerActivities() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Volunteer Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volunteerActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="h-40 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-6xl">
                {activity.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{activity.title}</h3>
                <p className="text-slate-600 mb-4">{activity.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">{activity.difficulty}</span>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 font-bold text-white hover:from-green-800 hover:to-green-600 transition-all">
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
