import Navbar from "@/components/dashboard/Navbar";
import MonacoEditor from "@/components/TextEditor/MonacoEditor";

export default function Page() {
  return (
    <main
      className="
        relative min-h-screen text-white overflow-x-hidden
        bg-gradient-to-br from-[#0b1020] via-[#0a0f1e] to-[#070b16]
      "
    >
      {/* glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[200px] rounded-full" />

      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10 flex h-[calc(100vh-64px)]">
        {/* LEFT – PROBLEM */}
        <aside
          className="
            hidden lg:block
            flex-[0_0_360px]
            max-w-[360px]
            border-r border-white/10
            p-6
          "
        >
          <h2 className="text-lg font-semibold mb-3">🧠 Problem</h2>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm leading-relaxed">
            Write a function that prints <b>Hello Ankith 😄</b>
            <br />
            <br />
            <span className="text-indigo-300">Output:</span> Hello Ankith 😄
          </div>
        </aside>

        {/* RIGHT – EDITOR */}
        <section className="flex-1 min-w-0 p-4">
          <MonacoEditor />
        </section>
      </div>
    </main>
  );
}
