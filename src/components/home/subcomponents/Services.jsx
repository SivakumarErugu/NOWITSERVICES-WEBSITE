import SlidingHeader from '@/components/shared/UI-Elements/SlidingHeader'
import TitleAndDescription from '@/components/shared/UI-Elements/TitleAndDescription'
import React from 'react'
import CarouselAnimaiton from "@/components/home/subcomponents/CarouselAnimation"
const Services = () => {
    return (
        <div className='w-full px-2 md:px-10 sm:space-y-2 md:sapce-y-0'>
            <div className='px-4'>
                <SlidingHeader title="Our Services" />

            </div>
            <TitleAndDescription />
            <CarouselAnimaiton />
        </div>
    )
}

export default Services