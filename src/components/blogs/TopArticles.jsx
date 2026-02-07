'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { blogs } from './utils'
import { GoArrowUpRight } from 'react-icons/go'
import { IoBookOutline } from 'react-icons/io5'
import BlogHeader from './BlogHeader'
import { ReadBlogBtn } from '../shared/UI-Elements/Custom-Elements'

const TopArticles = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const sortedBlogs = [...blogs].sort(
        (a, b) => Number(a.top ?? 999) - Number(b.top ?? 999)
    )

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const isSearching = searchTerm.trim().length > 0

    return (
        <div className="w-full space-y-10">
            <BlogHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* ================= SEARCH RESULTS ================= */}
            {isSearching && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlogs.length === 0 && (
                        <p className="text-gray-500 col-span-full text-center">
                            No articles found.
                        </p>
                    )}

                    {filteredBlogs.map(blog => (
                        <div
                            key={blog.id}
                            className="flex flex-col gap-3 bg-white rounded-xl"
                        >
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="rounded-xl object-cover"
                                />
                            </div>

                            <span className="text-xs text-gray-500 inline-flex items-center gap-2">
                                <IoBookOutline />
                                {blog.readingTime}
                            </span>

                            <h4 className="text-base sm:text-lg font-semibold text-black">
                                {blog.title}
                            </h4>

                            <p className="text-black/70 text-sm line-clamp-3">
                                {blog.excerpt}
                            </p>

                            <Link
                                href={blog.slug}
                                className="inline-flex items-center gap-1 w-fit px-4 py-2 border rounded-lg text-sm text-gray-500 hover:bg-blue-50"
                            >
                                Read More <GoArrowUpRight />
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {/* ================= TOP ARTICLES ================= */}
            {!isSearching && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* BIG ARTICLE */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={sortedBlogs[0].image}
                                alt={sortedBlogs[0].title}
                                fill
                                priority
                                className="rounded-xl object-cover"
                            />
                        </div>

                        <span className="text-sm text-gray-500 inline-flex items-center gap-2">
                            <IoBookOutline />
                            {sortedBlogs[0].readingTime}
                        </span>

                        <h2 className="text-xl sm:text-2xl font-semibold text-black">
                            {sortedBlogs[0].title}
                        </h2>

                        <p className="text-black/70 text-sm">
                            {sortedBlogs[0].excerpt}
                        </p>

                        <ReadBlogBtn href={`blog/${sortedBlogs[0].slug}`} />
                    </div>

                    {/* SMALL ARTICLES */}
                    <div className="space-y-6">
                        {sortedBlogs.slice(1, 3).map(blog => (
                            <div
                                key={blog.id}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <div className="relative w-full sm:w-1/2 aspect-[16/10]">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs text-gray-500 inline-flex items-center gap-2">
                                        <IoBookOutline />
                                        {blog.readingTime}
                                    </span>

                                    <h4 className="text-base sm:text-lg font-semibold text-black">
                                        {blog.title}
                                    </h4>

                                    <p className="text-black/70 text-sm line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <ReadBlogBtn href={`blog/${blog.slug}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}

export default TopArticles
