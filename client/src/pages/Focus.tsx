import { useEffect, useState } from "react";

export default function Focus() {
  const [isFocusOn, setIsFocusOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 min

  useEffect(() => {
    if (!isFocusOn) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFocusOn(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFocusOn]);
  

  const startFocus = () => {
    setTimeLeft(25 * 60);
    setIsFocusOn(true);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2>Focus Mode</h2>

      <p style={{ color: "#666" }}>
        Block distractions and focus on what matters
      </p>

      <h1>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </h1>

      {!isFocusOn ? (
        <button onClick={startFocus}>Start Focus Session</button>
      ) : (
        <p>Focus session active 🔒</p>
      )}
      {/* App Blocking List */}
      <ul style={{ marginTop: 16 }}>
        <li>🚫 Instagram</li>
        <li>🚫 YouTube</li>
        <li>🚫 Snapchat</li>
        <li>✅ Gmail</li>
        <li>✅ Calls</li>
      </ul>

      {/* Emergency Bypass */}
      <button
        style={{ marginTop: 10 }}
        onClick={() => alert("Emergency access granted")}
      >
        Emergency Bypass 🚨
      </button>
      
    </div>
    
  );
}
