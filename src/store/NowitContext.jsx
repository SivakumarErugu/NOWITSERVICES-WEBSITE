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

  const [openChat, setChatOpen] = useState(false);


  // Persist changes
  useEffect(() => {
    localStorage.setItem("nowit_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("nowit_active_service", activeService);
  }, [activeService]);

  return (
    <NowitContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeService,
        setActiveService,
        openChat,
        setChatOpen
      }}
    >
      {children}
    </NowitContext.Provider>
  );
};

export { NowitContext };
export default NowitContextProvider;
