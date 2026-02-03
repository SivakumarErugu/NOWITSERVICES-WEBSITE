'use client';

import React from "react";

const Products2 = () => {
  return (
    <section className="w-full py-5 flex flex-col items-center text-center">
      
      {/* Heading */}
      <div className="px-5">
        <h2 className="text-xl md:text-3xl font-medium text-[#0b2b4b] ibmPlex-text">
          Platforms That{" "}
          <span className="text-[#1e6fd9]">Think, Adapt, and Scale</span>
        </h2>

        <p className="mt-3 text-xs md:text-sm text-gray-600 max-w-xl">
          Enterprise-Ready Zero-Code Platforms That Evolve, Adapt, and Scale —
          From Individuals to Enterprises
        </p>
      </div>

      {/* Infinity Image */}
      <div className="mt-0 flex justify-center w-full">
        <div className="relative">
          
          {/* Animated Infinity */}
          <img
            src="https://res.cloudinary.com/dtb4vozhy/image/upload/v1770043421/ChatGPT_Image_Feb_2_2026_06_16_16_PM_kwgkoy.png"
            alt="Infinity Platform"
            className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[620px]
                       animate-infinity select-none"
            draggable={false}
          />

          {/* Labels */}
          <span className="absolute left-[18%] top-1/2 -translate-y-1/2
                           text-sm md:text-base font-medium text-[#0b2b4b]">
            Individual
          </span>

          <span className="absolute right-[18%] top-1/2 -translate-y-1/2
                           text-sm md:text-base font-medium text-[#0b2b4b]">
            Enterprise
          </span>

        </div>
      </div>

    </section>
  );
};

export default Products2;
