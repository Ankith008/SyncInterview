"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Monaco = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const CODE: Record<string, string> = {
  javascript: `console.log("Hello Ankith 😄");`,
  python: `print("Hello Ankith 😄")`,
  cpp: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello Ankith 😄";
  return 0;
}`,
};

export default function MonacoEditor() {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(CODE.javascript);
  const [output, setOutput] = useState("");

  function run() {
    if (lang !== "javascript") {
      setOutput("⚠ Python / C++ execution needs backend support");
      return;
    }

    let logs: string[] = [];
    const customConsole = {
      log: (...args: any[]) => logs.push(args.join(" ")),
    };

    try {
      new Function("console", code)(customConsole);
    } catch (e: any) {
      logs.push("Error: " + e.message);
    }

    setOutput(logs.join("\n"));
  }

  return (
    <div className="h-full flex flex-col min-w-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      {/* TOOLBAR */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <select
          value={lang}
          onChange={(e) => {
            const l = e.target.value;
            setLang(l);
            setCode(CODE[l]);
            setOutput("");
          }}
          className="bg-[#020617] border border-white/10 rounded-lg px-3 py-1 text-sm"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>

        <button
          onClick={run}
          className="px-5 py-2 rounded-lg text-sm font-semibold
          bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90"
        >
          ▶ Run
        </button>
      </div>

      {/* EDITOR */}
      <div className="flex-1 min-w-0">
        <Monaco
          value={code}
          language={lang}
          theme="sync-dark"
          onChange={(v) => setCode(v ?? "")}
          onMount={(editor, monaco) => {
            monaco.editor.defineTheme("sync-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [
                { token: "comment", foreground: "6b7280" },
                { token: "string", foreground: "a5b4fc" },
                { token: "keyword", foreground: "818cf8" },
                { token: "number", foreground: "fca5a5" },
              ],
              colors: {
                "editor.background": "#020617",
                "editor.lineHighlightBackground": "#020617",
                "editorCursor.foreground": "#818cf8",
                "editor.selectionBackground": "#312e8155",
                "editorLineNumber.foreground": "#475569",
                "editorLineNumber.activeForeground": "#e5e7eb",
              },
            });

            monaco.editor.setTheme("sync-dark");
          }}
          options={{
            fontSize: 14,
            fontFamily: "JetBrains Mono",
            minimap: { enabled: false },
            padding: { top: 16 },
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      {/* OUTPUT */}
      <div className="h-[160px] border-t border-white/10 bg-black/40 p-4">
        <p className="text-sm text-indigo-300 mb-1">Output</p>
        <pre className="text-sm text-white/80 whitespace-pre-wrap">
          {output || "Run the code to see output"}
        </pre>
      </div>
    </div>
  );
}
