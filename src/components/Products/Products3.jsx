'use client'

import React, { useState, useMemo, useEffect } from 'react'

import SlidingHeader from '../shared/UI-Elements/SlidingHeader'
import ProductCard from './ProductCard'

import { PRODUCTS } from './ProductData'
import { useNowit } from '@/store/useNowit'

const tabs = ['B2C', 'B2B', 'B2B2C', 'WON CORE']

const INITIAL_COUNT = 3

const Products3 = () => {
    const [activeTab, setActiveTab] = useState('B2C')
    const [showAll, setShowAll] = useState(false)
    const [translatedProductsList, setTranslatedProductsList] = useState({})
    const { t, isReady } = useNowit();
    /* ===========================
       FILTER PRODUCTS BY TAB
    =========================== */
    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter(
            (product) => product.category === activeTab
        )
    }, [activeTab])

    const visibleProducts = showAll
        ? filteredProducts
        : filteredProducts.slice(0, INITIAL_COUNT)

    useEffect(() => {
        const translatedList = t("products.List")
        console.log("Raw Translation Output:", translatedList, translatedList?.length > 0); // Debugging log

        if (Object.keys(translatedList).length > 0) {
            console.log("Translated List:", translatedList); // Debugging log
            setTranslatedProductsList(translatedList)
        } else {
            setTranslatedProductsList(translatedList)
        }
    }, [t])


    return (
        <section className="w-full bg-white py-1 px-4 lg:px-8 mb-5 ">
            {!isReady ? (
                // Skeleton / fallback
                <div className="text-gray-400 py-10">Loading</div>
            ) : (
                <div className="mx-auto px-1 lg:px-6">
                    {/* HEADER */}
                    <SlidingHeader title={t("products.slidingHeader") || "Our Products"} bottom="mb-2" />

                    <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#0b2b4b] leading-normal max-w-3xl">
                        {t("products.title") || "Products Built for Every Journey "}
                        <span className="hidden md:inline">
                            <br />
                        </span>
                        <span className="text-[#0d63f3]">
                            {t("products.span") || "Individual to Enterprise"}
                        </span>
                    </h2>

                    {/* TABS */}
                    <div className="mt-6">
                        <div className="
                        flex gap-3
                        overflow-x-auto
                        whitespace-nowrap
                        pb-2
                        scrollbar-hide
                        md:overflow-visible
                        md:flex-wrap
                    ">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab)
                                        setShowAll(false)
                                    }}
                                    className={`
                                    shrink-0
                                    px-3 sm:px-4 md:px-6
                                    py-2
                                    rounded-md
                                    border
                                    text-xs sm:text-sm
                                    font-medium
                                    transition
                                    ${activeTab === tab
                                            ? 'bg-[#55B233] text-white border-[#55B233]'
                                            : 'bg-white text-[#1f2937] border-[#d1d5db] hover:border-[#55B233]'
                                        }
                                `}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PRODUCTS LIST */}
                    <div className="
                    mt-3 lg:mt-4
                    space-y-14
                    2xl:space-y-0
                    2xl:grid
                    2xl:grid-cols-3
                    2xl:gap-15
                ">
                        {visibleProducts.map((item, index) => {
                            // Debugging log
                            if (translatedProductsList) {
                                console.log(item.key, "key in")
                                console.log(translatedProductsList, "list here")
                                console.log(translatedProductsList[item.key], "value in")
                                console.log("triggering in IF BLOCK")
                                return (<ProductCard
                                    key={item.key}
                                    title={translatedProductsList[item.key]?.title || item.title}
                                    desc={translatedProductsList[item.key]?.desc || item.desc}
                                    img={item.image}
                                    link={item.link}
                                    reverse={index % 2 !== 0}
                                />)
                            }
                            console.log("triggering in ELSE BLOCK")
                            return (
                                <ProductCard
                                    key={item.key}
                                    title={item.title}
                                    desc={item.desc}
                                    img={item.image}
                                    link={item.link}
                                    reverse={index % 2 !== 0}
                                />
                            );
                        })}

                    </div>

                    {/* VIEW MORE */}
                    {filteredProducts.length > INITIAL_COUNT && (
                        <div className="mt-8 md:mt-12 2xl:mt-10 text-center">
                            <button
                                onClick={() => setShowAll((prev) => !prev)}
                                className="text-md lg:text-lg font-medium text-[#0A66C2] hover:underline ibmPlex-text"
                            >
                                {showAll ? 'View Less →' : 'View More →'}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    )
}

export default Products3
