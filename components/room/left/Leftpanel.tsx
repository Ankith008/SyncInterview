"use client";

import LeftQuickAction from "./QuickAction";
import LeftRecentActivity from "./RecentActivity";
import LeftTemplates from "./Templates";

export default function Leftpanel() {
  return (
    <aside
      className="
    bg-[#12182b]/85
    backdrop-blur-xl
    border border-white/10
    rounded-2xl
    p-5
    shadow-xl shadow-black/30
  "
    >
      {/* Quick Action */}
      <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
        Quick Action
      </h3>
      <LeftQuickAction />

      <hr className="my-5 border-white/10" />

      {/* Templates */}
      <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
        Room Templates
      </h3>
      <LeftTemplates />

      <hr className="my-5 border-white/10" />

      {/* Activity */}
      <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">
        Recent Activity
      </h3>
      <LeftRecentActivity />
    </aside>
  );
}
