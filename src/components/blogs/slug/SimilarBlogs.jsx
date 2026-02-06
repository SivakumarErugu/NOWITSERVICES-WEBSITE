import React from 'react'
import Image from 'next/image'
import { IoBookOutline } from 'react-icons/io5'


import { ReadBlogBtn } from '@/components/shared/UI-Elements/Custom-Elements'
import SlidingHeader from '@/components/shared/UI-Elements/SlidingHeader'

const SimilarBlogs = ({ relatedDesc, blogs = [] }) => {
    return (
        <div className="mt-16">
            <SlidingHeader title="Similar Blogs" size="60px" />
            <div className="mt-2 text-black/70 text-sm ">
                {relatedDesc}
            </div>

            {/* Horizontal Scroll */}
            <div className="relative mt-8 overflow-x-auto">
                <div className="flex gap-6 pb-4">
                    {blogs.map((blog, idx) => (
                        <div
                            key={idx}
                            className="w-95 shrink-0"
                        >
                            {/* CARD */}
                            <div className="flex flex-col w-full gap-4 h-115">

                                {/* Image */}
                                <div className="relative w-95 h-65 shrink-0">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col h-full space-y-2 px-2">
                                    <span className="text-xs text-gray-500 inline-flex items-center gap-2">
                                        <IoBookOutline />
                                        {blog.readingTime}
                                    </span>

                                    <h4 className="text-lg font-semibold leading-snug text-black line-clamp-2">
                                        {blog.title}
                                    </h4>

                                    <p className="text-black/70 text-sm line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    {/* Push button to bottom */}
                                    <div className="mt-auto pt-3">
                                        <ReadBlogBtn href={`/blog/${blog.slug}`} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SimilarBlogs
