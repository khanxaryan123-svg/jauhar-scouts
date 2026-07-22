"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import { navItems } from "@/lib/home-data";

export function AdventureNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="absolute top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      {/* Bottom row: Logo + Navbar */}
      <div className="flex items-center justify-between gap-8">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/JS logo With Simple name.png"
            alt="Jauhar Scouts Logo"
            width={600}
            height={600}
            className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-24 xl:h-28 2xl:h-32"
            loading="eager"
            priority
          />
        </div>

        {/* Center: Nav Links (to the right of logo) */}
        <div className="flex items-center flex-1 justify-center">
          <div className="hidden items-center gap-2 lg:flex rounded-full border-2 border-yellow-500 bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-2 text-white shadow-xl whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold transition hover:bg-white/20 rounded-full"
              >
                {item}
                <ChevronDown size={10} />
              </a>
            ))}
            <button className="ml-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-1.5 text-xs font-black text-blue-900 shadow-lg transition hover:from-yellow-500 hover:to-yellow-600">
              JOIN NOW
            </button>
            {/* Divider */}
            <div className="w-px h-6 bg-white/30 mx-2" />
            {/* Login/Register */}
            <button className="flex items-center gap-1 text-xs font-semibold transition hover:bg-white/20 rounded-full px-3 py-1">
              <User size={14} />
              Login / Register
            </button>
            {/* Language Selector */}
            <button className="flex items-center gap-1 text-xs font-semibold transition hover:bg-white/20 rounded-full px-3 py-1">
              <span className="text-base">🌐</span>
              EN
              <ChevronDown size={12} />
            </button>
            {/* Search */}
            <button
              aria-label="Search"
              className="rounded-full p-1.5 transition hover:bg-white/20"
            >
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation"
          className="rounded-full p-2 text-slate-800 transition hover:bg-slate-200 xl:hidden flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-4 rounded-2xl border-2 border-yellow-500 bg-white p-4 shadow-xl xl:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-blue-50 rounded-xl"
              >
                {item}
                <ChevronDown size={16} />
              </a>
            ))}
            <button className="mt-2 w-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-sm font-black text-blue-900 shadow-lg transition hover:from-yellow-500 hover:to-yellow-600">
              JOIN NOW
            </button>
            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <button className="flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-blue-800">
                <User size={18} />
                Login / Register
              </button>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-800">
                  <span className="text-lg">🌐</span>
                  EN
                  <ChevronDown size={14} />
                </button>
                <button
                  aria-label="Search"
                  className="rounded-full p-2 text-slate-800 transition hover:bg-slate-200"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
