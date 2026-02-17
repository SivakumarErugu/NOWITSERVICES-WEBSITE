'use client'

import React from 'react';
import { useState } from 'react';
import TitleAndDescription from '@/components/shared/UI-Elements/TitleAndDescription';
import SlidingHeader from '@/components/shared/UI-Elements/SlidingHeader';
import Link from 'next/link';
const AppsList = [{
    id: 1,
    name: "WON Hubs",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107230/e6a0fd8448a91bb572a6416a7ffa3a013e4be790_ihgrab.png",
    description: "WON Hubs is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."
},
{
    id: 2,
    name: "WON Digi",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107209/c631f590f3e1c0c7e22c70bb1e53c33523b20383_wexj7j.jpg",
    description: "WON Digi is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."

},
{
    id: 3,
    name: "WON Pulse",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107305/785f7f05f04bbf73a2f0e933017414fba094aeea_bwbmyw.jpg",
    description: "WON Pulse is a comprehensive and intelligent hospital management software designed to streamline clinical,operationsl, and administrative workflows across healthcare facilities.It helps hospitals improve efficiency,enhance patient care,seamlessly through smart,integrated digital solutions."
},
{
    id: 4,
    name: "WON Bills",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107185/c7b2f5175ba18e0eae94fed530dd717de53cbac4_cv9jr6.png",
    description: "WON Pulse is a comprehensive and intelligent hospital management software designed to streamline clinical,operationsl, and administrative workflows across healthcare facilities.It helps hospitals improve efficiency,enhance patient care,seamlessly through smart,integrated digital solutions."

},
{
    id: 5,
    name: "WON Bridge",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107319/6501ff8fead7aab2fdf2328dc9464bbacbc11023_tmcdkk.jpg",
    description: "WON Bridge is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."

},
]


const EnterpriseProducts = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const activeApp = AppsList[activeIndex];
    const leftList = AppsList.slice(0, activeIndex);
    const rightList = AppsList.slice(activeIndex + 1);


    const Cylinder = ({ app, index }) => (
        <li
            className="w-10 h-88 flex justify-center cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
        >
            <div className="w-10 h-full bg-linear-to-r from-[#0A66C2] to-[#04192D] flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.11)]">
                <span className="text-white font-semibold -rotate-90 whitespace-nowrap">
                    {app?.name}
                </span>
            </div>
        </li>
    );

    return (
        <section className='w-full px-4 lg:px-8'>
            <div className='mx-auto px-1 lg:px-6'>
                <div className='w-full flex flex-col hidden md:block'>
                    <SlidingHeader title="Our Products" bottom="mb-4" />

                    <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-gray-900">
                        <span className="text-[#0b5ed7]">Enterprise-Ready</span> Digital Products
                    </h2>

                    <p className="mt-3 text-gray-600 text-xs md:text-sm lg:text-[15px]">
                        Our products are designed to solve business challenges through intelligent,scalable,and easy-to-use digital solutions.Built
                        with modern technology,each product is crafted to deliver performance and long-term value across web and mobile platforms.
                    </p>


                    <div className="w-full flex justify-between py-5">
                        <div className="w-[100%] flex justify-between px-15">

                            <div className="grid grid-cols-[auto_auto_48px_auto_1fr] items-start h-88">

                                {/* LEFT CYLINDERS */}
                                <ul className="flex gap-6 h-88">
                                    {leftList.map((app, i) => (
                                        <Cylinder key={app.id} app={app} index={i} />
                                    ))}
                                </ul>

                                {/* IMAGE + CENTER CYLINDER */}
                                <div className="flex h-88 ml-4">
                                    <div className="w-80 h-88 relative overflow-hidden shadow-lg">
                                        <img src={activeApp.url} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 h-[48px] w-full bg-[#5DBB2F] flex items-center justify-center">
                                            <span className="text-white font-semibold">{activeApp.name}</span>
                                        </div>
                                    </div>
                                    <div className=" w-10 h-full flex justify-center">
                                        <div className="w-10 h-full bg-linear-to-r from-[#0A66C2] to-[#04192D] flex items-center justify-center">
                                            <span className="text-white font-semibold -rotate-90 whitespace-nowrap">
                                                {activeApp?.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* EXACT DESIGN GAP */}
                                <div className="w-12" />
                                {/* RIGHT CYLINDERS */}
                                <ul className="flex gap-6 h-88">
                                    {rightList.map((app, i) => (
                                        <Cylinder key={app.id} app={app} index={activeIndex + 1 + i} />
                                    ))}
                                </ul>
                            </div>

                            <div className=" pl-10 flex flex-col justify-start pt-2 mt-2">
                                <h3 className="text-[28px] font-semibold mb-4">{activeApp.name}</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {activeApp.description}
                                </p>
                                <Link href="/products" className="bg-[#5DBB2F] text-white px-6 py-2 rounded-md w-fit">
                                    View Product
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};
export default EnterpriseProducts

