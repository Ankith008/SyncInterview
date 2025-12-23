import { sessions } from "@/lib/sampledata";
import SessionCard from "./SessionCard";

export default function SessionRightPanel() {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Your Sessions</h2>
        <p className="text-white/60 text-sm">
          Track live and completed interview sessions
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="space-y-4">
          {sessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </div>
    </>
  );
}
