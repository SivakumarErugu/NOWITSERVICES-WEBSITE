"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { IoBookOutline } from "react-icons/io5"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"
import SlidingHeader from "../shared/UI-Elements/SlidingHeader"
import { ReadBlogBtn } from "../shared/UI-Elements/Custom-Elements"
import { blogs } from "./utils"

const CARD_GAP = 24 // gap-x-6

const LatestBlogs = () => {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  /* ---------------- RESPONSIVE COUNT ---------------- */
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1)       // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2) // tablet
      else setVisibleCount(3)                               // desktop
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const canNext = index + visibleCount < blogs.length
  const canPrev = index > 0

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <SlidingHeader title="Latest Blogs" size="60px" />

        <div className="flex items-center gap-4">
          <button
            onClick={() => canPrev && setIndex(i => i - 1)}
            disabled={!canPrev}
            className="h-10 w-10 rounded-full border-2 border-[#0A66C2] text-[#0A66C2]
              hover:bg-[#55B233] hover:border-[#55B233] hover:text-white
              flex items-center justify-center text-2xl disabled:opacity-40"
          >
            <IoMdArrowRoundBack />
          </button>

          <button
            onClick={() => canNext && setIndex(i => i + 1)}
            disabled={!canNext}
            className="h-10 w-10 rounded-full border-2 border-[#0A66C2] text-[#0A66C2]
              hover:bg-[#55B233] hover:border-[#55B233] hover:text-white
              flex items-center justify-center text-2xl disabled:opacity-40"
          >
            <IoMdArrowRoundForward />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden mt-8">
        <motion.div
          className="flex"
          animate={{
            x: `calc(-${index * (100 / visibleCount)}% - ${index * CARD_GAP}px)`
          }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="shrink-0 pr-6"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="flex flex-col gap-4">
                {/* Image */}
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 px-1">
                  <span className="text-xs text-gray-500 inline-flex items-center gap-2">
                    <IoBookOutline />
                    {blog.readingTime}
                  </span>

                  <h4 className="text-base sm:text-lg font-semibold leading-snug text-black">
                    {blog.title}
                  </h4>

                  <p className="text-black/70 text-sm line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <ReadBlogBtn href={`blog/${blog.slug}`} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LatestBlogs
