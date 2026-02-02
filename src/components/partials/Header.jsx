'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { headerOptions } from "./utils"
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ThemeBtnTag, ThemeBottomBorder } from '../shared/UI-Elements/Custom-Elements';
import nowitImg from "../../../public/nowit.png";
import { NowitContext } from '../../store/NowitContext';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Header = () => {
    const { activeTab, setActiveTab } = useContext(NowitContext);

    const [openMenu, setOpenMenu] = useState(null);          // desktop submenu
    const [arrowLeft, setArrowLeft] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);    // mobile nav
    const [mobileSub, setMobileSub] = useState(null);       // mobile accordion

    const navRefs = useRef({});
    const menuWrapperRef = useRef(null);

    const router = useRouter();

    /* ---------------- DESKTOP HANDLER ---------------- */
    const handleMenuClick = (item) => {
        const hasOptions = item.options.length > 0;

        if (!hasOptions) {
            setOpenMenu(null);
            setActiveTab(item.name);
            router.push(item.link);
            return;
        }

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

    const handleSubMenuItemClick = (link, itemName) => {
        setOpenMenu(null);
        setActiveTab(itemName);
        router.push(link);
    };

    /* ---------------- MOBILE HANDLER ---------------- */
    const handleMobileNav = (item) => {
        if (item.options.length === 0) {
            setMobileOpen(false);
            setActiveTab(item.name);
            router.push(item.link);
            return;
        }

        setMobileSub(prev => prev === item.name ? null : item.name);
    };

    /* ---------------- OUTSIDE CLICK ---------------- */
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
        <header className="relative w-full bg-linear-to-b from-[#E5EFF8] to-white z-50">
            {/* ================= TOP BAR ================= */}
            <div className="flex items-center justify-between px-4 lg:px-10 h-16">

                {/* LOGO */}
                <Image src={nowitImg} alt="now it" className="w-28 h-8" />

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex gap-8">
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
                                                className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
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

                {/* DESKTOP CONTACT */}
                <div className="hidden lg:block">
                    <ThemeBtnTag styles="w-[150px] h-[32px]">
                        Contact Us
                    </ThemeBtnTag>
                </div>

                {/* MOBILE MENU ICON */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setMobileOpen(true)}
                >
                    <HiOutlineMenuAlt3 size={30} />
                </button>
            </div>

            {/* ================= DESKTOP ARROW ================= */}
            {openMenu && (
                <div className="fixed top-16 z-50" style={{ left: arrowLeft }}>
                    <div className="-translate-x-1/2">
                        <div className="w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                    </div>
                </div>
            )}

            {/* ================= DESKTOP SUBMENU ================= */}
            {openMenu && (
                <div
                    ref={menuWrapperRef}
                    className="fixed inset-x-0 top-18 z-40 hidden lg:flex justify-center"
                >
                    <div className="bg-white border border-gray-200 rounded-xl shadow-md px-12 py-8 w-275 max-w-[90vw]">
                        <div className="grid grid-cols-4 gap-x-14 gap-y-10">
                            {headerOptions
                                .find(item => item.name === openMenu)
                                ?.options.map((opt, idx) => (
                                    <a
                                        key={idx}
                                        onClick={() => handleSubMenuItemClick(opt.link, openMenu)}
                                        className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-[#0A66C2]"
                                    >
                                        {opt.icon && <span className="text-lg">{opt.icon}</span>}
                                        <span className="text-sm font-medium">{opt.label}</span>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MOBILE DRAWER ================= */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-white lg:hidden">
                    <div className="flex items-center justify-between px-6 h-16 border-b">
                        <Image src={nowitImg} alt="now it" className="w-22 md:w-24" />
                        <button onClick={() => setMobileOpen(false)} className="text-xl">
                            <HiX />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        {headerOptions.map((item, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => handleMobileNav(item)}
                                    className="w-full flex justify-between items-center text-left text-md font-medium"
                                >
                                    {item.label}
                                    {item.options.length > 0 && (
                                        <IoIosArrowDown
                                            className={`transition-transform ${mobileSub === item.name ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </button>

                                {mobileSub === item.name && (
                                    <div className="mt-3 pl-4 md:pl-15 space-y-3">
                                        {item.options.map((opt, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    router.push(opt.link);
                                                }}
                                                className="text-gray-600 cursor-pointer text-sm"
                                            >
                                                {opt.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <ThemeBtnTag styles="w-full h-[40px] mt-6">
                            Contact Us
                        </ThemeBtnTag>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
