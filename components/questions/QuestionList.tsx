import QuestionCard from "./QuestionCard";

const questions = [
  {
    title: "React Hooks Deep Dive",
    difficulty: "Medium",
    topic: "React",
    status: "prebuilt",
  },
  {
    title: "Two Sum Problem",
    difficulty: "Easy",
    topic: "DSA",
    status: "custom",
  },
  {
    title: "Design URL Shortener",
    difficulty: "Hard",
    topic: "System Design",
    status: "prebuilt",
  },
];

export default function QuestionList() {
  return (
    <div className="space-y-4">
      {questions.map((q, i) => (
        <QuestionCard key={i} {...q} />
      ))}
    </div>
  );
}
