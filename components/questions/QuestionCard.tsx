type Props = {
  title: string;
  difficulty: string;
  topic: string;
  status: string;
};

export default function QuestionCard({
  title,
  difficulty,
  topic,
  status,
}: Props) {
  return (
    <div
      className="
        bg-[#2a3044]/85
        border border-white/10
        rounded-xl
        p-5
        flex justify-between items-center
        cursor-pointer
        hover:bg-[#323959]/85
        transition-all duration-200
      "
    >
      <div className="flex gap-4 items-center">
        {/* Left accent */}
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-purple-500 to-indigo-500" />

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-semibold text-white">
          Q
        </div>

        {/* Info */}
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-white/60">
            {topic} • {difficulty}
          </p>
        </div>
      </div>

      <span className="text-indigo-400 font-medium text-sm hover:text-indigo-300 transition">
        View
      </span>
    </div>
  );
}
