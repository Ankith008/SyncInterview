import React from "react";

type SessionStatus = "live" | "completed" | "aborted";

type Session = {
  id: string;
  roomTitle: string;
  candidate: string;
  template: "DSA" | "Frontend" | "System Design";
  status: SessionStatus;
  startedAt: string;
  duration?: number;
};

type SessionProps = {
  session: Session;
};

export default function SessionCard({ session }: SessionProps) {
  return (
    <div
      className="
        relative
        cursor-pointer
        bg-white/5
        backdrop-blur-md
        rounded-xl
        px-5
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
      <div className="flex items-center gap-4">
        {/* left accent */}
        <div
          className={`w-[3px] h-14 rounded-full ${
            session.status === "live"
              ? "bg-gradient-to-b from-green-400 to-emerald-600"
              : "bg-gradient-to-b from-purple-500 to-indigo-500"
          }`}
        />

        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-semibold text-white">
          {session.template[0]}
        </div>

        <div>
          <h3 className="font-medium text-white">{session.roomTitle}</h3>

          <div className="flex items-center gap-2 text-sm mt-1">
            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
                session.status === "live"
                  ? "bg-green-500/20 text-green-300"
                  : "bg-slate-500/20 text-slate-300"
              }`}
            >
              {session.status}
            </span>
            <span className="text-white/60">{session.candidate}</span>
          </div>

          <p className="text-xs text-white/50 mt-1">
            {session.duration ? `${session.duration} min` : "In progress"}
          </p>
        </div>
      </div>

      <button className="text-purple-400 font-medium hover:text-purple-300">
        {session.status === "live" ? "Join" : "View Session"}
      </button>
    </div>
  );
}
