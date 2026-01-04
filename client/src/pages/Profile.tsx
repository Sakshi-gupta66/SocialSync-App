import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  // const [ghostMode, setGhostMode] = useState(false);
  const [notifAccess, setNotifAccess] = useState(true);
  const [usageAccess, setUsageAccess] = useState(true);
  const { ghostMode, toggleGhostMode } = useAppContext();
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h2>Privacy & Settings</h2>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={ghostMode}
            onChange={toggleGhostMode}
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
      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("user@example.com")}>
          Login
        </button>
      )}

    </div>
  );
}
