'use client';

import { createContext, useEffect, useState } from "react";

const NowitContext = createContext(null);

const NowitContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeService, setActiveService] = useState("business launch");
  const [mounted, setMounted] = useState(false);

  // 🔹 Read external state ONCE and commit ONCE
  useEffect(() => {
    const storedTab = localStorage.getItem("nowit_active_tab");
    const storedService = localStorage.getItem("nowit_active_service");

    setActiveTab(prev => storedTab ?? prev);
    setActiveService(prev => storedService ?? prev);

    setMounted(true);
  }, []);

  // 🔹 Persist after hydration
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("nowit_active_tab", activeTab);
  }, [activeTab, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("nowit_active_service", activeService);
  }, [activeService, mounted]);

  return (
    <NowitContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeService,
        setActiveService,
        mounted,
      }}
    >
      {children}
    </NowitContext.Provider>
  );
};

export { NowitContext };
export default NowitContextProvider;
