"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const FormikReactSelect = dynamic(
  () => import("@/components/shared/UI-Elements/Input-tags"),
  { ssr: false }
);
import { getNames } from "country-list";
import ProgressBar from "@/components/shared/UI-Elements/ProgressBar";
import { GoArrowUpRight } from "react-icons/go";
import { toast } from "sonner";
import { useNowit } from "@/store/useNowit";
import Loading from "@/app/loading";

/* ---------- OPTIONS ---------- */
const ENTITY_OPTIONS = [
  { value: "Start Up", label: "Start Up" },
  { value: "Enterprise", label: "Enterprise" }
];

const COUNTRY_OPTIONS = getNames().map((country) => ({
  value: country,
  label: country,
}));

const ROLE_OPTIONS = [
  { value: "Founder", label: "Founder" },
  { value: "Partner", label: "Partner" }
];

const INTEREST_OPTIONS = [{ value: "Investor", label: "Investor" }];

const PRIMARY_INTEREST_OPTIONS = [
  { value: "Strategic Partnership", label: "Strategic Partnership" }
];

const INVESTMENT_OPTIONS = [{ value: "Upto 10Cr", label: "Upto 10Cr" }];

const TIMELINE_OPTIONS = [
  { value: "6-12 Months", label: "6-12 Months" }
];


/* ---------- VALIDATION ---------- */
const StepOneSchema = Yup.object({
  companyName: Yup.string().required("Company name is required"),
  entityType: Yup.string().required("Entity type is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required")
});

const StepTwoSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string().required("Role is required"),
  phone: Yup.string().required("Contact number is required"),
  message: Yup.string().max(500).required("Message is required")
});

/* ---------- INITIAL VALUES ---------- */
const initialValues = {
  companyName: "",
  entityType: "Start Up",
  country: "USA",
  city: "",
  website: "",

  fullName: "",
  email: "",
  role: "",
  phone: "",
  interestNature: "Investor",
  primaryInterest: "Strategic Partnership",
  investmentSize: "Upto 10Cr",
  timeline: "6-12 Months",

  message: "",
  attachment: null,

  confirm: false,
  consent: false
};

/* ---------- ERROR HELPER (CRITICAL) ---------- */
const FieldError = ({ name, touched, errors }) =>
  touched[name] && errors[name] ? (
    <p className="error">{errors[name]}</p>
  ) : null;



