'use client'

import { CustomHeading } from '@/components/shared/UI-Elements/Custom-Elements'
import Image from 'next/image'
import React from 'react'

const OurBrands = () => {
  return (
    <section className="w-full flex justify-center">
      {/* Figma Frame */}
      <div
        className="
          w-[1451px]
          flex
          flex-col
          gap-[24px]
          h-auto

        "
      >
        <CustomHeading
          title="That Trust Us"
          span="Brands"
          description="Helping brands succeed through smart and dependable technology"
          isSpanFirst={true}
        />

        {/* Brand Image */}
        <div className="w-full flex justify-center">
          <Image
            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770190454/d56c7c49447eeb51e18bc607463ebbaac90b7f59_gwoq3u.png"
            alt="Trusted brands"
            width={1451}
            height={180} // derived from design proportion
            className="object-contain hidden md:block"
            priority
          />
          <Image
            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770377461/d56c7c49447eeb51e18bc607463ebbaac90b7f59_1_tftywr.png"
            alt="Trusted brands"
            width={1451}
            height={180} // derived from design proportion
            className="object-contain  md:hidden"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default OurBrands
