'use client';

import React from "react";
import Image from "next/image";
import Infinity from "../../../public/images/ProductImages/Infinity.png";
import InfiniteLoop from "./InfiniteLoop";


const Products2 = () => {
  return (
    <section className="w-full py-2 md:py-6 flex flex-col items-center text-center mt-2 md:mt-5 mb-5 md:mb-8 lg:mb-5 2xl:mb-12">

      {/* Heading */}
      <div className="px-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0b2b4b] ibmPlex-text">
          Platforms That{" "}
          <span className="text-[#1e6fd9]">Think, Adapt, and Scale</span>
        </h2>

        <p className="mt-3 text-xs md:text-sm 2xl:text-[17px] text-gray-600 max-w-2xl">
          Enterprise-Ready Zero-Code Platforms That Evolve, Adapt, and Scale —
          From Individuals to Enterprises
        </p>
      </div>

      {/* Infinity Image Container */}
      <InfiniteLoop />


    </section>
  );
};

export default Products2;
