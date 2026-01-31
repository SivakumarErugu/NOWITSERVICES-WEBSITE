import React from "react";
import Image from "next/image";

import careerCall1 from "../../../public/images/careerCall1.png";
import careerCall2 from "../../../public/images/careerCall2.png";
import careerCall3 from "../../../public/images/careerCall3.png";
import careerCall4 from "../../../public/images/careerCall4.png";

import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";

const CareerVisualMessageBlock = () => {
  return (
    <section className="w-1/2 flex flex-col items-center justify-center py-16 ">
      <div className="max-w-6xl text-center font-semibold leading-tight ">
        {/* Line 1 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px]">
          <span className="text-career-gradient">Calling</span>
          <Image
            src={careerCall1}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-55"
          />
          <span className="text-career-gradient">all</span>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <Image
            src={careerCall2}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-30"
          />
          <span className="text-career-gradient">innovators</span>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <span className="text-career-gradient">Ready to</span>
          <Image
            src={careerCall3}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-55"
          />
          <span className="text-career-gradient">Build</span>
        </div>

        {/* Line 4 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <span className="text-career-gradient">the Future</span>
          <Image
            src={careerCall4}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-30"
          />
        </div>
      </div>

      <p className="text-lg text-center text-[#25252580] mt-10">
        We’re always looking for talented individuals who are passionate about
        technology, innovation, and creating meaningful impact. Join a team
        where your ideas matter and your growth is supported.
      </p>

      <div className="mt-10 relative flex flex-col items-center">
        <ThemeBtnTag
          BtnText="View Open Roles"
          styles="h-11 w-76 rounded-xl! bg-[#50B136]"
        />

        {/* The Arrow SVG - Positioned Absolute to the right of the button */}

        <div className="absolute -right-37 -top-10 pointer-events-none">
          <svg
            width="200"
            height="70"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* The Path: Adjusted for the sharp vertical entry and tight loop */}
            <path
              d="M130,10 
         C135,40 145,70 120,70 
         C100,70 95,50 115,52 
         C135,55 150,95 65,105"
              stroke="#000000"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* The Arrowhead: Made sharper and angled to match the swoop */}
            <path
              d="M72,98 L52,105 L70,114 Z"
              fill="#06182C"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CareerVisualMessageBlock;
