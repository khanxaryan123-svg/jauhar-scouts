import Link from "next/link";
import Image from "next/image";
import { programmes } from "@/lib/home-data";

export function ProgrammesSection() {
  return (
    <section className="py-12" style={{backgroundColor: "#F2EFE9"}}>
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 relative">
          {programmes.map((programme) => (
            <Link key={programme.title} href={programme.link} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-lg transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl" style={{backgroundColor: "#F2EFE9"}}>
                {/* Card Header with Image */}
                <div className="h-40 rounded-t-2xl overflow-hidden" style={{backgroundColor: programme.headerColor}}>
                  {programme.image ? (
                    programme.title === "Skills for Life" ? (
                      <img
                        src="/skills for life profile.png?v=1"
                        alt={programme.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : programme.title === "Leadership" ? (
                      <img
                        src="/leadership profile.png?v=1"
                        alt={programme.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : programme.title === "Community Service" ? (
                      <img
                        src="/community service profile.png?v=1"
                        alt={programme.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : programme.title === "Global Scouting" ? (
                      <img
                        src="/global scouting profile.png?v=1"
                        alt={programme.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={programme.image}
                        alt={programme.title}
                        width={500}
                        height={400}
                        className="w-full h-full object-cover"
                        priority
                      />
                    )
                  ) : null}
                </div>

                {/* Icon Circle */}
                <div className="flex justify-center -mt-8 relative z-10">
                  <div className="w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl overflow-hidden p-0">
                    {programme.title === "Adventure" ? (
                      <img
                        src="/adventure logo.png?v=1"
                        alt="Adventure"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : programme.title === "Skills for Life" ? (
                      <img
                        src="/skills for life logo.png?v=1"
                        alt="Skills for Life"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : programme.title === "Leadership" ? (
                      <img
                        src="/leadership logo.png?v=1"
                        alt="Leadership"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : programme.title === "Community Service" ? (
                      <img
                        src="/community service logo.png?v=1"
                        alt="Community Service"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="/global scouting logo.png?v=1"
                        alt="Global Scouting"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    )}
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
              </div>
            </Link>
          ))}
          {/* Badge for last card, positioned absolutely outside the card */}
          {programmes[programmes.length - 1].hasBadge && (
            <div className="absolute top-0 right-0 rotate-12 pointer-events-none" style={{ transform: 'translateX(90%) translateY(-25%) rotate(12deg)' }}>
              <img
                      src="/be prepared for life.png?v=2"
                      alt="Be Prepared for Life"
                      width={200}
                      height={240}
                    />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
