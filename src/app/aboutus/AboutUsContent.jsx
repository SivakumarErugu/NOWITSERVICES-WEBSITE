'use client';

import { useEffect } from "react";
import { useNowit } from "@/store/useNowit";

import ChooseUs from "@/components/home/subcomponents/ChooseUs";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";
import OurBrands from "@/components/home/subcomponents/OurBrands";
import OurJourney from "@/components/home/subcomponents/OurJourney";
import OurProjects from "@/components/home/subcomponents/OurProjects";
import OurVision from "@/components/home/subcomponents/ourVision";
import Technology from "@/components/home/subcomponents/Technology";
import PartnerBanner from "@/components/shared/UI-Elements/Partner-Banner";

const AboutUsContent = () => {
  const { setPageKey, isReady ,t} = useNowit();

  // ✅ Set stable pageKey once
  useEffect(() => {
    setPageKey("about-us");
  }, [setPageKey]);

  // ✅ Do not render until translations are ready
  if (!isReady) return null; // or <Skeleton />

  return (
    <main className="w-full min-h-screen overflow-auto space-y-2 overflow-x-hidden">
      <Technology />
      <OurVision />
      <OurJourney />

      <div className="height-[90px] w-full hidden md:block self-center md:px-28 lg:px-40">
        <p className="inter-text px-5 md:px-2">
          {/* We hold patents on next-generation smart footwear platform
          that transforms everyday movement into meaningful health insights.
          By combining advanced sensing technology with intelligent data analytics,
          the system enables real-time monitoring and personalized wellness feedback.
          Energy-efficient and seamlessly connected, this innovation sits at the
          intersection of healthcare, mobility, and wearable technology —
          shaping the future of preventive, data-driven care. */}
          {t("Aboutus.text")}
        </p>
      </div>

      <ChooseUs />
      <OurBrands />

      <div className="w-full overflow-auto scroll-invisible">
        <OurProjects />
      </div>

      <PartnerBanner />
      <ClientCardComponent />
    </main>
  );
};

export default AboutUsContent;