'use client'
import AvatarStack from "@/components/shared/UI-Elements/AvatarStack";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useNowit } from "@/store/useNowit";



const BannerButtonSection = () => {
    const {t}=useNowit();
    return (
        <div className="w-full">
            {/* DESKTOP */}
            <div className="hidden lg:block relative w-[1070px] h-[332px] mx-auto">
                {/* your existing absolute-position desktop code stays EXACT */}
                <div className="relative w-[1070px] h-[332px] mx-auto mt-30"> {/* Top Row */}
                    <div className="absolute top-0 left-0 w-full flex justify-between items-end">
                        {/* Left Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -16 }}   // start slightly from left
                            animate={{ opacity: 1, x: 0 }}     // move to original position
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <Card width={253} height={87}> <p className="inter-text text-[16px] font-medium">{t("banner.customer")||"9/10 Customers"}</p>
                                <p className="text-sm">{t("banner.recommend")||"Recommend Us"}</p> </Card>
                        </motion.div>
                        {/* Middle Group (raised) */}
                        <div className="flex gap-4 -translate-y-10">
                            <Card width={206} height={99}>
                                <p className="text-2xl font-semibold">{t("banner.100")||"100%"}</p>
                                <p className="text-sm">{t("banner.quality")||"Quality Assured"}</p>
                            </Card>
                            <Card width={206} height={99}> <p className="text-2xl font-semibold">{t("banner.24")||"24/7"}</p>
                                <p className="text-sm">{t("banner.support")||"Support"}</p> </Card>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}   // start slightly from right
                            animate={{ opacity: 1, x: 0 }}    // move to original position
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >{/* Right Card (automatically lower) */}
                            <Card width={253} height={87}>
                                <p className="text-sm">⏱️{t("banner.onTime")||"On-Time Delivery"}</p>
                            </Card>
                        </motion.div>
                    </div> {/* Center Card */}
                    <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[825px] h-[180px] relative ">
                        {/* Bottom Row */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-between items-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}   // start slightly below
                                animate={{ opacity: 1, y: 0 }}    // move upward to position
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                <Card width={253} height={120}> <p className="text-sm"><RiVerifiedBadgeFill size={25} /></p> <p className="text-sm"> {t("banner.industrial")||"Decade of industrial"} </p>
                                    <p className="text-sm">{t("banner.experience")||"experience"}</p>
                                </Card>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}   // start slightly below
                                animate={{ opacity: 1, y: 0 }}    // move upward to position
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                <Card width={253} height={120}> <p className="text-lg font-semibold">{t("banner.3")||"3+"}</p>
                                    <p className="text-sm">{t("banner.countries")||"Countries"}</p> </Card>
                            </motion.div> </div> {/* Center Raised Card */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
                            <div className="w-[255px] h-[161px] rounded-[16px] bg-gradient-to-br from-[#071C3D] to-[#0B4F8A] text-white flex flex-col items-center justify-center gap-3">
                                <p className="text-lg font-medium">{t("banner.projects")||"16+ Projects"}</p>
                                <AvatarStack />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TABLET */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 max-w-3xl mx-auto mt-12">
                <Card>100% Quality Assured</Card>
                <Card>24/7 Support</Card>
                <Card>On-Time Delivery</Card>
                <Card>9/10 Customers Recommend Us</Card>
                <Card>16+ Projects</Card>
                <Card>Decade of industrial experience</Card>
            </div>
            {/* MOBILE */}
            <div className="grid md:hidden grid-cols-2 gap-4 max-w-sm mx-auto mt-10">
                <Card width="170">100% Quality Assured</Card>
                <Card width="170">24/7 Support</Card>
                <Card width="170">On-Time Delivery</Card>
                <Card width="170">9/10 Customers Recommend Us</Card>
                <Card width="170">16+ Projects</Card>
                <Card width="170">Decade of industrial experience</Card>
            </div>
        </div>
    );
};


/* 🔹 Reusable Card */
const Card = ({ children, width = 253, height = 87, isMobile = false }) => {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,

            }}
            className="
        rounded-[16px]
        bg-gradient-to-br from-[#071C3D] to-[#0B4F8A]
        text-white
        flex flex-col items-center justify-center
        text-center gap-1
      "
        >
            {children}
        </div>
    );
};


export default BannerButtonSection;
