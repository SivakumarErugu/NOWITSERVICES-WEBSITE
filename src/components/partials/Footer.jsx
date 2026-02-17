import React from "react";
import Image from "next/image";
import nowitImg from "../../../public/nowit.png";
import {
    socialMedia,
    quickLinks,
    ServicesLinks,
    LegalLinks,
} from "./utils";
import { ThemeBottomBorder2 } from "../shared/UI-Elements/Custom-Elements";
import Link from "next/link";

/* ---------------- LOGO SECTION ---------------- */

const LogoSection = () => {
    return (
        <section className="flex flex-col gap-6 w-full  px-2 lg:px-4">
            <Image src={nowitImg} alt="now it" className="w-36 h-auto" />

            <p className="font-light text-sm sm:text-md text-white leading-6 tracking-wide ">
                A digital transformation partner delivering cloud-first, AI-driven
                solutions that enable scalable growth and operational excellence.
            </p>

            <div className="flex gap-5">
                {socialMedia.map((each, i) => (
                    <a
                        href={each?.link}
                        target="_blank"
                        key={i}
                        className="relative h-10 w-10 flex items-center justify-center cursor-pointer"
                    >
                        {/* Diffused glow */}
                        <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-10"></span>

                        {/* Softened circle */}
                        <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]"></span>

                        {/* Icon */}
                        <span className="relative z-10 text-white">
                            {each.icon}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

/* ---------------- QUICK LINKS ---------------- */

const QuickLinksSec = () => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="relative w-fit">
                <h4 className="text-lg font-bold text-white">Quick Link</h4>
                <ThemeBottomBorder2 width="60%" />
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-2 ">
                {quickLinks.map((each, i) => (
                    <Link
                        href={each?.link}
                        key={i}
                        className="font-extralight text-sm text-white/75 max-md:text-center"
                    >
                        {each.label}
                    </Link>
                ))}
            </ul>

        </section>
    );
};

/* ---------------- SERVICES ---------------- */

const BusinessSec = () => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="relative w-fit">
                <h4 className="text-lg font-bold text-white">Business Partnerships</h4>
                <ThemeBottomBorder2 width="60%" />
            </div>

            <ul className="flex flex-col gap-y-1">
                {ServicesLinks.map((each, i) => (
                    <Link href={each?.link} key={i} className="font-extralight text-sm text-white/75">
                        {each.label}
                    </Link>
                ))}
            </ul>
        </section>
    );
};

/* ---------------- LEGAL ---------------- */

const LegalSec = () => {
    return (
        <section className="flex flex-col gap-y-5">
            <div className="relative w-fit">
                <h4 className="text-lg font-bold text-white">Legal & Compliance</h4>
                <ThemeBottomBorder2 width="40%" />
            </div>

            <ul className="flex flex-col gap-y-1">
                {LegalLinks.map((each, i) => (
                    <Link href={each?.link} key={i} className="font-extralight text-sm text-white/75">
                        {each.label}
                    </Link>
                ))}
            </ul>
        </section>
    );
};

/* ---------------- FOOTER ---------------- */

const Footer = () => {
    return (
        <footer className="bg-[#04192D] w-full pt-14 pb-20 px-6 md:px-10 xl:px-20 text-white relative">
            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-10">

                {/* LEFT */}
                <div className="w-full lg:w-4/12">
                    <LogoSection />
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <QuickLinksSec />
                    <BusinessSec />
                    <LegalSec />
                </div>

            </div>

            {/* COPYRIGHT */}
            <p className="absolute bottom-5 left-0 right-0 text-center text-xs text-white/50">
                © 2026 Nowit Services. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
