import BannerSection from "@/components/home/BannerSection";
import PartnerSection from "@/components/home/PartnerSection";
import AiBtn from "@/components/shared/UI-Elements/AiBtn";
import EnterpriseProducts from "@/components/home/subcomponents/EnterpriseProducts";
import TrustedBannerSection from "@/components/home/subcomponents/TrustedBannerSection";
import IndustryBtn from "@/components/home/subcomponents/IndustryBtn";
import FaqSection from "@/components/home/subcomponents/FaqSection";
import PartnerBanner from "@/components/shared/UI-Elements/Partner-Banner";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";
import Services from "@/components/home/subcomponents/Services";

export const metadata = {
  title: "Home | NowIt"
};

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-auto overflow-x-hidden space-y-2 ">
      <section>
        <BannerSection />
      </section>
      <PartnerSection />
      <div className="w-full space-y-4">
        <AiBtn />
        <div className="h-5 md:hidden " />
          <Services />
     

        <EnterpriseProducts />
        <TrustedBannerSection />
        <div className="h-5  mt-2" />
        <IndustryBtn />
        <div className="h-13 md:block" />
        <PartnerBanner />
        <ClientCardComponent />
        <FaqSection />

      </div>
    </main>
  );
}
