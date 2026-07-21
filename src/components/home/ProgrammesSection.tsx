import Link from "next/link";
import { programmes } from "@/lib/home-data";

export function ProgrammesSection() {
  return (
    <section className="py-12" style={{backgroundColor: "#F2EFE9"}}>
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {programmes.map((programme) => (
            <Link key={programme.title} href={programme.link} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl" style={{backgroundColor: "#F2EFE9"}}>
                {/* Card Header (we'll use colored divs as placeholders for illustrations) */}
                <div className="h-40 flex items-center justify-center text-6xl rounded-t-2xl" style={{backgroundColor: programme.headerColor}}>
                  {/* Placeholder illustration (we can replace with real images later) */}
                </div>

                {/* Icon Circle */}
                <div className="flex justify-center -mt-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-3xl">
                    {programme.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 text-center pt-2">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {programme.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-tight">
                    {programme.description}
                  </p>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-semibold mx-auto hover:text-green-700 transition">
                    Read More <span>→</span>
                  </div>
                </div>

                {/* Badge for last card */}
                {programme.hasBadge && (
                  <div className="absolute -top-2 -right-2 rotate-12">
                    <div className="w-24 h-32 flex items-center justify-center rounded-2xl bg-blue-800 text-white text-center p-2 shadow-xl border-2 border-yellow-400">
                      <div className="text-xs font-bold leading-tight">
                        <p>Be Prepared</p>
                        <p>for Life!</p>
                        <p className="text-yellow-400 text-lg mt-1">⭐</p>
                      </div>
                    </div>
                    {/* Fleur-de-lis (placeholder) */}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
