'use client';

import Image from "next/image";
import { useNowit } from "@/store/useNowit";
import { servicesData } from "./servicesData";
import { useEffect, useState } from "react";

const Services1 = () => {
    const { activeService, t, isReady } = useNowit();
    const MainData = servicesData[activeService]
    const data = servicesData[activeService]?.Services1;
    const [translatedData, setTranslatedData] = useState(data);

    useEffect(() => {
        if (isReady) {
           const bundledData=t("servicesData");
        //    console.log("bundledData", bundledData)
              const newData = bundledData[activeService]?.Services1;
            //   console.log(newData,"newData Here...,")
              setTranslatedData(newData);
        }
    }, [isReady, activeService,translatedData,t]);


    if (!translatedData) return null;

    const radius = 40;

    return (
        <section className="w-full flex justify-center py-2 lg:py-3 bg-white md:mb-10">
            <div className="w-full px-5 md:px-8 lg:px-15 md:relative">

                {/* HEADING */}
                <div
                    className="
                        bg-white
                        z-20
                        pl-2
                        pr-5 md:pr-8 lg:pr-10
                        py-0 md:py-4 lg:py-5
                        rounded-br-[45px]

                        static
                        md:absolute
                        md:top-0
                    "
                >
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800 ibmPlex-text">
                        {/* {data.headingSmall} */}
                        {translatedData.headingSmall}
                    </h3>

                    <h2 className="mt-1 text-xl md:text-3xl lg:text-5xl font-bold text-[#0b5ed7] lg:mt-2 ibmPlex-text">
                        {/* {data.headingMain}
                         */}
                        {translatedData.headingMain}
                    </h2>

                    {/* NOTCHES */}
                    <div className="hidden md:block">
                        <div
                            className="absolute md:top-6 lg:top-12 pointer-events-none"
                            style={{
                                right: -radius,
                                width: radius,
                                height: radius,
                                overflow: "hidden",
                            }}
                        >
                            <div className="w-full h-full rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]" />
                        </div>

                        <div
                            className="absolute left-0 pointer-events-none"
                            style={{
                                bottom: -radius,
                                width: radius,
                                height: radius,
                                overflow: "hidden",
                            }}
                        >
                            <div className="w-full h-full rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]" />
                        </div>
                    </div>
                </div>

                {/* IMAGE */}
                <div
                    className="
    relative
    overflow-hidden
    rounded-3xl
    mt-2 md:mt-8 lg:mt-12
    h-60 md:h-100 lg:h-130 2xl:h-180
  "
                >
                    <Image
                        src={MainData.mainimage}
                        alt={data.headingMain}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>


            </div>
        </section>
    );
};

export default Services1;
