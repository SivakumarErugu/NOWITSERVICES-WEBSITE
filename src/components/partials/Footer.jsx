import React from 'react'
import nowitImg from "../../../public/nowit.png";
import { NowitContext } from '../../store/NowitContext';
import { ThemeBtnTag, ThemeBottomBorder, ThemeBottomBorder2 } from '../shared/UI-Elements/Custom-Elements';

import Image from 'next/image';
import { socialMedia, quickLinks, ServicesLinks, LegalLinks } from './utils';

const LogoSection = () => {
    return (
        <section className='flex w-5/6 flex-col gap-6 px-5'>
            <section>
                <Image src={nowitImg} alt="now it" className="w-36 h-10.5" />
            </section>
            <p className='font-light text-md text-white/80 leading-6 tracking-wide! ' >
                A digital transformation partner delivering cloud-first, AI-driven solutions that enable scalable growth and operational excellence
            </p>
            <div className='flex flex-wrap gap-5'>
                {socialMedia?.map((each, i) =>
                    <span key={i} className="relative h-10 w-10 flex items-center justify-center rounded-full">
                        {/* Glow layer */}
                        <span className="absolute -inset-3 rounded-full bg-green-700 blur-2xl opacity-30"></span>

                        {/* Icon container */}
                        <span className="relative h-8 w-8 flex items-center justify-center rounded-full bg-green-600">
                            {each?.icon}
                        </span>
                    </span>
                )}

            </div>
        </section>
    )
}

const QuickLinksSec = () => {
    return (
        <section className='w-full flex flex-col gap-y-5'>
            <div className='relative w-fit'>
                <h4 className='text-lg font-bold'>Quick Link</h4>
                <ThemeBottomBorder2 width='60%' />
            </div>
            <ul className='flex flex-col gap-y-1'>
                {quickLinks?.map((each, i) =>
                    <li key={i} className='font-extralight text-sm text-white/70'>
                        {each.label}
                    </li>
                )}
            </ul>
        </section>
    )
}

const ServicesSec = () => {
    return (
        <section className='w-full flex flex-col gap-y-5'>
            <div className='relative w-fit'>
                <h4 className='text-lg font-bold'>Services</h4>
                <ThemeBottomBorder2 width='60%' />
            </div>
            <ul className='flex flex-col gap-y-1'>
                {ServicesLinks?.map((each, i) =>
                    <li key={i} className='font-extralight text-sm text-white/80'>
                        {each.label}
                    </li>
                )}
            </ul>
        </section>
    )
}

const LegalSec = () => {
    return (
        <section className='w-full flex flex-col gap-y-5 '>
            <div className='relative w-fit '>
                <h4 className='text-lg font-bold'>Legal & Compliance</h4>
                <ThemeBottomBorder2 width='40%' />
            </div>
            <ul className='flex flex-col gap-y-1'>
                {LegalLinks?.map((each, i) =>
                    <li key={i} className='font-extralight text-sm text-white/80'>
                        {each.label}
                    </li>
                )}
            </ul>
        </section>
    )
}

const Footer = () => {
    return (
        <div className='bg-[#04192D] w-full h-95 px-18 pt-18 flex flex-col items-center relative'>
            <div className='w-full flex gap-x-5 '>
                <div className='w-4/12'>
                    {/* icon + description */}
                    <LogoSection />
                </div>

                <div className='w-7/12 grid grid-cols-3 gap-x-10 '>
                    <QuickLinksSec />
                    <ServicesSec />
                    <LegalSec />
                </div>
            </div>

            <p
                className="absolute bottom-7"
                style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    fontSize: "14px",
                }}
            >
                © 2026 Nowit Services. All rights reserved.
            </p>

        </div>
    )
}

export default Footer

