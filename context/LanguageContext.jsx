"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/translations";

const LanguageContext = createContext();

const SUPPORTED = ["fr", "en"];
const FALLBACK = "en";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(FALLBACK);

  useEffect(() => {
    const saved = localStorage.getItem("nexium-lang");
    if (saved && SUPPORTED.includes(saved)) {
      setLangState(saved);
      return;
    }
    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    setLangState(SUPPORTED.includes(browserLang) ? browserLang : FALLBACK);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("nexium-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
