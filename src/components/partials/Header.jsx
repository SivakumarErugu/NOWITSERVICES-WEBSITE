'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { headerOptions } from "./utils"
import { IoIosArrowDown } from "react-icons/io";
import { ThemeBtnTag, ThemeBottomBorder } from '../shared/UI-Elements/Custom-Elements';
import nowitImg from "../../../public/nowit.png";
import { NowitContext } from '../../store/NowitContext';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Header = () => {
    const { activeTab, setActiveTab } = useContext(NowitContext);

    const [openMenu, setOpenMenu] = useState(null);
    const [arrowLeft, setArrowLeft] = useState(0);

    const navRefs = useRef({});
    const menuWrapperRef = useRef(null);

    const router = useRouter();

    // Toggle menu + calculate arrow position OR navigate
    const handleMenuClick = (item) => {
        const hasOptions = item.options.length > 0;

        //  Navigate if no submenu
        if (!hasOptions) {
            setOpenMenu(null);
            setActiveTab(item.name);
            router.push(item.link);
            return;
        }

        // Toggle submenu
        if (openMenu === item.name) {
            setOpenMenu(null);
            return;
        }

        const btn = navRefs.current[item.name];
        if (btn) {
            const rect = btn.getBoundingClientRect();
            setArrowLeft(rect.left + rect.width / 2);
        }

        setOpenMenu(item.name);
    };

    const handleSubMenuItemClick = (link,itemName) => {
        setOpenMenu(null);
        setActiveTab(itemName)
        router.push(link);
    }

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuWrapperRef.current &&
                !menuWrapperRef.current.contains(e.target)
            ) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full bg-linear-to-r from-[#E5EFF8] to-white">
            <div className="flex items-center justify-between px-10 h-[72px]">

                {/* LOGO */}
                <section>
                    <Image src={nowitImg} alt="now it" className="w-36 h-10.5" />
                </section>

                {/* NAV */}
                <ul className="flex gap-8">
                    {headerOptions.map((each, i) => {
                        const hasOptions = each.options.length > 0;
                        const isOpen = openMenu === each.name;

                        return (
                            <li key={i}>
                                <button
                                    ref={(el) => (navRefs.current[each.name] = el)}
                                    type="button"
                                    onClick={() => handleMenuClick(each)}
                                    className="relative inline-flex flex-col items-center text-black"
                                >
                                    <span className="flex items-center gap-1">
                                        {each.label}
                                        {hasOptions && (
                                            <IoIosArrowDown
                                                className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </span>

                                    {activeTab === each.name && (
                                        <ThemeBottomBorder width="70%" bottom="0px" left="0px" />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* CONTACT */}
                <section>
                    <ThemeBtnTag styles="w-[168px] h-[32px]">
                        Contact Us
                    </ThemeBtnTag>
                </section>
            </div>

            {/* ARROW (ALIGNED TO NAV ITEM) */}
            {openMenu && (
                <div
                    className="fixed top-[64px] z-50"
                    style={{ left: arrowLeft }}
                >
                    <div className="-translate-x-1/2">
                        <div className="w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                    </div>
                </div>
            )}

            {/* CENTERED SUB MENU */}
            {openMenu && (
                <div
                    ref={menuWrapperRef}
                    className="fixed inset-x-0 top-[72px] z-40 flex justify-center"
                >
                    <div
                        className="
                            bg-white
                            border border-gray-200
                            rounded-xl
                            shadow-md
                            px-12 py-8
                            w-[1100px]
                            max-w-[90vw]
                        "
                    >
                        <div className="grid grid-cols-4 gap-x-14 gap-y-10">
                            {headerOptions
                                .find(item => item.name === openMenu)
                                ?.options.map((opt, idx) => (
                                    <a
                                        key={idx}
                                        href={opt.link}
                                        className="flex items-center gap-3 text-gray-700 hover:text-[#0A66C2] hover:scale-101 transition-transform"
                                        onClick={() => handleSubMenuItemClick(opt.link,item.name)}
                                    >
                                        {opt.icon && <span className="text-lg">{opt.icon}</span>}
                                        <span className="text-sm font-medium">
                                            {opt.label}
                                        </span>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
