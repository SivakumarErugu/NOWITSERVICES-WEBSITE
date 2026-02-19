'use client';

import BannerButtonSection from "./subcomponents/BannerButtonSection";
import HeroSection from "./Hero1";

import { useNowit } from "@/store/useNowit";

const BannerSection = () => {
  const { t } = useNowit();
  // console.log(t("banner.subtitle"), "Triggering Hereeee ")
  return (
    <section className="relative w-full overflow-hidden bg-[#eef5ff] min-h-[820px]">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,#e2efff_0%,#f4f9ff_45%,#eef5ff_75%)]" />

      {/* SVG arcs (hide overflow on small) */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120vw] h-[1000px] pointer-events-none md:block hidden"
        viewBox="0 0 2000 1000"
        preserveAspectRatio="xMidYMax meet"
      >
        <g
          fill="none"
          stroke="#9fbfe3"
          strokeWidth="1.2"
          strokeDasharray="6 10"
          opacity="0.6"
        >
          {/* M [Start X] [Start Y] 
      A [Radius X] [Radius Y] 0 0 1 [End X] [End Y]
      By using 0 and 2000 as start/end, we guarantee it spans the viewBox.
    */}
          {/* Path 1: Topmost/Inner line - Sharpest curve */}
          <path d="M 0 700 A 1000 500 0 0 1 2000 700" />

          {/* Path 2: Middle line - Medium curve */}
          <path d="M 0 850 A 1100 700 0 0 1 2000 850" />

          {/* Path 3: Bottom line - Wider curve */}
          <path d="M 0 1000 A 1200 800 0 0 1 2000 1000" />
        </g>
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 text-center">

        <h1 className="text-[20px] md:text-[30px] font-semibold mb-2 ibmPlex-text">

          {t("banner.subtitle") || "Unleashing Business Potential Through Intelligent Digital Transformation"}
        </h1>

        <h1 className="text-[44px] md:text-[56px] font-bold text-[#0b3154] leading-tight mb-4 ibmPlex-text">
         {t("banner.title") || "Intelligent Digital Transformation"}
        </h1>

        <p className="text-[16px] md:text-[20px] max-w-2xl mx-auto mb-8 text-[#374151]  md:text-center">
          {t("banner.description") || "Enable businesses to grow faster with AI-powered automation, cloud solutions, and data-driven innovation."}
        
        </p>

        <HeroSection />

        {/* Cards */}
        <div className="mt-16">
          <BannerButtonSection />
        </div>

      </div>

    </section>
  );
};
export default BannerSection;
