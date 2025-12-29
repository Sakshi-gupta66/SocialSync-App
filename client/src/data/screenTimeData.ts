export interface AppUsage {
  id: number;
  app: string;
  minutes: number;
  category: "Productive" | "Non-Productive";
}

export const screenTimeData: AppUsage[] = [
  { id: 1, app: "Instagram", minutes: 120, category: "Non-Productive" },
  { id: 2, app: "WhatsApp", minutes: 60, category: "Non-Productive" },
  { id: 3, app: "YouTube", minutes: 90, category: "Non-Productive" },
  { id: 4, app: "Gmail", minutes: 45, category: "Productive" },
  { id: 5, app: "LinkedIn", minutes: 30, category: "Productive" }
];
