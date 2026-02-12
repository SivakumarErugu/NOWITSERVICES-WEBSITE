

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const List = [
    { id: 1, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266736/145c9ed16f0b8b28d6b99b5cae888dab7cb8677d_xz741g.jpg" },
    { id: 2, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266725/743b25d4afb0244ff45c18da9643c35921833a23_b5gsre.jpg" },
    { id: 3, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266714/60c0ef5354f58998a86227a534a05f12cba44f6b_k4knog.jpg" },
    { id: 4, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770266702/e09e3294b52d89d37b109f92727262d7556c53eb_qu9zox.jpg" }
]

const stats = [
    { label: '18+ Clients', href: '/clients' },
    { label: '12+ Services', href: '/services' },
    { label: '10+ Products', href: '/products' },
    { label: '3+ Countries', href: '/countries' },
]

const Technology = () => {
    return (
        <section className="w-full flex flex-col items-center gap-5 md:gap-10 py-16 bg-white overflow-hidden">

            {/* THE SECRET SAUCE: THE SVG MASK */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <clipPath id="ribbonPath" clipPathUnits="objectBoundingBox">
                        {/* This path creates a "pinched" ribbon:
                          Top: Curves DOWN towards the center (0,0 -> 0.5,0.15 -> 1,0)
                          Bottom: Curves UP towards the center (0,1 -> 0.5,0.85 -> 1,1)
                        */}
                        <path d="M0,0 Q0.5,0.2 1,0 L1,1 Q0.5,0.8 0,1 Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* TEXT SECTION */}
            <div className="max-w-[900px] text-center flex flex-col gap-4 px-4">
                <h1 className="ibmPlex-text font-bold text-[32px] md:text-[52px] leading-tight text-[#1F2937]">
                    <span className="text-[#0D5BD7] block">Building technology</span>
                    that makes an impact.
                </h1>

                <p className="ibmPlex-text text-[15px] md:text-[19px] leading-relaxed text-[#6B7280]">
                    We build scalable digital solutions across web, mobile, and cloud.
                    <br className="hidden md:block" />
                    We help businesses solve real challenges through smart, reliable technology.
                </p>
            </div>

            {/* THE CONTINUOUS IMAGE STRIP */}
            <div className="relative w-full max-w-full h-[380px] md:h-[450px] p-1 hidden md:block">
                <div
                    className="flex h-full w-full gap-3 md:gap-5"
                    style={{ clipPath: "url(#ribbonPath)" }}
                >
                    {List.map((item) => (
                        <div key={item.id} className="relative flex-1 h-full">
                            <Image
                                src={item.url}
                                alt="Technology"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative h-[310px] w-[312px] md:hidden overflow-hidden rounded-sm">
                <Image
                    src="https://res.cloudinary.com/dr9thittl/image/upload/v1770700643/743b25d4afb0244ff45c18da9643c35921833a23_1_by8ikd.jpg"
                    alt="Team collaboration"
                    fill
                    priority
                    className="object-cover object-center scale-100"
                />
            </div>


            {/* MOBILE LINKS */}
            <div className="md:hidden flex flex-wrap justify-center gap-6 text-[10px] font-semibold text-[#1F2937]">
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