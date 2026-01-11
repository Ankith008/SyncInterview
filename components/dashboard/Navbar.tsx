"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import AuthModal from "@/components/auth/AuthModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0b1220] border-b border-white/10">
        <div className="flex items-center justify-between py-4 max-w-[1400px] mx-auto px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/sync.png" alt="logo" width={150} height={40} />
          </Link>

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
                className="text-md font-medium text-gray-300 hover:text-white transition"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => (session ? signOut() : setShowAuth(true))}
              className="w-10 h-10 rounded-full overflow-hidden border border-white/20"
            >
              <img
                src={session?.user?.image || "/avatar.png"}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl md:hidden"
          >
            ☰
          </button>

          {open && (
            <div className="absolute right-6 top-[70px] w-52 bg-[#0b1220] border border-white/10 rounded-xl py-3 flex flex-col md:hidden shadow-xl">
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
                  className="px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-white transition"
                >
                  {label}
                </Link>
              ))}

              <div className="border-t border-white/10 mt-2 pt-3 px-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    session ? signOut() : setShowAuth(true);
                  }}
                  className="flex items-center gap-3"
                >
                  <img
                    src={session?.user?.image || "/avatar.png"}
                    className="w-9 h-9 rounded-full"
                  />
                  <span className="text-sm text-gray-300">
                    {session ? "Logout" : "Login / Signup"}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
