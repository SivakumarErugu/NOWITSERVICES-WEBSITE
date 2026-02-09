
'use client';

import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rajesh Kumar",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025734/ae9fe090925ae5576c390fa65546b255f1f765cd_is7pew.jpg",
        text: "NowIT delivered exactly what we needed, on time and with strong attention to quality. The team was responsive, professional, and easy to work with throughout the project."
    },
    {
        name: "Ananya Sharma",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025794/5aab5459786b226d5d70e39a1dfa0e817fee1e4d_di3wzg.jpg",
        text: "They quickly understood our vision and turned it into a scalable product. The process was smooth, and the final outcome exceeded our expectations."
    },
    {
        name: "Vikram Rao",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025821/38f5bd4531c814db74a5a556bbbc302c3c1da5c1_psyqac.jpg",
        text: "Their technical expertise and structured approach helped us build a reliable solution across web and mobile. We value them as a long-term partner."
    }
];

const ClientCardComponent = () => {
    const CARD_WIDTH = 280; // card + gap
    const MOBILE_DURATION = 1.8; // faster speed
    return (
        <section className="w-full py-0  bg-white overflow-hidden mt-0 gap-0 md:mb-20">
            {/* Header */}
            <div className="max-w-[900px]  px-5 md:px-10">
                <h1 className=" font-bold md:font-medium text-[25px]  md:text-[48px] text-[#1F2937] ibmPlex-text">
                    Building <span className="text-[#0D5BD7]">Trust</span> Through Results
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Real feedback from clients who've partnered with us to build reliable digital solutions.
                </p>
            </div>
            {/* DESKTOP VIEW */}

            <div className="hidden md:block overflow-hidden w-[99%] mt-16 px-20">
                <motion.div
                    className="flex gap-12"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 10,          // speed (increase = slower)
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[364px] h-[419px] flex-shrink-0"
                        >
                            {/* CARD FRAME IMAGE */}
                            <Image
                                src="https://res.cloudinary.com/dr9thittl/image/upload/v1770445242/Group_2147209418_unesas.png"
                                alt="Testimonial card frame"
                                fill
                                className="object-contain"
                                quality={100}
                            />

                            {/* CONTENT */}
                            <div className="absolute inset-0 flex flex-col items-center text-center px-10 pt-20 pb-14">
                                <div className="w-[56px] h-[56px] rounded-full overflow-hidden mb-3">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <h3 className="font-semibold text-[16px] text-[#1F2937] inter-text">
                                    {item.name}
                                </h3>

                                <div className="flex gap-1 my-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-[#FACC15] text-xl">★</span>
                                    ))}
                                </div>

                                <p className="text-[14px] leading-relaxed text-[#374151] max-w-[260px] inter-text">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
            {/* mobile view */}


            <div className="md:hidden overflow-hidden w-full mt-10">
                <motion.div
                    className="flex"
                    animate={{
                        x: testimonials.map((_, i) => -i * CARD_WIDTH),
                    }}
                    transition={{
                        duration: MOBILE_DURATION * testimonials.length,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: testimonials.length * CARD_WIDTH }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="
          relative
          w-[260px] h-[340px]
          mx-[10px]
          flex-shrink-0
          -rotate-2
        "
                        >
                            {/* FRAME */}
                            <Image
                                src="https://res.cloudinary.com/dr9thittl/image/upload/v1770445242/Group_2147209418_unesas.png"
                                alt="Testimonial card frame"
                                fill
                                className="object-contain"
                            />

                            {/* CONTENT */}
                            <div className="absolute inset-0 flex flex-col items-center text-center px-6 pt-14 pb-10 rotate-0">
                                <div className="w-[50px] h-[50px] rounded-full overflow-hidden mb-4 border-2">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <h3 className="font-semibold text-[13px] text-[#1F2937] inter-text">
                                    {item.name}
                                </h3>

                                <div className="flex gap-1 my-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-[#FACC15] text-lg">★</span>
                                    ))}
                                </div>

                                <p className="text-[12px] leading-relaxed text-[#374151] max-w-[200px] inter-text">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default ClientCardComponent;