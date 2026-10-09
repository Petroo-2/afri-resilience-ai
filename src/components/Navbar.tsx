'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { data: session } = useSession();
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
          className="md:hidden text-2xl bg-none border-0 cursor-pointer p-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`hidden md:flex gap-6 items-center text-sm font-semibold ${
            mobileMenuOpen ? 'block absolute top-[76px] left-0 right-0 bg-white p-5 flex-col gap-3 md:static md:flex-row md:gap-6 md:bg-transparent md:p-0' : ''
          }`}
        >
          <Link href="/#platform" className="hover:text-blue transition">
            Platform
          </Link>
          <Link href="/#impact" className="hover:text-blue transition">
            Impact
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-blue transition">
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-danger text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="hover:text-blue transition">
                Sign In
              </Link>
              <Link href="/auth/signup" className="bg-navy text-white px-4 py-2 rounded-lg hover:bg-navy-2 transition">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
