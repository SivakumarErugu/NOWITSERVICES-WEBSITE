'use client';

import { createContext, useEffect, useState } from "react";

const NowitContext = createContext(null);

const NowitContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === "undefined") return "home";
    return localStorage.getItem("nowit_active_tab") || "home";
  });

  const [activeService, setActiveService] = useState(() => {
    if (typeof window === "undefined") return "business launch";
    return localStorage.getItem("nowit_active_service") || "business launch";
  });

  const [openChat, setChatOpen] = useState(false)

  //Added by sandhya for translations
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("nowit_locale") || "en";
  });

  const [messages, setMessages] = useState({});
  const [isReady, setIsReady] = useState(false)
  // Load translation file

  const normalizeTabForPath = (tab) => {
    return tab
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-"); // "about us" → "about-us"
  };


  const loadMessages = async (lang) => {
    try {
      const normalized = lang.split("-")[0];
      console.log("Normalized language:", normalized);
      console.log("Active Tab:", activeTab);
      const tabName = normalizeTabForPath(activeTab);
      const data = await import(`../translations/${tabName}/${normalized}.json`);

      setMessages(data.default);
      setIsReady(true);
    } catch (error) {
      console.log(error, "error here"
      )
      console.error("Translation file not found:", error);
      setIsReady(true);
    }
  };

  // On first mount
  useEffect(() => {
    loadMessages(locale);
  }, []);

  // Change language
  const changeLanguage = (lang) => {
    localStorage.setItem("nowit_locale", lang);
    setLocale(lang);
    loadMessages(lang);
  };

  // Translation function
  const t = (key) => {
    return messages[key] || key;
  };


  // Persist changes
  useEffect(() => {
    localStorage.setItem("nowit_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("nowit_active_service", activeService);
  }, [activeService]);
  console.log(activeTab, "Active Tab from Context")


  return (
    <NowitContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeService,
        setActiveService,
        openChat,
        setChatOpen,
        locale,
        changeLanguage,
        t,
        isReady
      }}
    >
      {children}
    </NowitContext.Provider>
  );
};

export { NowitContext };
export default NowitContextProvider;
