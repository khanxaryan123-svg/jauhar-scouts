import { journeyItems } from "@/lib/home-data";
import { UnitLocatorSection } from "./UnitLocatorSection";

export function JourneySection() {
  return (
    <section className="py-10">
      <div className="section-shell">
        {/* YOUR SCOUT JOURNEY */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6 rounded-2xl p-8"
          style={{ backgroundColor: "#F2EFE9" }}
        >
          {/* Left Content */}
          <div className="flex-1 max-w-sm">
            <h2 className="text-5xl font-black leading-tight text-slate-900 mb-5">
              YOUR <span className="text-orange-500">SCOUT</span>
              <br />
              JOURNEY <span className="text-3xl">🌿</span>
            </h2>

            <p className="text-3xl font-bold text-slate-900 mb-4">
              Track. Achieve. Grow.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Your journey, your achievements.
              <br />
              Every step counts!
            </p>

            {/* View Journey Button */}
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-5 rounded-full border-2 border-[#2D67C7] bg-[#123D87] px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0F3473]"
            >
              <div className="leading-none">
                <div className="text-base font-extrabold uppercase tracking-wide text-white">
                  VIEW YOUR
                </div>
                <div className="mt-1 text-base font-extrabold uppercase tracking-wide text-white">
                  JOURNEY
                </div>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-5-5 5 5-5 5"
                />
              </svg>
            </a>
          </div>

          {/* Journey Stats */}
          <div className="flex-1 flex flex-wrap items-center justify-center gap-4">
            {journeyItems.map((item) => (
              <div
                key={`${item.count}-${item.emoji}`}
                className="flex flex-col items-center bg-white rounded-2xl p-5 shadow-md min-w-[120px]"
              >
                <div className="text-5xl mb-3">{item.emoji}</div>

                <p className="text-4xl font-black text-slate-900">
                  {item.count}
                </p>

                <p className="mt-2 text-center text-sm font-medium text-slate-600">
                  {item.label}
                </p>
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