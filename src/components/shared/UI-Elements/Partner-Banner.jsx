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
        px-8 py-14 md:px-18 md:py-16
        flex flex-col items-center text-center
        lg:flex-row lg:items-center lg:justify-between lg:text-left mb-15 
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
            <div className="relative z-10 max-w-2xl ">
                {/* MOBILE + MD */}
                <h2 className="text-2xl md:text-4xl font-semibold text-[#111] leading-snug lg:hidden">
                    Grow Together <br />
                    Through Partnership
                </h2>

                {/* LG+ */}
                <h2 className="hidden lg:block text-5xl font-medium text-[#111] leading-none ">
                    <span className="inline-flex items-center gap-3 mb-2">
                        Grow
                        <Image
                            src={partnerBanner1}
                            alt="Together"
                            width={50}
                            height={30}
                            className="
        rounded-full object-cover
        h-12 w-40
        align-middle
      "
                        />
                        Together
                    </span>

                    <br />

                    <span className="inline-flex items-center gap-3 mt-2">
                        <Image
                            src={partnerBanner2}
                            alt="Through Partnership"
                            width={50}
                            height={40}
                            className="
        rounded-full object-cover
        h-12 w-28
        align-middle
      "
                        />
                        Through Partnership
                    </span>
                </h2>

                <p className="mt-4 text-gray-700 text-xs lg:text-sm max-w-xl mx-auto lg:mx-0">
                    Partner with NowIT Services to collaborate, innovate, and deliver
                    customized solutions.
                </p>

                {/* MOBILE + MD BUTTON */}
                <div className="mt-8 lg:hidden flex justify-center">
                    <ThemeBtnTag
                        BtnText="Become a Partner"
                        styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                    />
                </div>
            </div>

            {/* LG+ CTA */}
            <div className="relative z-10 shrink-0 hidden lg:block">
                <ThemeBtnTag
                    BtnText="Become a Partner"
                    styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                />
            </div>
        </section>
    );
};

export default PartnerBanner;
