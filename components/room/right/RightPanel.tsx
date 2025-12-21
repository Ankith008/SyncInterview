"use client";
import PastInterview from "./PastInterview";
import YourRooms from "./YourRooms";

export default function RightPanel() {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-white">Your Rooms</h2>
        <p className="text-sm text-white/60 mt-1">
          Manage, join and track all interview rooms
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
        <YourRooms />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">Past Interviews</h2>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">
        <PastInterview />
      </div>
    </section>
  );
}
