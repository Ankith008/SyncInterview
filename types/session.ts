export type SessionTemplate = "DSA" | "Frontend" | "System Design";

export type Session = {
  id: string;
  roomTitle: string;
  candidate: string;
  template: SessionTemplate;
  status: "live" | "completed" | "aborted";
  startedAt: string;
  duration?: number;
};
