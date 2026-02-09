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

      {/* Infinity Image Container */}
      <div className="mt-4 lg:mt-10 flex justify-center w-full">
        <div className="relative inline-block">
          {/* 1. Base Infinity Image */}
          <Image
            src={Infinity}
            alt="Infinity Platform"
            className="w-100 sm:w-105 md:w-130 lg:w-160 2xl:w-250 select-none"
            draggable={false}
          />
          {/* 2. SVG Lighting Overlay BY MANOJ*/}
          {/* <svg
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

            
            <path
              d="M300,150 C350,80 450,80 500,150 C550,220 450,220 400,180 L300,150 L200,120 C150,80 50,80 100,150 C150,220 250,220 300,150"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
              filter="url(#glow)"
              className="animate-infinity-flow border-2"
              style={{
                strokeDasharray: '100, 1000',
                opacity: 0.8
              }}
            />
          
          </svg> */}
          {/* here getted 2 */}
          {/* <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 300"
            fill="none"
          >
            <defs>
              <linearGradient id="flowGradient">
                <stop offset="0%" stopColor="#E8FFE2" />
                <stop offset="50%" stopColor="#B7F7C5" />
                <stop offset="100%" stopColor="#E8FFE2" />
              </linearGradient>

              <filter id="softGlow">
                <feGaussianBlur stdDeviation="3" />
              </filter>
            </defs>

            {/* RIGHT → LEFT BAR */}
          {/* BAR 1 — clockwise */}
          {/* <path
              d="M 470 85 C 520 130 520 170 470 215
     C 420 260 320 240 300 150
     C 280 60 180 40 130 85
     C 80 130 80 170 130 215
     C 180 260 280 240 300 150
     C 320 60 420 40 470 85"
              pathLength="1"
              className="flow-bar"
              stroke="url(#flowGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              filter="url(#softGlow)"
            />

            {/* BAR 2 — counter-clockwise */}
          {/* <path
              d="M 470 85 C 520 130 520 170 470 215
     C 420 260 320 240 300 150
     C 280 60 180 40 130 85
     C 80 130 80 170 130 215
     C 180 260 280 240 300 150
     C 320 60 420 40 470 85"
              pathLength="1"
              className="flow-bar--reverse"
              stroke="url(#flowGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              filter="url(#softGlow)"
            />

          </svg> */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 300"
            fill="none"
          >
            <defs>
              <linearGradient id="flowGradient">
                <stop offset="0%" stopColor="#E8FFE2" />
                <stop offset="50%" stopColor="#B7F7C5" />
                <stop offset="100%" stopColor="#E8FFE2" />
              </linearGradient>

              <filter id="softGlow">
                <feGaussianBlur stdDeviation="6" />
              </filter>

              <style>
                {`
        @keyframes infinityFlow {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: -1; }
        }
        .flow {
          stroke-dasharray: 0.25 1;
          animation: infinityFlow 5s linear infinite;
        }
        .flow--offset {
          stroke-dashoffset: -0.
          5;
        }
      `}
              </style>
            </defs>

            {/* BAR A */}
            <path
              d="M 485 75 C 
            945 125 545 175 485 225
       C 425 285 330 260 300 150
       C 270 40 175 15 115 75
       C 55 125 55 175 115 225
       C 175 285 270 260 300 150
       C 330 40 425 15 485 75"
              pathLength="1"
              className="flow"
              stroke="url(#flowGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              filter="url(#softGlow)"
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
