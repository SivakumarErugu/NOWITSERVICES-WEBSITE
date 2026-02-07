import ChooseUs from "@/components/home/subcomponents/ChooseUs";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";
import OurBrands from "@/components/home/subcomponents/OurBrands";
import OurJourney from "@/components/home/subcomponents/OurJourney";
import OurProjects from "@/components/home/subcomponents/OurProjects";
import OurVision from "@/components/home/subcomponents/ourVision";
import Technology from "@/components/home/subcomponents/Technology";

import PartnerBanner from "@/components/shared/UI-Elements/Partner-Banner";
import SlidingHeader from "@/components/shared/UI-Elements/SlidingHeader";


export default function AboutUs() {
  return (
    <main className="w-full min-h-screen overflow-auto space-y-2 overflow-x-hidden">
      <Technology />
      <OurVision />
      <div className='h-10 md:hidden' />
      <OurJourney />
      <div className='height-[90px] w-full hidden md:block self-center  md:px-28 lg:px-40'>
      <p className="inter-text px-5 md:px-15">By end of2025, we have fully evolved as producr based company with seamless producrs in WON App store and growing the suite by adding more platforms for diversified industries/verticals. We have also filed patents for modern healthcare technology with logic and Ayurvedic research.</p>
      </div>
      <ChooseUs />
      <OurBrands />
      <div className='w-[100%] overflow-auto scroll-invisible'>
        <OurProjects />
        </div>

      <PartnerBanner />
      <SlidingHeader title="Testimonials" />
      <ClientCardComponent />
    </main>
  )
}
