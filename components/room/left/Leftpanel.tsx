"use client";

import LeftQuickAction from "./QuickAction";
import LeftRecentActivity from "./RecentActivity";
import LeftTemplates from "./Templates";

export default function Leftpanel() {
  return (
    <aside className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <h3 className="font-semibold mb-3">Quick Action</h3>
      <LeftQuickAction />

      <hr className="my-4 border-white/20" />
      <h3 className="font-semibold mb-3">Room Templates</h3>
      <LeftTemplates />

      <hr className="my-4 border-white/20" />
      <h3 className="font-semibold mb-3">Recent Activity</h3>
      <LeftRecentActivity />
    </aside>
  );
}
