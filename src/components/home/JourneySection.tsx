import { journeyItems } from "@/lib/home-data";
import { UnitLocatorSection } from "./UnitLocatorSection";

export function JourneySection() {
  return (
    <section className="py-10">
      <div className="section-shell">
        {/* YOUR SCOUT JOURNEY */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6 rounded-2xl p-8" style={{backgroundColor: "#F2EFE9"}}>
          <div className="flex-1">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              YOUR <span className="text-orange-500">SCOUT</span> JOURNEY 🌿
            </h2>
            <p className="text-xl font-semibold text-slate-800 mb-2">Track. Achieve. Grow.</p>
            <p className="text-lg text-slate-700 mb-6">Your journey, your achievements.<br/>Every step counts!</p>
            <a href="#" className="inline-flex items-center gap-3 bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-900 transition cursor-pointer">
              VIEW YOUR JOURNEY
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center gap-4">
            {journeyItems.map((item) => (
              <div key={`${item.count}-${item.emoji}`} className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-md">
                <div className="text-5xl mb-2">{item.emoji}</div>
                <p className="text-center text-4xl font-black text-slate-900 mb-1">{item.count}</p>
                <p className="text-center text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unit Locator */}
        <UnitLocatorSection />
      </div>
    </section>
  );
}
