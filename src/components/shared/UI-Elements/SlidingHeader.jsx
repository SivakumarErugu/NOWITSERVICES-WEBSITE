import React from 'react'
import { ThemeHeaderSideLine } from './Custom-Elements'

const SlidingHeader = ({ title, size = '60px' }) => {
    return (
        <div className='flex items-center gap-x-1 mt-12 mb-6'>
            <h2 className='text-xl font-bold text-[#252525]'>
                {title || ''}
            </h2>
            <ThemeHeaderSideLine width={size} />
        </div>
    )
}

export default SlidingHeader
