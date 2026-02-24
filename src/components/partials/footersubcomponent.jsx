'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import nowitImg from "../../../public/nowit.png";
import { ThemeBottomBorder2 } from "../shared/UI-Elements/Custom-Elements";
import { useNowit } from "@/store/useNowit";
import Loading from "@/app/loading";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


/* ---------------- LOGO SECTION ---------------- */


const LogoSection = ({ footer }) => {

  const getIcon = (name) => {
    if (name === "linkedin") return <FaLinkedin />;
    if (name === "twitter") return <FaTwitter />;
    if (name === "instagram") return <FaInstagram />;
    if (name === "youtube") return <FaYoutube />;
    if (name === 'facebook') return <BiLogoFacebook />;
    return null;
  };

  return (
    <section className="flex flex-col gap-6 w-full px-2 lg:px-4">
      <Image src={nowitImg} alt="now it" className="w-36 h-auto" />

      <p className="font-light text-sm sm:text-md text-white leading-6 tracking-wide">
        {footer?.description}
      </p>

      <div className="flex gap-5">
        {(footer?.socialMedia || []).map((each, i) => (
          <a
            href={each.link}
            target="_blank"
            key={i}
            className="relative h-10 w-10 flex items-center justify-center cursor-pointer"
          >
            <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-10"></span>
            <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]"></span>

            <span className="relative z-10 text-white text-lg">
              {getIcon(each.name)}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

/* ---------------- QUICK LINKS ---------------- */

const QuickLinksSec = ({ footer }) => {
  const data = footer?.quickLinks;
  console.log(data, "dat here..")
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-5">
      <div className="relative w-fit">
        <h4 className="text-lg font-bold text-white">{data.title}</h4>
        <ThemeBottomBorder2 width="60%" />
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-2">
        {data.items.map((each, i) => (
          <Link
            href={each.link}
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

const BusinessSec = ({ footer }) => {
  const data = footer?.services;
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-5">
      <div className="relative w-fit">
        <h4 className="text-lg font-bold text-white">{data.title}</h4>
        <ThemeBottomBorder2 width="60%" />
      </div>

      <ul className="flex flex-col gap-y-1">
        {data.items.map((each, i) => (
          <Link
            href={each.link}
            key={i}
            className="font-extralight text-sm text-white/75"
          >
            {each.label}
          </Link>
        ))}
      </ul>
    </section>
  );
};

/* ---------------- LEGAL ---------------- */

const LegalSec = ({ footer }) => {
  const data = footer?.legal;
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-5">
      <div className="relative w-fit">
        <h4 className="text-lg font-bold text-white">{data.title}</h4>
        <ThemeBottomBorder2 width="40%" />
      </div>

      <ul className="flex flex-col gap-y-1">
        {data.items.map((each, i) => (
          <Link
            href={each.link}
            key={i}
            className="font-extralight text-sm text-white/75"
          >
            {each.label}
          </Link>
        ))}
      </ul>
    </section>
  );
};

/* ---------------- FOOTER ---------------- */

const FooterSubComponent = () => {
  const { tc, commonReady } = useNowit();

  if (!commonReady) return <Loading />;

  const footer = tc("footer"); // ✅ READ ONCE

  if (!footer) return null;

  return (
    <footer className="bg-[#04192D] w-full pt-14 pb-20 px-6 md:px-10 2xl:px-25 text-white relative">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-10">
        <div className="w-full lg:w-4/12">
          <LogoSection footer={footer} />
        </div>

        <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <QuickLinksSec footer={footer} />
          <BusinessSec footer={footer} />
          <LegalSec footer={footer} />
        </div>
      </div>

      <p className="absolute bottom-5 left-0 right-0 text-center text-xs text-white/50">
        {footer.copyright}
      </p>
    </footer>
  );
};

export default FooterSubComponent;