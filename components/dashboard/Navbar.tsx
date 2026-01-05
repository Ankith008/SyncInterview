"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-0 z-50
        

      "
    >
      <div className="flex items-center justify-between  py-4 max-w-[1400px] mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/sync.png" alt="logo" width={150} height={40} />
        </Link>

        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {[
            ["Rooms", "/Roomdashboard"],
            ["Sessions", "/Sessions"],
            ["Questions", "/Questions"],
            ["Settings", "/settings"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
                text-md font-medium
                text-gray-300
                hover:text-white
                transition
              "
            >
              {label}
            </Link>
          ))}
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        {/* mobile dropdown */}
        {open && (
          <div
            className="
              absolute right-6 top-[70px]
              w-48
              bg-[#0b1220]
              border border-white/10
              rounded-xl
              py-3
              flex flex-col md:hidden
              shadow-xl
            "
          >
            {[
              ["Rooms", "/Roomdashboard"],
              ["Sessions", "/Sessions"],
              ["Questions", "/Questions"],
              ["Settings", "/settings"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="
                  px-4 py-2
                  text-gray-300
                  hover:bg-white/10
                  hover:text-white
                  transition
                "
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
