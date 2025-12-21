export type Role = "INTERVIEWER" | "CANDIDATE";

export interface RecentActivity {
  id: number;
  roomid: number;
  roomName: string;
  userid: number;
  useName: string;
  data: string;
  createdAt: string;
}
