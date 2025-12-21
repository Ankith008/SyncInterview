import React from "react";

export default function Keyfeature() {
  return (
    <section className="relative py-24 px-6 text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[full] h-[250px] bg-purple-600/20 blur-[150px] rounded-full opacity-40" />

      <h2 className="text-white text-4xl font-bold mb-6">
        Why Choose SyncInterview?
      </h2>

      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
        A powerful platform built for modern technical interviews. Fast, simple,
        accurate, and designed for both interviewers and candidates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-2">
            Smooth Interview Flow
          </h3>
          <p className="text-gray-300 text-sm">
            No more switching tools — everything in one place.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-2">
            Clear Candidate Insights
          </h3>
          <p className="text-gray-300 text-sm">
            Live typing playback, code execution, and more.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-2">
            Powerful Code Editor
          </h3>
          <p className="text-gray-300 text-sm">
            Realtime sync, themes, and multi-language execution built-in.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10">
          <h3 className="text-white text-xl font-semibold mb-2">
            Fast Room Setup
          </h3>
          <p className="text-gray-300 text-sm">
            Create interview rooms instantly — share a link and start.
          </p>
        </div>
      </div>
    </section>
  );
}
