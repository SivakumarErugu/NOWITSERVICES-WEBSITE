'use client'


import React, { useRef, useState, useEffect } from "react";

const List = [
  {
    suffix: "20",
    description: "Incorporated in UnitedKingdom as Technology Consulting Firm"
  },
  {
    suffix: "21",
    description:
      "Started tech Consulting Services in India for AspireSystems, Qbrainx, UST Global and started development of customised web and mobile applications"
  },
  {
    suffix: "24",
    description: "Started as Product based Company with Brand name Won Apps"
  },
  {
    suffix: "25",
    description:
      "Launched First SAAS Platform and gradually added 2 more SaaS Platforms to the WON App Store"
  },
  {
    suffix: "26",
    description:
      "Progressing to add 3 more SaaS platforms rounding it to 5 in the WON App Store."
  }
];

const OurJourney = () => {
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current.scrollTop > 10) {
      setScrolled(true);
    }
  };


  return (
    <section className="w-full flex flex-col items-center md:py-24 mt-0 px-5 md:px-10 lg:px-15">
      {/* Header */}
      <div className="max-w-[900px] md:text-center mb-16">
        <h1 className="md:font-medium text-[25px] font-bold md:text-[48px] text-[#1F2937] ibmPlex-text">
          Our <span className="text-[#0D5BD7]">Journey</span>
        </h1>
        <p className="text-gray-600 ">
          Helping brands succeed through smart and dependable technology.
        </p>
      </div>

      {/* Timeline */}
      <div className="w-full max-w-[1000px] flex ">
        {/* FIXED 20 */}
        <div className="sticky top-40 h-fit">
          <div className="flex items-start gap-2">
            <span className="text-[#0D5BD7] text-[72px] font-semibold">20</span>
          </div>
        </div>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-[226px] overflow-y-auto no-scrollbar scrollbar-invisible pr-4 w-full"
        >
          <div className="flex flex-col gap-2 mt-5 pb-[40px] w-full">
            {List.map((item, index) => {
              const isLast = index === List.length - 1;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-500
  ${index === 0
                      ? "opacity-100 translate-y-0"
                      : scrolled
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }
`}

                >
                  {/* LEFT COLUMN */}
                  <div className="relative w-[120px] flex flex-col gap-2">
                    <span className="text-[#6CC24A] text-[72px] font-semibold leading-none">
                      {item.suffix}
                    </span>

                    {/* Dashed line logic */}
                    {!isLast && (
                      <span className="h-[180px] md:h-[200px] border-l-[4px] border-dashed border-[#1F2937] translate-x-[25px]" />
                    )}

                    {isLast && (
                      <>
                        <span className="h-[200px] border-l-[4px] border-dashed border-[#1F2937] translate-x-[25px]" />
                        <span className="ml-[18px] mt-2 w-4 h-4 bg-[#0B1F33] rounded-full" />
                      </>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
              absolute
              text-[10px]
              left-[50px]
             md:left-[60px]
              -translate-y-20  
              max-w-[600px]
              text-gray-700
              md:text-[19px]
              leading-relaxed
            "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default OurJourney;
