import React, { useState } from "react";

export default function LeftQuickAction() {
  const [isInstant, setIsInstant] = useState<boolean>(true);

  return (
    <div className="grid grid-cols-1 gap-2">
      <button
        className={`w-full py-2 rounded cursor-pointer ${
          isInstant
            ? "bg-linear-to-r from-purple-500 to-indigo-500"
            : "border border-white/20 hover:bg-white/10"
        }`}
        onClick={() => setIsInstant(!isInstant)}
      >
        Start Instant Interview
      </button>
      <button
        onClick={() => setIsInstant(!isInstant)}
        className={`w-full py-2 rounded cursor-pointer ${
          !isInstant
            ? "bg-linear-to-r from-purple-500 to-indigo-500"
            : "border border-white/20 hover:bg-white/10"
        }`}
      >
        Schedule Interview
      </button>
    </div>
  );
}
