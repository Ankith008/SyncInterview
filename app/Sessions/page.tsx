import SessionLeftPanel from "@/components/session/SessionLeftPanel";
import SessionRightPanel from "@/components/session/SessionRightPanel";

export default function Page() {
  return (
    <main
      className="
        relative min-h-screen text-white
        bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]
      "
    >
      {/* SAME GLOW AS ROOM DASHBOARD */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] rounded-full" />

      <div
        className="
          relative z-10
          max-w-[1400px] mx-auto
          px-10 py-8
          grid grid-cols-1 md:grid-cols-4 gap-10
        "
      >
        {/* Left panel */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <SessionLeftPanel />
          </div>
        </div>

        {/* Right panel */}
        <div className="md:col-span-3">
          <SessionRightPanel />
        </div>
      </div>
    </main>
  );
}
