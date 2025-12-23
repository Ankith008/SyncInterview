"use client";
import React from "react";

type PastInterview = {
  id: string;
  title: string;
  candidate: string;
  template: string;
  status: "completed";
  duration: string;
};

export default function PastInterviewCard({
  title,
  candidate,
  template,
  duration,
}: PastInterview) {
  return (
    <div
      className="
        relative
        bg-white/5
        backdrop-blur-md
        cursor-pointer
        rounded-xl
        pr-5
        pl-4
        py-4
        flex
        items-center
        justify-between
        border
        border-white/10
        hover:bg-white/10
        transition
      "
    >
      {/* left accent */}
      <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-indigo-500" />

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-semibold text-white">
          {template[0]}
        </div>

        <div>
          <h3 className="font-medium text-white">{title}</h3>

          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="px-2 py-0.5 rounded-full bg-slate-500/20 text-slate-300 text-xs">
              completed
            </span>
            <span className="text-white/60">{candidate}</span>
          </div>

          <p className="text-xs text-white/50 mt-1">{duration} min</p>
        </div>
      </div>

      <button className="text-purple-400 font-medium hover:text-purple-300">
        View Report
      </button>
    </div>
  );
}
