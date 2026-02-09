import BannerSection from "@/components/home/BannerSection";
import PartnerSection from "@/components/home/PartnerSection";
import Trusted from "@/components/home/trusted";
import AiBtn from "@/components/shared/UI-Elements/AiBtn";
import TitleAndDescription from "@/components/shared/UI-Elements/TitleAndDescription";
import CarouselAnimation from "@/components/home/subcomponents/CarouselAnimation";
import EnterpriseProducts from "@/components/home/subcomponents/EnterpriseProducts";
import TrustedBannerSection from "@/components/home/subcomponents/TrustedBannerSection";
import IndustryBtn from "@/components/home/subcomponents/IndustryBtn";
import FaqSection from "@/components/home/subcomponents/FaqSection";
import SlidingHeader from "@/components/shared/UI-Elements/SlidingHeader";
import PartnerBanner from "@/components/shared/UI-Elements/Partner-Banner";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";

export const metadata = {
  title: "Home | NowIt"
};

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-auto overflow-x-hidden">
      <section>
        <BannerSection />
      </section>
      <div className="w-full space-y-2 px-10">
        <SlidingHeader title="Who we are" />
        <PartnerSection />
        <Trusted />
        <div className="hidden md:flex items-end justify-end p-0 w-[88%] mt-7">
          <AiBtn />
        </div>
        <SlidingHeader title="Our Services" />
        <div className="h-30 md:hidden" />
        <TitleAndDescription />
        <CarouselAnimation />
        <div className="h-13 gap-5 flex flex-col" />
        <div className="hidden md:block">
          <TitleAndDescription isSpanFirst={true} title="Digital Products" span="Enterprise-Ready" description="Our products are designed to solve business challenges through intelligent,scalable,and easy-to-use digital solutions.Built
      with modern technology,each product is crafted to deliver performance and long-term value across web and mobile platforms."/>
          <EnterpriseProducts />
        </div>
        <div className="h-15 md:h-50 mt-2" />
        <TrustedBannerSection />
        <div className="h-15 md:hidden mt-2" />
        <SlidingHeader title="Industries" />
        <TitleAndDescription isSpanFirst={false} title="Solutions for" span="Every Industry" description=" NOWIT Sevice offers AI-powered digital transformation services that help businesses improve efficiency,automate operations" />
        <div className="h-15 md:hidden mt-2" />
        <IndustryBtn />
        <div className="h-13 md:block" />
        <PartnerBanner />
        <ClientCardComponent />
        <FaqSection />

      </div>
    </main>
  );
}
