"use client";

import QuestionSidebar from "./QuestionSidebar";
import QuestionList from "./QuestionList";

export default function QuestionDashboard() {
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Left Panel */}
      <div className="md:col-span-1">
        <div className="sticky top-24">
          <QuestionSidebar />
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:col-span-3 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white">Your Questions</h1>
          <p className="text-sm text-white/60">
            Manage prebuilt and custom interview questions
          </p>
        </div>

        {/* Content container */}
        <div
          className="
            bg-[#12182b]/70
            backdrop-blur-xl
            border border-white/10
            rounded-3xl
            p-8
          "
        >
          <QuestionList />
        </div>
      </div>
    </div>
  );
}
