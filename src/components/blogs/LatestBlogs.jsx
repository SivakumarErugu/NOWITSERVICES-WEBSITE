"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"
import Image from "next/image"
import { IoBookOutline } from "react-icons/io5"
import { blogs } from "./utils"
import SlidingHeader from "../shared/UI-Elements/SlidingHeader"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"
import { ReadBlogBtn } from "../shared/UI-Elements/Custom-Elements"

const VISIBLE_COUNT = 3
const CARD_GAP = 24 // gap-x-6 = 24px

const LatestBlogs = () => {
  const [index, setIndex] = useState(0)

  const canNext = index + VISIBLE_COUNT < blogs.length
  const canPrev = index > 0

  const handleNext = () => {
    if (canNext) setIndex(prev => prev + 1)
  }

  const handlePrev = () => {
    if (canPrev) setIndex(prev => prev - 1)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <SlidingHeader title="Latest Blogs" size="60px" />

        <div className="flex items-center gap-x-6">
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="h-10 w-10 border-2 border-[#0A66C2] text-[#0A66C2] hover:border-[#55B233] hover:text-white cursor-pointer
             hover:bg-[#55B233]  rounded-full flex items-center justify-center text-2xl disabled:opacity-40"
          >
            <IoMdArrowRoundBack />
          </button>

          <button
            onClick={handleNext}
            disabled={!canNext}
            className="h-10 w-10 border-2 border-[#0A66C2] text-[#0A66C2] hover:border-[#55B233] hover:text-white cursor-pointer
             hover:bg-[#55B233]  rounded-full flex items-center justify-center text-2xl disabled:opacity-40"
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
            x: `calc(-${index * (100 / VISIBLE_COUNT)}% - ${index * CARD_GAP}px)`
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30
          }}
        >
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="w-1/3 shrink-0 pr-6"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-[260px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>

                <div className="space-y-2 px-2">
                  <span className="text-xs text-gray-500 inline-flex items-center gap-2">
                    <IoBookOutline />
                    {blog.readingTime}
                  </span>

                  <h4 className="text-lg font-semibold leading-snug text-black ">
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
