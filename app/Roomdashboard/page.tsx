import Navbar from "@/components/dashboard/Navbar";
import Leftpanel from "@/components/room/left/Leftpanel";
import RightPanel from "@/components/room/right/RightPanel";

export default function page() {
  return (
    <main
      className="relative min-h-screen text-white
      bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]"
    >
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] rounded-full" />

      <Navbar />

      <div
        className="relative z-10 max-w-[1400px] mx-auto px-10 py-8
        grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Leftpanel />
          </div>
        </div>

        <div className="md:col-span-3">
          <RightPanel />
        </div>
      </div>
    </main>
  );
}
