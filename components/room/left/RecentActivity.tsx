import React from "react";
import { recentActivities } from "@/lib/sampledata";

export default function LeftRecentActivity() {
  function ActivityIcon({ type }: { type: string }) {
    const base =
      "w-8 h-8 flex items-center justify-center rounded-full text-xs";

    if (type === "ROOM_CREATED")
      return (
        <div className={`${base} bg-purple-500/20 text-purple-400`}>＋</div>
      );

    if (type === "CANDIDATE_JOINED")
      return <div className={`${base} bg-green-500/20 text-green-400`}>👤</div>;

    if (type === "INTERVIEW_STARTED")
      return <div className={`${base} bg-blue-500/20 text-blue-400`}>▶</div>;

    if (type === "INTERVIEW_COMPLETED")
      return <div className={`${base} bg-slate-500/20 text-slate-300`}>✔</div>;

    return <div className={`${base} bg-white/10`}>ℹ</div>;
  }

  return (
    <section className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10">
      <div className="space-y-3">
        {recentActivities.length > 0 ? (
          recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 text-sm hover:bg-white/20 hover:rounded-xl"
            >
              <ActivityIcon type={activity.type} />
              <div>
                <p className="text-white">{activity.message}</p>
                <span className="text-xs text-slate-400">{activity.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No Recent Activity</p>
          </div>
        )}
      </div>
    </section>
  );
}
