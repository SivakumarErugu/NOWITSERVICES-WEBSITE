import React from "react";
import Image from "next/image";
import { ThemeBottomBorder } from "@/components/shared/UI-Elements/Custom-Elements";

const List = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770113478/d69614e615c4bc6e13926cc637a6db1241641d2f_guexhj.png",
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770113485/3c0cb1e60db6916e63264087a2814face72373f4_dmhmr3.png",
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770113491/c5297dddfc8db6e6186bc60631b54f65b33423c0_l1djrj.png",
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770113503/1b8136a9a53027f1444cc4cd379566376efa7a6a_g4llln.png",
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770113511/c12b69e9efd11b2db9a2a8bee1122d3fa56716d6_ncvq26.png",
    },
];

const TrustedBannerSection = () => {
    return (
        <div
            className="
        relative
        w-full
        h-[577px]
        bg-[url('https://res.cloudinary.com/dr9thittl/image/upload/v1770112947/7a674011e1fdea2559ccd610d4230ccde99ebbce_yoafno.png')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
      "
        >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 w-full max-w-[1295px] px-10 flex flex-col items-center">

                {/* HEADING BLOCK */}
                <div className="flex flex-col items-center gap-4 mb-16">
                    <div className="flex items-center relative w-fit">
                        <span className="text-white font-normal tracking-wide">
                            Trusted By
                        </span>
                        <ThemeBottomBorder width="48px" left="110%" />
                    </div>

                    <h2 className="text-white font-bold text-[48px] text-center ibm-text">
                        Global Services Provider
                    </h2>
                </div>

                {/* LOGO ROW */}
                <ul className="flex items-center justify-between w-full max-w-[1100px]">
                    {List.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-center opacity-90"
                        >
                            <Image
                                src={item.url}
                                alt="trusted-logo"
                                width={160}
                                height={60}
                                className="object-contain"
                            />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default TrustedBannerSection;
