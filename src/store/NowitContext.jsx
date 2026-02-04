'use client'

import { createContext, useState } from "react";

const NowitContext = createContext();

const NowitContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');

  // 👇 ADD THIS
  const [activeService, setActiveService] = useState('business launch');

  return (
    <NowitContext.Provider
      value={{
        activeTab,
        setActiveTab,
        activeService,
        setActiveService
      }}
    >
      {children}
    </NowitContext.Provider>
  );
};

export { NowitContext };
export default NowitContextProvider;
