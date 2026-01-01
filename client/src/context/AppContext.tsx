import { createContext, useContext, useState } from "react";

interface AppContextType {
  ghostMode: boolean;
  toggleGhostMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [ghostMode, setGhostMode] = useState(false);

  const toggleGhostMode = () => {
    setGhostMode((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ ghostMode, toggleGhostMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
