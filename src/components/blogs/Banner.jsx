"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RxSewingPinFilled } from "react-icons/rx";
import blogbg from "../../../public/images/blog/blogbg.jpg"

import React from 'react'
import { useNowit } from "@/store/useNowit";

const Banner = () => {
    const {t,isReady}=useNowit()
    if(!isReady) return null;
    return (
        <div>
            {/* Animated Background */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src={blogbg}
                    alt="Blog Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">

                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="
        font-bold leading-tight
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      "
                >
                   {t("banner.title")}
                    <span
                        className="
          block mt-2
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        "
                    >
                       {t("banner.span")}
                    </span>
                </motion.h1>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="
        absolute bottom-6 sm:bottom-8
        flex flex-col items-center gap-2
        text-[10px] sm:text-xs uppercase tracking-widest
        animate-bounce
      "
                >
                    <RxSewingPinFilled className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span>{t("banner.scroll")}</span>
                </motion.div>

            </div>
        </div>
    )
}

export default Banner
