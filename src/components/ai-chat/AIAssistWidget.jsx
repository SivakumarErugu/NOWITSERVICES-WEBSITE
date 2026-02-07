"use client";

import { useState } from "react";
import AIAssistButton from "./AIAssistBtn";
import ChatWindow from "./ChatWindow";

export default function AIAssistWidget() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open && <ChatWindow onClose={() => setOpen(false)} />}
            <AIAssistButton onClick={() => setOpen((v) => !v)} />
        </>
    );
}
