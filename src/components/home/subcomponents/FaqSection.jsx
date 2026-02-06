
'use client'

import React, { useState } from 'react'
import { ThemeBtnTag } from '@/components/shared/UI-Elements/Custom-Elements'

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
        <section className="w-full bg-[#E3F1FF] flex justify-center py-[96px]">
            <div className="w-[1270px] grid grid-cols-2 gap-[64px]">

                {/* Left Content */}
                <div className="flex flex-col gap-[32px]">
                    <div>
                        <p className="text-[14px] font-medium text-[#1F7AFC] tracking-wide mb-2">
                            FAQ’S
                        </p>
                        <h2 className="text-[40px] leading-[48px] font-semibold text-[#0A2540] max-w-[420px]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="bg-white rounded-[16px] p-[32px] w-[532px] shadow-sm">
                        <h3 className="text-[20px] font-semibold text-[#0A2540] mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-[14px] text-[#4A5D73] leading-[22px] mb-6">
                            We're here to help you understand how we work, what we offer,
                            how we can grow together, and build lasting brand impact.
                        </p>
                        <ThemeBtnTag>Get In Touch</ThemeBtnTag>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="flex flex-col gap-[16px]">
                    {List.map((item) => {
                        const isActive = activeCard === item.id

                        return (
                            <div
                                key={item.id}
                                className="w-[640px] bg-white rounded-[14px] px-[24px] py-[20px]"
                            >
                                <button
                                    onClick={() =>
                                        setActiveCard(isActive ? null : item.id)
                                    }
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <p className="text-[18px] font-medium text-[#0A2540]">
                                        {item.title}
                                    </p>

                                    <span
                                        className={`flex items-center justify-center h-[32px] w-[32px] rounded-full border border-[#D0D5DD] text-[18px] font-medium ${
                                            isActive ? 'text-[#0A2540]' : 'text-[#667085]'
                                        }`}
                                    >
                                        {isActive ? '−' : '+'}
                                    </span>
                                </button>

                                {isActive && (
                                    <p className="mt-[12px] pr-[40px] text-[14px] text-[#4A5D73] leading-[22px]">
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
