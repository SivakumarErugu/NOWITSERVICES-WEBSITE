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

  const [messages, setMessages] = useState({});// this will be normal pageMessages
  const [isReady, setIsReady] = useState(false)
  const [pageKey, setPageKey] = useState('')
  const [commonMessages, setCommonMessages] = useState({});
  const [commonReady, setCommonReady] = useState(false);

  // const [pageMessages, setPageMessages] = useState({});
  // Load translation file

  const normalizeTabForPath = (tab) => {
    return tab
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-"); // "about us" → "about-us"
  };


  const loadMessages = async (lang, page) => {
    if (!page) return;

    try {
      const normalized = lang.split("-")[0];
      setIsReady(false);

      const data = await import(
        `../translations/${page}/${normalized}.json`
      );

      setMessages(data.default);
      setIsReady(true);
    } catch (error) {
      console.error("Translation load failed:", error);
      setMessages({});
      setIsReady(true);
    }
  };

  const loadCommonMessages = async (lang) => {
    try {
      const normalized = lang.split('-')[0];
      const data = await import(`../translations/common/${normalized}.json`);
      setCommonMessages(data.default);
    } catch (e) {
      setCommonMessages({});
    }
    finally{
      setCommonReady(true);
    }
  };

  // On first mount
  useEffect(() => {
    if (!locale || !pageKey) return;
    loadMessages(locale, pageKey);
  }, [locale, pageKey]);

  useEffect(() => {
    loadCommonMessages(locale);
  }, [locale]);

  // Change language
  const changeLanguage = (lang) => {
    localStorage.setItem("nowit_locale", lang);
    setLocale(lang);
    loadMessages(lang);
  };

  // Translation function
  const t = (key) => {
    return messages?.[key] ?? "";
  };

  const tc = (key) => commonMessages?.[key] ?? "";
  // Persist changes
  useEffect(() => {
    localStorage.setItem("nowit_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("nowit_active_service", activeService);
  }, [activeService]);
  // console.log(activeTab, "Active Tab from Context")


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
        isReady,
        setPageKey,
        tc,
        commonReady
      }}
    >
      {children}
    </NowitContext.Provider>
  );
};

export { NowitContext };
export default NowitContextProvider;
