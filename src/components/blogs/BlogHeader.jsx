import React from 'react'
import { SearchInput, ThemeHeaderSideLine } from '../shared/UI-Elements/Custom-Elements'
import SlidingHeader from '../shared/UI-Elements/SlidingHeader';

const BlogHeader = ({searchTerm,setSearchTerm}) => {

    return (
        <div className='flex justify-between items-center'>
            {/* Header */}
            <SlidingHeader title="Our Articles" size="60px" />

            {/* Search */}
            <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
            />
        </div>
    )
}

export default BlogHeader
