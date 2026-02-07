'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ThemeBtnTag } from '../shared/UI-Elements/Custom-Elements'

const ProductCard = ({ title, desc, img, link, reverse = false }) => {
  return (
    <div
      className="
        grid grid-cols-1
        md:grid-cols-2
        gap-4 md:gap-6 lg:gap-8
        items-center
        2xl:px-6
        2xl:grid-cols-1
        2xl:items-start
      "
    >
      {/* IMAGE (WITH BLACK BORDER) */}
      <div
        className={`
          group
          relative w-full lg:w-[95%] 2xl:w-full
          h-48 sm:h-52 md:h-60 lg:h-70
          2xl:h-85
          border-6 lg:border-10 border-black
          rounded-md
          overflow-hidden
          ${reverse ? 'md:order-2' : 'md:order-1'}
        `}
      >
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 1536px) 50vw, 33vw"
          className="
            object-cover
            scale-150
            transition-transform
            duration-3000
            ease-out
            group-hover:scale-100
            
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className={`
          ${reverse ? 'md:order-1' : 'md:order-2'}
          2xl:order-2
        `}
      >
        <h3 className="text-lg lg:text-2xl font-semibold text-[#0b2b4b] ibmPlex-text">
          {title}
        </h3>

        <p className="mt-3 text-xs md:text-base text-[#4b5563] leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="mt-5">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <ThemeBtnTag
              BtnText="View Product"
              styles="border-0 bg-[#55B233] text-white text-xs md:text-sm !font-medium !py-1 !px-5 !lg:py-2 !rounded-md hover:bg-[#43a047]"
            />
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProductCard
