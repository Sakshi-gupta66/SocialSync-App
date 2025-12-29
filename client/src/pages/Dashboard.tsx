import SocialAppCard from "../components/SocialAppCard";
import { socialApps } from "../data/mockData";
import { generateDailyInsight, detectAddictionPattern } from "../utils/aiInsights";
import { screenTimeData } from "../data/screenTimeData";

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
