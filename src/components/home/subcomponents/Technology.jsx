'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const List = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266736/145c9ed16f0b8b28d6b99b5cae888dab7cb8677d_xz741g.jpg",
        type: 'left'
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266725/743b25d4afb0244ff45c18da9643c35921833a23_b5gsre.jpg",
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

const stats = [
    { label: '18+ Clients', href: '/clients' },
    { label: '12+ Services', href: '/services' },
    { label: '10+ Products', href: '/products' },
    { label: '3+ Countries', href: '/countries' },
]

const Technology = () => {
    return (
        <section className="w-full flex flex-col items-center gap-10">

            {/* TEXT */}
            <div className="max-w-[900px] text-center flex flex-col gap-6 px-4">
                <h1 className="ibmPlex-text font-bold text-[23px] md:text-[48px] leading-tight text-[#1F2937]">
                    <span className="text-[#0D5BD7] block">
                        Building technology
                    </span>
                    that makes an impact.
                </h1>

                <p className="ibmPlex-text text-[15px] md:text-[20px] leading-[30px] text-[#6B7280]">
                    We build scalable digital solutions across web, mobile, and cloud.
                    <br />
                    We help businesses solve real challenges through smart, reliable technology.
                </p>
            </div>

            {/* DESKTOP IMAGE LAYOUT */}
            {/* <div className="hidden md:flex w-[98%] min-h-[408px] gap-2">
                {List.map((item, index) => (
                    <div
                        key={item.id}
                        className={`
              relative flex-1 transition-all duration-700 ease-in-out
              ${index === 0 || index === 3
                                ? 'h-[420px] -translate-y-8'
                                : 'h-[340px] translate-y-12'
                            }
            `}
                    >
                        <div
                            className={`
                w-full h-full relative overflow-hidden
                ${item.id === 1 ? 'clip-outer-left' : ''}
                ${item.id === 2 ? 'clip-inner-left' : ''}
                ${item.id === 3 ? 'clip-inner-right' : ''}
                ${item.id === 4 ? 'clip-outer-right' : ''}
              `}
                        >
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
            </div> */}
            {/* DESKTOP IMAGE STRIP */}
            <div className="hidden md:flex w-[98%] mx-auto gap-4 items-center">

                {/* LEFT IMAGE – left side raised, pushed DOWN slightly */}
                <div className="relative flex-1 h-[400px] clip-left-raise translate-y-4">
                    <Image
                        src={List[0].url}
                        alt="Technology"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* MIDDLE IMAGE 1 – perfectly straight */}
                <div className="relative flex-1 h-[350px] translate-y-4">
                    <Image
                        src={List[1].url}
                        alt="Technology"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* MIDDLE IMAGE 2 – perfectly straight */}
                <div className="relative flex-1 h-[350px] translate-y-4">
                    <Image
                        src={List[2].url}
                        alt="Technology"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* RIGHT IMAGE – right side raised, pushed DOWN slightly */}
                <div className="relative flex-1 h-[400px] clip-right-raise translate-y-4">
                    <Image
                        src={List[3].url}
                        alt="Technology"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>



            {/* MOBILE IMAGE */}
            <div className="md:hidden w-[312px] h-[336px] relative overflow-hidden rounded-md">
                <Image
                    src={List[1].url}
                    alt="Technology"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* MOBILE LINKS */}
            <div className="md:hidden flex flex-wrap justify-center gap-6 text-[14px] font-semibold text-[#1F2937]">
                {stats.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="hover:text-[#0D5BD7] transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

        </section>
    )
}

export default Technology
