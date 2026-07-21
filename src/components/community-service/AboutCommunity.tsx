export function AboutCommunity() {
  return (
    <section className="py-16 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-black text-slate-800 mb-6">About Community Service</h2>
            <p className="text-lg text-slate-700 mb-4">
              Community service is at the heart of scouting. Through service projects, scouts learn the value of giving back, develop empathy, and become responsible citizens.
            </p>
            <p className="text-lg text-slate-700">
              From tree plantations to food distribution, our community service initiatives aim to make a lasting positive impact on the lives of those around us.
            </p>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 h-96 flex items-center justify-center text-9xl">
                🤝
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
