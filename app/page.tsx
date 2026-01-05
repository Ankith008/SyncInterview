import Cta from "@/components/dashboard/Cta";
import Hero from "@/components/dashboard/Hero";
import Keyfeature from "@/components/dashboard/Keyfeature";
import Navbar from "@/components/dashboard/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen  bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617]">
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo-500/20 blur-[140px] rounded-full" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Keyfeature />
        <Cta />

        <footer className="text-center text-gray-400 py-8 text-sm">
          SyncInterview © 2025
        </footer>
      </div>
    </main>
  );
}
