import React from "react";
import { pastInterviews } from "@/lib/sampledata";
import PastInterviewCard from "./PastInterviewCard";

export default function PastInterview() {
  return (
    <section className="rounded-3xl divide-y divide-white/20 space-y-3">
      {pastInterviews.length > 0 ? (
        pastInterviews.map((interview) => (
          <PastInterviewCard
            key={interview.id}
            title={interview.title}
            candidate={interview.candidate}
            template={interview.template}
            duration={interview.duration}
          />
        ))
      ) : (
        <div>No Classes Found</div>
      )}
    </section>
  );
}
