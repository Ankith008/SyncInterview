"use client";
import PastInterview from "./PastInterview";
import YourRooms from "./YourRooms";

export default function RightPanel() {
  return (
    <section className="space-y-10">
      {/* Your Rooms header */}
      <div>
        <h2 className="text-2xl font-semibold text-white">Your Rooms</h2>
        <p className="text-sm text-white/60 mt-1">
          Manage, join and track all interview rooms
        </p>
      </div>

      {/* Your Rooms container */}
      <div
        className="
          bg-[#12182b]/70
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-10
        "
      >
        <YourRooms />
      </div>

      {/* Past Interviews header */}
      <div>
        <h2 className="text-2xl font-semibold text-white">Past Interviews</h2>
      </div>

      {/* Past Interviews container */}
      <div
        className="
          bg-[#12182b]/70
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-10
        "
      >
        <PastInterview />
      </div>
    </section>
  );
}
