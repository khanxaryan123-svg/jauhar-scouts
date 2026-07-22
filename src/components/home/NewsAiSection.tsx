import Image from "next/image";
import { newsItems } from "@/lib/home-data";

export function NewsAiSection() {
  return (
    <section className="py-12" style={{backgroundColor: "#F2EFE9"}}>
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row items-start">
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <h2 className="text-2xl font-bold text-slate-800">
                  NEWS & UPCOMING EVENTS
                </h2>
                <span className="text-2xl">🌿</span>
              </div>
              <button className="border-2 border-green-700 text-green-700 px-4 py-1 rounded-lg text-sm font-bold hover:bg-green-700 hover:text-white transition">
                VIEW ALL
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="h-48 rounded-t-2xl overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-top"
                        priority
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center" style={{backgroundColor: item.headerColor}} />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="mb-2 inline-block rounded px-2 py-1 text-xs font-bold text-white" style={{backgroundColor: item.headerColor}}>
                      {item.tag}
                    </span>
                    <p className="text-xs text-slate-500 mb-2">{item.date}</p>
                    <h3 className="text-base leading-tight font-bold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-3 leading-tight">
                      {item.description}
                    </p>
                    <button className="flex items-center gap-1 text-green-600 text-xs font-semibold hover:text-green-700 transition">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* AI Scout Hub */}
          <aside className="lg:w-96 relative">
            <Image
              src="/Js Ai hub.png"
              alt="JS AI Hub"
              width={400}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl"
              priority
            />
            <button className="absolute bottom-6 left-4 bg-white text-purple-700 px-4 py-1 rounded-full font-bold shadow-lg hover:bg-gray-100 transition flex items-center gap-1 whitespace-nowrap text-xs">
              EXPLORE AI SCOUT HUB
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
