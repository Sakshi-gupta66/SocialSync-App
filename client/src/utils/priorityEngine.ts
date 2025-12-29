export function getPriorityScore(
  unread: number,
  app: string
): "High" | "Medium" | "Low" {
  if (app === "WhatsApp" || app === "Gmail") return "High";
  if (unread > 10) return "Medium";
  return "Low";
}
