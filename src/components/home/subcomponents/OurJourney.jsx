'use client'


import React, { useRef, useState, useEffect, use } from "react";
import { useNowit } from "@/store/useNowit";

const List = [
  {
    suffix: "20",
    description: "Incorporated in United Kingdom as a Technology Consulting Firm"
  },
  {
    suffix: "21",
    description:
      "Started Tech Consulting Services in India for AspireSystems, Qbrainx, UST Global and initiated development of customized web and mobile applications"
  },
  {
    suffix: "22",
    description:
      "Expanded operations in India by strengthening the development team and accelerating research & development initiatives"
  },
  {
    suffix: "23",
    description:
      "Focused on product innovation, client acquisition, and building scalable SaaS-ready architecture"
  },
  {
    suffix: "24",
    description: "Started as a Product-based Company with the brand name WON Apps"
  },
  {
    suffix: "25",
    description:
      "Launched first SaaS platform and gradually added two more SaaS platforms to the WON App Store"
  },
  {
    suffix: "26",
    description:
      "Progressing to add more platforms, rounding it to five in the WON App Store"
  }
];


const OurJourney = () => {
  const scrollRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [journeyList, setJourneyList] = useState(List);
  const {t}=useNowit()

  const handleScroll = () => {
    if (scrollRef.current.scrollTop > 10) {
      setScrolled(true);
    }
  };
useEffect(() => {
        const translatedList = t("journey.List", { returnObjects: true })

        if (Array.isArray(translatedList) && translatedList.length > 0) {
            console.log("Translated List:", translatedList); // Debugging log
            setJourneyList(translatedList)
        } else {
            setJourneyList(List)
        }
    }, [t])

  return (
    <section className="w-full flex flex-col items-center md:py-24 mt-0 px-5 md:px-10 lg:px-15">
      {/* Header */}
      <div className="max-w-[900px] md:text-center mb-10">
        <h1 className="md:font-medium text-[25px] font-bold md:text-[48px] text-[#1F2937] ibmPlex-text">
         {t("journey.title")|| "Our"} <span className="text-[#0D5BD7]">{t("journey.span")|| "Journey"}</span>
        </h1>
        <p className="text-gray-600 ">
          {t("journey.description")|| "Helping brands succeed through smart and dependable technology."}
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
            {journeyList.map((item, index) => {
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
              -translate-y-40  
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
