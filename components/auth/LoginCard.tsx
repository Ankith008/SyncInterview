"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import googleIcon from "@/public/google.png";

export default function LoginCard() {
  return (
    <div className="bg-[#0b1220] rounded-xl p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      {/* Google */}
      <button
        onClick={() => signIn("google")}
        className="w-full py-2 bg-white text-black rounded mb-3 flex items-center justify-center gap-2"
      >
        <Image src={googleIcon} alt="Google" width={20} height={20} />
        Login with Google
      </button>

      {/* Credentials */}
      <input
        id="email"
        placeholder="Email"
        className="w-full mb-2 p-2 rounded bg-black/30"
      />
      <input
        id="password"
        placeholder="Password"
        type="password"
        className="w-full mb-3 p-2 rounded bg-black/30"
      />

      <button
        onClick={() =>
          signIn("credentials", {
            email: (document.getElementById("email") as HTMLInputElement).value,
            password: (document.getElementById("password") as HTMLInputElement)
              .value,
            callbackUrl: "/",
          })
        }
        className="w-full py-2 bg-blue-500 rounded"
      >
        Login
      </button>
    </div>
  );
}
