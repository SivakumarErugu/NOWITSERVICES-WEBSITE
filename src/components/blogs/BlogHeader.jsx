import React from 'react'
import { SearchInput } from '../shared/UI-Elements/Custom-Elements'
import SlidingHeader from '../shared/UI-Elements/SlidingHeader';

const BlogHeader = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='w-full border-b border-dashed border-gray-300 py-6'>
            <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>

                {/* Header */}
                <div className='w-full md:w-auto text-center md:text-left'>
                    <SlidingHeader title="Our Articles" size="40px" />
                </div>

                {/* Search */}
                <div className='w-full md:w-[350px]'>
                    <SearchInput
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search articles..."
                    />
                </div>

            </div>
        </div>
    )
}

export default BlogHeader
