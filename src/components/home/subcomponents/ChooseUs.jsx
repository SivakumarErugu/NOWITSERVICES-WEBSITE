'use client'

import { CustomHeading, ThemeBottomBorder2 } from '@/components/shared/UI-Elements/Custom-Elements'
import SlidingHeader from '@/components/shared/UI-Elements/SlidingHeader'
import React, { useState } from 'react'

const List = [
  {
    id: 1,
    title: "User-First Thinking",
    description:
      "We design solutions around real user needs, ensuring clarity, ease of use, and confident decision-making at every step."
  },
  {
    id: 2,
    title: "AI-Driven Intelligence",
    description:
      "We embed AI thoughtfully to automate workflows and enable smarter decisions."
  },
  {
    id: 3,
    title: "Cloud-First & Future-Ready",
    description:
      "Built on scalable cloud architectures that grow with your business."
  },
  {
    id: 4,
    title: "End-to-End Ownership",
    description:
      "From ideation to deployment and beyond, we own outcomes end-to-end."
  },
  {
    id: 5,
    title: "Industry-Aware Solutions",
    description:
      "Domain-focused solutions aligned with real industry challenges."
  },
  {
    id: 6,
    title: "Designed for Scale, Not Just Launch",
    description:
      "Engineered for long-term performance, reliability, and growth."
  },
  {
    id: 7,
    title: "Trust Through Transparency",
    description:
      "Clear communication, honest timelines, measurable results."
  }
]

const ChooseUs = () => {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="w-[100%] md:h-[850px] flex flex-col items-center mt-20 mb-20">
      <CustomHeading
        title="Why"
        span="Choose Us"
        description="Helping brands succeed through smart and dependable technology."
      />

      {/* Desktop View */}
      <ul
        className="
          mt-12
          hidden md:flex
          flex-wrap
          justify-center
          gap-x-8
          gap-y-12
          px-6
        "
      >
        {List.map((item) => {
          const isActive = activeId === item.id

          return (
            <li
              key={item.id}
              className="w-[210px] md:w-[260px] h-[320px] [perspective:1200px]"
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div
                className={`
                  relative w-full h-full transition-transform duration-700
                  [transform-style:preserve-3d]
                  ${isActive ? '[transform:rotateY(180deg)]' : ''}
                `}
              >
                {/* FRONT */}
                <div
                  className="
                    absolute inset-0 rounded-xl p-6
                    bg-gradient-to-br from-[#081A5A] to-[#020C2D]
                    text-white shadow-lg
                    flex flex-col justify-center
                    [backface-visibility:hidden]
                  "
                >
                  <h3 className="text-[28px] font-medium leading-snug">
                    {item.title}
                  </h3>
                  <SlidingHeader />
                </div>

                {/* BACK */}
                <div
                  className="
                    absolute inset-0 rounded-xl p-6
                    bg-gradient-to-br from-[#EAF6FF] via-[#D8EFFF] to-[#BFE5FF]
                    text-[#0A2540] shadow-lg
                    flex flex-col justify-center
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <p className="text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Mobile View */}
      <div className='w-full overflow-auto scroll-invisible no-scrollbar'>
        <ul
          className="
            md:hidden
            flex flex-nowrap gap-4
            overflow-x-auto overflow-y-hidden
            scroll-smooth
            px-5
            scroll-invisible no-scrollbar
          "
        >
          {List.map((item) => {
            const isActive = activeId === item.id

            return (
              <li
                key={item.id}
                className="
                  w-[210px] md:w-[260px]
                  h-[291px]
                  flex-shrink-0
                  [perspective:1200px]
                "
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div
                  className={`
                    relative w-full h-full transition-transform duration-700
                    [transform-style:preserve-3d]
                    ${isActive ? '[transform:rotateY(180deg)]' : ''}
                  `}
                >
                  {/* FRONT */}
                  <div
                    className="
                      absolute inset-0 rounded-md p-4
                      bg-gradient-to-br from-[#081A5A] to-[#020C2D]
                      text-white shadow-lg
                      flex flex-col justify-center
                      [backface-visibility:hidden]
                    "
                  >
                    <h3 className="text-[18px] font-medium leading-tight">
                      {item.title}
                    </h3>
                    <SlidingHeader />
                  </div>

                  {/* BACK */}
                  <div
                    className="
                      absolute inset-0 p-6
                      bg-gradient-to-br from-[#EAF6FF] via-[#D8EFFF] to-[#BFE5FF]
                      text-[#0A2540] shadow-lg
                      flex flex-col justify-center
                      [transform:rotateY(180deg)]
                      [backface-visibility:hidden]
                      h-[291px] w-[210px]
                      rounded-md
                    "
                  >
                    <p className="text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ChooseUs
