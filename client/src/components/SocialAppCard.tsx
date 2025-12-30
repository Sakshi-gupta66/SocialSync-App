import { SocialApp } from "../data/mockData";
import "../styles/card.css";

export default function SocialAppCard({ app }: { app: SocialApp }) {
  const priorityColor =
    app.priority === "High"
      ? "#ff4d4f"
      : app.priority === "Medium"
      ? "#faad14"
      : "#52c41a";

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{app.name}</h3>
        <span
          style={{
            background: priorityColor,
            color: "#fff",
            padding: "2px 8px",
            borderRadius: 6,
            fontSize: 12
          }}
        >
          {app.priority}
        </span>
      </div>

      <p style={{ color: "#555" }}>{app.description}</p>
      <strong>{app.unread} unread notifications</strong>
    </div>
  );
}
