import UsageChart from "../components/UsageChart";
import { screenTimeData } from "../data/screenTimeData";

export default function Analytics() {
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

  return (
    <div>
      <h2>Screen Time Analytics</h2>

      <p style={{ color: "#666", marginBottom: 10 }}>
        Today’s app usage overview
      </p>

      <UsageChart data={screenTimeData} />

      <div style={{ marginTop: 16 }}>
        <strong>Total Screen Time:</strong> {totalTime} minutes
        <br />
        <strong>Productivity Score:</strong> {productivityPercent}%
      </div>

      <p style={{ marginTop: 12, color: "#888" }}>
        You spent most time on non-productive apps today.
      </p>
    </div>
  );
}

