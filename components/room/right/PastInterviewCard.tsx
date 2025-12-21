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
type RoomStatus = "scheduled" | "live" | "completed";

export default function PastInterviewCard({
  title,
  candidate,
  template,
  duration,
}: PastInterview) {
  const statusStyle: Record<RoomStatus, string> = {
    scheduled: "bg-purple-100 text-purple-700",
    live: "bg-green-100 text-green-700",
    completed: "bg-slate-200 text-slate-600",
  };

  return (
    <div className="bg-[#e9e7ec] cursor-pointer rounded-xl pr-5 pl-0.5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-[3px] h-14 rounded-full bg-linear-to-b from-purple-500 to-indigo-500" />
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-semibold text-slate-600">
          {template[0]}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <div className="flex items-center gap-2 text-sm mt-1">
            <span
              className={`px-2 py-0.5 rounded-full bg-slate-200 text-slate-600 text-xs ${statusStyle["completed"]}`}
            >
              completed
            </span>
            <span className="text-slate-600">{candidate}</span>
          </div>

          <p className="text-xs text-slate-500 mt-1">{duration} min</p>
        </div>
      </div>

      <button className="text-purple-600 font-medium hover:underline">
        View Report
      </button>
    </div>
  );
}
