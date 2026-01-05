"use client";

import { useState } from "react";
import AddQuestionModal from "./AddQuestionModal";

export default function QuestionSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
          bg-[#12182b]/80
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-5
          space-y-6
        "
      >
        {/* Search */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-2">
            Search
          </h3>
          <input
            placeholder="Search question..."
            className="
              w-full
              bg-[#0b1020]
              border border-white/10
              rounded-lg
              px-3 py-2
              text-sm text-white
              placeholder-white/40
              outline-none
              focus:border-indigo-400/40
            "
          />
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
            Overview
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Stat label="Total" value="45" />
            <Stat label="Prebuilt" value="30" />
            <Stat label="Custom" value="15" />
            <Stat label="Used" value="8" />
          </div>
        </div>

        {/* Filters */}
        <div>
          <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
            Filter
          </h3>
          <div className="space-y-2">
            <FilterBtn active text="ALL" />
            <FilterBtn text="PREBUILT" />
            <FilterBtn text="CUSTOM" />
            <FilterBtn text="DRAFTS" />
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="
            w-full py-2 rounded-lg font-semibold
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:from-indigo-400 hover:to-purple-500
            transition
          "
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
    <div
      className="
        bg-[#1a2040]/70
        border border-white/10
        rounded-lg
        p-3
      "
    >
      <p className="text-xs text-white/60">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function FilterBtn({ text, active }: any) {
  return (
    <button
      className={`
        w-full py-2 rounded-lg text-sm font-medium
        transition
        ${
          active
            ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            : "bg-[#1a2040]/70 border border-white/10 text-white/80 hover:bg-[#1f2550]/70"
        }
      `}
    >
      {text}
    </button>
  );
}
