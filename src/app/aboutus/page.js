import ChooseUs from "@/components/home/subcomponents/ChooseUs";
import ClientCardComponent from "@/components/home/subcomponents/ClientCardComponent";
import OurBrands from "@/components/home/subcomponents/OurBrands";
import OurJourney from "@/components/home/subcomponents/OurJourney";
import OurProjects from "@/components/home/subcomponents/OurProjects";
import OurVision from "@/components/home/subcomponents/ourVision";
import Technology from "@/components/home/subcomponents/Technology";




export default function AboutUs() {
  return (
    <main className="w-full min-h-screen overflow-auto space-y-2 p-2">
      <Technology />
      <OurVision />
      <OurJourney />
      <p>By end of2025, we have fully evolved as producr based company with seamless producrs in WON App store and growing the suite by adding more platforms for diversified industries/verticals. We have also filed patents for modern healthcare technology with logic and Ayurvedic research.</p>
      <ChooseUs />
      <OurBrands />
      <OurProjects />
    <ClientCardComponent />
    </main>
  )
}
