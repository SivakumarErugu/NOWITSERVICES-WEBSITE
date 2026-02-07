'use client'

import React from 'react'
import Image from 'next/image'

import SlidingHeader from '../shared/UI-Elements/SlidingHeader'

import Amaravathi from '../../../public/images/Locations/Amaravathi.png'
import Mayuri from '../../../public/images/Locations/Mayuri.png'
import Germany from '../../../public/images/Locations/Germany.png'
import UK from '../../../public/images/Locations/UK.jpg'

/* ---------------- REUSABLE LOCATION CARD ---------------- */
const LocationCard = ({ image, title, address }) => {
    return (
        <div className="flex items-center gap-4 border overflow-hidden border-[#d1d5db] rounded-lg p-0  bg-white cursor-pointer">

            {/* IMAGE */}
            <div className="relative w-26 h-20 lg:w-43 lg:h-30 shrink-0 rounded-l-md overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* CONTENT */}
            <div>
                <h4 className="text-sm lg:text-md font-semibold text-[#0b2b4b]">
                    {title}
                </h4>

                <p className="mt-1 text-xs lg:text-sm text-[#4b5563] leading-relaxed">
                    {address}
                </p>
            </div>
        </div>
    )
}

/* ---------------- MAIN COMPONENT ---------------- */
const ContactUs2 = () => {
    const locations = [
        {
            title: ' INDIA - Amaravathi ',
            image: Mayuri,
            address:
                'Level 4 Mayuri Tech Park, NRI Exit,Bypass Road, Electronic city, Chinnakakani, Andhra Pradesh, 522503.',
        },
        {
            title: 'INDIA - Vijayawada ',
            image: Amaravathi,
            address:
                'Ground Floor, Chalasani Nagar, Kanuru, Vijayawada, Andhra Pradesh, 520007.',
        },
        {
            title: 'UK',
            image: UK,
            address:
                'Grand Union Canal, Near Hays and Harlington Station, Greater London, UnitedKingdom UB3 4QF.',
        },
        {
            title: 'GERMANY',
            image: Germany,
            address:
                'Hausdorffstraße 61, 53129 Bonn, Germany.',
        },

    ]

    return (
        <section className="w-full bg-white py-4 lg:py-8 px-4 lg:px-10">
            <div className=" mx-auto">

                {/* HEADER */}
                <SlidingHeader title="Our Locations" />

                {/* LOCATIONS GRID */}
                <div
                    className="
            mt-6
            grid grid-cols-1
            md:grid-cols-2
            gap-4 md:gap-6
          "
                >
                    {locations.map((loc, index) => (
                        <LocationCard
                            key={index}
                            image={loc.image}
                            title={loc.title}
                            address={loc.address}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ContactUs2
