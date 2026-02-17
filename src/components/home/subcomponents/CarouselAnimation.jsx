'use client'
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

const List = [{
    id: 1,
    name: 'Smart Marketing Services',
    description: "Data-driven marketing solutions designed to improve reach and engagement.",
    items: ['Data-driven digital campaigns', "Content and brand storytelling", "AI-based audience targeting", "Performance tracking and analytics"],
    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770101348/11e3aac0dce76853e6258264f65104a0fa6a3c79_fh8u6f.png"
},
{
    id: 2,
    name: 'Cloud & Application Migration',
    description: "Secure and scalable cloud migration services for modern businesses",
    items: ['secure cloud and data migration', "Infrastructure optimization", "API and system integrations", "Risk assesment and planning"],

    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770356901/787391b8a2d01629d1826883507b814724f98de5_kukm4w.png"
},
{
    id: 3,
    name: 'Professional & Consulting Services',
    description: "Expert business and  IT consulting for starategic growth and execution .",
    items: ['Bussiness and IT consulting', "Project planning and delivery", "Resource Management", "Ongoing technical support"],
    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770356865/dfdc55b3695c6498accd3d27af5fcd826c2f6150_qkuvdr.png"
},
{
    id: 4,
    name: 'Messaging & Communication Services',
    description: "AI-powered communication solutions for better customer engagement .",
    items: ['Bulk SMS and WhatsApp messaging', "AI chatbots and auto-responders", "Real-time customer management", "campaign analytics"],
    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770356840/01c80b55732fc272c8810482d6e08e9861510ec2_dw1il7.png"
},
{
    id: 5,
    name: 'Business Launch Services',
    description: "We help businesses start strong with complete launchsupport and AI-driven insights .",
    items: ['Brand registration and identity setup', "website and digital presence creation", "Marketing,PR, and launch campaigns", ""],
    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770452201/dac7f0714e3f8860a8013c2383c387bb9356d9cd_gwa9y2.png"
},
{
    id: 6,
    name: 'IP Filliung Services',
    description: "Protect your innovationb with secure and reliable IP services .",
    items: ['Patent filling and management.', "Trademark registration", "Copyright protection", "AI-assisted IP search and validation."],
    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770356827/6b8cd3f3dd9b6ca2334620d8ea0abd241ae56e1b_sfuofx.jpg"
},
{
    id: 7,
    name: 'Training & Devolopment Services',
    description: "Upskill teams with industry-relevant digital and technology training .",
    items: ['Digital and IT skill training', "AI and cloud technology programs", "Marketing,PR,and launch campaigns", "AI-driven market Insights"],

    image_url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770356815/47384aa8ad459ceaf14d483126d5c575464dd3ba_obfm44.png"
},
]

const ServicesHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    // useEffect(() => {
    //     if (!isHovering) return;

    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) =>
    //             prev === List.length - 1 ? 0 : prev + 1
    //         );
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [isHovering]);

    // useEffect(() => {
    //     if (!hasStarted) return;
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) =>
    //             prev === List.length - 1 ? 0 : prev + 1
    //         );
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, [hasStarted]);
    const currentItem = List[currentIndex];
    // for Pausing the slide 
    const INTERVAL_TIME = 3000; // 3 sec per slide
    const HOVER_DELAY = 2500;  // 2.5 sec pause for reading

    useEffect(() => {
        if (!hasStarted) return;
        if (isHovering) return;
        if (currentIndex === List.length - 1) return; // STOP at last slide

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev === List.length - 1) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, INTERVAL_TIME);

        return () => clearInterval(interval);
    }, [hasStarted, isHovering, currentIndex]);

    return (
        <>
           
            <div
                className=" h-150 mb-3 hidden md:block py-5"
                onMouseEnter={() => {
                    setHasStarted(true);
                    setIsHovering(true);
                }}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setIsHovering(false);
                    }, HOVER_DELAY);
                }}
            >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                    {/* Background */}
                    <img
                        src="https://res.cloudinary.com/dr9thittl/image/upload/v1770100402/2009ea1806379055e86a2f9b4e087ec18e47e97c_t8gkqx.jpg"
                        alt="background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75" />

                    {/* CONTENT GRID */}
                    <div className="relative z-10 grid grid-cols-3 h-full text-white items-center">
                        {/* LEFT */}
                        <div className="flex flex-col justify-between py-16 px-10 h-[90%]">
                            <h2 className="text-[36px] font-medium ibmPlex-text">
                                {currentItem.name}
                            </h2>
                            <span className="text-[72px] font-bold opacity-90 praise-text">
                                {currentItem.id}
                            </span>
                        </div>

                        {/* CENTER */}
                        <div className="flex items-center justify-center">
                            <div className="relative w-[336px] h-[383px] overflow-hidden">
                                {currentItem.image_url && (
                                    <Image
                                        src={currentItem.image_url}
                                        alt={currentItem.name}
                                        fill
                                        className="object-cover shadow-lg"
                                        priority
                                    />
                                )}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col justify-center w-[400px] h-[50%] p-2 mt-40">
                            <p className="mb-6 text-[16px] leading-relaxed opacity-90 inter-text">
                                {currentItem.description}
                            </p>

                            <ul className="space-y-3 text-[15px] list-disc list-inside opacity-90">
                                {currentItem.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className='h-15 md:hidden' />
            {/* ================= MOBILE VIEW (STATIC LIST) ================= */}
            <div className="md:hidden flex flex-col items-center justify-center gap-6 ">
                {List.map((item) => (
                    <div
                        key={item.id}
                        className="relative h-[510px] w-[364px] text-white rounded-lg overflow-hidden pr-3"
                        style={{
                            backgroundImage: `url(${item.image_url})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/70" />

                        {/* Content */}
                        <div className="relative z-10 p-6 pb-0  flex flex-col h-full items-center">
                            <div>
                                <h2 className="text-[24px] font-semibold mb-3 ibmPlex-text">
                                    {item.name}
                                </h2>

                                <p className="text-[14px] mb-4 opacity-90 inter-text">
                                    {item.description}
                                </p>

                                <ul className="space-y-3 text-[14px] list-disc list-inside inter-text">
                                    {item.items.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <span className="text-[96px] font-bold opacity-80 absolute bottom-1 right-10 praise-text">
                                {item.id}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );

};

export default ServicesHero;
