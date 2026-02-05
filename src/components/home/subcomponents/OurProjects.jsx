
// import { CustomHeading } from "@/components/shared/UI-Elements/Custom-Elements"
// const List = [{
//     id: 1,
//     title: "WON Bill",
//     description: "It helps hospitals improve efficiency,enhance patientCate",
// }, {
//     id: 2,
//     title: "WON Digi",
//     description: "It helps hospitals improve efficiency,enhance patientCate",
// },
// {
//     id: 3,
//     title: "WON Pulse",
//     description: "It helps hospitals improve efficiency,enhance patientCate",
// },
// {
//     id: 4,
//     title: "WON Hubs",
//     description: "It helps hospitals improve efficiency,enhance patientCate",
// },
// {
//     id: 5,
//     title: "WON Bridge",
//     description: "It helps hospitals improve efficiency,enhance patientCate",
// },
// ]
// const OurProjects = () => {
//     return (
//         <div className='h-[1506 px] flex flex-col'>
//             {/* <p>Prabhuva</p> */}
//             <CustomHeading title='Projects' description='Projects that reflect our expertise and commitment to quality' />
//             {/* {render first two items} */}
//             <div>
//                 {
//                     List.slice(0, 2).map(item => (
//                         <div className="h-[578px] w-[574px]" key={item.id}>
//                             <h1 className="ibmPlex-text text-[36px] font-bold">{item.title}</h1>
//                             <p className="text-[16px]">{item.description}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//             {/* // render bottom 3 */}
//             <div>
//                 {
//                     List.slice(2, 5).map(item => (
//                         <div className="h-[578px] w-[372px]" key={item.id}>
//                             <h1 className="ibmPlex-text text-[36px] font-bold">{item.title}</h1>
//                             <p className="text-[16px]">{item.description}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
// export default OurProjects
'use client'

const ProjectCard = ({ item, height }) => {
    return (
        <div
            className={`relative ${height} w-full rounded-2xl overflow-hidden`}
        >
            {/* Image */}
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-[24px] font-semibold">
                    {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed max-w-[90%]">
                    {item.description}
                </p>
            </div>
        </div>
    )
}


import { CustomHeading } from "@/components/shared/UI-Elements/Custom-Elements"
import Image from "next/image"

const List = [
    {
        id: 1,
        title: "Won Bill",
        description:
            "It helps hospitals improve efficiency, enhance patient care, and manage daily operations seamlessly.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770229103/c7b2f5175ba18e0eae94fed530dd717de53cbac4_3_nojd86.png"
    },
    {
        id: 2,
        title: "Won Digi",
        description:
            "An all-in-one educational platform designed to transform how schools operate.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227821/c631f590f3e1c0c7e22c70bb1e53c33523b20383_1_vby7wt.jpg"
    },
    {
        id: 3,
        title: "Won Pulse",
        description:
            "A hospital management system built for modern healthcare workflows.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227773/4c46f68565408040fdb66d0e8de15e20e9dbdee8_avdjiv.jpg"
    },
    {
        id: 4,
        title: "Won Hubs",
        description:
            "Enterprise collaboration and analytics platform for leadership teams.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227765/e6a0fd8448a91bb572a6416a7ffa3a013e4be790_1_qgsaxc.png"
    },
    {
        id: 5,
        title: "Won Bridge",
        description:
            "Infrastructure and logistics management solution for large-scale projects.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227758/6501ff8fead7aab2fdf2328dc9464bbacbc11023_1_p177jx.jpg"
    }
]

const OurProjects = () => {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="w-[1450px] flex flex-col gap-12">
                <CustomHeading
                    title="Projects"
                    span="Our"
                    description="Projects that reflect our expertise and commitment to quality"
                />

                {/* ===== TOP ROW (2 CARDS) ===== */}
                <div className="grid grid-cols-2 gap-8">
                    {List.slice(0, 2).map(item => (
                        <ProjectCard
                            key={item.id}
                            item={item}
                            height="h-[520px]"
                        />
                    ))}
                </div>

                {/* ===== BOTTOM ROW (3 CARDS) ===== */}
                <div className="grid grid-cols-3 gap-8">
                    {List.slice(2).map(item => (
                        <ProjectCard
                            key={item.id}
                            item={item}
                            height="h-[420px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProjects

