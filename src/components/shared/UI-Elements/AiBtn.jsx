"use client"

import { useNowit } from "@/store/useNowit";
import React from "react";
import { BsStars } from "react-icons/bs";

const AiBtn = () => {
  const { setChatOpen } = useNowit();
  const {t}=useNowit()

  const handleClick = () => {
    setChatOpen(true);
  };

  return (
    <div className="hidden md:flex items-end justify-end p-0 w-[96%] mt-3 mb-3">
      <button
        onClick={handleClick}
        aria-label="Open AI Assistant"
        className="relative w-48 h-12 rounded-[57px] p-0.5 bg-linear-to-r from-[#87CE6D] to-[#174F88]"
      >
        {/* White inner pill */}
        <div className="flex items-center gap-2 h-full w-full rounded-[54px] bg-white justify-center">

          {/* Text */}
          <span className="text-[#174F88] font-medium whitespace-nowrap">
           {t("partner.talktoai") || "Talk To AI"}
          </span>

          {/* Icon Circle */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-r from-[#87CE6D] to-[#174F88] shrink-0 text-white text-xl">
            <BsStars />
          </div>

        </div>
      </button>
    </div>
  );
};

export default AiBtn;
