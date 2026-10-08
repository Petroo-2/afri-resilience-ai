'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/93 backdrop-blur-md border-b border-line">
      <div className="w-full max-w-[1180px] mx-auto px-[4%] h-[76px] flex items-center justify-between">
        <Link href="/" className="flex gap-2.5 items-center font-bold">
          <div className="bg-gradient-to-br from-navy to-blue text-white rounded-[10px] px-2 py-2 text-sm font-bold">
            AR
          </div>
          <div>
            <div className="font-bold text-sm">AFRI-RESILIENCE</div>
            <div className="text-[8px] tracking-widest text-muted">AI · RESILIENCE PLATFORM</div>
          </div>
        </Link>

        <button
          className="md:hidden text-2xl bg-none border-0 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav
          className={`hidden md:flex gap-6 items-center text-sm font-semibold ${
            mobileMenuOpen ? 'block absolute top-[76px] left-0 right-0 bg-white p-5 flex-col gap-3' : ''
          }`}
        >
          <Link href="/#platform" className="hover:text-blue transition">
            Platform
          </Link>
          <Link href="/#impact" className="hover:text-blue transition">
            Impact
          </Link>
          <Link href="/dashboard" className="bg-navy text-white px-4 py-2 rounded-lg hover:bg-navy-2 transition">
            Open Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
