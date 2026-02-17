import React from "react";
import Image from "next/image";
import { ThemeBottomBorder } from "@/components/shared/UI-Elements/Custom-Elements";

const List = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770632130/d69614e615c4bc6e13926cc637a6db1241641d2f_1_bopq4i.png",
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770632149/3c0cb1e60db6916e63264087a2814face72373f4_1_cr3cr7.png",
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770632154/c5297dddfc8db6e6186bc60631b54f65b33423c0_1_pjzcze.png",
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770461654/1b8136a9a53027f1444cc4cd379566376efa7a6a_kg0pgg.png",
    },

];

const TrustedBannerSection = () => {
    return (
        <div
            className="
        relative
        h-115
        w-full
        md:w-full
       md:h-145
        bg-[url('https://res.cloudinary.com/dr9thittl/image/upload/v1770112947/7a674011e1fdea2559ccd610d4230ccde99ebbce_yoafno.png')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        md:mt-10
        pt-2 
      "
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 w-full max-w-325 px-6 flex flex-col items-center">
                {/* HEADING BLOCK */}
                <div className="flex flex-col items-center gap-4 mb-16">
                    <div className="flex items-center relative w-fit pt-8 ">
                        <span className="text-white font-normal tracking-wide inter-text">
                            Trusted By
                        </span>
                        <ThemeBottomBorder width="48px" left="20%" />
                    </div>

                    <h2 className="text-white font-medium text-[24px] md:text-[48px] text-center ibmPlex-text">
                        Global Services Provider
                    </h2>
                </div>


                <div className="w-full flex justify-center">
                    <ul
                        className="
      grid gap-x-6 gap-y-5 md:gap-x-12 md:gap-y-10
      place-content-center place-items-center
      w-fit
      md:flex md:items-center md:justify-center md:gap-16
    "
                    >
                        {List.map((item, index) => (
                            <li
                                key={item.id}
                                className={`
          flex items-center justify-center opacity-90
          ${index === 3 ? "col-start-2" : ""}
          ${index === 4 ? "col-start-3" : ""}
        `}
                            >
                                <Image
                                    src={item.url}
                                    alt="trusted-logo"
                                    width={170}
                                    height={190}
                                    className="object-contain"
                                />
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default TrustedBannerSection;
