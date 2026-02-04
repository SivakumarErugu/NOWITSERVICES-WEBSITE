'use client'

import React, { useState } from 'react'
// import Image from 'next/image'

import SlidingHeader from '../shared/UI-Elements/SlidingHeader'
import ProductCard from './ProductCard'

import Product6 from '../../../public/images/ProductImages/Product6.jpg'
import Product7 from '../../../public/images/ProductImages/Product7.jpg'
import Product8 from '../../../public/images/ProductImages/Product8.jpg'
import Product9 from '../../../public/images/ProductImages/Product9.jpg'
import Product10 from '../../../public/images/ProductImages/Product10.jpg'
import Product11 from '../../../public/images/ProductImages/Product11.jpg'
import Product12 from '../../../public/images/ProductImages/Product12.jpg'


const tabs = ['WON CORE', 'B2C', 'B2B', 'B2B2C']

const products = [
    {
        title: 'WON Digi',
        desc:
            'Our products are designed to support individuals, businesses, and enterprises at every stage of their journey. Each product is built to solve real problems, scale effortlessly, and integrate seamlessly into a larger digital ecosystem.',
        img: Product6,
    },
    {
        title: 'WON Pulse',
        desc:
            'A smart healthcare platform designed to support doctors, businesses, and enterprises with seamless data access, real-time insights, and integrated workflows.',
        img: Product7,
    },
    {
        title: 'WON Home',
        desc:
            'A modern living solution built for comfort, automation, and security—bringing smart technology into everyday home life.',
        img: Product8,
    },
    {
        title: 'WON Bless',
        desc:
            'A spiritual and lifestyle ecosystem connecting traditions, communities, and digital experiences in a seamless way.',
        img: Product9,
    },
    {
        title: 'WON Fits',
        desc:
            'Fitness and wellness re-imagined with data-driven insights, progress tracking, and personalized experiences.',
        img: Product10,
    },
    {
        title: 'WON Kid',
        desc:
            'An education-focused platform designed to empower children with engaging, safe, and interactive digital learning.',
        img: Product11,
    },
    {
        title: 'WON Nest',
        desc:
            'A financial and planning ecosystem that helps individuals and families grow, protect, and manage their future.',
        img: Product12,
    },
]

const Products3 = () => {
    const [activeTab, setActiveTab] = useState('WON CORE')

    return (
        <section className="w-full bg-white py-1 px-4 lg:px-10  ">
            <div className=" mx-auto px-1  lg:px-8">
                {/* HEADER */}
                <SlidingHeader title="Our Products" />

                <h2 className="text-xl lg:text-4xl font-semibold text-[#0b2b4b] leading-relaxed max-w-3xl">
                    Products Built for Every Journey,{' '}
                    <span className="hidden lg:inline">
                        <br />
                    </span>
                    <span className="text-[#0d63f3]">Individual to Enterprise</span>
                </h2>

                {/* TABS */}
                <div className="mt-6">
                    <div
                        className="
      flex gap-3
      overflow-x-auto
      whitespace-nowrap
      pb-2

      md:overflow-visible
      md:flex-wrap
    "
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
          flex-shrink-0
          px-5 sm:px-6
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
                <div
                    className="
    mt-3 lg:mt-4
    space-y-14
    2xl:space-y-0
    2xl:grid
    2xl:grid-cols-3
    2xl:gap-10
  "
                >
                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            reverse={index % 2 !== 0} 
                        />
                    ))}
                </div>

                {/* VIEW MORE */}
                <div className=" mt-8 md:mt-12 2xl:mt-6 text-center">
                    <button className="text-md lg:text-lg font-medium text-[#0A66C2] hover:underline ibmPlex-text">
                        View More →
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products3
