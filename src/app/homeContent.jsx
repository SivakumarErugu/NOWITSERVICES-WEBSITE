'use client';

import { useEffect } from "react";
import { useNowit } from "@/store/useNowit";

import BannerSection from "@/components/home/BannerSection";
import PartnerSection from "@/components/home/PartnerSection";
import AiBtn from "@/components/shared/UI-Elements/AiBtn";
import EnterpriseProducts from "@/components/home/subcomponents/EnterpriseProducts";
import TrustedBannerSection from "@/components/home/subcomponents/TrustedBannerSection";
import IndustrySection from "@/components/Services/IndustrySection";
import FaqSection from "@/components/home/subcomponents/FaqSection";
import PartnerBanner from "@/components/shared/UI-Elements/Partner-Banner";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";
import Services from "@/components/home/subcomponents/Services";

const HomeContent = () => {
  const { setPageKey, isReady } = useNowit();

  // ✅ Stable page key
  useEffect(() => {
    setPageKey("home");
  }, [setPageKey]);

  // ✅ Gate rendering until translations load
  if (!isReady) return null; // or <Loading />

  return (
    <main className="w-full min-h-screen overflow-auto overflow-x-hidden space-y-2">
      <section>
        <BannerSection />
      </section>

      <PartnerSection />
      <AiBtn />
      <Services />
      <EnterpriseProducts />
      <TrustedBannerSection />

      <section>
        <IndustrySection />
      </section>

      <div className="h-13 md:block" />
      <PartnerBanner />
      <ClientCardComponent />
      <FaqSection />
    </main>
  );
};

export default HomeContent;