import React from "react";

type Pops = {
  applytextFamily: (style: string) => void;
  applyColor: (color: string) => void;
};

export default function OptionsTab({ applyColor, applytextFamily }: Pops) {
  return (
    <div className="fixed top-40 left-15 backdrop-blur-2xl bg-white/3 rounded-xl p-5 flex flex-col gap-2 z-30">
      <p className="text-sm">Stroke</p>
      <p className="text-sm">color</p>
      <div className="grid grid-cols-4 gap-2">
        {[
          "#ffffff",
          "#343a40",
          "#1e1e1e",
          "#846358",
          "#0c8599",
          "#1971c2",
          "#6741d9",
          "#9c36b5",
          "#c2255c",
          "#2f9e44",
          "#099268",
          "#f08c00",
          "#e8590c",
          "#e03131",
        ].map((color) => (
          <div
            key={color}
            onClick={() => applyColor(color)}
            className="w-8 h-8 rounded-xl border border-black/40 cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <p className="text-sm">Font</p>
      <div className="grid gap-2 grid-cols-4">
        {["normal", "semibold", "bold", "italic"].map((type: string) => (
          <button
            key={type}
            onClick={() => applytextFamily(type)}
            className="sm bg-white/5 text-center rounded-md cursor-pointer"
            style={{ fontStyle: type }}
          >
            A
          </button>
        ))}
      </div>
    </div>
  );
}
