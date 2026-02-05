'use client'

import React from 'react'
import Image from 'next/image'

import Product13 from '../../../public/images/ProductImages/Product13.png'
import SlidingHeader from '../shared/UI-Elements/SlidingHeader'
import { ThemeBtnTag } from '../shared/UI-Elements/Custom-Elements'

const Products4 = () => {
    return (
        <section className="w-full bg-white py-4 lg:py-12 px-2.5 lg:px-12 2xl:px-30">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">

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
                        <SlidingHeader title="Customize your Product" />

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0b2b4b] leading-tight">
                            Have an Idea?{' '}
                            <span className="text-[#0d63f3]">
                                We Customize {" "}

                            </span>
                            <span className="">
                                <br />
                            </span>
                            It to Fit Your Vision.
                        </h2>

                        <p className="mt-4 text-sm sm:text-base text-[#4b5563] leading-relaxed max-w-3xl">
                            Share your idea with us, and we’ll collaborate closely to transform
                            it into a fully customized digital product. From concept and design
                            to development and scale, we tailor every solution to match your
                            vision, users, and long-term goals.
                        </p>

                        <div className="mt-5">
                            <ThemeBtnTag
                                BtnText="Get In Touch"
                                styles="border-0 bg-[#55B233] text-white text-xs md:text-sm  !font-medium !py-1 !px-5 !lg:py-2 !rounded-md hover:bg-[#43a047]"
                            />
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div className="order-1 lg:order-2">
                        <div className="relative mx-auto max-w-105 h-60 sm:h-70 md:h-80 lg:h-100">
                            <Image
                                src={Product13}
                                alt="Customize your product"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 30vw"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Products4
