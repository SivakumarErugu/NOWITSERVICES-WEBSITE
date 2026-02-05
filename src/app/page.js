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
import ChooseUs from "@/components/home/subcomponents/ChooseUs";
import OurBrands from "@/components/home/subcomponents/OurBrands";
export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-auto">
      <section>
        <BannerSection />
      </section>
      <div className="p-3 w-full space-y-2">
        <PartnerSection />
        <Trusted />
        <div className="flex items-end justify-end p-0 m-0">
          <AiBtn />
        </div>
        <TitleAndDescription />
        <CarouselAnimation />
        <TitleAndDescription isSpanFirst={true} title="Digital Products" span="Enterprise-Ready" description="Our products are designed to solve business challenges through intelligent,scalable,and easy-to-use digital solutions.Built
      with modern technology,each product is crafted to deliver performance and long-term value across web and mobile platforms."/>
        <EnterpriseProducts />
        <TrustedBannerSection />
        <TitleAndDescription isSpanFirst={false} title="Solutions for" span="Every Industry" description=" NOWIT Sevice offers AI-powered digital transformation services that help businesses improve efficiency,automate operations" />
        <IndustryBtn />
        <FaqSection />

      </div>
    </main>
  );
}
