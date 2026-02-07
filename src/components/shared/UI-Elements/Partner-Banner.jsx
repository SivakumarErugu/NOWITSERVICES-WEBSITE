"use client";

import React from "react";
import Image from "next/image";
import { ThemeBtnTag } from "../../shared/UI-Elements/Custom-Elements";

/* Images */
import partnerBanner1 from "../../../../public/images/PartnerBannerImages/partnerBanner1.png";
import partnerBanner2 from "../../../../public/images/PartnerBannerImages/partnerBanner2.png";
import partnerBannerBg from "../../../../public/images/PartnerBannerImages/partnerBannerBg.jpg";

const PartnerBanner = () => {
    return (
        <section
            className="
        relative w-full overflow-hidden
        px-8 py-8 md:px-10 lg:px-18 2xl:px-30 md:py-16
        flex flex-col items-center text-center
        md:flex-row md:items-center md:justify-between md:text-left mb-8 md:mb-12 lg:mb-25
      "
        >
            {/* BACKGROUND IMAGE ONLY */}
            <Image
                src={partnerBannerBg}
                alt="Partner banner background"
                fill
                priority
                className="object-cover"
            />

            <div
                className="
  absolute inset-0
  bg-linear-to-r
  from-[#d6f5f0]/95   /* green */
  via-[#cfe0ff]/90    /* blue */
  to-[#d9ccff]/95     /* purple */
"
            />

            {/* CONTENT */}
            <div className="relative z-10  ">
                {/* MOBILE + MD */}
                <h2 className="text-xl md:text-3xl font-semibold text-[#111] leading-snug md:hidden">
                    Grow Together <br />
                    Through Partnership
                </h2>

                {/* LG+ */}
                <h2 className="hidden md:block md:text-3xl lg:text-5xl font-medium text-[#111] leading-none ">
                    <span className="inline-flex items-center gap-3 mb-2">
                        Grow
                        <Image
                            src={partnerBanner1}
                            alt="Together"
                            width={50}
                            height={30}
                            className="
          rounded-full object-cover
        md:h-9 md:w-32 lg:h-12 lg:w-40 
        align-middle
      "
                        />
                        Together
                    </span>

                    <br />

                    <span className="inline-flex items-center gap-3 md:mt-1 lg:mt-2">
                        <Image
                            src={partnerBanner2}
                            alt="Through Partnership"
                            width={50}
                            height={40}
                            className="
      rounded-full object-cover
        md:h-9 md:w-24
        lg:h-12 lg:w-40 
        align-middle
      "
                        />
                        Through Partnership
                    </span>
                </h2>

                <p className="mt-4 text-gray-700 text-xs lg:text-sm mx-auto md:mx-0 md:pr-10">
                    Partner with NowIT Services to collaborate, innovate, and deliver
                    customized solutions.
                </p>

                {/* MOBILE + MD BUTTON */}
                <div className="mt-8 md:hidden flex justify-center">
                    <ThemeBtnTag
                        BtnText="Become a Partner"
                        styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                    />
                </div>
            </div>

            {/* LG+ CTA */}
            <div className="relative z-10 shrink-0 hidden md:block">
                <ThemeBtnTag
                    BtnText="Become a Partner"
                    styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                />
            </div>
        </section>
    );
};

export default PartnerBanner;
