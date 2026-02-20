// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { RxSewingPinFilled } from "react-icons/rx";
// import careersBg from "../../../public/images/careersBg.jpg"


// const CareersHero = () => {
//     return (
//         <div className="relative h-[90vh] w-full overflow-hidden rounded-b-[50%_100px] md:rounded-b-[50%_200px]">

//             {/* Animated Image Wrapper */}
//             <motion.div
//                 initial={{ scale: 1.2 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 2, ease: "easeOut" }}
//                 className="absolute inset-0"
//             >
//                 <Image
//                     src={careersBg}
//                     alt="careers background"
//                     priority
//                     fill
//                     className="object-cover"
//                 />
//             </motion.div>

//             {/* Overlay Text */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 border border-black">

//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1, delay: 0.5 }}
//                     className="text-4xl md:text-6xl font-bold text-center px-4 absolute bottom-27"
//                 >
//                     Your Next Career Move <br /> Starts Here
//                 </motion.h1>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1 }}
//                     className="absolute bottom-7 animate-bounce flex flex-col items-center gap-y-3 text-xs uppercase tracking-widest"
//                 >
//                     <p><RxSewingPinFilled size={22} /></p>
//                     <span>Scroll to explore</span>
//                 </motion.div>

//             </div>
//         </div>
//     )
// }

// export default CareersHero


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RxSewingPinFilled } from "react-icons/rx";
import careersBg from "../../../public/images/careersBg.jpg";
import { useNowit } from "@/store/useNowit";

const CareersHero = () => {
    const { t, isReady } = useNowit();
    if (!isReady) return null;
    return (
        <section className="relative min-h-[60vh] md:h-[90vh] w-full overflow-hidden rounded-b-[50%_70px] sm:rounded-b-[50%_100px] md:rounded-b-[50%_200px]">

            {/* Animated Background */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
            >
                <Image
                    src={careersBg}
                    alt="careers background"
                    priority
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 px-6 text-center">

                {isReady &&
                    <>   {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="font-bold leading-tight 
                     text-3xl 
                     sm:text-4xl 
                     md:text-5xl 
                     lg:text-6xl"
                        >
                            {t("banner.title") || " Your Next Career Move "} <br className="hidden sm:block" />
                            <span className="block sm:inline">{t("banner.span") || "Starts Here"}</span>
                        </motion.h1>

                        {/* Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest animate-bounce"
                        >
                            <RxSewingPinFilled size={20} />
                            <span>{t("banner.scroll") || "Scroll to explore"}</span>
                        </motion.div>
                    </>
                }
            </div>
        </section>

    );
};

export default CareersHero;
