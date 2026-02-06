'use client'

import React, { useState } from "react"
import Image from "next/image"

import Services5bg from "../../../public/images/ServicesImages/Services5bg.jpg"
import Services5Image1 from "../../../public/images/ServicesImages/Services5Image1.jpg"

const tabs = [
    "Discover",
    "Design & Architecture",
    "Development",
    "Deployment",
    "Continuous Evolution",
]

const tabContent = {
    Discover: {
        title: "Discover",
        description: `We start by understanding the full scope of the business or product journey.
    This includes identifying objectives, analyzing requirements, understanding users,
    and defining a clear understanding of how the solution should evolve over time.`,
    },
    "Design & Architecture": {
        title: "Design & Architecture",
        description:
            "We transform ideas into structured designs, defining system architecture, UI/UX flows, and scalable technical foundations.",
    },
    Development: {
        title: "Development",
        description:
            "Our team builds robust, secure, and high-performance solutions using modern technologies and best practices.",
    },
    Deployment: {
        title: "Deployment",
        description:
            "We ensure smooth deployment with proper testing, optimization, and monitoring for real-world performance.",
    },
    "Continuous Evolution": {
        title: "Continuous Evolution",
        description:
            "We continuously improve, optimize, and evolve the product based on feedback, analytics, and changing business needs.",
    },
}

const Services5 = () => {
    const [activeTab, setActiveTab] = useState("Discover")

    return (
        <section
            className="w-full flex items-center justify-center bg-cover bg-center mb-15"
            style={{
                backgroundImage: `url(${Services5bg.src})`,
            }}
        >
            <div className=" w-full px-4 md:px-8 lg:px-10 py-7 lg:py-12 text-white">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-4xl font-semibold">
                        How We Deliver Smart Marketing
                    </h2>
                    <p className="mt-4 text-xs md:text-sm text-white/60 max-sm:text-left">
                        We guide your project through every stage, from ideation and design
                        to development, testing, and management, ensuring a smooth and
                        successful journey that brings your vision to life with precision
                        and care.
                    </p>
                </div>

                <div className=" md:px-5 lg:px-10">
                    {/* Tabs */}
                    <div className="mt-8 md:mt-10 border-b border-white/20">
                        <div
                            className="
      flex gap-6
      overflow-x-auto
      whitespace-nowrap
      scrollbar-hide
      lg:justify-around
      lg:overflow-x-visible
    "
                        >
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-1 md:pb-2 text-sm md:text-base transition-all duration-300 shrink-0 px-2
          ${activeTab === tab
                                            ? "text-white border-b-2 border-white"
                                            : "text-white/60 hover:text-white"
                                        }
        `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Content */}
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 items-center">

                        {/* Image → 1 column */}
                        <div className="md:col-span-1 w-full">
                            <Image
                                src={Services5Image1}
                                alt="Service step image"
                                className="rounded-lg w-full h-40 lg:h-50 object-cover"
                                priority
                            />
                        </div>

                        {/* Text → 2 columns */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg md:text-2xl font-semibold">
                                {tabContent[activeTab].title}
                            </h3>

                            <p className="mt-2 text-xs md:text-sm text-white/70 leading-relaxed max-w-2xl">
                                {tabContent[activeTab].description}
                            </p>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default Services5
