"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/* ------------------ Validation Schemas ------------------ */

const OrganizationSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  entityType: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  website: Yup.string().url("Invalid URL").nullable(),
});

const OtherDetailsSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  role: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  interestNature: Yup.string().required("Required"),
  primaryInterest: Yup.string().required("Required"),
  investmentSize: Yup.string().required("Required"),
  timeline: Yup.string().required("Required"),
  message: Yup.string().max(500, "Max 500 characters").required("Required"),
  confirm: Yup.boolean().oneOf([true], "Required"),
  contactConsent: Yup.boolean().oneOf([true], "Required"),
});

/* ------------------ Initial Values ------------------ */

const initialValues = {
  companyName: "",
  entityType: "Start Up",
  country: "USA",
  city: "",
  website: "",

  fullName: "",
  role: "",
  email: "",
  phone: "",
  interestNature: "Investor",
  primaryInterest: "Strategic Partnership",
  investmentSize: "Upto 10Cr",
  timeline: "6-12 Months",
  attachment: null,
  message: "",
  confirm: false,
  contactConsent: false,
};

export default function OrganizationFormPage() {
  const [step, setStep] = useState(1);

  const isStepOne = step === 1;

  return (
    <div className="min-h-screen bg-white flex justify-center py-10">
      <div className="w-[1232px]">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          <span className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-300"}`} />
          <span className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-300"}`} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={isStepOne ? OrganizationSchema : OtherDetailsSchema}
          onSubmit={(values) => {
            if (isStepOne) {
              setStep(2);
            } else {
              console.log("FINAL SUBMIT:", values);
            }
          }}
        >
          {({ setFieldValue }) => (
            <Form className="border border-blue-500 rounded-md p-6">
              {/* ------------------ STEP 1 ------------------ */}
              {isStepOne && (
                <>
                  <h2 className="text-xl font-semibold">Organization Details</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Help us understand your organization and business background.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <label className="label">Organization / Company name*</label>
                      <Field name="companyName" className="input" />
                      <ErrorMessage name="companyName" component="p" className="error" />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="label">Type of Entity*</label>
                        <Field as="select" name="entityType" className="input">
                          <option>Start Up</option>
                          <option>Enterprise</option>
                        </Field>
                      </div>

                      <div>
                        <label className="label">Country*</label>
                        <Field as="select" name="country" className="input">
                          <option>USA</option>
                          <option>India</option>
                        </Field>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="label">City*</label>
                        <Field name="city" className="input" />
                      </div>

                      <div>
                        <label className="label">Website Link (Optional)</label>
                        <Field name="website" className="input" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button type="submit" className="btn-primary">
                      Next →
                    </button>
                  </div>
                </>
              )}

              {/* ------------------ STEP 2 ------------------ */}
              {!isStepOne && (
                <>
                  <h2 className="text-xl font-semibold">Other Details</h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Share your contact information and investment interests so we can connect with you.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="label">Full Name*</label>
                      <Field name="fullName" className="input" />
                    </div>

                    <div>
                      <label className="label">Email Address*</label>
                      <Field name="email" className="input" />
                    </div>

                    <div>
                      <label className="label">Designation / Role*</label>
                      <Field as="select" name="role" className="input">
                        <option value="">Select</option>
                        <option>Founder</option>
                        <option>Partner</option>
                      </Field>
                    </div>

                    <div>
                      <label className="label">Contact Number*</label>
                      <Field name="phone" className="input" />
                    </div>

                    <div>
                      <label className="label">Nature of Interest*</label>
                      <Field as="select" name="interestNature" className="input">
                        <option>Investor</option>
                      </Field>
                    </div>

                    <div>
                      <label className="label">Primary Area of Interest*</label>
                      <Field as="select" name="primaryInterest" className="input">
                        <option>Strategic Partnership</option>
                      </Field>
                    </div>

                    <div>
                      <label className="label">Investment / Engagement Size*</label>
                      <Field as="select" name="investmentSize" className="input">
                        <option>Upto 10Cr</option>
                      </Field>
                    </div>

                    <div>
                      <label className="label">Preferred Timeline*</label>
                      <Field as="select" name="timeline" className="input">
                        <option>6-12 Months</option>
                      </Field>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="label">Message*</label>
                    <Field as="textarea" name="message" className="input h-28" />
                  </div>

                  <div className="mt-6 space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <Field type="checkbox" name="confirm" />
                      I confirm that the information provided is true and accurate.
                    </label>

                    <label className="flex items-center gap-2 text-sm">
                      <Field type="checkbox" name="contactConsent" />
                      I agree to be contacted by the organization for further discussion.
                    </label>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button type="button" onClick={() => setStep(1)} className="btn-secondary">
                      Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Send →
                    </button>
                  </div>
                </>
              )}
            </Form>
          )}
        </Formik>
      </div>

      {/* ------------------ Styles ------------------ */}
      <style jsx global>{`
        .label {
          font-size: 14px;
          color: #374151;
          margin-bottom: 6px;
          display: block;
        }
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          padding: 10px 12px;
          font-size: 14px;
        }
        .error {
          font-size: 12px;
          color: #dc2626;
        }
        .btn-primary {
          background: #2563eb;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
        }
        .btn-secondary {
          border: 1px solid #d1d5db;
          padding: 10px 20px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
