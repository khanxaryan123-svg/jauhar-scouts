export function AboutSkills() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-800 mb-6">About Skills for Life</h2>
            <p className="text-lg text-slate-700 mb-4">
              Scouting is more than just camping and outdoor activities—it's about building practical life skills that prepare young people for success in all areas of life.
            </p>
            <p className="text-lg text-slate-700">
              Through hands-on learning, scouts develop confidence, responsibility, and leadership qualities that will serve them throughout their lives. Our programme covers a wide range of skills from first aid to navigation, cooking to teamwork.
            </p>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-96 flex items-center justify-center text-9xl">
                🏕️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
