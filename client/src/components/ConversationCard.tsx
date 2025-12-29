import { Conversation } from "../data/inboxMockData";

export default function ConversationCard({
  convo,
  onPinToggle
}: {
  convo: Conversation;
  onPinToggle: (id: number) => void;
}) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
        background: convo.pinned ? "#fff7e6" : "#fff"
      }}
    >
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
