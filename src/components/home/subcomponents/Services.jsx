import SlidingHeader from '@/components/shared/UI-Elements/SlidingHeader'
import TitleAndDescription from '@/components/shared/UI-Elements/TitleAndDescription'
import React from 'react'
import CarouselAnimaiton from "@/components/home/subcomponents/CarouselAnimation"
const Services = () => {
    return (
        <div className='w-full px-4 lg:px-8'>
            <div className='mx-auto px-1 lg:px-6'>
                <SlidingHeader title="Our Services" bottom="mb-4" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
                    End-to-End <span className="text-[#0b5ed7]">Digital Services</span>
                </h2>

                <p className="mt-3 text-gray-600 text-xs md:text-sm lg:text-[15px]">
                    We provide end-to-end software services that help businesses build,
                    scale, and modernize their digital products. From strategy and design
                    to development and deployment, we deliver reliable, high-quality
                    solutions tailored to your business needs.
                </p>


                <CarouselAnimaiton />
            </div>

        </div>
    )
}

export default Services