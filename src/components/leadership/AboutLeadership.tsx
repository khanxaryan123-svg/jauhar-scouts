export function AboutLeadership() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-800 mb-6">About Leadership</h2>
            <p className="text-lg text-slate-700 mb-4">
              Scouting has a long history of developing future leaders. Through hands-on experiences,
              scouts learn to take responsibility, make decisions, and lead teams with integrity and compassion.
            </p>
            <p className="text-lg text-slate-700">
              Our leadership programme empowers young people to discover their potential, serve others,
              and become leaders who make a positive difference in their communities and beyond.
            </p>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-96 flex items-center justify-center text-9xl">
                🏛️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
