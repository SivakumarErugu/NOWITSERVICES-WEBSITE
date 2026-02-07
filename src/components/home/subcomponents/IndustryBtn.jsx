import React from "react";

const List = [
    "Healthcare",
    "Education",
    "Finance & Banking",
    "Retail & E-commerce",
    "Manufacturing",
    "Logistics & Supply Chain",
    "Real Estate",
    "Travel & Hospitality",
    "IT & Technology",
    "Telecommunications",
    "Energy & Utilities",
    "Automotive",
];

/* ================= Pill ================= */
const Pill = ({ label, isMobile }) => {
    return (
        <span
            className="
    w-[238px] h-[41px]
    rounded-[23px]
    p-[2px]
    bg-gradient-to-b from-[#87CE6D] to-[#174F88]
    
    flex items-center justify-center
  "
        >
            <span
                className={`
      w-full h-full
      rounded-[21px]
      bg-white
      flex items-center justify-center
      text-[#4E8F6A]
      font-semibold
      text-[14px]
      whitespace-nowrap
      ${isMobile ? "p-4" : "p-0"}
      ${isMobile ? "px-7" : "px-0"}

    `}
            >
                {label}
            </span>
        </span>

    );
};

/* ================= IndustryBtn ================= */
const IndustryBtn = () => {
    return (
        <div className="w-full flex justify-center">

            {/* ================= MOBILE (horizontal scroll) ================= */}
            <div className="flex gap-6 overflow-x-auto px-4 py-3 md:hidden scroll-invisible">
                {List.map((item) => (
                    <Pill key={item} label={item} isMobile={true} />
                ))}
            </div>

            {/* ================= DESKTOP (manual 5–4–3 layout) ================= */}
            <div className="hidden md:flex flex-col gap-y-5 w-[1270px] h-[201px] justify-center">
                {/* Row 1 – 5 pills */}
                <div className="flex justify-between">
                    {List.slice(0, 5).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>
                {/* Row 2 – 4 pills (centered) */}
                <div className="flex justify-between mx-[110px]">
                    {List.slice(5, 9).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>
                {/* Row 3 – 3 pills (centered more) */}
                <div className="flex justify-between mx-[280px] gap-3">
                    {List.slice(9, 12).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default IndustryBtn;
