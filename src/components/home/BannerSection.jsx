import BannerButtonSection from "./subcomponents/BannerButtonSection";





const BannerSection = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{
                height: "820px",
                backgroundColor: "#eef5ff",
            }}
        >
            {/* Background glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% 30%, #e2efff 0%, #f4f9ff 45%, #eef5ff 75%)",
                }}
            />

            {/* SVG arcs */}
            <svg
                className="absolute left-0 bottom-0 w-full h-[140%] pointer-events-none"
                viewBox="0 0 1440 1400"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
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

            {/* CONTENT LAYER */}
            <div className="relative z-10 w-full flex justify-center">
                <div
                    className="max-w-5xl text-center px-6 mt-10"

                >
                    <h1 className="text-[40px]  font-semibold  leading-relaxed mb-4 ibmPlex-text">
                        Unleashing Business Potential Through
                    </h1>

                    <h1 className="text-[44px] md:text-[56px] font-bold text-[#0b3154] leading-relaxed mb-4 ibmPlex-text">
                        Intelligent Digital Transformation
                    </h1>

                    <p className="text-[20px] max-w-2xl mx-auto mb-8 text-lg inter-text text-center">
                        Enable businesses to grow faster with AI-powered automation,
                        cloud solutions, and data-driven innovation.
                    </p>
                    <div className="flex justify-center items-center">
                        <button className="w-[288px] h-[48px] rounded-[8px] px-[16px] flex items-center justify-center gap-[15px] bg-gradient-to-r from-[#5CD032] to-[#194D81] text-white font-bold text-lg transition-transform hover:scale-105 shadow-lg self-center">
                            Get Started
                        </button>
                    </div>
                    <BannerButtonSection />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
