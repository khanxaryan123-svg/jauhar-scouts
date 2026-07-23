"use client";

import Link from "next/link";
import { footerLinkGroups } from "@/lib/home-data";

const socialLinks = [
  { href: "https://facebook.com", icon: "/facebook icon.png", alt: "Facebook" },
  { href: "https://instagram.com", icon: "/Instagram icon.png", alt: "Instagram" },
  { href: "https://youtube.com", icon: "/Youtube icon.png", alt: "YouTube" },
  { href: "https://x.com", icon: "/X.png", alt: "X" },
  { href: "https://tiktok.com", icon: "/Tiktok icon.png", alt: "TikTok" },
] as const;

const journeyStats = [
  { value: "2", label: "Years in Scouting" },
  { value: "36", label: "Camping Nights" },
  { value: "125", label: "Hiking Kilometres" },
  { value: "58", label: "Service Hours" },
  { value: "23", label: "Badges Earned" },
  { value: "4", label: "Awards Received" },
] as const;

export function Footer() {
  return (
    <footer id="journey" className="relative">
      {/* Footer Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/footer-image.png"
        alt="Jauhar Scouts Footer"
        className="w-full h-auto"
      />

      {/* Editable Your Scout Journey content. Decorative artwork remains in new-footer.png. */}
      <section aria-labelledby="journey-heading" className="pointer-events-none absolute inset-x-0 top-0 h-[44%]">
        <div className="absolute left-[2.5%] top-0 h-full w-[20%] text-[#0B2B5B]">
            <h2 id="journey-heading" className="absolute left-0 top-[14%] whitespace-nowrap text-[clamp(16px,1.85vw,36px)] font-extrabold uppercase leading-none tracking-tight">
            <span>YOUR </span>
            <span className="text-[#F97316]">SCOUT </span>
            <span>JOURNEY 🌿</span>
          </h2>
          <p className="absolute left-0 top-[40%] text-[clamp(12px,2.1vw,22px)] font-bold leading-none">Track. Achieve. Grow.</p>
          <p className="absolute left-0 top-[50%] text-[clamp(9px,0.9vw,17px)] leading-tight">
            Your journey, your achievements.<br />
            Every step counts!
          </p>
          <button
            type="button"
            onClick={() => { window.location.hash = "journey"; }}
            aria-label="View your scout journey"
            className="pointer-events-auto absolute left-0 top-[83%] rounded-full bg-[#0B2B5B] px-[10%] py-[4%] text-[clamp(7px,0.75vw,14px)] font-bold uppercase text-white shadow-md transition hover:bg-[#164783]"
          >
            VIEW YOUR JOURNEY →
          </button>
        </div>

        <div className="absolute left-[25%] top-[77%] flex w-[54%] text-center text-[#0B2B5B]">
            {journeyStats.map(({ value, label }, index) => (
            <div key={label} className={`w-1/6 ${index === 0 || index === 1 ? "relative -left-[3%]" : ""}`}>
              <strong className="block text-[clamp(10px,1.3vw,24px)] leading-none">{value}</strong>
              <span className="mt-[3%] block whitespace-nowrap text-[clamp(5px,0.58vw,11px)] leading-none">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Editable scout-group finder content. The map and compass remain artwork. */}
      <section aria-labelledby="group-finder-heading" className="pointer-events-none absolute inset-x-0 top-[52%] h-[39%] text-white">
        <div className="absolute left-[6%] top-[8%] w-[22%]">
          <h2 id="group-finder-heading" className="text-[clamp(12px,1.6vw,28px)] font-extrabold uppercase leading-[1.05]">
            Find a scout group<br />near <span className="text-[#F97316]">you!</span>
          </h2>
          <p className="mt-[6%] text-[clamp(7px,0.82vw,15px)] leading-tight text-white/90">
            Connect with scouts in your area<br />
            and begin your adventure today.
          </p>
          <button
            type="button"
            className="pointer-events-auto mt-[9%] rounded-full bg-[#f55a0a] px-[10%] py-[4%] text-[clamp(7px,0.8vw,15px)] font-extrabold uppercase text-white shadow-md transition hover:bg-[#ff7627]"
          >
            Find a group →
          </button>
        </div>

        <div className="pointer-events-auto absolute left-[70%] top-[10%] flex w-[16%] flex-col items-center">
          <div className="flex w-full overflow-hidden rounded-lg bg-white p-[1.5%]">
            <input
              type="text"
              aria-label="Enter city or district"
              placeholder="Enter city or district..."
              className="min-w-0 flex-1 px-[5%] text-[clamp(7px,0.8vw,15px)] text-slate-500 outline-none placeholder:text-slate-400"
            />
            <button type="button" aria-label="Search scout groups" className="rounded-md bg-[#198447] px-[4%] text-[clamp(14px,1.5vw,26px)] leading-none text-white transition hover:bg-[#25a45b]">
              ⌕
            </button>
          </div>
          <div className="my-[6%] flex w-full items-center gap-[4%] text-center text-[clamp(8px,0.8vw,15px)] font-bold text-[#f47b20]">
            <span className="h-px flex-1 bg-white/80" />
            <span>OR</span>
            <span className="h-px flex-1 bg-white/80" />
          </div>
          <Link href="#unit-locator" className="rounded-md border-2 border-white px-[16%] py-[3%] text-[clamp(8px,0.85vw,16px)] font-extrabold uppercase transition hover:bg-white hover:text-[#0B2B5B]">
            View map
          </Link>
        </div>
      </section>

      <p className="pointer-events-none absolute bottom-[11%] right-[11%] whitespace-nowrap text-[clamp(12px,0.55vw,10px)] font-medium text-white">
        A Member of World Scouting
      </p>

      {/* Footer Overlay Content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-14">
        {/* Main Footer Content */}
        <div className="pointer-events-auto w-[96%] xl:w-[92%] flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-start xl:gap-10 -mt-6">
          {/* Left: Logo + Social Icons */}
          <div className="flex shrink-0 items-center gap-5 -mt--6">
            <img src="/JS logo With Simple name.png" alt="Jauhar Scouts" className="h-14 w-16 object-contain" />
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon, alt }) => (
                <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="h-6 w-6 cursor-pointer transition hover:opacity-50">
                  <img src={icon} alt={alt} className="h-full w-full object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* Center: Navigation Columns */}
          <div className="flex flex-1 translate-y-[0.6vw] flex-wrap items-start justify-center gap-x-4 gap-y-1 xl:justify-start xl:gap-x-8">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex min-w-[60px] flex-col gap-1.5">
                <Link href="#" className="text-[clamp(6px,0.8vw,12px)] font-bold uppercase tracking-wider text-white hover:text-white/90">{group.title}</Link>
                {group.links.map((link) => (
                  <Link key={link} href="#" className="cursor-pointer text-[clamp(9px,0.72vw,12px)] text-white/75 transition hover:text-white">{link}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Powered by BRDigitech */}
        <div className="mt-2 translate-y-[2.5vw] text-center">
          <p className="text-xs text-white/80">Powered by <span className="font-semibold text-orange-500">BRDigitech</span></p>
        </div>
      </div>
    </footer>
  );
}