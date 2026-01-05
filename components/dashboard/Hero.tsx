export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#020617] to-[#020617]" />

      {/* glow blobs */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[720px] h-[35vh]
        bg-indigo-500/25 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* LEFT */}
          <div className="w-full mt-10 lg:mt-0 lg:w-6/12 text-center lg:text-left">
            <p className="text-sm text-indigo-300 font-medium mb-4">
              Realtime Coding Platform
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Conduct realtime coding interviews.
            </h1>

            <p className="text-gray-300 max-w-2xl mb-8 text-lg">
              Run collaborative coding rounds with live code execution and
              instant feedback.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button
                className="
                px-8 py-3 rounded-xl
                bg-gradient-to-r from-indigo-500 to-purple-600
                text-white font-semibold
                shadow-lg shadow-indigo-500/30
                hover:shadow-indigo-500/50
                hover:scale-[1.03]
                transition-all
              "
              >
                Start Interview →
              </button>

              <button
                className="
                px-6 py-3 rounded-xl
                border border-white/10
                bg-white/5 backdrop-blur-xl
                text-white/90
                hover:bg-white/10
                transition
              "
              >
                Try Live Editor
              </button>
            </div>

            {/* feature chips */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["Live Editor", "Real-time sync"],
                ["Run Code", "Node, Python, Java"],
                ["Feedback", "Record + review"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10
                             rounded-xl p-3 text-center"
                >
                  <div className="text-sm text-gray-200 font-semibold">
                    {title}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-6/12">
            <div className="relative mx-auto max-w-[820px]">
              <div
                className="rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-2xl"
              >
                {/* header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-black/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="ml-4 text-xs text-gray-300">
                    app.js — sync-interview
                  </div>
                </div>

                {/* code */}
                <div className="bg-[#020617] p-4">
                  <pre className="text-sm text-gray-200 leading-relaxed overflow-auto max-h-[360px]">
                    {`// Example problem
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map[need] !== undefined) return [map[need], i];
    map[nums[i]] = i;
  }
  return [];
}`}
                  </pre>
                </div>

                {/* footer */}
                <div className="flex items-center justify-between px-4 py-3 bg-black/30">
                  <div className="text-xs text-gray-300">
                    Node.js • Run time: 1.2s
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-indigo-500 text-white rounded-md text-sm">
                      Run
                    </button>
                    <button className="px-3 py-1 text-sm bg-white/5 rounded-md border border-white/10">
                      Tests
                    </button>
                  </div>
                </div>
              </div>

              {/* trust row */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div>Trusted by early adopters</div>
                <div className="flex gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1">
                    Polkadot
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1">
                    Coinbase
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
