"use client";
import { useState } from "react";

export default function QuestionTabs() {
  const [active, setActive] = useState("Prebuilt");

  return (
    <div className="flex gap-2 border-b border-white/10 pb-3">
      {["Prebuilt", "Custom", "Drafts"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            px-4 py-1.5 rounded-lg text-sm font-medium transition
            ${
              active === tab
                ? "bg-[#2a3044]/80 text-white border border-white/10"
                : "text-white/60 hover:text-indigo-300"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
