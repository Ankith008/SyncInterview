"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="perspective">
        <div
          className={`relative w-[380px] h-[440px] flip-card ${
            isLogin ? "" : "rotate-y-180"
          }`}
          style={{
            transform: isLogin ? "rotateY(0deg)" : "rotateY(180deg)",
          }}
        >
          {/* LOGIN */}
          <div className="flip-front absolute inset-0 glass rounded-2xl p-6 text-white">
            <Header title="Login" onClose={onClose} />

            <GoogleButton />

            <Divider />

            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />

            <PrimaryButton label="Login" />

            <SwitchText
              text="Don’t have an account?"
              action="Register"
              onClick={() => setIsLogin(false)}
            />
          </div>

          {/* REGISTER */}
          <div className="flip-back absolute inset-0 glass rounded-2xl p-6 text-white">
            <Header title="Register" onClose={onClose} />

            <GoogleButton />

            <Divider />

            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Re-enter Password" type="password" />

            <PrimaryButton label="Create Account" />

            <SwitchText
              text="Already have an account?"
              action="Login"
              onClick={() => setIsLogin(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- SMALL UI PARTS ---------- */

function Header({ title, onClose }: any) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={onClose} className="text-gray-400">
        ✕
      </button>
    </div>
  );
}

function GoogleButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full py-2 bg-white text-black rounded-md font-medium"
    >
      Continue with Google
    </button>
  );
}

function Divider() {
  return <div className="my-4 text-center text-gray-400 text-sm">or</div>;
}

function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full mb-3 p-2 rounded-md bg-black/40 border border-white/10 outline-none focus:border-white/30"
    />
  );
}

function PrimaryButton({ label }: any) {
  return (
    <button className="w-full py-2 mt-2 bg-blue-600 rounded-md font-medium">
      {label}
    </button>
  );
}

function SwitchText({ text, action, onClick }: any) {
  return (
    <p className="mt-4 text-sm text-center text-gray-400">
      {text}{" "}
      <span
        onClick={onClick}
        className="text-white cursor-pointer hover:underline"
      >
        {action}
      </span>
    </p>
  );
}
