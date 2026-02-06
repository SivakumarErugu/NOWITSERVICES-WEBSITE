import React from 'react'
import { ThemeHeaderSideLine } from './Custom-Elements'

const SlidingHeader = ({
    title,
    size = '60px',
    top = 'mt-2 lg:mt-8',
    bottom = 'mb-6',
}) => {
    return (
        <div
            className={`flex items-center gap-x-1 ${top} ${bottom}`}
        >
            <h2 className='text-sm md:text-lg lg:text-xl font-semibold text-[#252525] inter-text'>
                {title || ''}
            </h2>
            <ThemeHeaderSideLine width={size} />
        </div>
    )
}

export default SlidingHeader
