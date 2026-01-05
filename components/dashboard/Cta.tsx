import React from "react";

export default function Cta() {
  return (
    <section className="text-center mt-20 px-6 mb-20">
      <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
      <p className="text-gray-400 mt-2">Run your first interview now.</p>

      <button
        className="
          mt-6 px-8 py-3 rounded-xl
          bg-gradient-to-r from-indigo-500 to-purple-600
          text-white font-semibold
          shadow-lg shadow-indigo-500/30
          hover:shadow-indigo-500/50
          hover:scale-[1.03]
          transition-all duration-300
          backdrop-blur-xl
        "
      >
        Get Started →
      </button>
    </section>
  );
}
