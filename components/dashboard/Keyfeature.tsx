import React from "react";

export default function Keyfeature() {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden">
      {/* glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px]
        h-[280px] bg-indigo-500/20 blur-[180px] rounded-full opacity-40"
      />

      <h2 className="text-white text-4xl font-bold mb-6">
        Why Choose SyncInterview?
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
        A powerful platform built for modern technical interviews. Fast, simple,
        accurate, and designed for both interviewers and candidates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Smooth Interview Flow",
            desc: "No more switching tools — everything in one place.",
          },
          {
            title: "Clear Candidate Insights",
            desc: "Live typing playback, code execution, and more.",
          },
          {
            title: "Powerful Code Editor",
            desc: "Realtime sync, themes, and multi-language execution built-in.",
          },
          {
            title: "Fast Room Setup",
            desc: "Create interview rooms instantly — share a link and start.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-2xl p-8 text-left
              shadow-lg shadow-black/20
              hover:bg-white/10
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="text-white text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
