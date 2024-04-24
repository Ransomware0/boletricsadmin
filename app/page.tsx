import CoreFeatures from "@/components/demo/CoreFeatures";
import CreativeLayouts from "@/components/demo/CreativeLayouts";
import DiscoverApps from "@/components/demo/DiscoverApps";
import Footer from "@/components/demo/Footer";
import Hero from "@/components/demo/Hero";
import PopularDesign from "@/components/demo/PopularDesign";
import PrebuiltPages from "@/components/demo/PrebuiltPages";
import StartDesign from "@/components/demo/StartDesign";
import Testimonial from "@/components/demo/Testimonial";
import WhyChoose from "@/components/demo/WhyChoose";

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <StartDesign />
      <CoreFeatures />
      <PrebuiltPages />
      <WhyChoose />
      <CreativeLayouts />
      <PopularDesign />
      <Testimonial />
      <DiscoverApps />
      <Footer />
    </main>
  );
};

export default HomePage;
