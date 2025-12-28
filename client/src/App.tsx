import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Analytics from "./pages/Analytics";
import Focus from "./pages/Focus";
import Profile from "./pages/Profile";

export default function App() {
  const [tab, setTab] = useState("dashboard");

  const renderScreen = () => {
    switch (tab) {
      case "dashboard":
        return <Dashboard />;
      case "inbox":
        return <Inbox />;
      case "analytics":
        return <Analytics />;
      case "focus":
        return <Focus />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 16 }}>
      <h1>SocialSync</h1>

      <div style={{ minHeight: "60vh" }}>
        {renderScreen()}
      </div>

      <nav style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button onClick={() => setTab("dashboard")}>🏠</button>
        <button onClick={() => setTab("inbox")}>💬</button>
        <button onClick={() => setTab("analytics")}>📊</button>
        <button onClick={() => setTab("focus")}>🎯</button>
        <button onClick={() => setTab("profile")}>👤</button>
      </nav>
    </div>
  );
}
