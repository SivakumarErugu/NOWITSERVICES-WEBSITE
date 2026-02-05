'use client'

import React from 'react';
import { useState } from 'react';
const AppsList = [{
    id: 1,
    name: "WON Hubs",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107230/e6a0fd8448a91bb572a6416a7ffa3a013e4be790_ihgrab.png",
    description: "WON Hubs is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."
},
{
    id: 2,
    name: "WON Digi",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107209/c631f590f3e1c0c7e22c70bb1e53c33523b20383_wexj7j.jpg",
    description: "WON Digi is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."

},
{
    id: 3,
    name: "WON Pulse",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107305/785f7f05f04bbf73a2f0e933017414fba094aeea_bwbmyw.jpg",
    description: "WON Pulse is a comprehensive and intelligent hospital management software designed to streamline clinical,operationsl, and administrative workflows across healthcare facilities.It helps hospitals improve efficiency,enhance patient care,seamlessly through smart,integrated digital solutions."
},
{
    id: 4,
    name: "WON Bills",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107185/c7b2f5175ba18e0eae94fed530dd717de53cbac4_cv9jr6.png",
    description: "WON Pulse is a comprehensive and intelligent hospital management software designed to streamline clinical,operationsl, and administrative workflows across healthcare facilities.It helps hospitals improve efficiency,enhance patient care,seamlessly through smart,integrated digital solutions."

},
{
    id: 5,
    name: "WON Bridge",
    url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770107319/6501ff8fead7aab2fdf2328dc9464bbacbc11023_tmcdkk.jpg",
    description: "WON Bridge is your all-in-one educationsla platform designed to transform how schools operate and how students learn.we simplify school management and enhance learning experiences with cutting-edge digital tools."

},
]

// const EnterpriseProducts = () => {
//     const [hoveredIndex,setHoveredIndex]=useState(1)
//     return (
//         <div className='w-full h-[353px] grid grid-cols-2 px-10 '>
//             <ul className="flex items-start gap-6 h-[353px]">

//                 {AppsList.map((app) => (
//                     <li
//                         key={app.id}
//                         className="w-[40px] h-[353px] flex items-start justify-center"
//                     >

//                         <div className='h-full w-[50px]
//                 bg-gradient-to-r from-[#0A66C2] to-[#04192D]  flex items-center justify-center'>

//                             <span
//                                 className="
//                   text-white font-semibold
//                   -rotate-90
//                   whitespace-nowrap
//                 "
//                             >
//                                 {app.name}
//                             </span>
//                         </div>
//                     </li>
//                 ))}

//             </ul>

//         </div>
//     )
// }



const EnterpriseProducts = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const activeApp = AppsList[activeIndex];
    const leftList = AppsList.slice(0, activeIndex);
    const rightList = AppsList.slice(activeIndex + 1);


    const Cylinder = ({ app, index }) => (
        <li
            className="w-[40px] h-[353px] flex justify-center cursor-pointer"
            onMouseEnter={() => setActiveIndex(index)}
        >
            <div className="w-[40px] h-full bg-gradient-to-r from-[#0A66C2] to-[#04192D] flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.11)]">
                <span className="text-white font-semibold -rotate-90 whitespace-nowrap">
                    {app?.name}
                </span>
            </div>
        </li>
    );

    return (
        <div className="w-full flex justify-between">
            <div className="w-[90%] flex justify-between px-10 ">

                <div className="grid grid-cols-[auto_auto_48px_auto_1fr] items-start h-[353px]">

                    {/* LEFT CYLINDERS */}
                    <ul className="flex gap-6 h-[353px]">
                        {leftList.map((app, i) => (
                            <Cylinder key={app.id} app={app} index={i} />
                        ))}
                    </ul>

                    {/* IMAGE + CENTER CYLINDER */}
                    <div className="flex h-[353px] ml-4">
                        <div className="w-[259px] h-[353px] relative overflow-hidden shadow-lg">
                            <img src={activeApp.url} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 h-[48px] w-full bg-[#5DBB2F] flex items-center justify-center">
                                <span className="text-white font-semibold">{activeApp.name}</span>
                            </div>
                        </div>
                        <div className=" w-[40px] h-full flex justify-center">
                            <div className="w-[40px] h-full bg-gradient-to-r from-[#0A66C2] to-[#04192D] flex items-center justify-center">
                                <span className="text-white font-semibold -rotate-90 whitespace-nowrap">
                                    {activeApp?.name}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* EXACT DESIGN GAP */}
                    <div className="w-[48px]" />
                    {/* RIGHT CYLINDERS */}
                    <ul className="flex gap-6 h-[353px]">
                        {rightList.map((app, i) => (
                            <Cylinder key={app.id} app={app} index={activeIndex + 1 + i} />
                        ))}
                    </ul>
                </div>
                
                <div className="max-w-xl pl-10 flex flex-col justify-start pt-2 mt-10">
                    <h3 className="text-[28px] font-semibold mb-4">{activeApp.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {activeApp.description}
                    </p>
                    <button className="bg-[#5DBB2F] text-white px-6 py-2 rounded-md w-fit">
                        View Product
                    </button>
                </div>

            </div>
        </div>


    );
};
export default EnterpriseProducts

