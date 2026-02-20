'use client'

import React, { useState,useEffect } from "react"
import Image from "next/image"

import Services5bg from "../../../public/images/ServicesImages/Services5bg.jpg"
import Services5Image1 from "../../../public/images/ServicesImages/Services5Image1.jpg"
import Services5Image2 from "../../../public/images/ServicesImages/Services5Image2.jpg"
import Services5Image3 from "../../../public/images/ServicesImages/Services5Image3.jpg"
import Services5Image4 from "../../../public/images/ServicesImages/Services5Image4.jpg"
import Services5Image5 from "../../../public/images/ServicesImages/Services5Image5.jpg"
import { image } from "framer-motion/client"
import { useNowit } from "@/store/useNowit";

const tabs = [
    "Discover",
    "Design & Architecture",
    "Development",
    "Deployment",
    "Continuous Evolution",
]

const tabContent = {
    1: {
        
        image: Services5Image1,
    },
    2: {
       
        image: Services5Image2,

    },
    3: {
      
        image: Services5Image3,

    },
    4: {
        
        image: Services5Image4,

    },
   5: {
       
        image: Services5Image5,

    },
}

const Services5 = () => {
    const [activeTab, setActiveTab] = useState(1)
    const { t, isReady } = useNowit();
    const [translatedTabs, setTranslatedTabs] = useState(tabs)
    const [translatedTabContent, setTranslatedTabContent] = useState(tabContent)

    useEffect(() => {
        if (isReady) {
            const translatedTabs = t("service5.tabs")
            // console.log(translatedTabs,"translatedTabs")
            setTranslatedTabs(translatedTabs)
            const translatedTabContent = t("service5.tabContent")
            // console.log(translatedTabContent,"translatedTabContent")
            setTranslatedTabContent(translatedTabContent)
            // console.log(translatedTabContent[activeTab],"translatedTabContent")

        }
    }, [isReady, t])
    
    if (!isReady) return null;
    
    return (
        <section
            className="w-full flex items-center justify-center bg-cover bg-center mb-2 "
            style={{
                backgroundImage: `url(${Services5bg.src})`,
            }}
        >
            <div className=" w-full px-4 md:px-8 lg:px-10 py-7 lg:py-12 text-white">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-xl md:text-4xl font-semibold">
                        {t("service5.title") || "How We Deliver"}
                    </h2>
                    <p className="mt-4 text-xs md:text-sm text-white/60 max-sm:text-left">
                        {t("service5.description") || "We guide your project through every stage, from ideation and design to development, testing, and management, ensuring a successful journey that brings your vision to life with precisionand care."}
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
                            {/* {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-1 md:pb-2 text-sm md:text-base transition-all duration-300 shrink-0 px-2 cursor-pointer
          ${activeTab === tab
                                            ? "text-white border-b-2 border-white"
                                            : "text-white/60 hover:text-white"
                                        }
        `}
                                >
                                    {tab}
                                </button>
                            ))} */}
                            {translatedTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`pb-1 md:pb-2 text-sm md:text-base transition-all duration-300 shrink-0 px-2 cursor-pointer
          ${activeTab === tab
                                            ? "text-white border-b-2 border-white"
                                            : "text-white/60 hover:text-white"
                                        }
        `}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Content */}
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 items-center">

                        {/* Image → 1 column */}
                        <div className="md:col-span-1 w-full">
                            <Image
                                src={tabContent[activeTab].image}
                                alt="Service step image"
                                className="rounded-lg w-full h-40 lg:h-50 2xl:h-60 object-cover border border-gray-500"
                                priority
                            />
                        </div>

                        {/* Text → 2 columns */}
                        <div className="lg:col-span-2">
                            <h3 className="text-lg md:text-2xl font-semibold">
                                {/* {tabContent[activeTab].title} */}
                             
                               {translatedTabContent[activeTab]?.title || "Title not found"}
                            </h3>

                            <p className="mt-2 text-xs md:text-sm 2xl:text-[16px] text-white/70 leading-relaxed max-w-2xl 2xl:max-w-5xl">
                                {/* {tabContent[activeTab].description} */}
                                                           {translatedTabContent[activeTab]?.description || "Title not found"}

                            </p>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default Services5
