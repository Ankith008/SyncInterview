"use client";

import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";

export default function QuestionSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Search</h3>
          <input
            placeholder="Search question..."
            className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Overview</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Stat label="Total" value="45" />
            <Stat label="Prebuilt" value="30" />
            <Stat label="Custom" value="15" />
            <Stat label="Used" value="8" />
          </div>
        </div>

        {/* Filters */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Filter</h3>
          <div className="space-y-2">
            <FilterBtn active text="ALL" />
            <FilterBtn text="PREBUILT" />
            <FilterBtn text="CUSTOM" />
            <FilterBtn text="DRAFTS" />
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold"
        >
          + Add Question
        </button>
      </div>

      <AddQuestionModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Stat({ label, value }: any) {
  return (
    <div className="bg-white/10 rounded-lg p-3">
      <p className="text-xs text-gray-300">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}

function FilterBtn({ text, active }: any) {
  return (
    <button
      className={`w-full py-2 rounded-lg text-sm font-semibold border
        ${
          active
            ? "bg-purple-600 border-purple-500"
            : "border-white/10 hover:bg-white/10"
        }`}
    >
      {text}
    </button>
  );
}
