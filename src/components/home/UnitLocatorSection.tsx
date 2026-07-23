import { Search } from "lucide-react";
        <h3 className="text-2xl font-bold mb-2">
          <span className="text-orange-500">FIND</span> A SCOUT GROUP
          <br />
    <div className="relative flex flex-col lg:flex-row items-center gap-8 rounded-2xl p-6 bg-slate-900 text-white">
        </h3>
        <p className="text-slate-300 mb-4">Connect with scouts in your area<br/>and begin your adventure today.</p>
        <a href="#" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-base shadow-md hover:bg-orange-600 transition cursor-pointer">
          FIND A GROUP
          <span className="text-xl font-bold">→</span>
        </a>
        
        {/* Decorative Markers */}
        <div className="mt-8 flex flex-col gap-2">
          <div className="text-4xl">📍</div>
          <div className="text-2xl">🟠</div>
        </div>
      </div>
      
      {/* Map Side */}
      <div className="flex-1 z-10">
        <div className="relative">
          {/* Placeholder Map Image */}
          <div className="rounded-xl bg-gradient-to-br from-green-100 to-blue-100 p-6 flex items-center justify-center text-9xl rotate-[-5deg] shadow-2xl">
            🗺️
          </div>
          {/* Compass Decor */}
          <div className="absolute -right-8 bottom-0 text-8xl">🧭</div>
        </div>
      </div>
      
      {/* Right Content */}
      <div className="flex-1 flex flex-col gap-4 z-10">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Enter city or district..."
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <button className="rounded-lg bg-green-700 text-white p-3 hover:bg-green-800 transition-colors cursor-pointer">
            <Search className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-orange-500 font-bold text-xl">OR</span>
        </div>
        <a href="#" className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-3 rounded-lg font-bold text-base border-2 border-white shadow-md hover:bg-blue-900 transition cursor-pointer">
          VIEW MAP
        </a>
      </div>
    </div>
  );
}
