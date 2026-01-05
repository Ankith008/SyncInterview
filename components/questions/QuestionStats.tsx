function coloring(value: string) {
  if (value === "Total")
    return "bg-[#1a2040]/70 border border-white/10 text-white";

  if (value === "Prebuilt")
    return "bg-blue-400/15 border border-blue-400/20 text-blue-300";

  if (value === "Custom")
    return "bg-orange-400/15 border border-orange-400/20 text-orange-300";

  if (value === "Used Today")
    return "bg-green-400/15 border border-green-400/20 text-green-300";

  return "bg-[#1a2040]/70 border border-white/10 text-white";
}

export default function QuestionStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Total", value: 120 },
        { label: "Prebuilt", value: 80 },
        { label: "Custom", value: 40 },
        { label: "Used Today", value: 12 },
      ].map((item) => (
        <div
          key={item.label}
          className={`
            ${coloring(item.label)}
            backdrop-blur-xl
            rounded-xl
            p-4
            transition
            hover:brightness-110
          `}
        >
          <p className="text-sm text-white/60">{item.label}</p>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
