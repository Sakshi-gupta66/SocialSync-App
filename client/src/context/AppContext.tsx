import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";

interface AppContextType {
  ghostMode: boolean;
  toggleGhostMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [ghostMode, setGhostMode] = useState(
    localStorage.getItem("ghostMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("ghostMode", ghostMode.toString());
  }, [ghostMode]);

  const toggleGhostMode = () => setGhostMode(prev => !prev);

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
