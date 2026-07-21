import { journeyItems } from "@/lib/home-data";
import { UnitLocatorSection } from "./UnitLocatorSection";

export function JourneySection() {
  return (
    <section className="py-10" style={{backgroundColor: "#F2EFE9"}}>
      <div className="section-shell">
        {/* YOUR SCOUT JOURNEY */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6 rounded-2xl p-6 border-2 border-slate-200" style={{backgroundColor: "#F2EFE9"}}>
          <div>
            <h2 className="text-2xl font-black text-green-800 mb-2">YOUR SCOUT JOURNEY</h2>
            <p className="text-slate-700 mb-4">Track, Achieve, Grow.<br/>Your journey, your achievements.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:bg-blue-700 transition">
              VIEW YOUR JOURNEY
            </button>
          </div>
          <div className="flex items-center gap-6">
            {journeyItems.map((item) => (
              <div key={`${item.count}-${item.emoji}`} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-green-800 text-3xl shadow-md">
                  {item.emoji}
                </div>
                <p className="mt-2 text-center text-xl font-black text-slate-800">{item.count}</p>
                <p className="text-center text-xs text-slate-600">{item.label}</p>
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
