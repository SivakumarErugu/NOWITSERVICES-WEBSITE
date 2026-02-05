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

const IndustryBtn = () => {
    return (
        <div
            className="
        w-[1270px]
        h-[201px]
        mx-auto
        flex
        flex-wrap
        justify-center
        items-center
        gap-x-6
        gap-y-5
       
      "
        >
            {List.map((item, index) => (
                <span
                    key={item}
                    className="
    px-8
    h-[34px]
    flex
    items-center
    justify-center
    rounded-full
    bg-white
    border-2
    border-t-[#6FBF73]
    border-l-[#6FBF73]
    border-r-[#6FBF73]
    border-b-[#0A3D78]

    text-[#4E8F6A]
    font-semibold
    tracking-wide
    shadow-[0_1px_0_#0A3D78]
    whitespace-nowrap
  "
                >
                    {item}
                </span>

            ))}
        </div>
    );
};

export default IndustryBtn;
