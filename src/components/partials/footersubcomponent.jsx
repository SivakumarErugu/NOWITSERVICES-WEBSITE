'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import nowitImg from "../../../public/nowit.png";
import Link from "next/link";
import { ThemeBottomBorder2 } from "../shared/UI-Elements/Custom-Elements";
import { getFooterTranslations } from "./translatedfunctions";
import {
    quickLinks,
    bussinessPartnerships,
    LegalLinks
} from "./utils";
import { socialMedia } from "./utils";

const Footer = () => {
    const [locale, setLocale] = useState("en");

    useEffect(() => {
        const stored = typeof window !== "undefined"
            ? localStorage.getItem("nowit_locale")
            : null;

        if (stored) setLocale(stored);
    }, []);

    const {
        quickLinkText,
        businessSecText,
        legalText,
        rightText,
    } = getFooterTranslations(locale);

    const quickLinkOptions = quickLinks[locale] || quickLinks.en;
    const businessOptions = bussinessPartnerships[locale] || bussinessPartnerships.en;
    const legalOptions = LegalLinks[locale] || LegalLinks.en;

    return (
        <div className="relative">
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-10">

                {/* LOGO SECTION */}
                <section className="w-full lg:w-4/12 flex flex-col gap-6 px-2 lg:px-4">
                    <Image src={nowitImg} alt="now it" className="w-36 h-auto" />

                    <p className="text-sm text-white/80">
                        {locale === "hi"
                            ? "एक डिजिटल ट्रांसफॉर्मेशन पार्टनर..."
                            : "A digital transformation partner delivering cloud-first, AI-driven solutions."}
                    </p>

                    <div className="flex gap-5">
                        {socialMedia.map((each, i) => (
                            <a key={i} href={each.link} target="_blank">
                                {each.icon}
                            </a>
                        ))}
                    </div>
                </section>

                {/* RIGHT SECTIONS */}
                <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

                    {/* QUICK LINKS */}
                    <section>
                        <h4 className="text-lg font-bold text-white">{quickLinkText}</h4>
                        <ThemeBottomBorder2 width="60%" />
                        <ul className="mt-4 space-y-2">
                            {quickLinkOptions?.map((item, i) => (
                                <Link key={i} href={item.link} className="text-white/70 text-sm">
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </section>

                    {/* BUSINESS */}
                    <section>
                        <h4 className="text-lg font-bold text-white">{businessSecText}</h4>
                        <ThemeBottomBorder2 width="60%" />
                        <ul className="mt-4 space-y-2">
                            {businessOptions?.map((item, i) => (
                                <Link key={i} href={item.link} className="text-white/70 text-sm">
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </section>

                    {/* LEGAL */}
                    <section>
                        <h4 className="text-lg font-bold text-white">{legalText}</h4>
                        <ThemeBottomBorder2 width="40%" />
                        <ul className="mt-4 space-y-2">
                            {legalOptions?.map((item, i) => (
                                <Link key={i} href={item.link} className="text-white/70 text-sm">
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>

            <p className="absolute bottom-5 left-0 right-0 text-center text-xs text-white/50">
                {rightText}
            </p>
        </div>
    );
};

export default Footer;