"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 relative z-50">
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <Image src="/sync.png" alt="logo" width={150} height={50} />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-white">
        <Link href="/Roomdashboard" className="hover:text-purple-300">
          Rooms
        </Link>
        <Link href="/Sessions" className="hover:text-purple-300">
          Sessions
        </Link>
        <Link href="/questions" className="hover:text-purple-300">
          Questions
        </Link>
        <Link href="/settings" className="hover:text-purple-300">
          Settings
        </Link>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="text-white cursor-pointer text-2xl md:hidden"
      >
        ☰
      </button>

      {open && (
        <div
          className="absolute cursor-pointer right-6 top-16 bg-white/10 backdrop-blur-xl border border-white/10 text-white 
                        rounded-xl w-48 py-3 flex flex-col md:hidden"
        >
          <Link
            onClick={() => setOpen(false)}
            href="/Roomdashboard"
            className="px-4 py-2 hover:bg-white/20"
          >
            Rooms
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/Sessions"
            className="px-4 py-2 hover:bg-white/20"
          >
            Sessions
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/questions"
            className="px-4 py-2 hover:bg-white/20"
          >
            Questions
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/settings"
            className="px-4 py-2 hover:bg-white/20"
          >
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
}
