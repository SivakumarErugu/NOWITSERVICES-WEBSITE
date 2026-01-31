import React from 'react'
import Image from 'next/image'

import careerCall1 from '../../../public/images/careerCall1.png'
import careerCall2 from '../../../public/images/careerCall2.png'
import careerCall3 from '../../../public/images/careerCall3.png'
import careerCall4 from '../../../public/images/careerCall4.png'

const CareerVisualMessageBlock = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 ">
      <div className="max-w-6xl text-center font-semibold leading-tight border border-red">



        {/* Line 1 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px]">
          <span className='text-career-gradient'>Calling</span>
          <Image
            src={careerCall1}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-55"
          />
          <span className='text-career-gradient'>all</span>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <Image
            src={careerCall2}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-30"
          />
          <span className='text-career-gradient'>innovators</span>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <span className='text-career-gradient'>Ready to</span>
          <Image
            src={careerCall3}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-55"
          />
          <span className='text-career-gradient'>Build</span>
        </div>

        {/* Line 4 */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[64px] mt-4">
          <span className='text-career-gradient'>the Future</span>
          <Image
            src={careerCall4}
            alt="Career Callout"
            className="rounded-full object-cover h-18 w-30"
          />
        </div>

      </div>

      <p className='text-lg text-[#25252580]'>
        We’re always looking for talented individuals who are passionate about technology, 
        innovation, and creating meaningful impact. Join a team where your ideas matter and your growth is supported.
      </p>
    </section>
  )
}

export default CareerVisualMessageBlock
