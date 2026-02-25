import React from "react";
import Footersubcomponent from "./footersubcomponent";  
/* ---------------- LOGO SECTION ---------------- */


/* ---------------- FOOTER ---------------- */

const Footer = () => {
    return (
        <div>
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
           
        </div>
    );
};

export default Footer;
