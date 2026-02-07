'use client'


import React from "react";
import Image from "next/image";
import AvatarStack from "../shared/UI-Elements/AvatarStack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Images = ["https://res.cloudinary.com/dr9thittl/image/upload/v1770368688/351c910257cd7a99096737785ceb42a38d558322_ccqwyd.jpg",
    "https://res.cloudinary.com/dr9thittl/image/upload/v1770368642/caa249fdeb6501b6af932cf99bbbdac74cd48abc_savzbx.jpg"
]

const Trusted = () => {
    const [hoverKey, setHoverKey] = useState(0)
    return (
        <div className="hidden md:flex justify-center mt-12" onMouseEnter={() => setHoverKey((k) => k + 1)}>
            <div className="flex items-center gap-8 px-20">
                {/* Left Image */}
               
                <div
                    className="relative w-[420px] h-[364px]"

                >
                    <motion.div
                        key={hoverKey} // 🔥 forces re-animation on every hover
                        initial={{ x: -1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2.0,
                            ease: [0.19, 1, 0.22, 1] // easeOutExpo-like


                        }}
                        className="absolute inset-0"
                    >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                            <Image
                                src={Images[0]}
                                alt="Trusted Clients"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Center Gradient Card */}
                <div
                    className="
                      w-[291px] h-[364px]
                      rounded-[20px]
                      bg-gradient-to-br from-[#071C3D] to-[#0B4F8A]
                      text-white
                      flex flex-col justify-center
                      px-8
                      gap-2
                    "
                >
                    <h1 className="ibm-text text-[48px] font-bold leading-none">
                        Trusted
                    </h1>

                    <p className="ibm-text text-[18px] opacity-90">
                        by Global Clients
                    </p>

                    <div className="mt-4">
                        <AvatarStack />
                    </div>
                </div>

                {/* Right Image */}
              
                <div
                    className="relative w-[420px] h-[364px]"

                >
                    <motion.div
                        key={hoverKey} // 🔥 forces re-animation on every hover
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2.0,
                            ease: [0.19, 1, 0.22, 1] // easeOutExpo-lik
                        }}
                        className="absolute inset-0"
                    >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                            <Image
                                src={Images[1]}
                                alt="Trusted Clients"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Trusted;
