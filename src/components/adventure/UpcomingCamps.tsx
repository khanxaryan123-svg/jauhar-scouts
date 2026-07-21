import { upcomingCamps } from "@/lib/adventure-data";

export function UpcomingCamps() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12">
          Upcoming Adventure Camps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingCamps.map((camp) => (
            <div key={camp.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
              <div className="h-40 bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-6xl">
                🏕️
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{camp.name}</h3>
                <p className="text-slate-600 mb-1 flex items-center gap-2">
                  <span>📍</span> {camp.location}
                </p>
                <p className="text-slate-600 mb-1 flex items-center gap-2">
                  <span>📅</span> {camp.date}
                </p>
                <p className="text-slate-600 mb-4 flex items-center gap-2">
                  <span>⚠️</span> {camp.difficulty}
                </p>
                <button className="w-full rounded-full bg-gradient-to-r from-green-700 to-green-500 px-4 py-2 font-bold text-white hover:from-green-800 hover:to-green-600 transition-all">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}