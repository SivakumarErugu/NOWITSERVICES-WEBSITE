'use client'

import { CgShapeRhombus } from "react-icons/cg";
import { TbShieldCheckeredFilled } from "react-icons/tb";
import { motion } from 'framer-motion'
import { useNowit } from "@/store/useNowit";

const LeftArrow = () => (
  <svg width="19" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1,1.5 L3.5,10 L4.5,5.5 L10.5,3.5 L1,1.5Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg width="19" height="19" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      /* Flipped X-coordinates: 1->11, 3.5->8.5, 4.5->7.5, 10.5->1.5 */
      d="M11,1.5 L8.5,10 L7.5,5.5 L1.5,3.5 L11,1.5Z"
      fill="#1C1C1C"
      stroke="#1C1C1C"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CTAFlow() {
  const {t}=useNowit();
  return (
    <div className="relative w-full h-[120px] flex items-center justify-center hidden md:block">

      {/* LEFT */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center">
        {/* The Blue Icon */}
        <span className="bg-[#3872AD] text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0 z-10">
          <CgShapeRhombus size={22} />
        </span>

        <motion.div
          className="absolute top-9 left-15 w-full"
          initial={{ opacity: 0, y: 16 }}     // starts slightly from bottom
          animate={{ opacity: 1, y: 0 }}      // moves upward
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.15,
          }}
        >
          {/* The Container for Arrow and Text */}
          <div className="relative flex w-full items-center ml-2">
            {/* The Arrow: Positioned absolutely to overlap the gap */}
            <div className="absolute -left-3 -top-2 rotate-[-8deg]">
              <LeftArrow />
            </div>

            {/* The Text Pill */}
            <span className="bg-white px-4 min-w-40 py-0.5 rounded-full text-sm font-medium shadow-sm border border-gray-200">
              {t("hero.unified")||"Unified Services"}
            </span>
          </div>

        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center">
        <motion.div
          className="absolute top-9 right-15 w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.15,
          }}
        >
          <div className="relative flex w-full items-center justify-end mr-2">

            {/* The Arrow: Now anchored to the RIGHT top of the pill */}
            <div className="absolute -right-3 -top-2 rotate-[8deg]">
              <RightArrow />
            </div>
            {/* The Text Pill */}
            <span className="bg-white px-4 min-w-40 py-0.5 rounded-full text-sm font-medium shadow-sm border border-gray-200 text-center">
             {t("hero.reliable")||"Reliable Support"}
            </span>
          </div>
        </motion.div>

        {/* The Green Icon */}
        <span className="bg-[#4A9D2B] text-white w-10 h-10 flex items-center justify-center rounded-full shrink-0 z-10">
          <TbShieldCheckeredFilled size={22} />
        </span>
      </div>

      {/* CENTER CTA */}
      <a href="#partnerSectionHome">
        <button type="button" className="z-10 w-[220px] md:w-[288px] h-[48px] rounded-lg bg-gradient-to-r from-[#5CD032] to-[#194D81] text-white font-bold shadow-lg"
        suppressHydrationWarning>
          {t("hero.getStarted")||"Get Started"}
        </button>
      </a>
    </div >
  );
}
