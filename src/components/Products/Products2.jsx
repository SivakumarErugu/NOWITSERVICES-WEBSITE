'use client';

import React from "react";
import Image from "next/image";
import Infinity from "../../../public/images/ProductImages/Infinity.png";


const Products2 = () => {
  return (
    <section className="w-full py-2 flex flex-col items-center text-center">

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
      <div className=" mt-4 lg:mt-10 flex justify-center w-full">
        <div className="relative">

          {/* Animated Infinity */}
          <Image
            src={Infinity}
            alt="Infinity Platform"
            className="w-100 sm:w-105 md:w-130 lg:w-160 2xl:w-250
                       animate-infinity select-none "
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
