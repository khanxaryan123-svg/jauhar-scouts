import Image from "next/image";
import { quickLinks, type QuickLinkItem } from "@/lib/home-data";

export function QuickLinksSection() {
  return (
    <section className="relative z-20 bg-white pt-10 pb-6">
      <div className="absolute -top-8 left-8 text-4xl opacity-70 rotate-12">🌿</div>
      <div className="absolute -top-6 right-8 text-4xl opacity-70 -rotate-12">🌿</div>

      <div className="section-shell">
        <div className="rounded-[2rem] border-2 border-slate-100 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-2xl shadow-slate-200/50">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {quickLinks.map((item: QuickLinkItem) => {
              const getImageSrc = () => {
                switch (item.title) {
                  case "About Us":
                    return "/about us.png";
                  case "Membership":
                    return "/membership.png";
                  case "Global Scouting":
                    return "/global scouting.png";
                  case "Events Calendar":
                    return "/event calendar.png";
                  case "Unit Locator":
                    return "/unit locator.png";
                  case "Contact & Support":
                    return "/contact.png";
                  default:
                    return null;
                }
              };

              const imageSrc = getImageSrc();

              return (
                <div key={item.title} className="group cursor-pointer text-center">
                  <div
                    className={`mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${item.gradient} text-5xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out group-hover:scale-115 group-hover:-translate-y-2 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]`}
                  >
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      item.iconLabel
                    )}
                  </div>
                  <p className="text-base font-black text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
