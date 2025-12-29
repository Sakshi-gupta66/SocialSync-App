import { SocialApp } from "../data/mockData";

export default function SocialAppCard({ app }: { app: SocialApp }) {
  const priorityColor =
    app.priority === "High"
      ? "#ff4d4f"
      : app.priority === "Medium"
      ? "#faad14"
      : "#52c41a";

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        background: "#fff"
      }}
    >
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

      <p style={{ margin: "6px 0", color: "#555" }}>{app.description}</p>

      <strong>{app.unread} unread notifications</strong>
    </div>
  );
}
