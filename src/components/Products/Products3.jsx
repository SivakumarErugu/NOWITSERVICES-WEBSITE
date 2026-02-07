'use client'

import React, { useState, useMemo } from 'react'

import SlidingHeader from '../shared/UI-Elements/SlidingHeader'
import ProductCard from './ProductCard'

import {PRODUCTS} from './ProductData'

const tabs = ['B2C', 'B2B', 'B2B2C', 'WON CORE']


const INITIAL_COUNT = 3

const Products3 = () => {
    const [activeTab, setActiveTab] = useState('B2C')
    const [showAll, setShowAll] = useState(false)

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

    return (
        <section className="w-full bg-white py-1 px-4 lg:px-10">
            <div className="mx-auto px-1 lg:px-8">
                {/* HEADER */}
                <SlidingHeader title="Our Products" />

                <h2 className="text-xl lg:text-4xl font-semibold text-[#0b2b4b] leading-relaxed max-w-3xl">
                    Products Built for Every Journey{' '}
                    <span className="hidden lg:inline">
                        <br />
                    </span>
                    <span className="text-[#0d63f3]">
                        Individual to Enterprise
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
                    2xl:gap-10
                ">
                    {visibleProducts.map((item, index) => (
                        <ProductCard
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            img={item.image}
                            link={item.link}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* VIEW MORE */}
                {filteredProducts.length > INITIAL_COUNT && (
                    <div className="mt-8 md:mt-12 2xl:mt-6 text-center">
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className="text-md lg:text-lg font-medium text-[#0A66C2] hover:underline ibmPlex-text"
                        >
                            {showAll ? 'View Less →' : 'View More →'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Products3
