import AvatarStack from "@/components/shared/UI-Elements/AvatarStack";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";



const BannerButtonSection = () => {
    return (
        <div className="w-full">

            {/* DESKTOP */}
            <div className="hidden lg:block relative w-[1070px] h-[332px] mx-auto">
                {/* your existing absolute-position desktop code stays EXACT */}
                <div className="relative w-[1070px] h-[332px] mx-auto mt-30"> {/* Top Row */} <div className="absolute top-0 left-0 w-full flex justify-between items-end"> {/* Left Card */} <Card width={253} height={87}> <p className="inter-text text-[16px] font-medium">9/10 Customers</p> <p className="text-sm">Recommend Us</p> </Card> {/* Middle Group (raised) */} <div className="flex gap-4 -translate-y-10"> <Card width={206} height={99}> <p className="text-2xl font-semibold">100%</p> <p className="text-sm">Quality Assured</p> </Card> <Card width={206} height={99}> <p className="text-2xl font-semibold">24/7</p> <p className="text-sm">Support</p> </Card> </div> {/* Right Card (automatically lower) */} <Card width={253} height={87}> <p className="text-sm">⏱️ On-Time Delivery</p> </Card> </div> {/* Center Card */} <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[825px] h-[180px] relative "> {/* Bottom Row */} <div className="absolute bottom-0 left-0 w-full flex justify-between items-end"> <Card width={253} height={120}> <p className="text-sm"><RiVerifiedBadgeFill size={25} /></p> <p className="text-sm"> Decade of industrial</p> <p className="text-sm">experience</p> </Card> <Card width={253} height={120}> <p className="text-lg font-semibold">3+</p> <p className="text-sm">Countries</p> </Card> </div> {/* Center Raised Card */} <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"> <div className="w-[255px] h-[161px] rounded-[16px] bg-gradient-to-br from-[#071C3D] to-[#0B4F8A] text-white flex flex-col items-center justify-center gap-3"> <p className="text-lg font-medium">16+ Projects</p> {/* Avatar Stack */} <AvatarStack /> </div> </div> </div> </div>
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
const Card = ({ children, width = 253, height = 87,isMobile=false }) => {
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
