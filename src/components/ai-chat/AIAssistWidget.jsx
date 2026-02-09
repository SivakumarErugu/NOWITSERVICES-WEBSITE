"use client";

import { useContext, useState } from "react";
import AIAssistButton from "./AIAssistBtn";
import ChatWindow from "./ChatWindow";
import { useNowit } from "@/store/useNowit";

export default function AIAssistWidget() {
    const {openChat,setChatOpen} = useNowit()

    return (
        <>
            {openChat && <ChatWindow onClose={() => setChatOpen(false)} />}
            <AIAssistButton onClick={() => setChatOpen((v) => !v)} />
        </>
    );
}
