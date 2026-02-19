"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useNowit } from "@/store/useNowit";
/* Product Images */
import Product1 from "../../../public/images/ProductImages/Product1.jpg";
import Product2 from "../../../public/images/ProductImages/Product2.jpg";
import Product3 from "../../../public/images/ProductImages/Product3.jpg";
import Product4 from "../../../public/images/ProductImages/Product4.png";
import Product5 from "../../../public/images/ProductImages/Product5.jpg";
import Link from "next/link";

const Products1 = () => {
  const router = useRouter();
  const [isRaised, setIsRaised] = useState(false);
  const { t, isReady } = useNowit();

  return (
    <section
      className="
        relative w-full overflow-hidden
        px-4 pt-5 lg:pt-10 md:px-12
        mb-10 lg:mb-15 2xl:mb-20
        bg-no-repeat bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/images/ProductImages/Productbg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/35"></div>

      {/* Content */}
      {isReady && <div className="relative z-10">
        {/* Text */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-medium text-[#0b2b4b]">
            {t("banner.title") || "We’re ONe Ecosystem. The Future Runs Here."}
          </h2>

          <p className="mt-4 text-xs md:text-sm text-gray-600 max-w-3xl mx-auto">
            {t("banner.description") || "Create and scale intelligent platforms with no code — start with launch-ready industry platforms or design a fully customized solution."}
          </p>
        </div>

        {/* Interactive Area */}
        <div
          className="relative w-full mx-auto h-72 md:h-100 lg:h-120 group overflow-visible"
          onMouseEnter={() => {
            if (!isRaised) setIsRaised(true);
          }}
        >
          {/* ================= MOBILE / TABLET BUTTON ================= */}
          <div className="lg:hidden flex justify-center mt-3">
            <Link
              href="#myProducts"
              className="
                relative overflow-hidden
                h-9 min-w-20 px-10 rounded-md border-0
                inline-flex justify-center items-center
                bg-[#55B233] text-white
                text-sm font-semibold
                shadow-lg
                group
                active:scale-95
              "
            >
              {/* Gradient curtain */}
              <span
                className="
                  absolute inset-0
                  bg-linear-to-r from-[#0A66C2] to-[#05305C]
                  transform scale-x-0 origin-left
                  transition-transform duration-1000 ease-in-out
                  group-hover:scale-x-100
                "
              />

              <span className="relative z-10">{t("banner.explore") || "Explore Now"}</span>
            </Link>
          </div>

          {/* ================= DESKTOP ANIMATED BUTTON ================= */}
          <div
            className={`
              hidden lg:block
              absolute left-1/2 -translate-x-1/2 bottom-[25%]
              z-10
              transition-all duration-1000 ease-in-out
              ${isRaised
                ? "-translate-y-77 opacity-100"
                : "opacity-0"
              }
            `}
          >
            <Link
              href="#myProducts"
              className="
                relative overflow-hidden
                h-9 min-w-20 px-10 rounded-md border-0
                inline-flex justify-center items-center
                bg-[#55B233] text-white
                text-sm font-semibold
                shadow-lg
                group
                active:scale-95
              "
            >
              <span className="relative z-10">{t("banner.explore") || "Explore Now"}</span>
            </Link>
          </div>

          {/* ================= IMAGES ================= */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 md:pb-10 gap-x-8 px-2">
            {/* Product 1 */}
            <div
              className="hidden md:block w-32 h-48 lg:w-48 lg:h-62 rounded-2xl shadow-md overflow-hidden -mr-4 lg:-mr-8 border border-gray-400"
              style={{
                transform: "perspective(200px) rotateY(22deg) scale(0.9)",
              }}
            >
              <Image
                src={Product1}
                alt="Product 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Product 2 */}
            <div
              className="
                xs:block
                w-40 h-45
                md:w-50 md:h-65
                lg:w-60 lg:h-80
                rounded-3xl shadow-lg overflow-hidden
                -mr-8 md:-mr-8 lg:-mr-10 border border-gray-300
                [--p:150px] md:[--p:250px]
              "
              style={{
                transform: `
                  perspective(var(--p))
                  rotateY(14deg)
                  translateX(-6px)
                  scale(0.98)
                `,
              }}
            >
              <Image
                src={Product2}
                alt="Product 2"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Center */}
            <div
              className="
                relative z-20
                w-50 h-55
                sm:w-52 sm:h-58
                md:w-62 md:h-75
                lg:w-80 lg:h-94
                rounded-3xl shadow-2xl overflow-hidden bg-white border border-gray-300
              "
            >
              <Image
                src={Product3}
                alt="Product 3"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Product 4 */}
            <div
              className="
                xs:block
                w-40 h-45
                md:w-50 md:h-65
                lg:w-60 lg:h-80
                rounded-3xl shadow-lg overflow-hidden
                -ml-8 md:-ml-8 lg:-ml-10 border border-gray-300
                [--p:100px] md:[--p:250px]
              "
              style={{
                transform: `
                  perspective(var(--p))
                  rotateY(-14deg)
                  translateX(6px)
                  scale(0.98)
                `,
              }}
            >
              <Image
                src={Product4}
                alt="Product 4"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Product 5 */}
            <div
              className="hidden md:block w-32 h-48 lg:w-48 lg:h-62 rounded-2xl shadow-md overflow-hidden -ml-4 lg:-ml-8 border border-gray-400"
              style={{
                transform: "perspective(200px) rotateY(-22deg) scale(0.9)",
              }}
            >
              <Image
                src={Product5}
                alt="Product 5"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      }
    </section>
  );
};

export default Products1;
