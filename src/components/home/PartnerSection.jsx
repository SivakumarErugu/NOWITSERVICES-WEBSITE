'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AvatarStack from "../shared/UI-Elements/AvatarStack";
import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";
import SlidingHeader from "../shared/UI-Elements/SlidingHeader";
import { useRouter } from "next/navigation";

const Images = [
  "https://res.cloudinary.com/dr9thittl/image/upload/v1770368688/351c910257cd7a99096737785ceb42a38d558322_ccqwyd.jpg",
  "https://res.cloudinary.com/dr9thittl/image/upload/v1770368642/caa249fdeb6501b6af932cf99bbbdac74cd48abc_savzbx.jpg"
];

const PartnerSection = () => {
  const [hoverKey, setHoverKey] = useState(0);
  const router = useRouter();

  return (
    <section id="partnerSectionHome" className="w-full py-10 px-4 lg:px-8">

      <div className="w-full mx-auto px-1 lg:px-6">

        {/* HEADER */}
        <SlidingHeader title="Who we are" bottom="mb-4" />

        {/* ================= TOP TEXT ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">

          {/* LEFT HEADING */}
          <div className="w-full lg:w-[55%]">
            
             <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-5xl font-bold text-gray-900 leading-normal">
                    Your{" "}<span className="text-[#0b5ed7]">Trusted Partner</span> in Digital Transformation
                </h2>

          </div>

          {/* RIGHT TEXT */}
          <div className="w-full lg:w-[38%] flex flex-col gap-6">
            <p className="inter-text text-xs sm:text-sm lg:text-[17px] 2xl:text-lg text-gray-600 leading-relaxed">
              We are a technology-driven team dedicated to delivering scalable,
              intelligent, and reliable digital solutions for modern businesses.
            </p>

            <div className="hidden md:block w-fit">
              <ThemeBtnTag
                BtnText="Know More"
                onClick={() => router.push("/products")}
                styles="w-[190px] h-[42px] ibm-text"
              />
            </div>

            {/* MOBILE TRUSTED */}
            <div className="block md:hidden flex justify-between w-[95%]">
              <p className="ibmPlex-text text-[12px]">
                Trusted by Global Clients
              </p>
              <AvatarStack />
            </div>
          </div>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div
          className="hidden md:flex mt-14"
          onMouseEnter={() => setHoverKey((k) => k + 1)}
        >
          <div className="flex w-full gap-6 lg:gap-10 xl:gap-12">

            {/* LEFT IMAGE */}
            <div
              className="
                relative
                w-[36%]
                lg:w-[34%]
                xl:w-[38%]
                h-70
                md:h-80
                lg:h-90
                xl:h-100
                2xl:h-115
                rounded-[22px]
                overflow-hidden
              "
            >
              <motion.div
                key={`left-${hoverKey}`}
                initial={{ x: -800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={Images[0]}
                  alt="Trusted Clients"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            {/* CENTER CARD */}
            <div
              className="
                w-[28%]
                lg:w-[32%]
                xl:w-[24%]
                 h-70
                md:h-80
                lg:h-90
                xl:h-100
                2xl:h-115
                rounded-[22px]
                bg-linear-to-br
                from-[#071C3D]
                to-[#0B4F8A]
                text-white
                flex flex-col
                justify-center
                px-6
                lg:px-8
              "
            >
              <h1 className="ibm-text text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-none">
                Trusted
              </h1>
              <p className="ibm-text text-[16px] lg:text-[18px] opacity-90 mt-2">
                by Global Clients
              </p>
              <div className="mt-4">
                <AvatarStack />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                w-[36%]
                lg:w-[34%]
                xl:w-[38%]
                  h-70
                md:h-80
                lg:h-90
                xl:h-100
                2xl:h-115
                rounded-[22px]
                overflow-hidden
              "
            >
              <motion.div
                key={`right-${hoverKey}`}
                initial={{ x: 800, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1.4,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={Images[1]}
                  alt="Trusted Clients"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;
