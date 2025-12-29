import SocialAppCard from "../components/SocialAppCard";
import { socialApps } from "../data/mockData";

export default function Dashboard() {
  return (
    <div>
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
