import Navbar from "@/components/dashboard/Navbar";
import QuestionDashboard from "@/components/questions/QuestionDashboard";

export default function page() {
  return (
    <main
      className="
        relative min-h-screen text-white
        bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]
      "
    >
      {/* SAME TOP-LEFT GLOW AS ROOM DASHBOARD */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] rounded-full" />

      <Navbar />
      <QuestionDashboard />
    </main>
  );
}
