"use client";

import React from "react";
import { LuMailOpen } from "react-icons/lu";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";

const NewsletterCard = () => {
  const subscribeToNewsletter = async (email) => {
    try {
      const response = await fetch("/api/news-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Subscribed successfully!");
        return true;
      }

      if (response.status === 409) {
        toast.error("Email already subscribed");
        return false;
      }

      toast.error(result.message || "Subscription failed");
      return false;

    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again.");
      return false;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const success = await subscribeToNewsletter(values.email);

      if (success) {
        resetForm();
      }

      setSubmitting(false);
    },
  });

  return (
    <div className="w-full flex justify-center mt-8 sm:mt-10">
      <div
        className="
        w-full max-w-5xl
        rounded-xl
        px-4 sm:px-8
        py-8 sm:py-10
        text-white
        bg-linear-to-r from-[#1F8A9E] via-[#1E5A88] to-[#2C1E5E]
      "
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <LuMailOpen size={38} />
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2">
          Stay Updated with Latest Insights
        </h2>

        {/* Sub text */}
        <p className="text-center text-sm text-white/80 max-w-2xl mx-auto mb-6">
          Subscribe to our newsletter and get weekly updates on cloud computing,
          AI, and enterprise technology trends.
        </p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 ">
            {/* Input */}
            <div className="w-full sm:w-auto h-15">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full sm:w-72 h-10 px-3 rounded-md text-sm text-gray-700
                bg-white focus:outline-none
                ${formik.touched.email && formik.errors.email
                    ? "border border-red-500"
                    : ""
                  }`}
              />

              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-xs text-red-300 pl-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="
              h-10
              w-full sm:w-auto
              px-6
              rounded-md
              text-sm font-medium
              bg-[#6CC04A]
              hover:bg-[#5aad3f]
              transition
              disabled:opacity-60
            "
            >
              {formik.isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>

        <p className="text-center text-xs mt-6 sm:mt-8 text-white/70">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )

};

export default NewsletterCard;
