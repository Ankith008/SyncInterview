import Cta from "@/components/dashboard/Cta";
import Hero from "@/components/dashboard/Hero";
import Keyfeature from "@/components/dashboard/Keyfeature";
import Navbar from "@/components/dashboard/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0c0618] to-[#0a0a12]">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      <Navbar />
      <Hero />
      <Keyfeature />
      <Cta />
      <footer className="text-center text-gray-500 py-8 text-sm">
        SyncInterview © 2025
      </footer>
    </main>
  );
}
