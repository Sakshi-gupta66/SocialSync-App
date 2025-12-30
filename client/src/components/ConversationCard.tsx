import { Conversation } from "../data/inboxMockData";
import "../styles/card.css";

export default function ConversationCard({
  convo,
  onPinToggle
}: {
  convo: Conversation;
  onPinToggle: (id: number) => void;
}) {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{convo.contactName}</strong>
        <button onClick={() => onPinToggle(convo.id)}>
          {convo.pinned ? "📌" : "📍"}
        </button>
      </div>

      <p style={{ margin: "4px 0", color: "#555" }}>{convo.lastMessage}</p>

      <small>
        {convo.app} • {convo.unread} unread
      </small>
    </div>
  );
}
