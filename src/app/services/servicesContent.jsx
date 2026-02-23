'use client';

import { useEffect } from 'react';
import { useNowit } from '@/store/useNowit';

import Services1 from '@/components/Services/Services1';
import Services2 from '@/components/Services/Services2';
import Services3 from '@/components/Services/Services3';
import Services4 from '@/components/Services/Services4';
import Services5 from '@/components/Services/Services5';
import IndustrySection from '@/components/Services/IndustrySection';
import BusinessBanner from '@/components/shared/UI-Elements/Business-Banner';

const ServicesContent = () => {
  const { setPageKey, isReady } = useNowit();

  // ✅ Stable page key for Services
  useEffect(() => {
    setPageKey('services');
  }, [setPageKey]);

  // ✅ Wait for translations
  if (!isReady) return null; // or <Loading />

  return (
    <main className="relative w-full bg-white">
      <section>
        <Services1 />
      </section>

      <section>
        <Services2 />
      </section>

      <section>
        <Services3 />
      </section>

      <section>
        <Services4 />
      </section>

      <section>
        <Services5 />
      </section>

      <section>
        <IndustrySection />
      </section>

      <section>
        <BusinessBanner />
      </section>
    </main>
  );
};

export default ServicesContent;