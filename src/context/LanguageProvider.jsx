import React, { createContext } from "react";
import { useLanguage } from "../hooks/useLanguage";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};