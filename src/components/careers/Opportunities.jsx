'use client';

import React, { useState } from 'react';
import { ThemeHeaderSideLine, SearchInput } from '../shared/UI-Elements/Custom-Elements';
import JobList from './OpportunitiesHub/JobList';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-30 pb-40 '>
      {/* Header */}
      <div className='flex items-center gap-x-1 mt-12 mb-6'>
        <h2 className='text-xl font-bold text-[#252525]'>
          Current Openings
        </h2>
        <ThemeHeaderSideLine width="60px" />
      </div>

      {/* Search */}
      <div className="flex justify-end mb-6">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by role, skill, location..."
        />
      </div>

      {/* IMPORTANT: pass searchTerm */}
      <JobList searchTerm={searchTerm} />
    </div>
  );
};

export default Opportunities;
