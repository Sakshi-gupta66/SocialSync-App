export interface SocialApp {
  id: number;
  name: string;
  unread: number;
  priority: "High" | "Medium" | "Low";
  description: string;
}

export const socialApps: SocialApp[] = [
  {
    id: 1,
    name: "Instagram",
    unread: 12,
    priority: "High",
    description: "Messages & mentions"
  },
  {
    id: 2,
    name: "WhatsApp",
    unread: 5,
    priority: "High",
    description: "Personal chats"
  },
  {
    id: 3,
    name: "Gmail",
    unread: 20,
    priority: "Medium",
    description: "Emails & updates"
  },
  {
    id: 4,
    name: "Telegram",
    unread: 7,
    priority: "Low",
    description: "Groups & channels"
  }
];
