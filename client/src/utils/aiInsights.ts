export function generateDailyInsight(
  totalMinutes: number,
  productivityPercent: number
): string {
  if (totalMinutes > 240 && productivityPercent < 40) {
    return "You spent a lot of time on social apps today. Productivity dropped significantly.";
  }

  if (productivityPercent >= 70) {
    return "Great job! You maintained a high productivity level today.";
  }

  return "Your usage was balanced today. Try reducing social media for better focus.";
}

export function detectAddictionPattern(minutes: number): boolean {
  return minutes > 180;
}
