'use client';

import React from "react";
import Image from "next/image";

/* Product Images (USED by next/image → import is correct) */
import Product1 from "../../../public/images/ProductImages/Product1.jpg";
import Product2 from "../../../public/images/ProductImages/Product2.jpg";
import Product3 from "../../../public/images/ProductImages/Product3.jpg";
import Product4 from "../../../public/images/ProductImages/Product4.png";
import Product5 from "../../../public/images/ProductImages/Product5.jpg";

const Products1 = () => {
    return (
        <section
            className="
        relative w-full overflow-hidden
        px-4 pt-10 pb-10 md:px-12
        mb-10
        lg:mb-15
        bg-no-repeat bg-cover bg-center
      "
            style={{
                backgroundImage: "url('/images/ProductImages/Productbg.png')",
            }}
        >
            {/* OPTIONAL OVERLAY (recommended for readability) */}
            <div className="absolute inset-0 bg-white/35"></div>

            {/* CONTENT */}
            <div className="relative z-10">
                {/* TEXT */}
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-medium text-[#0b2b4b] leading-snug">
                        Products for Every Stage of <br />
                        <span className="text-[#1e6fd9]">Life and Business</span>
                    </h2>

                    <p className="mt-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto inter-text">
                        Our product ecosystem is designed to support individuals and enterprises
                        through every phase of their journey. From personal growth to enterprise-scale
                        operations, our products are built on a unified platform that adapts, scales,
                        and evolves with your needs.
                    </p>
                </div>

                {/* INTERACTIVE VISUAL AREA */}
                <div className="relative max-w-5xl mx-auto flex flex-col items-center">
                 <div className="absolute top-5 z-20">
  <button className="animate-slow-bounce bg-[#63b636] text-white px-8 py-1.5 lg:py-2.5 rounded-md text-sm font-medium shadow-lg hover:bg-[#529a2d] transition-transform">
    Explore Now
  </button>
</div>



                    {/* PRODUCT CARDS — Mobile & Tablet */}
                    <div className="lg:hidden relative z-30 flex items-end justify-center gap-4 pt-20">

                        <Image
                            src={Product2}
                            alt="Product 2"
                            className="
      w-24 h-36
      sm:w-28 sm:h-36
      rounded-2xl object-cover
      shadow-md
    "
                        />

                        <Image
                            src={Product3}
                            alt="Product 3"
                            className="
      w-28 h-42
      sm:w-32 sm:h-46
      rounded-3xl object-cover
      shadow-xl
    "
                        />

                        <Image
                            src={Product4}
                            alt="Product 4"
                            className="
     w-24 h-36
      sm:w-28 sm:h-36
      rounded-2xl object-cover
      shadow-md
    "
                        />

                    </div>


                    {/* PRODUCT CARDS — Desktop */}
                    <div className="hidden lg:flex relative z-30 items-end justify-center gap-6 pt-20">

                        <Image
                            src={Product1}
                            alt="Product 1"
                            className="
      w-36 h-52
      rounded-2xl object-cover
      shadow-md
    "
                        />

                        <Image
                            src={Product2}
                            alt="Product 2"
                            className="
      w-48 h-72
      rounded-2xl object-cover
      shadow-md
    "
                        />

                        {/* CENTER FEATURED */}
                        <div className=" rounded-[36px] shadow-2xl z-40">
                            <Image
                                src={Product3}
                                alt="Product 3"
                                className="
        w-64 h-80
        rounded-[28px]
        object-cover
      "
                            />
                        </div>

                        <Image
                            src={Product4}
                            alt="Product 4"
                            className="
      w-48 h-72
      rounded-2xl object-cover
      shadow-md
    "
                        />

                        <Image
                            src={Product5}
                            alt="Product 5"
                            className="
      w-36 h-52
      rounded-2xl object-cover
      shadow-md
    "
                        />

                    </div>



                </div>
            </div>
        </section>
    );
};

export default Products1;
