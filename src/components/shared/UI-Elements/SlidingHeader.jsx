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
        once: true,                 // 🔥 animate only once
        margin: '-50% 0px -10% 0px'  // 🔥 trigger when header reaches middle
    })

    return (
        <motion.div
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1], // smooth, premium feel
            }}
            className={`flex items-center gap-x-1 ${top} ${bottom}`}
        >
            <h2 className="text-sm md:text-lg lg:text-xl font-semibold text-[#252525] inter-text">
                {title || ''}
            </h2>
            <ThemeHeaderSideLine width={size} />
        </motion.div>
    )
}

export default SlidingHeader
