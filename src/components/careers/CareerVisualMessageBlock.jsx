// import React from "react";
// import Image from "next/image";

// import careerCall1 from "../../../public/images/careerCall1.png";
// import careerCall2 from "../../../public/images/careerCall2.png";
// import careerCall3 from "../../../public/images/careerCall3.png";
// import careerCall4 from "../../../public/images/careerCall4.png";

// import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";

// const CareerVisualMessageBlock = () => {
//   return (
//     <section className="w-[100%] md:w-1/2 flex flex-col md:items-center md:justify-center md:py-16 md:px-10 px-2">
//       <div className="md:max-w-6xl text-center ibmPlex-text font-semibold leading-relaxed">
//         {/* Line 1 */}
//         <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-3 md:text-[64px] text-[38px]">
//           <span className="text-career-gradient">Calling</span>
//           <Image
//             src={careerCall1}
//             alt="Career Callout"
//             className="rounded-full object-cover h-12 w-25 md:h-18 md:w-55"
//           />
//           <span className="text-career-gradient">all</span>
//         </div>

//         {/* Line 2 */}
//         <div className="flex flex-wrap items-center justify-center md:gap-x-2 md:gap-x-4 gap-y-3 md:text-[64px] mt-4 text-[38px]">
//           <Image
//             src={careerCall2}
//             alt="Career Callout"
//             className="rounded-full object-cover h:10 w-20 md:h-18 md:w-30"
//           />
//           <span className="text-career-gradient">innovators</span>
//         </div>

//         {/* Line 3 */}
//         <div className="flex flex-wrap md:items-center md:justify-center gap-x-2 md:gap-x-4 gap-y-3 md:text-[64px] mt-4 text-[35px]">
//           <span className="text-career-gradient">Ready to</span>
//           <Image
//             src={careerCall3}
//             alt="Career Callout"
//             className="rounded-full object-cover h-14 w-25 md:h-18 md:w-55"
//           />
//           <span className="text-career-gradient">Build</span>
//         </div>

//         {/* Line 4 */}
//         <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:text-[64px] mt-4 text-[38px]">
//           <span className="text-career-gradient">the Future</span>
//           <Image
//             src={careerCall4}
//             alt="Career Callout"
//             className="rounded-full object-cover h-12 w-15 md:h-18 md:w-30"
//           />
//         </div>
//       </div>

//       <p className="text-[10px] md:text-lg text-center text-[#25252580] mt-10">
//         We’re always looking for talented individuals who are passionate about
//         technology, innovation, and creating meaningful impact. Join a team
//         where your ideas matter and your growth is supported.
//       </p>

//       <div className="mt-10 relative flex flex-col items-center">
//         <ThemeBtnTag
//           BtnText="View Open Roles"
//           styles="h-11 w-50 md:w-76  md:rounded-xl! bg-[#50B136] mb-3"
//         />

//         {/* The Arrow SVG - Positioned Absolute to the right of the button */}

//         <div className="absolute -right-37 -top-10 pointer-events-none">
//           <svg
//             width="200"
//             height="70"
//             viewBox="0 0 200 120"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {/* The Path: Adjusted for the sharp vertical entry and tight loop */}
//             <path
//               d="M130,10 
//          C135,40 145,70 120,70 
//          C100,70 95,50 115,52 
//          C135,55 150,95 65,105"
//               stroke="#000000"
//               strokeWidth="4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />

//             {/* The Arrowhead: Made sharper and angled to match the swoop */}
//             <path
//               d="M72,98 L52,105 L70,114 Z"
//               fill="#06182C"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerVisualMessageBlock;


import React from "react";
import Image from "next/image";

import careerCall1 from "../../../public/images/careerCall1.png";
import careerCall2 from "../../../public/images/careerCall2.png";
import careerCall3 from "../../../public/images/careerCall3.png";
import careerCall4 from "../../../public/images/careerCall4.png";

import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";

const CareerVisualMessageBlock = () => {
  return (
    <section className="w-full lg:w-1/2 flex flex-col items-center justify-center py-12 md:py-16 px-4 sm:px-6 lg:px-10">

      <div className="w-full max-w-5xl text-center ibmPlex-text font-semibold leading-tight">

        {/* Line 1 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-3 
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-career-gradient">Calling</span>
          <Image
            src={careerCall1}
            alt="Career Callout"
            className="rounded-full object-cover h-10 w-20 sm:h-12 sm:w-28 md:h-16 md:w-44"
          />
          <span className="text-career-gradient">all</span>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-3 mt-4
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <Image
            src={careerCall2}
            alt="Career Callout"
            className="rounded-full object-cover h-10 w-16 sm:h-12 sm:w-20 md:h-16 md:w-28"
          />
          <span className="text-career-gradient">innovators</span>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-3 mt-4
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-career-gradient">Ready to</span>
          <Image
            src={careerCall3}
            alt="Career Callout"
            className="rounded-full object-cover h-12 w-20 sm:h-14 sm:w-28 md:h-16 md:w-44"
          />
          <span className="text-career-gradient">Build</span>
        </div>

        {/* Line 4 */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-3 mt-4
                        text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-career-gradient">the Future</span>
          <Image
            src={careerCall4}
            alt="Career Callout"
            className="rounded-full object-cover h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28"
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center text-[#25252580] mt-8 md:mt-10 max-w-2xl">
        We’re always looking for talented individuals who are passionate about
        technology, innovation, and creating meaningful impact. Join a team
        where your ideas matter and your growth is supported.
      </p>

      {/* Button + Arrow */}
      <div className="mt-10 flex justify-center">
        <div className="relative inline-block">

          <ThemeBtnTag
            BtnText="View Open Roles"
            styles="h-11 w-48 sm:w-56 md:w-72 rounded-xl bg-[#50B136]"
          />

          {/* Arrow */}
          <div className="
        absolute 
        -right-16 sm:-right-20 md:-right-28 
        -top-5 sm:-top-11 
        pointer-events-none
      ">
            <svg
              className="w-20 sm:w-24 md:w-32 h-auto"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
              <path d="M72,98 L52,105 L70,114 Z" fill="#06182C" />
            </svg>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CareerVisualMessageBlock;
