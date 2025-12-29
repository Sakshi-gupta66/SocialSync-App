import SocialAppCard from "../components/SocialAppCard";
import { socialApps } from "../data/mockData";
import { generateDailyInsight, detectAddictionPattern } from "../utils/aiInsights";
import { screenTimeData } from "../data/screenTimeData";
import { calculateSocialScore, getBadge } from "../utils/socialScore";

export default function Dashboard() {
  
  const totalTime = screenTimeData.reduce(
    (sum, item) => sum + item.minutes,
    0
  );

  const productiveTime = screenTimeData
    .filter((d) => d.category === "Productive")
    .reduce((sum, d) => sum + d.minutes, 0);

  const productivityPercent = Math.round(
    (productiveTime / totalTime) * 100
  );

  const insight = generateDailyInsight(totalTime, productivityPercent);
  const addictionWarning = detectAddictionPattern(totalTime);
  const focusCompleted = true; // simulated for now
  const focusStreak = 3; // simulated streak

  const socialScore = calculateSocialScore(
    totalTime,
    productivityPercent,
    focusCompleted
  );

  const badge = getBadge(socialScore);

  return (
    <div>
      <div
        style={{
          background: "#e6f7ff",
          padding: 12,
          borderRadius: 8,
          marginBottom: 16
        }}
      >
        <strong>AI Insight 🤖</strong>
        <p>{insight}</p>

        {addictionWarning && (
          <p style={{ color: "red" }}>
            ⚠️ Excessive screen time detected. Consider taking a break.
          </p>
        )}
      </div>
      <div
        style={{
          background: "#fffbe6",
          padding: 14,
          borderRadius: 8,
          marginBottom: 16
        }}
      >
        <strong>Daily Social Score 🎮</strong>

        <h2 style={{ margin: "6px 0" }}>
          {socialScore}/100
        </h2>

        <p>{badge}</p>

        <p style={{ color: "#555" }}>
          🔥 Focus Streak: {focusStreak} days
        </p>
      </div>


      <h2>Dashboard</h2>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Unified view of your social apps
      </p>

      {socialApps.map((app) => (
        <SocialAppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
