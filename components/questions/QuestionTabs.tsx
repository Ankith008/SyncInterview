export default function QuestionTabs() {
  return (
    <div className="flex gap-4 border-b border-white/10 pb-3">
      {["Prebuilt", "Custom", "Drafts"].map((tab) => (
        <button key={tab} className="text-sm font-medium hover:text-purple-400">
          {tab}
        </button>
      ))}
    </div>
  );
}
