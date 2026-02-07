import Image from 'next/image';
import SmartMarketing from "../../../public/images/ServicesImages/SmartMarketing.jpg";

const MarketingHero = () => {
    // Use a consistent radius for the entire design
    const radius = 40;

    return (
        <div className="w-full p-4 md:p-10 bg-white">
            {/* Main container with identical rounding to the image */}
            <div className="relative w-full aspect-[16/8] min-h-[400px] overflow-hidden rounded-[40px]">

                {/* 1. The Background Image */}
                <Image
                    src={SmartMarketing}
                    alt="Marketing team"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                />

                {/* 2. The Header Overlay */}
                <div
                    className="absolute top-0 left-0 z-20 bg-white pr-1 pb-6 rounded-md"
                >
                    <div className="pl-10 pt-10 pr-4 rounded-md bg-white border-2 border-black">
                        <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                            Marketing That
                        </p>
                        <h1 className="text-2xl md:text-4xl font-extrabold text-[#0061af] tracking-tight">
                            Thinks, Learns, and Performs
                        </h1>
                    </div>

                    {/* INVERSE CURVES 
            We use a transparent div with a massive white box-shadow. 
            The shadow creates the 'white' area, and the rounded corner 
            creates the 'scoop' that lets the image show through.
          */}

                    {/* Right Notch */}
                    <div
                        className="absolute top-0 pointer-events-none"
                        style={{
                            right: -radius,
                            width: radius,
                            height: radius,
                            overflow: 'hidden'
                        }}
                    >
                        <div className="w-full h-full rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]" />
                    </div>

                    {/* Bottom Notch */}
                    <div
                        className="absolute left-0 pointer-events-none"
                        style={{
                            bottom: -radius,
                            width: radius,
                            height: radius,
                            overflow: 'hidden'
                        }}
                    >
                        <div className="w-full h-full rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]" />
                    </div>
                </div>

                {/* 3. Safety Patch for Top-Left 
            This ensures no sub-pixel gaps at the very top-left corner
        */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-white z-10" />
            </div>
        </div>
    );
};

export default MarketingHero;