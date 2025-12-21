"use client";
import React from "react";

type RoomStatus = "scheduled" | "live" | "completed";

const statusStyle: Record<RoomStatus, string> = {
  scheduled: "bg-purple-100 text-purple-700",
  live: "bg-green-100 text-green-700",
  completed: "bg-slate-200 text-slate-600",
};

export default function RoomCard({
  title,
  template,
  status,
  candidate,
  scheduledAt,
  onJoin,
  onCopy,
}: any) {
  return (
    <div className="relative bg-white/85 backdrop-blur-sm rounded-xl cursor-pointer px-5 py-4 border border-white/40 hover:bg-white/95 transition">
      <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-linear-to-b from-purple-500 to-indigo-500" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center font-semibold text-slate-700">
            {template[0]}
          </div>

          <div>
            <div className="font-medium text-slate-900">{title}</div>

            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <span
                className={`px-2 py-0.5 rounded-full ${statusStyle[status]}`}
              >
                {status}
              </span>
              <span>{candidate ?? "No candidate"}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onJoin}
            className="text-sm text-purple-600 hover:underline"
          >
            Join
          </button>
          <button
            onClick={onCopy}
            className="text-sm text-slate-500 hover:underline"
          >
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
}
