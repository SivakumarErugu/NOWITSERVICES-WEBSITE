'use client';

import Image from "next/image";
import { useNowit } from "@/store/useNowit";
import { servicesData } from "./servicesData";

const Services1 = () => {
    const { activeService } = useNowit();
    const data = servicesData[activeService]?.Services1;

    if (!data) return null;

    return (
        <section className="w-full flex justify-center py-2 lg:py-3 bg-white md:mb-10">
            <div className="w-full  px-5 md:px-8 lg:px-25 md:relative">

                {/* HEADING */}
                <div
                    className="
            bg-white
            z-10
            rounded-2xl
            pl-2
            pr-2 md:pr-8 lg:pr-13
            py-1 lg:py-5
            mb-3
            md:mb-0
            md:absolute
            
          "
                >
                    <h3 className="text-xl md:text-3xl lg:text-5xl font-semibold text-gray-800 ibmPlex-text">
                        {data.headingSmall}
                    </h3>

                    <h2 className="mt-1 text-xl md:text-3xl lg:text-5xl font-bold text-[#0b5ed7] lg:mt-3 ibmPlex-text">
                        {data.headingMain}
                    </h2>
                </div>

                {/* IMAGE */}
                <div className="overflow-hidden rounded-3xl md:mt-6 lg:mt-15">
                    <Image
                        src={data.image}
                        alt={data.headingMain}
                        className="w-full h-60 md:h-100 lg:h-120 object-cover "
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default Services1;
