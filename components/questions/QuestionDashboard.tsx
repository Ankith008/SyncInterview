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
      <div className="md:col-span-3">
        <h1 className="text-2xl font-semibold mb-1">Your Questions</h1>
        <p className="text-sm text-gray-300 mb-6">
          Manage prebuilt and custom interview questions
        </p>

        <QuestionList />
      </div>
    </div>
  );
}
