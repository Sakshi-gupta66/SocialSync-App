import { useState } from "react";

export default function Profile() {
  const [ghostMode, setGhostMode] = useState(false);
  const [notifAccess, setNotifAccess] = useState(true);
  const [usageAccess, setUsageAccess] = useState(true);

  return (
    <div>
      <h2>Privacy & Settings</h2>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={ghostMode}
            onChange={() => setGhostMode(!ghostMode)}
          />
          {" "}Enable Ghost Mode 👻
        </label>
        <p style={{ color: "#666", fontSize: 14 }}>
          View notifications silently without triggering seen/online status.
        </p>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={notifAccess}
            onChange={() => setNotifAccess(!notifAccess)}
          />
          {" "}Allow Notification Access
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={usageAccess}
            onChange={() => setUsageAccess(!usageAccess)}
          />
          {" "}Allow Screen Time Access
        </label>
      </div>

      <p style={{ marginTop: 16, color: "#888" }}>
        🔒 Your data stays on your device. No message content is stored without consent.
      </p>
    </div>
  );
}
