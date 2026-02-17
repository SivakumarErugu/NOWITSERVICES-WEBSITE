import { ThemeHeaderSideLine, ThemeBtnTag2 } from '@/components/shared/UI-Elements/Custom-Elements';
import React from 'react';
import ApplicationForm from './ApplicationForm';
import { MdEmail } from "react-icons/md";

const JobDetailView = ({ job }) => {
    if (!job) return null;

    return (
        <article className="w-full max-w-full overflow-hidden space-y-7 md:space-y-10">

            {/* ================= HEADER ================= */}
            <header className="max-w-full">
                <div className="flex items-center gap-x-1 mt-12 mb-6">
                    <h2 className="text-[20px]md:text-xl font-bold text-[#252525] wrap-break-word">
                        Current Openings
                    </h2>
                    <ThemeHeaderSideLine width="60px" />
                </div>

                <div className="space-y-2 md:space-y-3 max-w-full">
                    {/* Job Title */}
                    <h1 className="text-2xl md:text-3xl font-semibold text-black wrap-break-word whitespace-normal ibmPlex-text">
                        {job.role}
                    </h1>

                    {/* Meta line */}
                    <p className="text-gray-400 md:text-sm wrap-break-word whitespace-normal text-xs inter-text">
                        {job.detailedRole} · {job.type} · {job.experience}
                    </p>

                    {/* ID / Location / Skills */}
                    <p className="text-gray-400 md:text-sm wrap-break-word whitespace-normal text-xs inter-text">
                        <span className="font-medium text-gray-500">Job ID:</span>{' '}
                        <span className="break-all">{job.id}</span>
                        <span className="mx-1">|</span>
                        {job.location}
                        <span className="mx-1">|</span>
                        {job.skills.join(', ')}
                    </p>

                    <a href='#jobApplicationForm' className='text-sm group relative overflow-hidden w-full md:w-50 h-9 px-4 bg-[#55B233] text-white rounded-md flex items-center justify-center gap-x-2 cursor-pointer!'>
                        <span className="absolute inset-0 bg-[#0D5293] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-600 ease-in-out"></span>
                        <span className="relative flex items-center gap-x-1 ">
                            Apply For This Job
                        </span>
                    </a>

                </div>
            </header>

            {/* ================= DESCRIPTION ================= */}
            <section className="max-w-full">
                <h3 className="text-xl md:text-2xl text-[#04192D] font-semibold mb-3 ibmPlex-text">
                    Job Description
                </h3>

                <div className="space-y-2 text-xs md:text-sm text-gray-400 max-w-full">
                    <p className="break-words whitespace-normal">
                        <strong className="text-[#252525C7]">Project Role:</strong>{' '}
                        {job.projectRole}
                    </p>

                    <p className="break-words whitespace-normal leading-relaxed">
                        <strong className="text-[#252525C7]">Project Description:</strong>{' '}
                        {job.description}
                    </p>

                    <p className="break-words whitespace-normal">
                        <strong className="text-[#252525C7]">Experience Required:</strong>{' '}
                        {job.experience}
                    </p>

                    <p className="break-words whitespace-normal">
                        <strong className="text-[#252525C7]">Educational Qualifications:</strong>{' '}
                        {job.educationalQualifications}
                    </p>
                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="max-w-full">
                <h3 className="text-sm text-[#252525C7] mb-2 md:mb-3 font-semibold">
                    Benefits :
                </h3>

                <div className="flex flex-wrap gap-3 max-w-full">
                    {job.benefits.map((benefit, index) => (
                        <span
                            key={index}
                            className="text-[10px] md:text-sm rounded-full text-white h-7 flex items-center px-6
                         bg-gradient-to-b from-[#87CE6D] to-[#174F88]
                         break-words whitespace-normal max-w-full"
                        >
                            {benefit}
                        </span>
                    ))}
                </div>
            </section>

            {/* ================= SUMMARY ================= */}
            <section className="max-w-full inter-text">
                <p className="wrap-break-word whitespace-normal">
                    <strong className="text-[#252525C7] md:tex-sm text-[13px]">Summary:</strong>
                    <span className="text-xs md:text-sm text-gray-400"> {job.summary}</span>
                </p>
            </section>


            <div className='' id='jobApplicationForm'>
                <h5 className='text-[#04192D] font-bold text-xl ibmPlex-text'>Application Form</h5>
                <ApplicationForm id={job.id} sysRole={job.role} />
            </div>

            <div className='flex items-center justify-center text-[#252525BD] '>
                {/* blured mail icon */}
                <span
                    className="relative h-10 w-10 flex items-center justify-center cursor-pointer"
                >
                    {/* Diffused glow */}
                    <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-10"></span>

                    {/* Softened circle */}
                    <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]"></span>

                    {/* Icon */}
                    <span className="relative z-10 text-white">
                        <MdEmail />
                    </span>
                </span>

                <div className="ml-2 flex items-center text-[6px] md:text-sm whitespace-nowrap">
                    <a href="mailto:hr@nowitservices.com" className="hover:underline">
                      hr@nowitservices.com
                    </a>
                    <span className="mx-2">|</span>
                    <a href="mailto:contact.us@nowitservices.com" className="hover:underline">
                       contact.us@nowitservices.com
                    </a>
                    <span className="mx-2">|</span>
                    <a href="mailto:careers@nowitservices.com" className="hover:underline">
                        careers@nowitservices.com
                    </a>
                </div>

            </div>


        </article>
    );
};

export default JobDetailView;
