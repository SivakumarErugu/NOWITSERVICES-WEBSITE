import { ThemeHeaderSideLine, ThemeBtnTag2 } from '@/components/shared/UI-Elements/Custom-Elements';
import React from 'react';
import ApplicationForm from './ApplicationForm';

const JobDetailView = ({ job }) => {
    if (!job) return null;

    return (
        <article className="w-full max-w-full overflow-hidden space-y-10">

            {/* ================= HEADER ================= */}
            <header className="max-w-full">
                <div className="flex items-center gap-x-1 mt-12 mb-6">
                    <h2 className="text-xl font-bold text-[#252525] break-words">
                        Current Openings
                    </h2>
                    <ThemeHeaderSideLine width="60px" />
                </div>

                <div className="space-y-3 max-w-full">
                    {/* Job Title */}
                    <h1 className="text-3xl font-semibold text-black break-words whitespace-normal">
                        {job.role}
                    </h1>

                    {/* Meta line */}
                    <p className="text-gray-400 text-sm break-words whitespace-normal">
                        {job.detailedRole} · {job.type} · {job.experience}
                    </p>

                    {/* ID / Location / Skills */}
                    <p className="text-gray-400 text-sm break-words whitespace-normal">
                        <span className="font-medium text-gray-500">Job ID:</span>{' '}
                        <span className="break-all">{job.id}</span>
                        <span className="mx-1">|</span>
                        {job.location}
                        <span className="mx-1">|</span>
                        {job.skills.join(', ')}
                    </p>

                    <ThemeBtnTag2
                        BtnText="Apply For This Job"
                        styles="text-sm w-60"
                    />
                </div>
            </header>

            {/* ================= DESCRIPTION ================= */}
            <section className="max-w-full">
                <h3 className="text-lg text-[#04192D] font-semibold mb-3">
                    Job Description
                </h3>

                <div className="space-y-2 text-sm text-gray-400 max-w-full">
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
                <h3 className="text-sm text-[#252525C7] mb-3 font-semibold">
                    Benefits
                </h3>

                <div className="flex flex-wrap gap-3 max-w-full">
                    {job.benefits.map((benefit, index) => (
                        <span
                            key={index}
                            className="text-sm rounded-full text-white h-7 flex items-center px-6
                         bg-gradient-to-b from-[#87CE6D] to-[#174F88]
                         break-words whitespace-normal max-w-full"
                        >
                            {benefit}
                        </span>
                    ))}
                </div>
            </section>

            {/* ================= SUMMARY ================= */}
            <section className="max-w-full">
                <p className="wrap-break-word whitespace-normal">
                    <strong className="text-[#252525C7]">Summary:</strong>
                    <span className="text-sm text-gray-400"> {job.summary}</span>
                </p>
            </section>


            <div className=''>
                <h5 className='text-[#04192D] font-bold text-xl'>Application Form</h5>
                <ApplicationForm />
            </div>


        </article>
    );
};

export default JobDetailView;
