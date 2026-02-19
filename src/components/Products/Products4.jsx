'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Product13 from '../../../public/images/ProductImages/Product13.png'
import SlidingHeader from '../shared/UI-Elements/SlidingHeader'
import { ThemeLinkTag } from '../shared/UI-Elements/Custom-Elements'
import { useNowit } from '@/store/useNowit'




const Products4 = () => {

    const imageRef = useRef(null)

    const isImageInView = useInView(imageRef, {
        once: true,
        margin: '-20% 0px -10% 0px'
    })
    const{t}=useNowit();

    return (
        <section className="w-full bg-white py-4 lg:py-12 px-2.5 lg:px-12 2xl:px-15 mb-10 md:mb-15">
            <div className="mx-auto px-4 sm:px-6 lg:px-6">

                {/* GRID */}
                <div
                    className="
            grid grid-cols-1
            lg:grid-cols-[65%_30%]
            gap-1 lg:gap-12
            items-center
          "
                >

                    {/* CONTENT */}
                    <div className="order-2 lg:order-1">
                        <SlidingHeader title={t("customize.slidingHeader") || "Customize Your Product"} bottom="mb-2"/>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0b2b4b] leading-relaxed">
                          {t("customize.title.prefix") || "Have an Idea? "}{' '}
                            <span className="text-[#0d63f3]">
                               {t("customize.span") || "We Customize"}{" "}
                            </span>
                            <span>
                                <br />
                            </span>
                            {t("customize.title.suffix") || "It to Fit Your Vision."}
                        </h2>

                        <p className="mt-4 text-xs sm:text-sm 2xl:text-[17px] text-[#4b5563] leading-relaxed max-w-6xl">
                           {t("customize.description") || "Share your idea with us, and we’ll collaborate closely to transform it into a fully customized digital product. From concept and design to development and scale, we tailor every solution to match your vision, users, and long-term goals."}
                        </p>

                        <div className="mt-5">
                            <ThemeLinkTag
                                href='/contactUs'
                                BtnText={t("customize.getInTouch") || "Get In Touch"}
                                styles="border-0 bg-[#55B233] text-white text-xs md:text-sm !font-medium !py-1 !px-5 !lg:py-2 !rounded-md hover:bg-[#43a047]"
                            />
                        </div>
                    </div>

                    {/* IMAGE (Animated from Right) */}
                    <motion.div
                        ref={imageRef}
                        initial={{ x: '60px', opacity: 0 }}
                        animate={isImageInView ? { x: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 0.9,
                            ease: [0.19, 1, 0.22, 1],
                        }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative mx-auto  h-60 sm:h-70 md:h-80 lg:h-100">
                            <Image
                                src={Product13}
                                alt="Customize your product"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 30vw"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Products4
