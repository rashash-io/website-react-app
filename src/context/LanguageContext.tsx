/// CONTINUE FROM HERE

/// https://www.google.com/search?client=firefox-b-e&channel=entpr&q=if+im+wrapping+app+in+context+provider+what+would+the+children+type+be

import React, { useState, createContext, useContext, useEffect } from "react";

type LanguageType = "ar" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: LanguageType;
  storageKey?: string;
};

type LanguageProviderState = {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  rtlVal: "rtl" | undefined;
  setRtlVal: (language: LanguageType) => void;
};

const initialState: LanguageProviderState = {
  language: "ar",
  setLanguage: () => null,
  rtlVal: "rtl",
  setRtlVal: () => null,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialState);
export function LanguageProvider({
  children,
  defaultLanguage = "ar",
  storageKey = "service-app-eg",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<LanguageType>(
    () => (localStorage.getItem(storageKey) as LanguageType) || defaultLanguage
  );
  const [rtlVal, setRtlVal] = useState<"rtl" | undefined>(
    language === "ar" ? "rtl" : undefined
  );
  useEffect(() => {}, [language, rtlVal]);
  const value = {
    language,
    setLanguage: (language: LanguageType) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
      setRtlVal(language === "ar" ? "rtl" : undefined);
    },
    rtlVal,
    setRtlVal: (language: LanguageType) => {
      setRtlVal(language === "ar" ? "rtl" : undefined);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};

