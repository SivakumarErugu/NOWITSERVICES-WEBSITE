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
        <div className="w-full px-4 sm:px-6 lg:px-12 py-6 space-y-8">
            {/* banner section */}
            <section
                className="
                    relative w-full overflow-hidden rounded-xl
                    h-56 sm:h-80 md:h-104 lg:h-128
                "
            >
                <Image
                    src={blogbg}
                    alt="Blog Background"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">

                    {/* Heading */}
                    <h1
                        className="
            absolute text-center font-bold leading-tight
            px-4
            bottom-16 sm:bottom-20 md:bottom-28
            text-xl sm:text-2xl md:text-4xl lg:text-5xl
          "
                    >
                        Technology Insights for <br />
                        <strong className="block mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                            Modern Businesses
                        </strong>
                    </h1>

                    {/* Scroll Indicator */}
                    <div
                        className="
            absolute bottom-5 sm:bottom-7
            flex flex-col items-center gap-1.5
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
