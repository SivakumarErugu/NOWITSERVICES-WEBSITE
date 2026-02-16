



import { CustomHeading, ThemeBtnTag, ThemeBtnTag2, ThemeLinkTag } from "@/components/shared/UI-Elements/Custom-Elements"
import Image from "next/image"


const ProjectCard = ({ item, height, width }) => {
    return (
        <div
            className={`
        relative ${height} ${width}
        md:w-full
        rounded-md
        md:rounded-[18px]
        overflow-hidden
        flex-shrink-0
      `}
        >
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
            />

            {/* lighter gradient for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-0 p-3 md:p-6 text-white">
                <h3 className="text-[16px] md:text-[24px] font-semibold leading-tight">
                    {item.title}
                </h3>

                <p className="mt-1 md:mt-2 text-[12px] md:text-sm leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none">
                    {item.description}
                </p>
            </div>
        </div>
    )
}

const List = [
    {
        id: 1,
        title: "WON Bill",
        description:
            "It helps hospitals improve efficiency, enhance patient care, and manage daily operations seamlessly.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770229103/c7b2f5175ba18e0eae94fed530dd717de53cbac4_3_nojd86.png"
    },
    {
        id: 2,
        title: "WON Digi",
        description:
            "An all-in-one educational platform designed to transform how schools operate.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227821/c631f590f3e1c0c7e22c70bb1e53c33523b20383_1_vby7wt.jpg"
    },
    {
        id: 3,
        title: "WON Pulse",
        description:
            "A hospital management system built for modern healthcare workflows.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227773/4c46f68565408040fdb66d0e8de15e20e9dbdee8_avdjiv.jpg"
    },
    {
        id: 4,
        title: "WON Hubs",
        description:
            `Wonhubs is a cloud-based centralized workflow automation platform that connects omnichannels and enterprise systems
             to design, automate, and orchestrate operational workflows from a single unified hub.`,
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227765/e6a0fd8448a91bb572a6416a7ffa3a013e4be790_1_qgsaxc.png"
    },
    {
        id: 5,
        title: "WON Bridge",
        description:
            "Infrastructure and logistics management solution for large-scale projects.",
        image:
            "https://res.cloudinary.com/dr9thittl/image/upload/v1770227758/6501ff8fead7aab2fdf2328dc9464bbacbc11023_1_p177jx.jpg"
    }
]

const OurProjects = () => {
    return (
        <section className="w-full py-20 md:flex md:justify-center px-4 lg:px-10">
            <div className="w-full md:w-360 flex flex-col md:gap-12 px-4 lg:px-10">
                <CustomHeading
                    title="Projects"
                    span=""
                    description="Projects that reflect our expertise and commitment to quality"
                />
                {/* TOP ROW */}
                <div className="hidden md:grid grid-cols-2 gap-8">
                    {List.slice(0, 2).map(item => (
                        <ProjectCard key={item.id} item={item} height="h-[520px]" />
                    ))}
                </div>

                {/* BOTTOM ROW */}
                <div className="hidden md:grid grid-cols-3 gap-8">
                    {List.slice(2).map(item => (
                        <ProjectCard key={item.id} item={item} height="h-[420px]" />
                    ))}
                </div>

                <div className="items-center hidden md:block w-full">
                    <div className="flex items-center justify-center">
                        <ThemeLinkTag href="/products#myProducts" BtnText="View All Products" styles='self-center' />
                    </div>
                </div>
                {/* mobile */}
                {/* Mobile */}
                <div
                    className="
    w-full
    flex flex-nowrap gap-3
    overflow-x-auto overflow-y-hidden
    md:hidden scroll-invisible
    px-5
  "
                >
                    {List.map(item => (
                        <ProjectCard
                            key={item.id}
                            item={item}
                            height="h-[247px]"
                            width="w-[247px]"
                        />
                    ))}
                </div>


            </div>
        </section>
    )
}

export default OurProjects

