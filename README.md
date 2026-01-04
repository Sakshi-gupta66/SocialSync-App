# SocialSync-App
A cross-platform mobile app that unifies social media notifications, messages, screen time analytics, and digital wellbeing — powered by AI &amp; ML.

User {
  uid: string
  email: string
  preferences: {
    ghostMode: boolean
    theme: "light" | "dark"
    focusGoal: number
  }
  
  screenTime: {
    app: string
    minutes: number
    date: string
  }[]
  socialScore: number
}

