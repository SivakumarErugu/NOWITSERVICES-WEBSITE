'use client';

import { useNowit } from "@/store/useNowit";
import { servicesData } from "./servicesData";
import SlidingHeader from "../shared/UI-Elements/SlidingHeader";

const Services2 = () => {
    const { activeService } = useNowit();
    const data = servicesData[activeService]?.Services2;

    if (!data) return null;

    return (
        <section className="w-full bg-white py-5 lg:py-2   mb-4 lg:mb-8 2xl:mb-20">
            <div className=" mx-auto px-5 md:px-8 lg:px-15">
                {/* HEADER */}
                <SlidingHeader title="Service Overview" bottom="mb-2" top="mt-2 lg:mt-2" />

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">


                    {/* LEFT – TEXT (STATIC) */}
                    <div className="flex flex-col justify-start">

                        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900 ibmPlex-text">
                            {data.heading}
                        </h2>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-[#0b5ed7] leading-relaxed ibmPlex-text">
                            {data.highlight}
                        </h3>

                        <p className="hidden lg:flex mt-4 max-w-3xl text-gray-600 text-sm md:text-md 2xl:text-[17px]">
                            {data.description}
                        </p>

                    </div>

                    {/* RIGHT – CARDS (SCROLLABLE ON LG+) */}
                    <div
                        className="
              flex flex-col gap-4
              lg:max-h-62
              2xl:max-h-65
              lg:overflow-y-auto
              lg:px-4
              scroll-smooth
            [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden
            "
                    >
                        {data.cards.map((item, index) => (
                            <div
                                key={index}
                                className={`
                  rounded-2xl px-4 py-3 border
                  ${item.bg}
                `}
                            >
                                <h4 className="text-sm md:text-md lg:text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services2;
