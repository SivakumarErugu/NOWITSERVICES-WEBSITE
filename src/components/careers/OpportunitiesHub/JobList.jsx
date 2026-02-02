"use client";

import React, { useState, useMemo } from "react";
import { jobSections, jobOpenings } from "../utils";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const JobList = ({ searchTerm = "" }) => {
  const [selectedSection, setSelectedSection] = useState("allroles");
  const [visibleJobs, setVisibleJobs] = useState(6);

  /* -----------------------------
     SECTION FILTER
  ------------------------------*/
  const sectionFilteredJobs = useMemo(() => {
    return jobOpenings.filter((job) =>
      selectedSection === "allroles" ? true : job.section === selectedSection
    );
  }, [selectedSection]);

  /* -----------------------------
     SEARCH FILTER
  ------------------------------*/
  const fullyFilteredJobs = useMemo(() => {
    if (!searchTerm.trim()) return sectionFilteredJobs;

    const query = searchTerm.toLowerCase();

    return sectionFilteredJobs.filter(
      (job) =>
        job.id.toLowerCase().includes(query) ||
        job.role.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.type.toLowerCase().includes(query) ||
        job.experience.toLowerCase().includes(query) ||
        job.projectRole.toLowerCase().includes(query) ||
        job.skills?.some((skill) => skill.toLowerCase().includes(query))
    );
  }, [searchTerm, sectionFilteredJobs]);

  /* -----------------------------
     HANDLERS
  ------------------------------*/
  const handleSectionChange = (name) => {
    setSelectedSection(name);
    setVisibleJobs(6); // reset here (correct place)
  };

  const handleViewMore = () => {
    setVisibleJobs((prev) => prev + 6);
  };

  return (
    <div className="w-full">
      {/* Section Tabs */}
      <div className="w-full flex gap-x-4">
        {jobSections.map((section, i) => (
          <button
            key={i}
            onClick={() => handleSectionChange(section.name)}
            className={`px-8 h-10 rounded-md uppercase font-medium transition-all border-2
              ${selectedSection === section.name
                ? "bg-green-600 border-green-600 text-white"
                : "border-[#0A66C2B2] bg-white hover:bg-gray-200 text-gray-700"
              }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-7 mt-6 mb-10">
        {fullyFilteredJobs.slice(0, visibleJobs).map((job, idx) => (
          <div
            key={job.id}
            className="h-105 flex flex-col border rounded-lg bg-linear-to-b from-[#04192D] to-[#0D5293] px-10 pt-12 pb-8"
          >
            <div className="grow space-y-4">
              <h3 className="text-2xl font-semibold text-white">{job.role}</h3>

              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, ix) => (
                  <span
                    key={ix}
                    className="px-4 py-1 text-sm rounded-md bg-[#E4F2FF3B] text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-sm text-white/80 line-clamp-5 leading-relaxed">
                {job.description}
              </p>

              <p className="text-sm text-white">
                <span className="font-bold">Experience - </span>
                {job.experience}
              </p>
            </div>

            <div className="mt-auto flex justify-end">
              <Link href={`careers/${job?.id}`}>
                <button
                  type="button"
                  className="group relative overflow-hidden px-4 h-11 bg-white text-[#252525DE] rounded-md font-medium flex items-center gap-x-2 cursor-pointer!"
                >
                  <span className="absolute inset-0 bg-[#55B233] scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
                  <span className="relative flex items-center gap-x-2 group-hover:text-white ">
                    Apply Now <GoArrowUpRight size={22} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {fullyFilteredJobs.length === 0 && (
        <div className="text-center text-gray-500 mt-12">
          No jobs match your search
        </div>
      )}

      {/* View More */}
      {visibleJobs < fullyFilteredJobs.length && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={handleViewMore}
            className="group relative overflow-hidden w-70 px-4 py-2 bg-[#55B233] text-white rounded-md flex items-center justify-center gap-x-2 cursor-pointer!"
          >
            <span className="absolute inset-0 bg-[#0D5293] scale-x-0 origin-left group-hover:scale-x-100 transition-transform"></span>
            <span className="relative flex items-center gap-x-1 ">
              View More <IoIosArrowRoundForward size={22} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
