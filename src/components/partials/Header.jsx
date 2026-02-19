'use client';

import React, { useEffect, useRef, useState, useTransition } from 'react';
import { headerOptions } from "./utils";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { ThemeBtnTag, ThemeBottomBorder } from '../shared/UI-Elements/Custom-Elements';
import nowitImg from "../../../public/nowit.png";
import { useNowit } from '@/store/useNowit';
import Image from 'next/image';
import { useRouter, usePathname } from "next/navigation";
import Link from 'next/link';
import LanguageSwitcher from './languageSelection';

const Header = () => {

    const { setActiveService,setActiveTab } = useNowit();

    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const closeTimer = useRef(null);
    const [openMenu, setOpenMenu] = useState(null);
    const [arrowLeft, setArrowLeft] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSub, setMobileSub] = useState(null);

    const navRefs = useRef({});
    const menuWrapperRef = useRef(null);

    /* ---------------- ACTIVE TAB FROM ROUTE ---------------- */
    const activeTab = React.useMemo(() => {
        if (pathname === "/") return "home";
        if (pathname.startsWith("/aboutus")) return "about us";
        if (pathname.startsWith("/services")) return "services";
        if (pathname.startsWith("/products")) return "products";
        if (pathname.startsWith("/blog")) return "blog";
        if (pathname.startsWith("/careers")) return "careers";
        if (pathname.startsWith("/contactUs")) return "contact";
        return "";
    }, [pathname]);

    // Sync route → context
    useEffect(() => {
        setActiveTab(activeTab);
    }, [activeTab, setActiveTab]);
    /* ---------------- PREFETCH ROUTES ---------------- */
    useEffect(() => {
        headerOptions.forEach(item => {
            if (item.link) router.prefetch(item.link);
        });
    }, [router]);

    /* ---------------- SAFE NAVIGATION ---------------- */
    const navigate = (path) => {
        startTransition(() => {
            router.push(path);
        });
    };

    const clearCloseTimer = () => {
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const startCloseTimer = () => {
        clearCloseTimer();
        closeTimer.current = setTimeout(() => {
            setOpenMenu(null);
        }, 800);
    };

    /* ---------------- DESKTOP HANDLER ---------------- */
    const handleMenuClick = (item) => {
        const hasOptions = item.options.length > 0;

        if (!hasOptions) {
            setOpenMenu(null);
            navigate(item.link);
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

    const handleSubMenuItemClick = (serviceName) => {
        setOpenMenu(null);
        setActiveService(serviceName);
        navigate('/services');
    };

    /* ---------------- MOBILE HANDLER ---------------- */
    const handleMobileNav = (item) => {
        if (item.options.length === 0) {
            setMobileOpen(false);
            navigate(item.link);
            return;
        }

        setMobileSub(prev => (prev === item.name ? null : item.name));
    };

    return (
        <header className="relative w-full bg-linear-to-b from-[#E5EFF8] to-white z-50">

            {/* ================= TOP BAR ================= */}
            <div className="flex items-center justify-between px-4 lg:px-10 h-16">

                {/* LOGO */}
                <Link href="/">
                    <Image src={nowitImg} alt="now it" className="w-25 md:w-30 md:h-10" />
                </Link>

                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex gap-8">
                    {headerOptions.map((each, i) => {
                        const hasOptions = each.options.length > 0;

                        return (
                            <li
                                key={i}
                                className="relative"
                                onMouseEnter={() => {
                                    if (!hasOptions) return;
                                    clearCloseTimer();
                                    closeTimer.current = setTimeout(() => {
                                        setOpenMenu(each.name);
                                    }, 400);
                                }}
                                onMouseLeave={() => {
                                    if (hasOptions) startCloseTimer();
                                }}
                            >
                                <button
                                    suppressHydrationWarning
                                    ref={(el) => (navRefs.current[each.name] = el)}
                                    type="button"
                                    onClick={() => handleMenuClick(each)}
                                    className="relative inline-flex flex-col items-center text-black font-medium"
                                >
                                    <span className="flex items-center gap-1 cursor-pointer">
                                        {each.label}

                                        {activeTab === each.name && (
                                            <ThemeBottomBorder
                                                width="80%"
                                                bottom="0px"
                                                left="0px"
                                            />
                                        )}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>


                <div className='w-[76px] h-[20px]'>
                    <LanguageSwitcher />
                </div>


                {/* DESKTOP CONTACT */}
                <div className="hidden lg:block">
                    <ThemeBtnTag
                        styles="w-[150px] h-[32px] !font-medium !rounded-md"
                        onClick={() => router.push('/contactUs')}
                    >
                        Contact Us
                    </ThemeBtnTag>
                </div>

                {/* MOBILE MENU ICON */}
                <button
                    className="lg:hidden text-3xl text-gray-900"
                    onClick={() => setMobileOpen(true)}
                >
                    <HiOutlineMenuAlt3 size={30} />
                </button>
            </div>

            {/* ================= DESKTOP ARROW ================= */}
            {openMenu && (
                <div className="fixed top-14 z-50" style={{ left: arrowLeft }}>
                    <div className="-translate-x-1/2">
                        <div className="w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                    </div>
                </div>
            )}

            {/* ================= DESKTOP SUBMENU ================= */}
            {openMenu && (
                <div
                    ref={menuWrapperRef}
                    className="fixed inset-x-0 top-16 z-40 hidden lg:flex justify-center animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={startCloseTimer}
                >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-xl px-12 py-8 w-[90%] xl:w-[80%] max-w-7xl">
                        <div className="grid grid-cols-4 gap-x-14 gap-y-10">
                            {headerOptions
                                .find(item => item.name === openMenu)
                                ?.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSubMenuItemClick(opt.name)}
                                        className="flex items-center gap-3 text-left text-gray-700 hover:text-[#0A66C2] cursor-pointer"
                                    >
                                        {opt.icon && <span className="text-lg">{opt.icon}</span>}
                                        <span className="text-sm font-medium">{opt.label}</span>
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ================= MOBILE DRAWER ================= */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 bg-linear-to-b from-[#E5EFF8] to-white lg:hidden">
                    <div className="flex items-center justify-between px-4 h-16 border-b">
                        <Image src={nowitImg} alt="now it" className="w-25 md:w-30" />
                        <button onClick={() => setMobileOpen(false)} className="text-xl">
                            <HiX className="text-gray-900" />
                        </button>
                    </div>

                    <div className="p-6 px-8 space-y-4">
                        {headerOptions.map((item, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => handleMobileNav(item)}
                                    className={`w-full flex justify-between items-center text-md font-medium
                                        ${activeTab === item.name ? "text-[#0A66C2]" : "text-black"}`}
                                >
                                    {item.label}
                                    {item.options.length > 0 && (
                                        <IoIosArrowDown
                                            className={`transition-transform ${mobileSub === item.name ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </button>

                                {mobileSub === item.name && (
                                    <div className="mt-3 pl-6 space-y-3">
                                        {item.options.map((opt, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setMobileOpen(false);
                                                    setActiveService(opt.name);
                                                    router.push('/services');
                                                }}
                                                className="cursor-pointer text-sm text-gray-600 hover:text-[#0A66C2]"
                                            >
                                                {opt.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <ThemeBtnTag
                            styles="w-full h-[40px] mt-6"
                            onClick={() => {
                                setMobileOpen(false);
                                router.push('/contactUs');
                            }}
                        >
                            Contact Us
                        </ThemeBtnTag>
                    </div>
                </div>
            )}

            {/* GLOBAL LOADER */}
            {isPending && (
                <div className="fixed inset-0 z-999 flex items-center justify-center bg-white/40 backdrop-blur-sm">
                    <div className="w-16 h-16 border-3 border-gray-400 border-t-blue-600 rounded-full animate-spin" />
                </div>
            )}

        </header>
    );
};

export default Header;
