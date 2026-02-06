'use client'

import React from 'react'
import Image from 'next/image'

const List = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266736/145c9ed16f0b8b28d6b99b5cae888dab7cb8677d_xz741g.jpg",
        type: 'left'
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266714/60c0ef5354f58998a86227a534a05f12cba44f6b_k4knog.jpg",
        type: 'center'
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266714/60c0ef5354f58998a86227a534a05f12cba44f6b_k4knog.jpg",
        type: 'center'
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266702/e09e3294b52d89d37b109f92727262d7556c53eb_qu9zox.jpg",
        type: 'right'
    }
]

const Technology = () => {
    return (
        <section className="w-full flex flex-col items-center ">

            {/* TEXT */}
            <div className="max-w-[900px] text-center flex flex-col gap-6">
                <h1 className="ibmPlex-text font-bold text-[48px] leading-tight text-[#1F2937]">
                    <span className="text-[#0D5BD7] block">
                        Building technology
                    </span>
                    that makes an impact.
                </h1>

                <p className="ibmPlex-text text-[18px] leading-[30px] text-[#6B7280]">
                    We build scalable digital solutions across web, mobile, and cloud.<br />
                    We help businesses solve real challenges through smart, reliable technology.
                </p>
            </div>

            {/* IMAGES */}
<div className="flex  w-[98%] min-h-[408px] gap-2"> 
                {List.map((item) => (
                    <div
                        key={item.id}
                        className={`relative flex-1 transition-all duration-700 ease-in-out
                            ${item.pos === 'outer' 
                                ? 'h-[4800px] -translate-y-12'  // Taller and lifted for the edges
                                : 'h-[340px] translate-y-16'    // Shorter and lowered for the center
                            }
                        `}
                    >
                        <div className={`w-full h-full relative overflow-hidden
                            ${item.id === 1 ? 'clip-outer-left' : ''}
                            ${item.id === 2 ? 'clip-inner-left ' : ''}
                            ${item.id === 3 ? 'clip-inner-right' : ''}
                            ${item.id === 4 ? 'clip-outer-right' : ''}
                        `}>
                            <Image
                                src={item.url}
                                alt="Technology"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Technology
