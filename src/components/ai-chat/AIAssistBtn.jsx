"use client";

import { BsStars } from "react-icons/bs";

export default function AIAssistButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open AI Assistant"
      className="
        fixed right-6 bottom-6 z-50
        h-14 w-14 rounded-full
        flex items-center justify-center
        text-2xl text-white
        cursor-pointer
        bg-gradient-to-b from-[#8FD37A] to-[#0B4B8A]
        shadow-lg hover:scale-105 transition text-white
      "
    >
      <BsStars />
    </button>
  );
}
