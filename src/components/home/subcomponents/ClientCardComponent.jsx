// 'use client';

// import React from "react";

// const testimonials = [
//     {
//         name: "Rajesh Kumar",
//         image: "https://i.pravatar.cc/150?img=3",
//         text: "NowIT delivered exactly what we needed, on time and with strong attention to quality. The team was responsive, professional, and easy to work with throughout the project."
//     },
//     {
//         name: "Ananya Sharma",
//         image: "https://i.pravatar.cc/150?img=5",
//         text: "They quickly understood our vision and turned it into a scalable product. The process was smooth, and the final outcome exceeded our expectations."
//     },
//     {
//         name: "Vikram Rao",
//         image: "https://i.pravatar.cc/150?img=8",
//         text: "Their technical expertise and structured approach helped us build a reliable solution across web and mobile. We value them as a long-term partner."
//     }
// ];

// const ClientCardComponent = () => {
//     return (
//         <section className="w-full px-10 py-24 bg-white">
//             {/* Header */}
//             <div className="max-w-[900px] mb-16">
//                 <h1 className="font-bold text-[48px] text-[#1F2937]">
//                     Building <span className="text-[#0D5BD7]">Trust</span> Through Results
//                 </h1>
//                 <p className="text-gray-600 mt-2 text-lg">
//                     Real feedback from clients who've partnered with us to build reliable digital solutions.
//                 </p>
//             </div>

//             {/* Cards */}
//             <div className="flex justify-center gap-12">
//                 {testimonials.map((item, index) => (
//                     <div key={index} className="relative w-[364px] h-[419px]">

//                         {/* Back dark card (REFERENCE MATCH) */}
//                         <div className="
//               absolute inset-0
//               bg-[#0B1F33]
//               rounded-[28px]
//               rotate-[1.5deg]
//               -translate-x-2
//               -translate-y-2
//             " />

//                         {/* Green border */}
//                         <div className="
//               absolute inset-0
//               rounded-[28px]
//               bg-gradient-to-b
//               from-[#C7F5B6]
//               to-[#55B233]
//               p-[2px]
//             ">
//                             {/* White card */}
//                             <div className="
//                 h-full w-full
//                 rounded-[26px]
//                 bg-white
//                 flex flex-col
//                 items-center
//                 text-center
//                 px-8
//                 pt-8
//                 pb-10
//               ">
//                                 {/* Avatar */}
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className="w-20 h-20 rounded-full object-cover mb-4"
//                                 />

//                                 {/* Name */}
//                                 <h3 className="font-bold text-[24px] text-[#1F2937]">
//                                     {item.name}
//                                 </h3>

//                                 {/* Stars */}
//                                 <div className="flex gap-1 my-3">
//                                     {[...Array(5)].map((_, i) => (
//                                         <span key={i} className="text-yellow-400 text-xl">★</span>
//                                     ))}
//                                 </div>

//                                 {/* Text */}
//                                 <p className="text-[#4B5563] text-[16px] leading-relaxed">
//                                     "{item.text}"
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ClientCardComponent;

'use client';

import React from "react";
import Image from 'next/image'

const testimonials = [
    {
        name: "Rajesh Kumar",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025734/ae9fe090925ae5576c390fa65546b255f1f765cd_is7pew.jpg",
        text: "NowIT delivered exactly what we needed, on time and with strong attention to quality. The team was responsive, professional, and easy to work with throughout the project."
    },
    {
        name: "Ananya Sharma",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025794/5aab5459786b226d5d70e39a1dfa0e817fee1e4d_di3wzg.jpg",
        text: "They quickly understood our vision and turned it into a scalable product. The process was smooth, and the final outcome exceeded our expectations."
    },
    {
        name: "Vikram Rao",
        image: "https://res.cloudinary.com/dr9thittl/image/upload/v1770025821/38f5bd4531c814db74a5a556bbbc302c3c1da5c1_psyqac.jpg",
        text: "Their technical expertise and structured approach helped us build a reliable solution across web and mobile. We value them as a long-term partner."
    }
];

const ClientCardComponent = () => {
    return (
        <section className="w-full px-10 py-24 bg-white overflow-hidden">
            {/* Header */}
            <div className="max-w-[900px] mb-16">
                <h1 className="font-bold text-[48px] text-[#1F2937]">
                    Building <span className="text-[#0D5BD7]">Trust</span> Through Results
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Real feedback from clients who've partnered with us to build reliable digital solutions.
                </p>
            </div>

            {/* Cards Container */}
            <div className="flex justify-center gap-12 py-10">
                {testimonials.map((item, index) => (
                    <div key={index} className="relative w-[364px] h-[419px] -rotate-[3deg]">
                        <div className="
                            absolute inset-0
                            bg-[#0B1F33]
                            rounded-[28px]
                            rotate-[1deg]
                            -translate-x-3
                            -translate-y-3
                            -z-10
                        " />
                        {/* Main Card with Green Border */}
                        <div className="
                            absolute inset-0
                            rounded-[28px]
                            bg-gradient-to-b
                            from-[#C7F5B6]
                            to-[#55B233]
                            p-[2px]
                            shadow-xl
                        ">
                            <div className="
                                h-full w-full
                                rounded-[26px]
                                bg-white
                                flex flex-col
                                items-center
                                text-center
                                px-8
                                pt-8
                                pb-10
                            ">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover mb-4"
                                    quality={100}
                                />


                                <h3 className="font-bold text-[24px] text-[#1F2937]">
                                    {item.name}
                                </h3>

                                <div className="flex gap-1 my-3">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>

                                <p className="text-[#4B5563] text-[16px] leading-relaxed italic">
                                    "{item.text}"
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientCardComponent;