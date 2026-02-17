'use client';

import Image from "next/image";
import { useState } from "react";
import { useNowit } from "@/store/useNowit";
import SlidingHeader from "../shared/UI-Elements/SlidingHeader";
import { servicesData } from "./servicesData";

import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const VISIBLE_COUNT = 3;
const CARD_GAP = 24; // gap-6

const Services4 = () => {
  const { activeService, } = useNowit();

  const services = Object.entries(servicesData)
    .filter(([key]) => key !== activeService)
    .map(([key, value]) => ({
      key,
      title: value.title,
      description: value.description,
      image: value.Services1.image,
    }));

  /* ---------- DESKTOP INDEX (MOVE 1 BY 1) ---------- */
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = Math.max(services.length - VISIBLE_COUNT, 0);

  const prev = () => setStartIndex(i => Math.max(i - 1, 0));
  const next = () => setStartIndex(i => Math.min(i + 1, maxIndex));

  return (
    <section className="w-full bg-white py-6 lg:py-12 mb-8">
      <div className="mx-auto px-5 md:px-8 lg:px-15">

        {/* HEADER */}
        <SlidingHeader title="Our Services" bottom="mb-2" />

        {/* TITLE + ARROWS */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-3xl font-semibold">
            Other Services <span className="text-blue-600">We Offer</span>
          </h2>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex gap-3">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${startIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-100 text-blue-600"}
              `}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={next}
              disabled={startIndex === maxIndex}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${startIndex === maxIndex
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-[#55B233] text-white"}
              `}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* ----------- MOBILE / SMALL SCREENS (NATIVE SCROLL) ----------- */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar lg:hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              mobile
            // onClick={() => setActiveService(service.key)}
            />
          ))}
        </div>

        {/* ----------- LARGE SCREENS (BLOG-STYLE MOTION SLIDER) ----------- */}
        <div className="hidden lg:block overflow-hidden mt-6">
          <motion.div
            className="flex"
            animate={{
              x: `calc(-${startIndex * (100 / VISIBLE_COUNT)}% - ${startIndex * CARD_GAP}px)`
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30
            }}
          >
            {services.map((service) => (
              <div
                key={service.key}
                className="w-1/3 shrink-0 pr-6"
              >
                <ServiceCard
                  service={service}
                // onClick={() => setActiveService(service.key)}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services4;

/* ------------------------------------------------------------------ */
/* CARD */
/* ------------------------------------------------------------------ */

const ServiceCard = ({ service, onClick, mobile }) => {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    e.stopPropagation();
    setOpen(prev => !prev);
  };

  return (
    <div
      className={`
        relative h-70 lg:h-120 2xl:h-200 rounded-2xl overflow-hidden
        cursor-pointer group shadow-sm hover:shadow-xl transition-all
        ${mobile ? "min-w-60 lg:min-w-75" : ""}
      `}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={onClick}
    >
      {/* IMAGE */}
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-102"
        priority
      />
      

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/45 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7 pr-10 md:pr-15 text-white z-10 mb-4">
        <h3 className="text-md md:text-lg lg:text-xl 2xl:text-2xl font-semibold ">
          {service.title}
        </h3>

        <div
          className={`
            transition-all duration-300 overflow-hidden
            ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-xs xl:text-sm 2xl:text-[17px] text-gray-200 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* ACTION BUTTON */}
      <button
        onClick={toggle}
        className="
          absolute bottom-3 right-3 md:bottom-3 md:right-4 z-20
          w-7 h-7 md:w-8 md:h-8 rounded-full
          bg-[#55B233] text-white
          flex items-center justify-center
          transition-transform duration-200 hover:scale-110
        "
        aria-label={open ? "Collapse service details" : "Expand service details"}
      >
        {open ? <FaMinus size={14} /> : <FaPlus size={14} />}
      </button>
    </div>
  );
};
