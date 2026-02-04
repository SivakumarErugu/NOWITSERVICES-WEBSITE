"use client";

import React from "react";
import Image from "next/image";
import { ThemeBtnTag } from "../../shared/UI-Elements/Custom-Elements";

/* Images */
import partnerBanner1 from "../../../../public/images/PartnerBannerImages/partnerBanner1.png";
import partnerBanner2 from "../../../../public/images/PartnerBannerImages/partnerBanner2.png";
import partnerBannerBg from "../../../../public/images/PartnerBannerImages/partnerBannerBg.jpg";
import Businessbg from "../../../../public/images/BusinessBannerImages/Businessbg.jpg";

const BusinessBanner = () => {
    return (
        <section
            className="
        relative w-full overflow-hidden
        px-8 py-8 md:px-10 lg:px-18 2xl:px-30 md:py-16
        flex flex-col items-center text-center
        md:flex-row md:items-center md:justify-between md:text-left mb-15 
      "
        >
            {/* BACKGROUND IMAGE ONLY */}
            <Image
                src={Businessbg}
                alt="Partner banner background"
                fill
                priority
                className="object-cover"
            />

            {/* <div
                className="
  absolute inset-0
  bg-linear-to-r
  from-[#d6f5f0]/95   
  via-[#cfe0ff]/90   
  to-[#d9ccff]/95     
"
            /> */}

            {/* CONTENT */}
            <div className="relative z-10  ">
                {/* MOBILE + MD */}
                <h2 className="text-xl md:text-3xl font-semibold text-white leading-snug md:hidden">
                    Ready To Launch <br />
                    And Scale Your Business
                </h2>

                {/* LG+ */}
                <h2 className="hidden md:block md:text-2xl lg:text-5xl font-medium text-white leading-none ">
                    <span className="inline-flex items-center gap-3 mb-2">
                        Ready
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
                        To Launch
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
                        And Scale Your Business  </span>
                </h2>

                <p className="mt-4 text-white/85 text-xs lg:text-sm mx-auto md:mx-0 md:pr-10">
                    Talk to our experts to explore how our services can support your goals and drive long-term growth.
                </p>

                {/* MOBILE + MD BUTTON */}
                <div className="mt-8 md:hidden flex justify-center">
                    <ThemeBtnTag
                        BtnText="Get In Touch"
                        styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                    />
                </div>
            </div>

            {/* LG+ CTA */}
            <div className="relative z-10 shrink-0 hidden md:block">
                <ThemeBtnTag
                    BtnText="Get In Touch"
                    styles="border-0 text-sm !font-normal !px-10 !rounded-md"
                />
            </div>
        </section>
    );
};

export default BusinessBanner;
