import Navbar from "@/components/dashboard/Navbar";
import QuestionDashboard from "@/components/questions/QuestionDashboard";

export default function page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#120022] via-[#2b0a3d] to-[#0f172a] text-white">
      <Navbar />
      <QuestionDashboard />
    </main>
  );
}
