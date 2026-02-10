import React from 'react';
import Image from 'next/image';
import blogbg from '../../../public/images/blog/blogbg.jpg'
import { RxSewingPinFilled } from 'react-icons/rx';
import TopArticles from '@/components/blogs/TopArticles';
import LatestBlogs from '@/components/blogs/LatestBlogs';
import Banner from '@/components/blogs/Banner';

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
    min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]
  "
            >

                <Banner />
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
