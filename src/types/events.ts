export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  category: "Mass" | "Holy Hour" | "Confession" | "Prayer Group" | "Social Event";
  description: string;
}

export type EventCategory = "Mass" | "Holy Hour" | "Confession" | "Prayer Group" | "Social Event" | "";