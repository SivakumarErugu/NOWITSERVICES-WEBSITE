import React from 'react';
import Image from 'next/image';
import blogbg from '../../../public/images/blog/blogbg.jpg'
import { RxSewingPinFilled } from 'react-icons/rx';
import BlogHeader from '@/components/blogs/BlogHeader';
import TopArticles from '@/components/blogs/TopArticles';
import LatestBlogs from '@/components/blogs/LatestBlogs';

const Page = () => {

    return (
        <div className='w-full px-15 py-5 space-y-5 '>
            {/* banner section */}
            <section className='w-full h-120 relative rounded-lg overflow-hidden'>
                <Image src={blogbg} alt="Blog Background" className="w-full h-full object-cover rounded-l" />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 ">
                    <h1 className="text-4xl font-bold text-center px-4 absolute bottom-40">
                        Technology Insights for <br /> <strong className='text-6xl'> Modern Businesses </strong>
                    </h1>
                    <div className="absolute bottom-7 animate-bounce flex flex-col items-center gap-y-3 text-xs uppercase tracking-widest">
                        <p><RxSewingPinFilled size={22} /></p>
                        <span>
                            Scroll to explore
                        </span>
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
