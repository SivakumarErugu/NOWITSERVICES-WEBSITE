import React from 'react';
import Image from 'next/image';
import blogbg from '../../../public/images/blog/blogbg.jpg'

const Page = () => {
    return (
        <div className='w-full px-10 py-10 '>
            <div className='w-full h-118'>
                <Image src={blogbg} alt="Blog Background" className="w-full h-full object-cover rounded-lg" />
            </div>

        </div>
    )
}

export default Page
