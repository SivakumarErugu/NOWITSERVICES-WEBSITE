'use client';

import Image from "next/image";
import { useState } from "react";
import { useNowit } from "@/store/useNowit";
import SlidingHeader from "../shared/UI-Elements/SlidingHeader";
import { servicesData } from "./servicesData";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";


const VISIBLE_COUNT = 3;

const Services4 = () => {
  const { activeService, setActiveService } = useNowit();

  const services = Object.entries(servicesData)
    .filter(([key]) => key !== activeService)
    .map(([key, value]) => ({
      key,
      title: value.title,
      description: value.description,
      image: value.Services1.image,
    }));

  /* ---------- DESKTOP WINDOW INDEX (MOVE 1 BY 1) ---------- */
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = services.length - VISIBLE_COUNT;

  const prev = () => {
    setStartIndex((i) => Math.max(i - 1, 0));
  };

  const next = () => {
    setStartIndex((i) => Math.min(i + 1, maxIndex));
  };

  const visibleServices = services.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  return (
    <section className="w-full bg-white py-6 lg:py-10 mb-10">
      <div className="mx-auto px-5 md:px-8 lg:px-15">

        {/* HEADER */}
        <SlidingHeader title="Our Services" bottom="mb-2" />

        {/* TITLE + ARROWS */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl md:text-3xl font-semibold">
            Other Services <span className="text-blue-600">We Offer</span>
          </h2>

          {/* Desktop buttons */}
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

        {/* ----------- MOBILE / SMALL SCREENS (SCROLL) ----------- */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar lg:hidden">
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              mobile
              onClick={() => setActiveService(service.key)}
            />
          ))}
        </div>

        {/* ----------- LARGE SCREENS (3-CARD WINDOW) ----------- */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              onClick={() => setActiveService(service.key)}
            />
          ))}
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
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`
        relative h-70 lg:h-110 rounded-2xl overflow-hidden
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
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 p-5 pr-14 text-white z-10">
        {/* TITLE */}
        <h3 className="text-lg font-semibold leading-snug">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <div
          className={`
            transition-all duration-300 overflow-hidden
            ${open ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* ACTION BUTTON (ABOVE CONTENT) */}
      <button
        onClick={toggle}
        className="
          absolute bottom-5 right-5 z-20
          w-9 h-9 rounded-full
          bg-[#55B233] text-white
          flex items-center justify-center
          transition-transform duration-200
          hover:scale-110
        "
        aria-label={open ? "Collapse service details" : "Expand service details"}
      >
        {open ? <FaMinus size={14} /> : <FaPlus size={14} />}
      </button>
    </div>
  );
};


