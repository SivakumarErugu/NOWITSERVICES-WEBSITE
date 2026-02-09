'use client';

import React from "react";
import Image from "next/image";
import Infinity from "../../../public/images/ProductImages/Infinity.png";
import InfiniteLoop from "./InfiniteLoop";


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

      {/* Infinity Image Container */}
          <InfiniteLoop />
      <div className="mt-4 lg:mt-10 flex justify-center w-full">
        <div className="relative inline-block">
          
          {/* 1. Base Infinity Image */}
          <Image
            src={Infinity}
            alt="Infinity Platform"
            className="w-100 sm:w-105 md:w-130 lg:w-160 2xl:w-250 select-none"
            draggable={false}
          />

          {/* 2. SVG Lighting Overlay */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 -100 300" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* The Animated Light Path */}
            <path
              d="M300,150 C350,80 450,80 500,150 C550,220 450,220 400,180 L300,150 L200,120 C150,80 50,80 100,150 C150,220 250,220 300,150"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#glow)"
              className="animate-infinity-flow"
              style={{
                strokeDasharray: '100, 1000',
                opacity: 0.8
              }}
            />
          </svg>

          {/* Labels */}
          <span className="absolute left-[18%] top-1/2 -translate-y-1/2 text-sm md:text-base font-medium text-[#0b2b4b]">
            Individual
          </span>
          <span className="absolute right-[18%] top-1/2 -translate-y-1/2 text-sm md:text-base font-medium text-[#0b2b4b]">
            Enterprise
          </span>
        </div>
      </div>

    </section>
  );
};

export default Products2;
