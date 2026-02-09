'use client';

import React from 'react';
import SlidingHeader from "@/components/shared/UI-Elements/SlidingHeader";
import TitleAndDescription from "@/components/shared/UI-Elements/TitleAndDescription";
import IndustryBtn from "@/components/home/subcomponents/IndustryBtn";

const IndustrySection = () => {
    return (
        <section className="w-full bg-white py-6 lg:py-10 mb-5">
            <div className="mx-auto px-5 md:px-8 lg:px-15">
                <SlidingHeader title="Industries" bottom='mb-2'/>

                <h2 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
                    Solutions for <span className="text-[#0b5ed7]">Every Industry</span>
                </h2>

                <p className="mt-3 text-gray-600  text-xs md:text-sm">
                    NOWIT Services offers AI-powered digital transformation services that help businesses
                    improve efficiency, automate operations, and grow faster. Our cloud-first solutions include
                    smart marketing, cloud migration, professional IT consulting, intelligent messaging,
                    IP filing, and corporate training, all designed to deliver secure, scalable, and data-driven
                    business outcomes.
                </p>
                <IndustryBtn />
            </div>

        </section>
    );
};

export default IndustrySection;
