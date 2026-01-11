import { signIn } from "next-auth/react";

export default function RegisterCard({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="bg-[#0b1220] rounded-xl p-6 h-full text-white">
      <h2 className="text-xl font-semibold mb-4">Register</h2>

      <button
        onClick={() => signIn("google")}
        className="w-full py-2 bg-white text-black rounded mb-3"
      >
        Signup with Google
      </button>

      <input
        placeholder="Name"
        className="w-full mb-2 p-2 rounded bg-black/30"
      />
      <input
        placeholder="Email"
        className="w-full mb-2 p-2 rounded bg-black/30"
      />
      <input
        placeholder="Password"
        type="password"
        className="w-full mb-2 p-2 rounded bg-black/30"
      />
      <input
        placeholder="Re-enter Password"
        type="password"
        className="w-full mb-3 p-2 rounded bg-black/30"
      />

      <button className="w-full py-2 bg-green-500 rounded">Register</button>

      <p
        onClick={onSwitch}
        className="mt-4 text-sm text-center cursor-pointer text-gray-400"
      >
        Already have an account? Login
      </p>
    </div>
  );
}
