import React from "react";

const AiBtn = () => {
  return (
    <button className="relative w-[222px] h-[61px] rounded-[57px] p-[3px] bg-gradient-to-r from-[#87CE6D] to-[#174F88] self-end">
      
      {/* White inner pill */}
      <div className="flex items-center  gap-2 h-full w-full rounded-[54px] bg-white justify-center">
        
        {/* Text */}
        <span className="text-[#174F88] font-medium whitespace-nowrap">
          Talk To AI
        </span>

        {/* Icon Circle */}
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gradient-to-r from-[#87CE6D] to-[#174F88] shrink-0">
          <img
            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770096653/Vector_mqgnku.png"
            alt="AI"
            className="w-[16px] h-[16px]"
          />
        </div>

      </div>
    </button>
  );
};

export default AiBtn;
