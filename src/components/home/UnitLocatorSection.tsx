import { Search } from "lucide-react";

export function UnitLocatorSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 rounded-2xl p-6 border-2 border-slate-200 bg-gradient-to-r from-blue-700 to-blue-500">
      {/* Map Side */}
      <div className="flex-1">
        <div className="relative">
          <div className="rounded-xl bg-gradient-to-br from-green-100 to-blue-100 p-6 flex items-center justify-center text-9xl">
            🗺️
          </div>
          <div className="absolute -bottom-4 -left-4 text-4xl">🧭</div>
        </div>
      </div>
      {/* Form Side */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white">FIND A SCOUT GROUP NEAR YOU!</h3>
          <p className="text-blue-100">Connect with scouts in your area and begin your adventure today.</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter city or district..."
                className="w-full rounded-full border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <button className="rounded-full bg-green-700 text-white p-2 hover:bg-green-800 transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex-1 rounded-full bg-white border-2 border-blue-700 px-6 py-2 font-bold text-blue-700 shadow-md hover:shadow-lg transition-all">
            VIEW MAP →
          </button>
          <div className="text-5xl">🧭</div>
        </div>
      </div>
    </div>
  );
}
