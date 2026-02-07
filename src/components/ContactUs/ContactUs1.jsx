"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdOutlineMailOutline } from "react-icons/md";

import { ThemeBtnTag } from "../shared/UI-Elements/Custom-Elements";
import Contactbg from "../../../public/images/ContactUsImages/Contactbg.jpg"
import { countryCodes } from "./utils";
import { toast } from "sonner";

/* ---------------- VALIDATION ---------------- */

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, "Name is too short")
        .required("Name is required"),

    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

    phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
        .required("Phone number is required"),

    date: Yup.string()
        .required("Preferred contact date is required"),

    message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
});

/* ---------------- COMPONENT ---------------- */

export default function ContactSection() {

    const submitForm = async (values) => {
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const res = await fetch("/api/contact-us", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Submission failed");
        }

        return data;
    };


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            country: "IN",
            dialCode: "+91",
            phone: "",
            date: "",
            message: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                await submitForm(values);
                toast.success("Submitted successfully");
                resetForm();
            } catch (error) {
                console.error(error);
                toast.error(error.message || "Failed to submit");
            } finally {
                setSubmitting(false);
            }
        },
    });


    const inputBase =
        "w-full h-10 rounded-md bg-white/20 border border-white/30 px-3 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white";

    const errorText = "mt-1 text-xs text-red-400 pl-2";

    function CountryCodeDropdown({ value, onChange }) {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        const selected = countryCodes.find(c => c.code === value);

        useEffect(() => {
            const close = e => !ref.current?.contains(e.target) && setOpen(false);
            document.addEventListener("mousedown", close);
            return () => document.removeEventListener("mousedown", close);
        }, []);

        return (
            <div ref={ref} className="relative">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="
          h-10 px-3 flex items-center gap-2
          bg-white/20 border border-white/30
          rounded-l-md text-sm text-white
          hover:bg-white/25 overflow-hidden
        "
                >
                    <span>{selected.flag}</span>
                    <span>{selected.dial}</span>
                </button>

                {open && (
                    <div className="
          absolute z-50 mt-1 w-56 max-h-64 overflow-auto
          bg-white/25 backdrop-blur border border-white/20
          rounded-md shadow-lg slot-scroll pl-1 py-1
        ">
                        {countryCodes.map(c => (
                            <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                    onChange(c);
                                    setOpen(false);
                                }}
                                className="
                w-full px-3 py-2 flex items-center gap-3
                text-left text-sm text-white
                hover:bg-white/10 rounded-sm
              "
                            >
                                <span>{c.flag}</span>
                                <span className="flex-1">{c.name}</span>
                                <span>{c.dial}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }



    return (
        <section className="relative w-full min-h-90vh overflow-hidden rounded-md bg-black/40 backdrop-blur-sm flex items-center px-2 lg:px-10 py-5">

            {/* Background Image */}
            <Image
                src={Contactbg}
                alt="Contact background"
                fill
                priority
                className="absolute inset-0 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="rounded-lg p-6 md:p-10 text-white">

                    {/* Header */}
                    <h2 className="text-lg lg:text-2xl font-semibold flex items-center gap-2">
                        Let’s Start the Conversation
                        <span className="inline-block w-8 lg:w-12 h-0.5 bg-[#55B233]" />
                    </h2>

                    <p className="mt-2 text-xs lg:text-sm text-gray-200">
                        Share your requirement and our team will connect with you
                    </p>

                    {/* FORM */}
                    <form
                        onSubmit={formik.handleSubmit}
                        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    >

                        {/* Name */}
                        <div className="h-22 ">
                            <label htmlFor="name" className="text-sm mb-1 block">Name *</label>
                            <input
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter your Name"
                                className={inputBase}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <p className={errorText}>{formik.errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="h-22 ">
                            <label htmlFor="email" className="text-sm mb-1 block">Email Id *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter your Email"
                                className={inputBase}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className={errorText}>{formik.errors.email}</p>
                            )}
                        </div>

                        {/* Whatsapp */}
                        <div>
                            <label className="text-sm mb-1 block">Whatsapp Number *</label>

                            <div className="flex">
                                <CountryCodeDropdown
                                    value={formik.values.country}
                                    onChange={(c) => {
                                        formik.setFieldValue("country", c.code);
                                        formik.setFieldValue("dialCode", c.dial);
                                    }}
                                />

                                <input
                                    name="phone"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="Enter phone number"
                                    className={`${inputBase} rounded-l-none`}
                                />
                            </div>

                            {formik.touched.phone && formik.errors.phone && (
                                <p className={errorText}>{formik.errors.phone}</p>
                            )}
                        </div>


                        {/* Date */}
                        <div className="h-22 ">
                            <label htmlFor="date" className="text-sm mb-1 block">
                                Preferred Contact Date *
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`${inputBase} [color-scheme:dark] uppercase`}
                            />
                            {formik.touched.date && formik.errors.date && (
                                <p className={errorText}>{formik.errors.date}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2 h-33">
                            <label htmlFor="message" className="text-sm mb-1 block">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter Message"
                                className="w-full rounded-md bg-white/20 border border-white/30 px-3 py-2 text-sm text-white placeholder-gray-300 focus:outline-none focus:border-white"
                            />
                            {formik.touched.message && formik.errors.message && (
                                <p className={errorText}>{formik.errors.message}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 mt-2 flex justify-center">
                            <ThemeBtnTag
                                BtnText={formik.isSubmitting ? "Sending..." : "Send"}
                                type="submit"
                                disabled={formik.isSubmitting}
                                styles="w-full lg:w-1/2 h-[42px] bg-[#55B233] text-white !font-medium !rounded-md hover:bg-[#43a047] border-0 disabled:opacity-60"
                            />
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200">
                        <div className="flex items-center gap-2">
                            <span className="relative h-8 w-8 flex items-center justify-center">
                                <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-20" />
                                <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]" />
                                <span className="relative z-10 text-white">
                                    <MdOutlineMailOutline size={18} />
                                </span>
                            </span>
                            <a href="mailto:sales@nowit.com" className="hover:underline">
                                sales@nowit.com
                            </a>
                        </div>

                        <span className="opacity-60">|</span>
                        <a href="mailto:support@nowit.com" className="hover:underline">
                            support@nowit.com
                        </a>
                        <span className="opacity-60">|</span>
                        <a href="mailto:careers@nowit.com" className="hover:underline">
                            careers@nowit.com
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
