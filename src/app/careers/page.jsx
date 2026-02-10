

import React from 'react';
import CareerVisualMessageBlock from '@/components/careers/CareerVisualMessageBlock';
import JoinusBanner from '@/components/careers/JoinusBanner';
import Opportunities from '@/components/careers/Opportunities';
import CareersHero from '@/components/careers/CareersHero';

export const metadata = {
    title: "Careers | NowIt"
};

const Page = () => {
    return (
        <main className="relative w-full bg-white ">
            <CareersHero />

            <section className='mt-10 md:mt-30 lg:mt-40 w-full flex justify-center items-center'>
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