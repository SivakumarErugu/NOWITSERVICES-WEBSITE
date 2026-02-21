import React from "react";
import Footersubcomponent from "./footersubcomponent";  
/* ---------------- LOGO SECTION ---------------- */


/* ---------------- FOOTER ---------------- */

const Footer = () => {
    return (
        <footer className="bg-[#04192D] w-full pt-14 pb-20 px-6 md:px-10 2xl:px-25 text-white relative">
            {/* MAIN CONTENT */}
            {/* <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-10">

                <div className="w-full lg:w-4/12">
                    <LogoSection />
                </div>

                <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <QuickLinksSec />
                    <BusinessSec />
                    <LegalSec />
                </div>

            </div> */}
            <Footersubcomponent/>

            {/* COPYRIGHT */}
           
        </footer>
    );
};

export default Footer;
