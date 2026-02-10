'use client';

import React, { useState } from 'react';
import { SearchInput } from '../shared/UI-Elements/Custom-Elements';
import JobList from './OpportunitiesHub/JobList';
import SlidingHeader from '../shared/UI-Elements/SlidingHeader';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='md:px-10 md:pb-40'>
      {/* Header */}
      <SlidingHeader title="Current Openings" size="60px" />
      {/* Search */}
      <div className="flex justify-end mb-6 hidden md:block">
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
