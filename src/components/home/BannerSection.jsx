import BannerButtonSection from "./subcomponents/BannerButtonSection";

const BannerSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#eef5ff] min-h-[820px]">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,#e2efff_0%,#f4f9ff_45%,#eef5ff_75%)]" />

      {/* SVG arcs (hide overflow on small) */}
      <svg
        className="absolute left-0 bottom-0 w-full h-[140%] hidden md:block pointer-events-none"
        viewBox="0 0 1440 1400"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          fill="none"
          stroke="#9fbfe3"
          strokeWidth="1.6"
          strokeDasharray="6 10"
          opacity="0.75"
        >
          <path d="M -500 820 A 1600 1600 0 0 1 1940 820" />
          <path d="M -350 920 A 1400 1400 0 0 1 1790 920" />
          <path d="M -200 1040 A 1200 1200 0 0 1 1640 1040" />
        </g>
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 text-center">

        <h1 className="text-[20px] md:text-[30px] font-semibold mb-2 ibmPlex-text">
          Unleashing Business Potential Through
        </h1>

        <h2 className="text-[22px] md:text-[56px] font-bold text-[#0b3154] mb-4 ibmPlex-text">
          Intelligent Digital Transformation
        </h2>

        <p className="text-[16px] md:text-[20px] max-w-2xl mx-auto mb-8 text-[#374151] ml-2">
          Enable businesses to grow faster with AI-powered automation,
          cloud solutions, and data-driven innovation.
        </p>

        <button className="w-[220px] md:w-[288px] h-[48px] rounded-[8px] bg-gradient-to-r from-[#5CD032] to-[#194D81] text-white font-bold transition hover:scale-105 shadow-lg">
          Get Started
        </button>

        {/* Cards */}
        <div className="mt-16">
          <BannerButtonSection />
        </div>

      </div>
    </section>
  );
};
export default BannerSection;
