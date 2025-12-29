export interface AppUsage {
  id: number;
  app: string;
  minutes: number;
  category: "Productive" | "Non-Productive";
}

export const screenTimeData: AppUsage[] = [
  { id: 1, app: "Instagram", minutes: 20, category: "Non-Productive" },
  { id: 2, app: "WhatsApp", minutes: 60, category: "Non-Productive" },
  { id: 3, app: "YouTube", minutes: 10, category: "Non-Productive" },
  { id: 4, app: "Gmail", minutes: 30, category: "Productive" },
  { id: 5, app: "LinkedIn", minutes: 25, category: "Productive" }
];
