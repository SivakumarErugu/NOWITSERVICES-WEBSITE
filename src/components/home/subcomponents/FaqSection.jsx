'use client'

import React, { useState } from 'react'
import { ThemeLinkTag } from '@/components/shared/UI-Elements/Custom-Elements'

const List = [
    {
        id: 1,
        title: "Which industries do you serve?",
        description:
            "We serve finance, healthcare, retail and e-commerce, education, manufacturing, and IT & telecom industries.",
    },
    {
        id: 2,
        title: "How do you approach a new project?",
        description:
            "We start with discovery, align on goals, define scope, and execute with iterative feedback.",
    },
    {
        id: 3,
        title: "How can we get started?",
        description:
            "Simply reach out through our contact form and our team will guide you through the next steps.",
    },
    {
        id: 4,
        title: "Can your solutions scale as the business grows?",
        description:
            "Yes, our solutions are built to scale seamlessly as your business evolves.",
    },
]

const FaqSection = () => {
    const [activeCard, setActiveCard] = useState(1)

    return (
        <section className="w-full bg-[#E3F1FF] py-20 hidden md:block px-4 lg:px-8">
            {/* Center Container */}
            <div className=" mx-auto  px-1 lg:px-6 grid grid-cols-2 gap-12 items-start">

                {/* Left Content */}
                <div className="flex flex-col gap-8">
                    <div>
                        <p className="text-[14px] font-medium text-[#1F7AFC] tracking-wide mb-3">
                            FAQ’S
                        </p>

                        <h2 className="text-[48px] leading-10 font-semibold text-[#0A2540] ">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm ">
                        <h3 className="text-[22px] font-semibold text-[#0A2540] mb-3">
                            Still have questions?
                        </h3>

                        <p className="text-[15px] text-[#4A5D73] leading-6 mb-6">
                            We&apos;re here to help you understand how we work,
                            what we offer, how we can grow together, and build
                            lasting brand impact.
                        </p>

                        <ThemeLinkTag BtnText="Get In Touch" href="/contactUs" />
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="flex flex-col gap-6">
                    {List.map((item) => {
                        const isActive = activeCard === item.id

                        return (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl px-8 py-6 shadow-sm"
                            >
                                <button
                                    onClick={() =>
                                        setActiveCard(isActive ? null : item.id)
                                    }
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <p className="text-[17px] font-medium text-[#0A2540] pr-6">
                                        {item.title}
                                    </p>

                                    <span
                                        className={`flex items-center justify-center h-9 w-9 rounded-full border border-[#D0D5DD] text-[20px] transition-all duration-200 ${isActive
                                                ? 'text-[#0A2540]'
                                                : 'text-[#667085]'
                                            }`}
                                    >
                                        {isActive ? '−' : '+'}
                                    </span>
                                </button>

                                {isActive && (
                                    <p className="mt-4 pr-12 text-[15px] text-[#4A5D73] leading-6">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default FaqSection
