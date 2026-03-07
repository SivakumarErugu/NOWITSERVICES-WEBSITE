
'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import SlidingHeader from "@/components/shared/UI-Elements/SlidingHeader";
import { useNowit } from "@/store/useNowit";
import Loading from "@/app/loading";

// const testimonialsList = [
//     {
//         name: "Rajesh Kumar",
//         image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025734/ae9fe090925ae5576c390fa65546b255f1f765cd_is7pew.jpg",
//         text: "NowIT delivered exactly what we needed, on time and with strong attention to quality. The team was responsive, professional, and easy to work with throughout the project."
//     },
//     {
//         name: "Ananya Sharma",
//         image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025794/5aab5459786b226d5d70e39a1dfa0e817fee1e4d_di3wzg.jpg",
//         text: "They quickly understood our vision and turned it into a scalable product. The process was smooth, and the final outcome exceeded our expectations."
//     },
//     {
//         name: "Vikram Rao",
//         image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025821/38f5bd4531c814db74a5a556bbbc302c3c1da5c1_psyqac.jpg",
//         text: "Their technical expertise and structured approach helped us build a reliable solution across web and mobile. We value them as a long-term partner."
//     }
// ];

const testimonialsList = [
    {
        key: 1,
        name: "Amina Hassan",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262070/Screenshot_2026-02-28_122512_kwdkhx.png",
        text: "NOWIT Services helped us modernize our internal systems through their professional consulting and automation platforms. The WON ecosystem significantly improved operational efficiency and service delivery. A dependable and forward-thinking technology partner."
    },
    {
        key: 2,
        name: "Michael Santos",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262070/Screenshot_2026-02-28_122540_aplxjz.png",
        text: "We implemented WON Digital to streamline our education-related processes, and the results were impressive. The centralized application and automation system enhanced both user experience and management efficiency. Highly recommended."
    },
    {
        key: 3,
        name: "Elena Petrova",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772793605/Screenshot_2026-03-06_160758_iuycz5.png",
        text: "The consulting and smart marketing strategies from NOWIT Services strengthened our digital presence. Their structured automation platforms brought clarity and control to our workflows. Professional execution from start to finish."
    },
    {
        key: 4,
        name: "Kenji Sato",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772180428/Screenshot_2026-02-27_134316_sthloq.png",
        text: "WON Pulse provided an efficient and reliable automation framework for our healthcare operations. The platform improved process transparency and service coordination. We value the precision and professionalism of NOWIT Services."
    },
    {
        key: 5,
        name: "Li Wei",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262071/Screenshot_2026-02-28_122556_wrxzof.png",
        text: "The WON ecosystem centralized our service applications and simplified operational management. NOWIT Services demonstrated strong technical expertise and strategic guidance throughout implementation. Excellent experience overall."
    },
    {
        key: 6,
        name: "Priya Sharma",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262077/Screenshot_2026-02-28_122618_x0ughm.png",
        text: "WON Digital transformed our education administration with seamless automation and centralized processing. NOWIT Services delivered both technical strength and strategic consulting support. A trusted digital transformation partner."
    },
    {
        key: 7,
        name: "James Anderson",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262077/Screenshot_2026-02-28_122629_pmwrme.png",
        text: "Our healthcare division adopted WON Pulse, and it greatly improved workflow efficiency and system integration. The team’s understanding of business needs and technology alignment was outstanding. We confidently recommend NOWIT Services."
    },
    {
        key: 8,
        name: "Olivia Bennett",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262077/Screenshot_2026-02-28_122640_jtumxl.png",
        text: "The professional consulting and automation services from NOWIT Services streamlined our fragmented operations. The WON platform improved speed, accuracy, and overall visibility. A reliable and scalable solution provider."
    },
    {
        key: 9,
        name: "William Davies",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1772262078/Screenshot_2026-02-28_122711_jsuqrk.png",
        text: "NOWIT Services delivered a structured digital transformation strategy supported by the WON ecosystem. The centralized automation platform enhanced efficiency across departments. Highly professional and results-driven team."
    }
];

const ClientCardComponent = () => {
    const CARD_WIDTH = 280; // card + gap
    const MOBILE_DURATION = 1.8;
    const [testimonials, setTestimonials] = useState(testimonialsList);
    const { t, isReady } = useNowit();
    if (!isReady) return <Loading />;

    useEffect(() => {
        if (!isReady) return;
        const translatedList = t("testimonialsList")
        console.log(translatedList, "testimonial here..,")


        if (Array.isArray(translatedList) && translatedList.length > 0) {
            console.log("Triggering in side ")
            // console.log("Translated List:", translatedList); // Debugging log
            setTestimonials(translatedList)
        } else {
            setTestimonials(testimonials)
        }
    }, [isReady, t, testimonials]);

    const CARD_WIDTH_DESKTOP = 412;
    const DESKTOP_TOTAL_WIDTH = CARD_WIDTH_DESKTOP * testimonials.length;

    return (
        <section className="w-full px-4 lg:px-8 mb-15">
            <div className="mx-auto px-1 lg:px-6">
                <SlidingHeader title={t("testimonials.title") || "Testimonials"} bottom="mb-2" />

                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
                    {t("testimonials.title.prefix") || "Building"}    <span className="text-[#0b5ed7]">{t("testimonials.span") || "Trust"}</span> {t("testimonials.title.suffix") || "Through Results"}
                </h2>

                <p className="mt-3 text-gray-600 text-xs md:text-sm lg:text-[15px]">
                    {t("testimonials.description") || "Real feedback from clients who've partnered with us to build reliable digital solutions."}
                </p>
            </div>
            {/* DESKTOP VIEW */}
            <div className="hidden md:block overflow-hidden w-[99%] mt-16 px-20">
               
                <motion.div
                    className="flex gap-12"
                    animate={{ x: [0, -DESKTOP_TOTAL_WIDTH] }}
                    transition={{
                        duration: testimonials.length * 3, // adjust speed
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >

                    {/* Duplicate list for seamless loop */}
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[364px] h-[470px] flex-shrink-0"
                        >
                            {/* CARD FRAME IMAGE */}
                            <Image
                                src="https://res.cloudinary.com/dr9thittl/image/upload/v1770445242/Group_2147209418_unesas.png"
                                alt="Testimonial card frame"
                                fill
                                className="h-[300px]"

                            />

                            {/* CONTENT */}
                            <div className="absolute inset-0 flex flex-col items-center text-center px-10 mt-20 ">

                                <div className="relative w-22 h-22 mb-3 !rounded-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="!rounded-full h-full w-full"


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
                            key={item.key}
                            className="
          relative
          w-[260px] h-[380px]
          mx-[10px]
          flex-shrink-0
          -rotate-2
        ">
                            {/* FRAME */}
                            <Image
                                src="https://res.cloudinary.com/dr9thittl/image/upload/v1770445242/Group_2147209418_unesas.png"
                                alt="Testimonial card frame"
                                fill
                            // className="object-contain"
                            />

                            {/* CONTENT */}
                            <div className="absolute flex flex-col items-center text-center px-6 pt-14 pb-10 rotate-0">
                                <div className="w-15 h-15 rounded-full overflow-hidden mb-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={100}
                                        height={100}
                                        className=" w-full h-full rounded-full"
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