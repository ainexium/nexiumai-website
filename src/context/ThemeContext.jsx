import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({ theme: "light", toggle: () => {} });

function getInitial() {
  const stored = typeof localStorage !== "undefined" ? localStorage.getItem("nx-theme") : null;
  if (stored === "dark" || stored === "light") return stored;
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("nx-theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
