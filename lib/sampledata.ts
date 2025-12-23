import { Session } from "@/types/session";

export const recentActivities = [
  {
    id: "1",
    type: "ROOM_CREATED",
    message: "You created a new room: DSA Round - Priya",
    time: "2 mins ago",
  },
  {
    id: "2",
    type: "CANDIDATE_JOINED",
    message: "Rahul joined Frontend Interview room",
    time: "10 mins ago",
  },
  {
    id: "3",
    type: "INTERVIEW_STARTED",
    message: "Interview started for System Design - Karan",
    time: "1 hour ago",
  },
  {
    id: "4",
    type: "INTERVIEW_COMPLETED",
    message: "Interview completed for System Design - Karan",
    time: "Yesterday",
  },
  {
    id: "5",
    type: "REPORT_GENERATED",
    message: "Report generated for DSA Round - Priya",
    time: "Yesterday",
  },
];

export const sampleRooms = [
  {
    id: "room_001",
    title: "DSA Round - Priya",
    slug: "dsa-round-priya-a8k2",
    template: "DSA",
    interviewer: "Ankith",
    candidate: "Priya",
    status: "scheduled",
    scheduledAt: "2025-01-18T10:00:00.000Z",
  },
  {
    id: "room_002",
    title: "Frontend Interview - Rahul",
    slug: "frontend-rahul-x92d",
    template: "Frontend",
    interviewer: "Ankith",
    candidate: "Rahul",
    status: "live",
    scheduledAt: null,
  },
  {
    id: "room_003",
    title: "System Design - Karan",
    slug: "system-design-karan-p3m9",
    template: "System Design",
    interviewer: "Ankith",
    candidate: "Karan",
    status: "completed",
    scheduledAt: "2025-01-15T14:30:00.000Z",
  },
  {
    id: "room_004",
    title: "Instant DSA Interview",
    slug: "instant-dsa-q8w1",
    template: "DSA",
    interviewer: "Ankith",
    candidate: null,
    status: "scheduled",
    scheduledAt: null,
  },
];

export const pastInterviews = [
  {
    id: "pi_001",
    title: "System Design - Karan",
    candidate: "Karan",
    template: "System Design",
    status: "completed",
    score: 8.5,
    result: "Selected",
    feedback: "Strong system thinking, good trade-off explanations.",
    conductedAt: "2025-01-15T20:00:00.000Z",
    duration: 50, // minutes
  },
  {
    id: "pi_002",
    title: "Frontend Interview - Rahul",
    candidate: "Rahul",
    template: "Frontend",
    status: "completed",
    score: 7,
    result: "Selected",
    feedback: "Good React fundamentals, needs better state management clarity.",
    conductedAt: "2025-01-12T18:30:00.000Z",
    duration: 45,
  },
  {
    id: "pi_003",
    title: "DSA Round - Priya",
    candidate: "Priya",
    template: "DSA",
    status: "completed",
    score: 5.5,
    result: "Not Selected",
    feedback: "Understood approach but struggled with edge cases.",
    conductedAt: "2025-01-10T16:00:00.000Z",
    duration: 40,
  },
];

export const sessions: Session[] = [
  {
    id: "s1",
    roomTitle: "Frontend Interview - Rahul",
    candidate: "Rahul",
    template: "Frontend",
    status: "live",
    startedAt: "2025-01-21T11:00:00Z",
  },
  {
    id: "s2",
    roomTitle: "System Design - Karan",
    candidate: "Karan",
    template: "System Design",
    status: "completed",
    startedAt: "2025-01-20T10:00:00Z",
    duration: 50,
  },
  {
    id: "s3",
    roomTitle: "DSA Round - Priya",
    candidate: "Priya",
    template: "DSA",
    status: "completed",
    startedAt: "2025-01-18T16:00:00Z",
    duration: 40,
  },
];
