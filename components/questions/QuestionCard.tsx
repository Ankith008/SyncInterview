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
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex justify-between items-center hover:bg-white/10 cursor-pointer">
      <div className="flex gap-4 items-center">
        {/* Left bar */}
        <div className="w-1 h-12 rounded bg-purple-500" />

        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-semibold">
          Q
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">
            {topic} • {difficulty}
          </p>
        </div>
      </div>

      <span className="text-purple-400 font-semibold text-sm">View</span>
    </div>
  );
}
