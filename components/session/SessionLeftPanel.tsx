"use client";
import React, { useState } from "react";
import { sessions } from "@/lib/sampledata";

export default function SessionLeftPanel() {
  const [status, setStatus] = useState<string>("all");

  const total = sessions.length;
  const live = sessions.filter((s) => s.status === "live").length;
  const completed = sessions.filter((s) => s.status === "completed").length;
  const aborted = sessions.filter((s) => s.status === "aborted").length;

  return (
    <aside className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Search</h3>
        <input
          placeholder="Search session..."
          className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 text-sm outline-none"
        />
      </div>
      <div>
        <h3 className="font-semibold mb-3">Overview</h3>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <StatBox label="Total" value={total} />
          <StatBox label="Live" value={live} highlight="green" />
          <StatBox label="Completed" value={completed} />
          <StatBox label="Aborted" value={aborted} highlight="red" />
        </div>
      </div>

      <hr className="border-white/10" />

      <div>
        <h3 className="font-semibold mb-3">Filter by Status</h3>

        <div className="space-y-2">
          {["all", "live", "completed", "aborted"].map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`w-full py-2 cursor-pointer rounded-md text-sm font-medium transition ${
                status === item
                  ? "bg-linear-to-r from-purple-500 to-indigo-500"
                  : "border border-white/20 hover:bg-white/10"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <hr className="border-white/10" />
    </aside>
  );
}

function StatBox({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number;
  highlight?: "green" | "red";
}) {
  return (
    <div
      className={`rounded-lg p-3 bg-white/10 border border-white/10 ${
        highlight === "green"
          ? "text-green-300"
          : highlight === "red"
          ? "text-red-300"
          : "text-white"
      }`}
    >
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
