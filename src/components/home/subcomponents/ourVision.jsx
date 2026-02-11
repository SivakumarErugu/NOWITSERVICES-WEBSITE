'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurVision = () => {
  return (
    <section className="w-full flex justify-center py-24 bg-white">
      {/* FRAME (1240 × 473.68) */}
      <div className="w-[1240px]  h-[296px] md:h-[473.68px] flex items-center gap-[80px]">
        {/* LEFT IMAGE CONTAINER */}
        {/* <div className="relative w-[553px] h-full flex-shrink-0 hidden md:block">
          <Image
            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770287040/bfb628225dff059e7d9d021d1fe45747607647eb_qwybfe.png"
            alt="Our Vision"
            fill
            className="object-cover rounded-[28px]"
            priority
          />
        </div> */}
        <motion.div
          className="relative w-[553px] h-[474px] hidden md:block  overflow-hidden"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770464743/Gemini_Generated_Image_bt8mj1bt8mj1bt8m_infnis.png"
            alt="Our Vision"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col w-full md:max-w-[607px]  bg-[#EAF3FF] md:bg-transparent p-5">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="ibmPlex-text text-[25px] font-bold md:font-medium md:text-[48px] text-[#1F2937]">
              Our <span className="text-[#0D5BD7]">Vision</span>
            </h2>
            <span className="w-[56px] h-[2px] bg-[#22C55E] mt-3" />
          </div>

          {/* Paragraphs */}
          <p className="ibmPlex-text text-[13px] md:text-[16px] leading-[28px] text-[#4B5563] mb-5">
            To drive innovation through intelligent digital solutions that solve
            real-world business challenges. We envision a future where technology
            enables efficiency, growth, and meaningful progress.
          </p>

          <p className="ibmPlex-text text-[13px] md:text-[16px] leading-[28px] text-[#4B5563] mb-5">
            We are committed to continuous learning, adaptability, and thoughtful
            execution, ensuring our solutions stay relevant in an ever-evolving
            digital landscape.
          </p>

          <p className="ibmPlex-text text-[13px] md:text-[16px] leading-[28px] text-[#4B5563]">
            We believe that strong technology is built with responsibility. Our
            vision is to simplify complexity, embrace innovation, and create
            digital solutions that support sustainable growth and long-term
            success for our clients.
          </p>

        </div>
      </div>
    </section>
  );
};

export default OurVision;
