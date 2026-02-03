import Image from "next/image";
import React from "react";

const ServicesHero = () => {
    return (
        <div className="relative h-[658px] p-6">

            {/* Inner container (respects padding) */}
            <div className="relative h-full w-full overflow-hidden rounded-lg">

                {/* Background image */}
                <img
                    src="https://res.cloudinary.com/dr9thittl/image/upload/v1770100402/2009ea1806379055e86a2f9b4e087ec18e47e97c_t8gkqx.jpg"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-[0.75]" />

                {/* CONTENT GRID */}
                <div className="relative z-10 grid grid-cols-3 h-full px-16 text-white">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col justify-between py-16">
                        <h2 className="text-[36px] font-medium ibm-text">
                            Smart Marketing
                            Services
                        </h2>

                        <span className="text-[72px] font-bold opacity-90">1</span>
                    </div>

                    {/* CENTER COLUMN */}
                    <div className="flex items-center justify-center">
                        {/* <Image
                            src="https://res.cloudinary.com/dr9thittl/image/upload/v1770101348/11e3aac0dce76853e6258264f65104a0fa6a3c79_fh8u6f.png"
                            alt="marketing"
                            width={336}
                            height={383}
                            className="object-cover shadow-lg"
                            priority
                        /> */}
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col justify-center pl-10">
                        <p className="mb-6 text-[16px] leading-relaxed opacity-90">
                            Data-driven marketing solutions designed to improve reach and
                            engagement.
                        </p>

                        <ul className="space-y-3 text-[15px] list-disc list-inside opacity-90">
                            <li>Data-driven digital campaigns</li>
                            <li>Content and brand storytelling</li>
                            <li>AI-based audience targeting</li>
                            <li>Performance tracking and analytics</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServicesHero;
