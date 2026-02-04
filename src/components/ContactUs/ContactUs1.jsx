'use client'

import React from 'react'
import Image from 'next/image'
import { MdOutlineMailOutline } from "react-icons/md";

import Contactbg from '../../../public/images/ContactUsImages/Contactbg.jpg'
import { ThemeBtnTag } from '../shared/UI-Elements/Custom-Elements'

const ContactUs1 = () => {
    return (
        <section className="relative w-full min-h-screen flex justify-center items-center px-2 lg:px-10 py-5 lg:py-5 rounded-md!">

            {/* Background Image */}
            <Image
                src={Contactbg}
                alt="Contact background"
                fill
                priority
                className="object-cover rounded-md!"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* LEFT ALIGNED CONTENT */}
            <div className="relative z-10 w-full py-4">

                <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 sm:p-6 md:p-10 text-white">

                    {/* Header */}
                    <h2 className="text-lg lg:text-2xl font-semibold flex items-center gap-2">
                        Let’s Start the Conversation
                        <span className="inline-block w-8 lg:w-12 h-0.5 bg-[#55B233]" />
                    </h2>

                    <p className="mt-2 text-xs lg:text-sm text-gray-200">
                        Share your requirement and our team will connect with you
                    </p>

                    {/* FORM */}
                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                        {/* Name */}
                        <div>
                            <label className="text-sm mb-1 block">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                className="w-full h-10 rounded-md bg-white/20 border border-white/30 px-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#55B233]"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-sm mb-1 block">Email Id</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full h-10 rounded-md bg-white/20 border border-white/30 px-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#55B233]"
                            />
                        </div>

                        {/* Whatsapp */}
                        <div>
                            <label className="text-sm mb-1 block">Whatsapp Number</label>
                            <div className="flex">
                                <span className="flex items-center px-3 bg-white/20 border border-white/30 rounded-l-md text-sm">
                                    +91
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter Phone number"
                                    className="w-full h-10 rounded-r-md bg-white/20 border border-white/30 px-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#55B233]"
                                />
                            </div>
                        </div>

                        {/* Preferred Date */}
                        <div>
                            <label className="text-sm mb-1 block">Preferred Contact Date</label>
                            <input
                                type="date"
                                className="w-full h-10 rounded-md bg-white/20 border border-white/30 px-3 text-sm text-white focus:outline-none focus:border-[#55B233] uppercase"
                            />
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2">
                            <label className="text-sm mb-1 block">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Enter Message"
                                className="w-full rounded-md bg-white/20 border border-white/30 px-3 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-[#55B233]"
                            />
                        </div>

                        {/* SEND BUTTON */}
                        <div className="md:col-span-2 mt-2">
                            <ThemeBtnTag
                                BtnText="Send"
                                styles="w-full h-[42px] bg-[#55B233] text-white !font-medium !rounded-md hover:bg-[#43a047] border-0"
                            />
                        </div>

                    </form>

                    {/* FOOTER CONTACTS */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200">

                        {/* FIRST ITEM WITH ICON */}
                        <div className="flex items-center gap-2">
                            <span className="relative h-8 w-8 flex items-center justify-center">

                                {/* Diffused glow */}
                                <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-20"></span>

                                {/* Softened circle */}
                                <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]"></span>

                                {/* Icon */}
                                <span className="relative z-10 text-white text-sm">
                                    <MdOutlineMailOutline size={20}/>
                                </span>
                            </span>

                            <span>Sales@nowit.com</span>
                        </div>

                        <span className="opacity-60">|</span>

                        {/* TEXT ONLY */}
                        <span>Support@nowit.com</span>

                        <span className="opacity-60">|</span>

                        {/* TEXT ONLY */}
                        <span>careers@nowit.com</span>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs1
