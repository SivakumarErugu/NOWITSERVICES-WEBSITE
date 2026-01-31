'use client'

import { createContext, useState } from "react";


const NowitContext = createContext();

const NowitContextProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');


    const value = {
        activeTab,
        setActiveTab
    }

    return (
        <NowitContext.Provider value={value}>
            {children}
        </NowitContext.Provider>
    )

}

export { NowitContext };
export default NowitContextProvider;