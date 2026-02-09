import React from 'react'

const JoinusBanner = () => {
    return (
        <div className="w-full h-[380px] py-20 px-5 md:px-30 bg-gradient-to-r from-[#1EB2B7] via-[#2D5DA7] to-[#1D1B6B] text-white">
            <div className="max-w-5xl">
                <h5 className=" text-[16px] inter-text md:text-lg font-medium mb-4 opacity-90">Join us</h5>

                <h2 className="text-[24px] md:text-5xl font-bold mb-6 tracking-tight ibmPlex-text">
                    Be Part of the Future of Technology
                </h2>

                <p className="text-[16px] md:text-lg leading-relaxed opacity-80">
                    Work with passionate people, solve meaningful problems, and grow your
                    skills while building innovative digital solutions that make a real impact.
                </p>
            </div>
        </div>
    )
}

export default JoinusBanner