import React, { useState } from "react";

export default function LeftTemplates() {
  const [currentTemplate, setCurrentTemplate] = useState<string>("DSA");
  const templates = ["DSA", "Frontend", "System Design"];

  return (
    <div className="grid grid-cols-1 gap-2">
      {templates.map((template, index) => (
        <button
          key={index}
          className={`w-full cursor-pointer py-2 rounded ${
            currentTemplate === template
              ? "bg-linear-to-r from-purple-500 to-indigo-500"
              : "border border-white/20 hover:bg-white/10"
          }`}
          onClick={() => setCurrentTemplate(template)}
        >
          {template}
        </button>
      ))}
    </div>
  );
}