export default function OrganizationForm() {
  const [step, setStep] = useState(1);
  const {tc,commonReady}=useNowit();

  const submitInvestorForm = async (values) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    const response = await fetch("/api/investor-form", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      toast.error('Failed to submit.')
    }

    return response.json();
  }
  if(!commonReady)return <Loading />
  const organizationForm=tc("organizationForm")
  if(!organizationForm)return null
  const {organizationDetails,otherDetails,fields,checkbox,buttons,validation,options,toast} = organizationForm


  return (
    <div className="min-h-screen flex justify-center py-6 sm:py-10 px-1 sm:px-8 lg:px-20">
      <div className="w-full p-4 sm:p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={step === 1 ? StepOneSchema : StepTwoSchema}
          validateOnChange={false}
          validateOnBlur={true}
          validateOnMount={false}
          onSubmit={async (values, { setTouched, setSubmitting }) => {
            if (step === 1) {
              setTouched({}); // REQUIRED
              setStep(2);
              return;
            }

            try {
              setSubmitting(true);
              await submitInvestorForm(values);

              toast.success("Form submitted successfully");

              resetForm();
              setStep(1);

            } catch (error) {
              console.error(error);
              toast.alert("Submission failed. Please try again.")
            } finally {
              setSubmitting(false);
            }
          }}
        >

          {({ values, touched, errors, setFieldValue, isSubmitting }) => (
            <Form className="space-y-8">
              {/* ================= STEP 1 ================= */}
              {step === 1 && (

                <div className="space-y-8">
                  <div className="flex items-center justify-self-start">
                    <ProgressBar step={step} />
                  </div>

                  <div>
                    {" "}
                    <h3 className="text-black font-bold text-2xl">
                      {" "}
                     {organizationDetails.title}{" "}
                    </h3>{" "}
                    <p className="text-sm text-gray-500">
                     {organizationDetails.description}
                    </p>{" "}
                  </div>

                  <div className="border border-gray-300 p-4 sm:p-8 rounded-lg space-y-3 lg:space-y-6">
                    {" "}
                    <div>
                      {" "}
                      <h2 className="text-lg font-semibold">
                        {" "}
                       {organizationDetails.sectionTitle}{" "}
                      </h2>{" "}
                      <span className="text-sm text-gray-500">
                      {organizationDetails.sectionHint}
                      </span>{" "}
                    </div>
                    
                    <div className="h-23">
                      <label className="label">{fields.companyName}*</label>
                      <Field name="companyName" className="input" />
                      <FieldError
                        name={validation.companyName}
                        touched={touched}
                        errors={errors}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <Field
                          name={fields.entityType}
                          component={FormikReactSelect}
                          label={fields.entityType}
                          options={options.entityType}
                        />
                        <FieldError
                          name={validation.entityType}
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div >
                        <Field
                          name={fields.country}
                          component={FormikReactSelect}
                          label={fields.country}
                          options={COUNTRY_OPTIONS}
                        />
                        <FieldError
                          name={validation.country}
                          touched={touched}
                          errors={errors}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="label">{fields.city}*</label>
                        <Field name="city" className="input" />
                        <FieldError
                          name={validation.city}
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div>
                        <label className="label">{fields.website}</label>
                        <Field name="website" className="input" />
                      </div>
                    </div>

                    <div className="flex items-center justify-end-safe">

                      <button
                        type="submit"
                        className={`
                      ml-auto relative overflow-hidden
                      h-10 min-w-20 px-6 rounded-lg
                      border border-gray-400
                      inline-flex justify-center items-center
                      bg-white text-[#252525DE]
                      transition-colors duration-300
                      group
                    `}
                      >
                        {/* Gradient curtain */}
                        <span
                          className={`
                        absolute inset-0
                        bg-[#55B233]
                        transform scale-x-0 origin-left
                        transition-transform duration-700 ease-in-out
                        group-hover:scale-x-100
                      `}
                        />

                        {/* Content */}
                        <span
                          className={`
                        relative z-10
                        text-md inline-flex items-center gap-1
                        transition-all duration-300
                        group-hover:text-white
                        group-hover:scale-105
                      `}
                        >
                          {buttons.next} <GoArrowUpRight className="text-lg" />
                        </span>
                      </button>
                    </div>


                  </div>
                </div>
              )}

              {/* ================= STEP 2 ================= */}
              {step === 2 && (
                <div className="space-y-8">
                    <ProgressBar step={step} />

                  <div>
                    {" "}
                    <h3 className="text-black font-bold text-2xl">
                      {" "}
                      {otherDetails.title}{" "}
                    </h3>{" "}
                    <p className="text-sm text-gray-500">
                   {otherDetails.description}
                    </p>{" "}
                  </div>

                  <div className="border border-gray-300 p-4 sm:p-8 rounded-lg space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="h-23">
                        <label className="label">{fields.fullName}*</label>
                        <Field name="fullName" className="input" />
                        <FieldError
                          name={validation.fullName}
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div className="h-23">
                        <label className="label">{fields.email}*</label>
                        <Field name="email" className="input" />
                        <FieldError
                          name="email"
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <div className="h-23">
                        <Field
                          name="role"
                          component={FormikReactSelect}
                          label={fields.role}
                          options={options.role}
                        />
                      </div>

                      <div className="h-23">
                        <label className="label">{fields.phone}*</label>
                        <Field name="phone" className="input" />
                        <FieldError
                          name={validation.phone}
                          touched={touched}
                          errors={errors}
                        />
                      </div>

                      <Field
                        name="interestNature"
                        component={FormikReactSelect}
                        label={fields.interestNature}
                        options={INTEREST_OPTIONS}
                      />

                      <Field
                        name="primaryInterest"
                        component={FormikReactSelect}
                        label={fields.primaryInterest}
                        options={PRIMARY_INTEREST_OPTIONS}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="label">{fields.attachment}</label>
                        <input
                          type="file"
                          className="input"
                          onChange={(e) =>
                            setFieldValue("attachment", e.target.files[0])
                          }
                        />
                      </div>
                      <div>
                        <label className="label">{fields.message}*</label>
                        <Field
                          as="textarea"
                          name="message"
                          className="input h-28"
                        />
                        <FieldError
                          name="message"
                          touched={touched}
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <Field type="checkbox" name="confirm" />
                   {checkbox.confirm}
                  </label>

                  <label className="flex items-start gap-2 text-sm">
                    <Field type="checkbox" name="consent" />{checkbox.consent}
                  </label>

                  <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                    <button
                      type="button"
                      className="btn-secondary h-10 px-6 rounded-lg w-full sm:w-auto"
                      onClick={() => setStep(1)}
                    >
                      {buttons.back}
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || !values.confirm || !values.consent}
                      className={`
                        relative overflow-hidden
                        h-10 px-6 rounded-lg
                        border border-gray-400
                        bg-white text-[#252525DE]
                        w-full sm:w-auto
                        transition group
                        ${
                          isSubmitting || !values.confirm || !values.consent
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }
                      `}
                    >
                      {!isSubmitting && (
                        <span className="absolute inset-0 bg-[#55B233] scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100" />
                      )}

                      <span className="relative z-10 inline-flex items-center gap-2">
                        {isSubmitting ? buttons.sending : <>{buttons.send} <GoArrowUpRight /></>}
                      </span>
                    </button>

                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>

      <style jsx global>{`
        .label {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          padding: 0.6rem;
        }
        .error {
          font-size: 12px;
          color: #dc2626;
          margin-top: 2px;
        }
        .btn-primary {
          background: #2563eb;
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 6px;
        }
        .btn-secondary {
          border: 1px solid #d1d5db;
        }
      `}</style>
    </div>
  );
}
