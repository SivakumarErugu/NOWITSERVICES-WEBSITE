import React from 'react';
import Image from 'next/image';
import careersBg from '../../../public/images/careersBg.jpg';
import { RxSewingPinFilled } from "react-icons/rx";
import CareerVisualMessageBlock from '@/components/careers/CareerVisualMessageBlock';
import JoinusBanner from '@/components/careers/JoinusBanner';
import Opportunities from '@/components/careers/Opportunities';

const Page = () => {
    return (
        <main className="relative w-full bg-white ">
            <div className="relative h-[90vh] w-full overflow-hidden rounded-b-[50%_100px] md:rounded-b-[50%_200px]">
                <Image
                    src={careersBg}
                    alt="careers background"
                    priority
                    fill
                    className="object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0  flex flex-col items-center justify-center text-white bg-black/30 border border-black">
                    <h1 className="text-4xl md:text-6xl font-bold text-center px-4 absolute bottom-27">
                        Your Next Career Move <br /> Starts Here
                    </h1>
                    <div className="absolute bottom-7 animate-bounce flex flex-col items-center gap-y-3 text-xs uppercase tracking-widest">
                        <p><RxSewingPinFilled size={22} /></p>
                        <span>
                            Scroll to explore
                        </span>
                    </div>
                </div>
            </div>

            <section className='mt-40 w-full flex justify-center items-center'>
                <CareerVisualMessageBlock />
            </section>

            <section>
                <JoinusBanner />
            </section>
            <section>
                <Opportunities />
            </section>
        </main>
    );
};

export default Page;