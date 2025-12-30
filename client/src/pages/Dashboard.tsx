import { useState } from "react";
import SocialAppCard from "../components/SocialAppCard";
import { socialApps } from "../data/mockData";
import { screenTimeData } from "../data/screenTimeData";
import { generateDailyInsight, detectAddictionPattern } from "../utils/aiInsights";
import { calculateSocialScore, getBadge } from "../utils/socialScore";

export default function Dashboard() {

  // 🔹 STATE
  const [ghostMode, setGhostMode] = useState(true);

  // 🔹 LOGIC
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

  const focusCompleted = true;
  const focusStreak = 3;

  const socialScore = calculateSocialScore(
    totalTime,
    productivityPercent,
    focusCompleted
  );

  const badge = getBadge(socialScore);

  // 🔹 JSX
  return (
    <div>
      {ghostMode && (
        <p style={{ color: "#888", fontSize: 14 }}>
          👻 Ghost Mode active — viewing silently
        </p>
      )}

      <div style={{ background: "#e6f7ff", padding: 12, borderRadius: 8 }}>
        <strong>AI Insight 🤖</strong>
        <p>{insight}</p>

        {addictionWarning && (
          <p style={{ color: "red" }}>
            ⚠️ Excessive screen time detected.
          </p>
        )}
      </div>

      <div style={{ background: "#fffbe6", padding: 12, borderRadius: 8, marginTop: 12 }}>
        <strong>Daily Social Score 🎮</strong>
        <h2>{socialScore}/100</h2>
        <p>{badge}</p>
        <p>🔥 Focus Streak: {focusStreak} days</p>
      </div>

      <h2 style={{ marginTop: 16 }}>Dashboard</h2>

      {socialApps.map((app) => (
        <SocialAppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
