export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0522] via-[#2b0b3e] to-[#07060a]" />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[30vh] max-h-[350px]
             bg-purple-600/25 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full mt-10 lg:mt-0 lg:w-6/12 text-center lg:text-left">
            <p className="text-sm text-purple-300 font-medium mb-4">
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
              <button className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:opacity-95 transition">
                Start Interview →
              </button>

              <button className="px-5 py-3 rounded-md border border-white/10 text-white/90 bg-white/5">
                Try Live Editor
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 text-center">
                <div className="text-sm text-gray-200 font-semibold">
                  Live Editor
                </div>
                <div className="text-xs text-gray-400 mt-1">Real-time sync</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 text-center">
                <div className="text-sm text-gray-200 font-semibold">
                  Run Code
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Node, Python, Java
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 text-center">
                <div className="text-sm text-gray-200 font-semibold">
                  Feedback
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Record + review
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <div className=" lg:block relative mx-auto max-w-[820px]">
              <div className="rounded-2xl overflow-hidden border border-white/6 shadow-2xl">
                <div className="flex items-center gap-3 px-4 py-3 bg-black/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="ml-4 text-xs text-gray-300">
                    app.js — sync-interview
                  </div>
                </div>

                <div className="bg-[#0b0b0f] p-4">
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

                <div className="flex items-center justify-between px-4 py-3 bg-black/25">
                  <div className="text-xs text-gray-300">
                    Node.js • Run time: 1.2s
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-purple-500 text-white rounded-md text-sm">
                      Run
                    </button>
                    <button className="px-3 py-1 text-sm bg-white/5 rounded-md border border-white/6">
                      Tests
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div>Trusted by early adopters</div>
                <div className="flex gap-3">
                  <div className="bg-white/5 rounded-md px-3 py-1">
                    Polkadot
                  </div>
                  <div className="bg-white/5 rounded-md px-3 py-1">
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
