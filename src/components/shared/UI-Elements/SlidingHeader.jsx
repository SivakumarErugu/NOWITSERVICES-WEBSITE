'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ThemeHeaderSideLine } from './Custom-Elements'

const SlidingHeader = ({
    title,
    size = '60px',
    top = 'mt-2 lg:mt-8',
    bottom = 'mb-6',
}) => {
    const ref = useRef(null)

    const isInView = useInView(ref, {
        once: true,
        margin: '-20% 0px -10% 0px' // less aggressive trigger for mobile
    })

    return (
        <motion.div
            ref={ref}
            initial={{ x: '-50px', opacity: 0 }} 
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
                duration: 0.9,
                ease: [0.19, 1, 0.22, 1],
            }}
            className={`flex items-center gap-x-2 ${top} ${bottom}`}
        >
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#252525] inter-text">
                {title || ''}
            </h2>
            <ThemeHeaderSideLine width={size} />
        </motion.div>
    )
}

export default SlidingHeader
