import { useState } from "react";
import { conversations as initialData } from "../data/inboxMockData";
import ConversationCard from "../components/ConversationCard";

export default function Inbox() {
  const [convos, setConvos] = useState(initialData);

  const togglePin = (id: number) => {
    setConvos((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, pinned: !c.pinned } : c
      )
    );
  };

  const sortedConvos = [
    ...convos.filter((c) => c.pinned),
    ...convos.filter((c) => !c.pinned)
  ];

  return (
    <div>
      <h2>Unified Inbox</h2>
      <p style={{ color: "#666", marginBottom: 16 }}>
        Conversations grouped by contact
      </p>

      {sortedConvos.map((c) => (
        <ConversationCard
          key={c.id}
          convo={c}
          onPinToggle={togglePin}
        />
      ))}
    </div>
  );
}
