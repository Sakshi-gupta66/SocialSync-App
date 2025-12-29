export interface Conversation {
  id: number;
  contactName: string;
  lastMessage: string;
  app: "WhatsApp" | "Instagram" | "Telegram" | "Gmail";
  unread: number;
  pinned: boolean;
}

export const conversations: Conversation[] = [
  {
    id: 1,
    contactName: "Mom",
    lastMessage: "Call me when free",
    app: "WhatsApp",
    unread: 2,
    pinned: true
  },
  {
    id: 2,
    contactName: "Rahul",
    lastMessage: "Check Instagram DM",
    app: "Instagram",
    unread: 1,
    pinned: false
  },
  {
    id: 3,
    contactName: "College Group",
    lastMessage: "Assignment deadline tomorrow",
    app: "Telegram",
    unread: 5,
    pinned: false
  },
  {
    id: 4,
    contactName: "HR",
    lastMessage: "Interview scheduled",
    app: "Gmail",
    unread: 0,
    pinned: false
  }
];
