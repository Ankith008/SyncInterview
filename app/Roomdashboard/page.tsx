import Navbar from "@/components/dashboard/Navbar";
import Leftpanel from "@/components/room/left/Leftpanel";
import RightPanel from "@/components/room/right/RightPanel";

export default function page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#120022] via-[#2b0a3d] to-[#0f172a] text-white">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-10">
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
