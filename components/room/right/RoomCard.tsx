"use client";
import React from "react";

type RoomStatus = "scheduled" | "live" | "completed";

const statusStyle: Record<RoomStatus, string> = {
  scheduled: "bg-purple-500/20 text-purple-300",
  live: "bg-green-500/20 text-green-300",
  completed: "bg-slate-500/20 text-slate-300",
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
    <div
      className="
      relative
      bg-white/5
      backdrop-blur-md
      rounded-xl
      cursor-pointer
      px-5
      py-4
      border border-white/10
      hover:bg-white/10
      transition
    "
    >
      {/* left accent */}
      <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-indigo-500" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center font-semibold text-white">
            {template[0]}
          </div>

          <div>
            <div className="font-medium text-white">{title}</div>

            <div className="flex items-center gap-2 text-xs text-white/60 mt-1">
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
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            Join
          </button>
          <button
            onClick={onCopy}
            className="text-sm text-white/50 hover:text-white/70"
          >
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
}
