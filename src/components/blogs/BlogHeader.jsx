'use client'

import React, { useState } from 'react'
import { SearchInput, ThemeHeaderSideLine } from '../shared/UI-Elements/Custom-Elements'
import SlidingHeader from '../shared/UI-Elements/SlidingHeader';

const BlogHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='flex justify-between items-center'>
            {/* Header */}
            <SlidingHeader title="Our Articles" size="60px" />

            {/* Search */}
            <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by role, skill, location..."
            />
        </div>
    )
}

export default BlogHeader
