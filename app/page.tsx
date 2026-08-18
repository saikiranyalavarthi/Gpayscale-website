import AboutSection from "./home/AboutSection";
import HeroSection from "./home/HeroSection";
import StaffingSection from "./home/StaffingSection";
import StatsSection from "./home/StatsSection";
import ITServicesSection from "./home/TrainingSection";
import BusinessPillarsSection from "./home/BusinessPillarsSection";
import TrainingSection from "./home/TrainingSection";
import DroneSection from "./home/DroneSection";
import TechnologySection from "./home/TechnologySection";
import IndustriesSection from "./home/IndustriesSection";
import WhyChooseSection from "./home/WhyChooseSection";
import ProcessSection from "./home/ProcessSection";
import ContactSection from "./home/ContactSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <BusinessPillarsSection />
      <StaffingSection />
      <ITServicesSection />
      <TrainingSection />
      <DroneSection />
      <TechnologySection />
      <IndustriesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}