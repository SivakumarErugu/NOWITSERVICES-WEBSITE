'use client';

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ThemeBtnTag2 } from "../../shared/UI-Elements/Custom-Elements";
import ResumeUpload from "../../shared/UI-Elements/ResumeUpload";

/* -------------------- Validation Schema -------------------- */
const ApplicationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),

    companyName: Yup.string().required("Company name is required"),
    role: Yup.string().required("Role / Position is required"),
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string(),

    currentPackage: Yup.string().required("Current package is required"),
    expectedPackage: Yup.string().required("Expected package is required"),

    skills: Yup.string().required("Skills are required"),
    certifications: Yup.string(),

    resume: Yup.mixed().required("Resume is required"),
    coverLetter: Yup.string().required("Cover letter is required"),
    resume: Yup.mixed()
        .required("Resume is required")
        .test(
            "fileSize",
            "File size must be less than 5MB",
            (file) => file && file.size <= 5 * 1024 * 1024
        )
        .test(
            "fileType",
            "Only PDF or DOCX files are allowed",
            (file) =>
                file &&
                ["application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ].includes(file.type)
        ),

});

/* -------------------- Initial Values -------------------- */
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    companyName: "",
    role: "",
    startDate: "",
    endDate: "",

    currentPackage: "",
    expectedPackage: "",

    skills: "",
    certifications: "",

    resume: null,
    coverLetter: "",
    resume: null,
};

export default function ApplicationForm() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={ApplicationSchema}
            onSubmit={(values) => {
                console.log("FORM DATA:", values);
            }}
        >
            {({ setFieldValue, values }) => (
                <Form className="max-w-5xl mx-auto bg-white p-8 rounded-lg border shadow border-gray-300 space-y-10">

                    {/* ================= PERSONAL INFORMATION ================= */}
                    <Section title="Personal Information">
                        <TwoCol>
                            <Input name="firstName" label="First Name *" />
                            <Input name="lastName" label="Last Name *" />
                        </TwoCol>

                        <TwoCol>
                            <Input name="email" label="Email Address *" />
                            <Input name="phone" label="Phone Number *" />
                        </TwoCol>


                    </Section>

                    {/* ================= WORK EXPERIENCE ================= */}
                    <div className="bg-gray-100 p-4 rounded-md">
                        <Section title="Work Experience">
                            <Input name="companyName" label="Company Name *" />
                            <Input name="role" label="Role / Position *" />

                            <TwoCol>
                                <Input name="startDate" label="Start Date *" type="date" styles="uppercase" />
                                <Input name="endDate" label="End Date" type="date" styles="uppercase" />
                            </TwoCol>

                            <TwoCol>
                                <Input name="currentPackage" label="Current Package *" />
                                <Input name="expectedPackage" label="Expected Package *" />
                            </TwoCol>
                        </Section>
                    </div>

                    {/* ================= SKILLS ================= */}
                    <Section title="Skills & Certifications">
                        <Textarea
                            name="skills"
                            label="Technical Skills *"
                            placeholder="JavaScript, React, Node.js..."
                        />
                        <Textarea
                            name="certifications"
                            label="Certifications"
                            placeholder="AWS Certified Developer, PMP..."
                        />
                    </Section>

                    {/* ================= RESUME UPLOAD ================= */}
                    <Section title="Resume">
                        <TwoCol>
                            <ResumeUpload
                                setFieldValue={setFieldValue}
                                value={values.resume}
                            />

                        </TwoCol>
                    </Section>

                    {/* ================= COVER LETTER ================= */}
                    <Section title="Cover Letter">
                        <Textarea
                            name="coverLetter"
                            placeholder="Tell us why you'd be a great fit for our team..."
                        />
                    </Section>

                    {/* ================= SUBMIT ================= */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="group relative overflow-hidden w-70 px-4 py-2 bg-[#55B233] text-white rounded-md flex items-center justify-center gap-x-2 cursor-pointer!"
                        >
                            <span className="absolute inset-0 bg-[#0D5293] scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
                            <span className="relative flex items-center gap-x-1 ">
                                Submit
                            </span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

/* -------------------- Reusable Components -------------------- */

function Section({ title, children }) {
    return (
        <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            {children}
        </div>
    );
}

function TwoCol({ children }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            {children}
        </div>
    );
}

function Input({ label, ...props }) {
    return (
        <div className="space-y-1 h-22 ">
            {label && <label className={`text-sm text-gray-400 font-medium `}>{label}</label>}
            <Field
                {...props}
                className={`w-full text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-200 ${props.styles || ''}`}
            />
            <ErrorMessage
                name={props.name}
                component="p"
                className="text-red-500 text-[10px] ml-2"
            />
        </div>
    );
}

function Textarea({ label, ...props }) {
    return (
        <div className=" h-41">
            {label && <label className="text-sm text-gray-400 font-medium">{label}</label>}
            <Field
                as="textarea"
                rows="4"
                {...props}
                className="w-full text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
                name={props.name}
                component="p"
                className="text-red-500 text-[10px] ml-2"
            />
        </div>
    );
}
