export function calculateSocialScore(
  totalMinutes: number,
  productivityPercent: number,
  focusCompleted: boolean
): number {
  let score = 100;

  if (totalMinutes > 240) score -= 30;
  if (totalMinutes > 180) score -= 20;

  if (productivityPercent < 50) score -= 20;
  if (productivityPercent >= 70) score += 10;

  if (focusCompleted) score += 10;

  return Math.max(0, Math.min(100, score));
}

export function getBadge(score: number): string {
  if (score >= 85) return "🏆 Focus Master";
  if (score >= 65) return "🔥 Consistent User";
  if (score >= 45) return "🙂 Improving";
  return "⚠️ Needs Focus";
}
