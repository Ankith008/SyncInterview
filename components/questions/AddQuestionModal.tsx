"use client";
import { SelectUI } from "../UI/Select";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddQuestionModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/60">
      <div className="bg-[#1b0f2e] border border-white/10 rounded-xl w-full max-w-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Question</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <Input label="Question Title" placeholder="Eg: Two Sum Problem" />

          <SelectUI
            label={"Question Template"}
            options={["Coding", "MCQ", "Theory", "System Design"]}
          />

          <SelectUI
            label={"Difficulty Level"}
            options={["Easy", "Medium", "Hard"]}
          />

          <SelectUI
            label={"Topic"}
            options={["DSA", "JavaScript", "React", "System Design"]}
          />

          <Textarea
            label="Question Description"
            placeholder="Explain the problem statement..."
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold">
              Save Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-1 w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
      />
    </div>
  );
}

function Textarea({ label, placeholder }: any) {
  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="mt-1 w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none resize-none"
      />
    </div>
  );
}
