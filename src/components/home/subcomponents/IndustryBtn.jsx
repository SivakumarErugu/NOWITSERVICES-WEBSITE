'use client';
import React from "react";
import SlidingHeader from "@/components/shared/UI-Elements/SlidingHeader";
import TitleAndDescription from "@/components/shared/UI-Elements/TitleAndDescription";

/* ================= DATA ================= */
const INDUSTRIES = [
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

/* ================= PILL ================= */
const Pill = ({ label }) => {
    return (
        <div
            className="
        shrink-0
        w-42 h-8
        sm:w-47 sm:h-9
        lg:w-52 lg:h-9
        rounded-full
        p-0.5
        bg-linear-to-b from-[#87CE6D] to-[#174F88]
      "
        >
            <div
                className="
          w-full h-full
          rounded-full
          bg-white
          flex items-center justify-center
          text-[#4E8F6A]
          font-semibold
          text-[11px]
          sm:text-[12px]
          lg:text-[13px]
          whitespace-nowrap
        "
            >
                {label}
            </div>
        </div>
    );
};

/* ================= IndustryBtn ================= */
const IndustryBtn = () => {
    return (
        <div className="w-full mt-4 flex flex-col md:gap-5">
            <TitleAndDescription title="Solutions for " span="Every Industry" description="NOWIT Services offers AI-powered digital transformation services that help businesses improve efficiency, automate operations, and grow faster. Our cloud-first solutions include smart marketing, cloud migration, professional IT consulting, intelligent messaging, IP filing, and corporate training, all designed to deliver secure, scalable, and data-driven business outcomes."
            />
            {/* ================= MOBILE + TABLET ================= */}
            <div className='h-15 md:hidden' />
            <div
                className="
          flex gap-3
          overflow-x-auto
          px-4 py-2
          lg:hidden
          scrollbar-hide
        
        "
            >
                {INDUSTRIES.map((item) => (
                    <Pill key={item} label={item} />
                ))}
            </div>

            {/* ================= LG SCREENS (4 / 3 / 2 / 1) ================= */}
            <div className="hidden lg:flex xl:hidden flex-col items-center gap-y-7">

                {/* Row 1 – 4 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(0, 4).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

                {/* Row 2 – 3 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(4, 7).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

                {/* Row 3 – 2 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(7, 9).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

                {/* Row 4 – 1 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(9, 10).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

            </div>

            {/* ================= XL SCREENS (5 / 4 / 3) ================= */}
            <div className="hidden xl:flex flex-col items-center gap-y-7">

                {/* Row 1 – 5 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(0, 5).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

                {/* Row 2 – 4 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(5, 9).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

                {/* Row 3 – 3 */}
                <div className="flex gap-x-6">
                    {INDUSTRIES.slice(9, 12).map((item) => (
                        <Pill key={item} label={item} />
                    ))}
                </div>

            </div>

        </div>
    );
};

export default IndustryBtn;
