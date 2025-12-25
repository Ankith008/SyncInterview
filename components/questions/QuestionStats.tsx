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
          className="bg-white/5 border border-white/10 rounded-xl p-4"
        >
          <p className="text-sm text-gray-400">{item.label}</p>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
