'use client';

import { useEffect } from 'react';
import { useNowit } from '@/store/useNowit';

import CareerVisualMessageBlock from '@/components/careers/CareerVisualMessageBlock';
import JoinusBanner from '@/components/careers/JoinusBanner';
import Opportunities from '@/components/careers/Opportunities';
import CareersHero from '@/components/careers/CareersHero';

const CareersContent = () => {
  const { setPageKey, isReady } = useNowit();

  // ✅ Stable page key for Careers
  useEffect(() => {
    setPageKey('careers');
  }, []);

  // ✅ Wait for translations
  if (!isReady) return null; // or <Loading />

  return (
    <main className="relative w-full bg-white">
      <CareersHero />

      <section className="mt-10 md:mt-30 lg:mt-40 w-full flex justify-center items-center">
        <CareerVisualMessageBlock />
      </section>

      <section>
        <JoinusBanner />
      </section>

      <section id="currentOpenings">
        <Opportunities />
      </section>
    </main>
  );
};

export default CareersContent;