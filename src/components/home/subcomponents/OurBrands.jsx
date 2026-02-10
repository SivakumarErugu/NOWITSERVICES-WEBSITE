'use client';

import { CustomHeading } from '@/components/shared/UI-Elements/Custom-Elements';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ImagesList = [
  { id: 1, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770638608/before1_d2puz8.png" },
  { id: 2, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770638607/d56c7c49447eeb51e18bc607463ebbaac90b7f59_2_h4kgec.png" },
  { id: 3, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770638602/before3_vb2oi4.png" },
  { id: 4, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770638601/before5_y9vjir.png" },
  { id: 5, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770638601/before4_blnkiq.png" },
  { id: 6, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636216/3b4b2eaee26e2cfc7235efae20f59c352f447fa5_pwywrw.png" },
  { id: 7, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636214/c85e1cff89b131105b5384b69aebb3b72b790c7c_tgkqws.png" },
  { id: 8, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636213/40603064a842227dae6ebf3cd8656eda7acc6b64_jk5y7d.png" },
  { id: 9, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636211/a082da397ded280902ad75e359fbbda6df1d27d4_pgy2y6.png" },
  { id: 10, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636210/3a899b06878c9676feb16f5cf9b1477833ea79ed_hmye4h.png" },
  { id: 11, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636206/f63aeb7f3041368bdc4053a5b372f2cdf171e906_erx86r.png" },
  { id: 12, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636198/08af52ae3a13e4eff97de6ea3eb0909fcb77d0bc_goeqfq.png" },
  { id: 13, url: "https://res.cloudinary.com/dr9thittl/image/upload/v1770636199/5dae5a0bd2250e7af1ee8dc64d49234497ca5ba6_crqenv.png" },
];

const OurBrands = () => {
  const [duration, setDuration] = useState(15);

  useEffect(() => {
    const updateDuration = () => {
      if (window.innerWidth < 640) {
        setDuration(8);     // mobile
      } else if (window.innerWidth < 1024) {
        setDuration(10);    // tablet
      } else {
        setDuration(8);    // desktop
      }
    };

    updateDuration();
    window.addEventListener('resize', updateDuration);
    return () => window.removeEventListener('resize', updateDuration);
  }, []);

  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div className="w-full flex flex-col md:gap-6">
        <CustomHeading
          title="That Trust Us"
          span="Brands"
          description="Helping brands succeed through smart and dependable technology."
          isSpanFirst
        />

        {/* SCROLLING BRAND STRIP */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex w-max gap-7 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {/* Original list */}
            {ImagesList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center min-w-[160px]"
              >
                <Image
                  src={item.url}
                  alt="brand-logo"
                  width={160}
                  height={120}
                  className="object-contain opacity-90"
                />
              </div>
            ))}

            {/* Duplicate list for seamless marquee */}
            {ImagesList.map((item, index) => (
              <div
                key={`dup-${item.id}-${index}`}
                className="flex items-center justify-center min-w-[160px]"
              >
                <Image
                  src={item.url}
                  alt="brand-logo"
                  width={160}
                  height={120}
                  className="object-contain opacity-90"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
