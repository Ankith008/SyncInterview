import React from "react";

export default function Cta() {
  return (
    <section className="text-center mt-20 px-6 mb-20">
      <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
      <p className="text-gray-400 mt-2">Run your first interview now.</p>

      <button
        className="mt-6 px-6 py-3 rounded-lg bg-linear-to-r
                     from-purple-600 to-blue-500 text-white"
      >
        Get Started →
      </button>
    </section>
  );
}
