"use client"

import { useNowit } from "@/store/useNowit";
import React from "react";
import { BsStars } from "react-icons/bs";

const AiBtn = () => {
  const { setChatOpen } = useNowit();

  const handleClick = () => {
    setChatOpen(true);
  };

  return (
    <div className="hidden md:flex items-end justify-end p-0 w-[88%] mt-7">
      <button
        onClick={handleClick}
        aria-label="Open AI Assistant"
        className="relative w-[222px] h-[61px] rounded-[57px] p-[3px] bg-gradient-to-r from-[#87CE6D] to-[#174F88]"
      >
        {/* White inner pill */}
        <div className="flex items-center gap-2 h-full w-full rounded-[54px] bg-white justify-center">

          {/* Text */}
          <span className="text-[#174F88] font-medium whitespace-nowrap">
            Talk To AI
          </span>

          {/* Icon Circle */}
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#87CE6D] to-[#174F88] shrink-0 text-white text-xl">
            <BsStars />
          </div>

        </div>
      </button>
    </div>
  );
};

export default AiBtn;
