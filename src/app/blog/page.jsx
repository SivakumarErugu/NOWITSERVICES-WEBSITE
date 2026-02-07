import React from 'react';
import Image from 'next/image';
import blogbg from '../../../public/images/blog/blogbg.jpg'
import { RxSewingPinFilled } from 'react-icons/rx';
import TopArticles from '@/components/blogs/TopArticles';
import LatestBlogs from '@/components/blogs/LatestBlogs';

export const metadata = {
  title: "Blogs | NowIt"
};

const Page = () => {
    return (
        <div className='w-full px-15 py-5 space-y-5 '>
            {/* banner section */}
            <section
                className="
                    w-full relative overflow-hidden rounded-lg
                    h-72 sm:h-96 md:h-120 lg:h-[32rem]
                "
            >
                <Image
                    src={blogbg}
                    alt="Blog Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white px-4">

                    {/* Heading */}
                    <h1
                        className="
                            absolute text-center font-bold leading-tight
                            bottom-24 sm:bottom-28 md:bottom-36
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                        "
                    >
                        Technology Insights for <br />
                        <strong className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            Modern Businesses
                        </strong>
                    </h1>

                    {/* Scroll Indicator */}
                    <div
                        className="
                        absolute bottom-6 sm:bottom-8
                        flex flex-col items-center gap-y-2
                        text-[10px] sm:text-xs uppercase tracking-widest
                        animate-bounce
                    "
                    >
                        <RxSewingPinFilled className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Scroll to explore</span>
                    </div>

                </div>
            </section>

            <section>
                <TopArticles />
            </section>

            <section>
                <LatestBlogs />
            </section>


        </div>
    )
}

export default Page
