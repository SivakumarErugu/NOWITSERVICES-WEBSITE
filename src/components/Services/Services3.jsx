'use client';

import { useState } from "react";
import Image from "next/image";
import SlidingHeader from "../shared/UI-Elements/SlidingHeader";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import Services3Image1 from "../../../public/images/ServicesImages/Services3Image1.jpg";
import Services3Image2 from "../../../public/images/ServicesImages/Services3Image2.jpg";
import Services3Image3 from "../../../public/images/ServicesImages/Services3Image3.jpg";
import Services3Image4 from "../../../public/images/ServicesImages/Services3Image4.jpg";
import Services3Image5 from "../../../public/images/ServicesImages/Services3Image5.jpg";

/* 🔹 SLIDES */
const slides = [
    {
        title: "Growth-Oriented Work Culture",
        desc: "A work environment that promotes learning, improvement, and long-term career growth.",
        image: Services3Image1,
    },
    {
        title: "Cross-Domain Learning & Certifications.",
        desc: "Opportunities to learn across domains and gain industry-recognized certifications.",
        image: Services3Image2,
    },
    {
        title: "Global Project Exposure.",
        desc: "Hands-on experience working with international clients and globally distributed teams.",
        image: Services3Image3,
    },
    {
        title: "Rewards,Recognitions, And Leadership Mentorship.",
        desc: "Opportunities to be recognized for your work while learning directly from experienced leaders.",
        image: Services3Image4,
    },
    // {
    //     title: "Reliable Delivery",
    //     desc: "On-time, transparent, and dependable execution you can trust.",
    //     image: Services3Image5,
    // },
];

const Services3 = () => {
    const [active, setActive] = useState(0);

    const prevSlide = () => {
        setActive((p) => (p === 0 ? slides.length - 1 : p - 1));
    };

    const nextSlide = () => {
        setActive((p) => (p === slides.length - 1 ? 0 : p + 1));
    };

    return (
        <section className="w-full py-6 bg-white mb-10">
            <div className="mx-auto px-5 md:px-8 lg:px-15">

                {/* HEADER */}
                <div className="mb-6">
                    <SlidingHeader title="Why Choose Us" bottom="mb-2" />

                    <h2 className=" text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
                        Built on <span className="text-[#0b5ed7]">Trust and Quality</span>
                    </h2>

                    <p className="mt-3 text-gray-600 text-sm md:text-base max-w-3xl">
                        We combine technical expertise, thoughtful design, and reliable delivery
                        to build scalable digital solutions that meet real business needs.
                    </p>
                </div>
            </div>
            <div className="px-0 md:px-8 lg:px-12 py-0">
                {/* SLIDER */}
                <div className="md:rounded-xl flex flex-col justify-center bg-[#071c30] px-0 md:px-8 lg:px-12 py-5 md:py-10">

                    {/* IMAGE + NAV ROW */}
                    <div
                        className="
    grid
 grid-cols-[30px_1fr_30px]
 md:grid-cols-[60px_1fr_60px]
    lg:grid-cols-[120px_1fr_120px]    items-center
    gap-4 lg:mt-4
  "
                    >
                        {/* PREVIOUS */}
                        <button
                            onClick={prevSlide}
                            className="flex items-center gap-1 text-gray-300 hover:text-white transition text-sm md:text-lg"
                        >
                            <HiChevronLeft className="text-3xl" />
                            <span className="hidden lg:inline">Previous</span>
                        </button>

                        {/* IMAGE SLIDER */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${active * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full flex justify-center px-0 md:px-10 lg:px-15"
                                    >
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            width={800}
                                            height={600}
                                            className="rounded-xl w-full 2xl:max-w-5xl h-56 md:h-70 lg:h-90 2xl:h-90 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* NEXT */}
                        <button
                            onClick={nextSlide}
                            className="flex items-center gap-1 text-gray-300 hover:text-white transition text-sm md:text-lg ml-auto"
                        >
                            <span className="hidden lg:inline">Next</span>
                            <HiChevronRight className="text-3xl" />
                        </button>
                    </div>


                    {/* CONTENT ANIMATION */}
                    <div className="relative mt-5 md:mt-8 lg:mt-5 min-h-22 overflow-hidden ">

                        {slides.map((slide, index) => {
                            const isActive = index === active;

                            return (
                                <div
                                    key={index}
                                    className={`
                    absolute inset-0
                    flex flex-col lg:flex-row
                    items-center lg:items-center
                    justify-center lg:justify-between
                    gap-2 md:gap-4 lg:gap-15
                    text-center lg:text-left px-5 lg:px-15 2xl:px-30
                    transition-all duration-700 ease-in-out 
                    ${isActive
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"}
                  `}
                                >
                                    <h3 className="text-lg md:text-2xl font-semibold text-white ">
                                        {slide.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-gray-300 max-w-md">
                                        {slide.desc}
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

export default Services3;
