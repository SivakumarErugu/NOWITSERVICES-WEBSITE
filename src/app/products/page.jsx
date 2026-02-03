import React from 'react';
import Image from 'next/image';
import Products1 from "../../components/Products/Products1"
import Products2 from "../../components/Products/Products2"
import careersBg from '../../../public/images/careersBg.jpg';
import { RxSewingPinFilled } from "react-icons/rx";
import CareerVisualMessageBlock from '@/components/careers/CareerVisualMessageBlock';
import JoinusBanner from '@/components/careers/JoinusBanner';
import Opportunities from '@/components/careers/Opportunities';
import PartnerBanner from '@/components/shared/UI-Elements/Partner-Banner';

const Page = () => {
    return (
        <main className="relative w-full bg-white">
            <section>
                <Products1 />
            </section>
            <section>
                <Products2 />
            </section>
           
            <section>
                <PartnerBanner />
            </section>
        </main>
    );
};

export default Page;