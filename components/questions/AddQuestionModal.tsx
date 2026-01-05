"use client";
import { SelectUI } from "../UI/Select";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AddQuestionModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="
          bg-[#12182b]/90
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          w-full max-w-xl
          p-6
        "
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Add New Question</h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition"
          >
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
              className="
                px-4 py-2 rounded-lg
                bg-[#1a2040]/70
                border border-white/10
                text-white/80
                hover:bg-[#1f2550]/70
                transition
              "
            >
              Cancel
            </button>

            <button
              className="
                px-4 py-2 rounded-lg
                bg-gradient-to-r from-indigo-500 to-purple-600
                hover:from-indigo-400 hover:to-purple-500
                font-semibold text-white
                transition
              "
            >
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
      <label className="text-xs uppercase tracking-wide text-gray-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="
          mt-1 w-full
          bg-[#0b1020]
          border border-white/10
          rounded-lg
          px-3 py-2
          text-sm text-white
          placeholder-white/40
          outline-none
          focus:border-indigo-400/40
        "
      />
    </div>
  );
}

function Textarea({ label, placeholder }: any) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-gray-400">
        {label}
      </label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="
          mt-1 w-full
          bg-[#0b1020]
          border border-white/10
          rounded-lg
          px-3 py-2
          text-sm text-white
          placeholder-white/40
          outline-none
          resize-none
          focus:border-indigo-400/40
        "
      />
    </div>
  );
}
