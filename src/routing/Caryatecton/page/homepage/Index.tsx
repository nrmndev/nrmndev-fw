import { AboutUsSection } from "./AboutUsSection";
import { Services } from "./Services";
import ProgressSection from "./ProgressSection";
import LatestProjects from "./LatestProjects";
import OurSkillSection from "./OurSkillSection";
import ContactSection from "./ContactSection";
import { Trades } from "./Trades";
import Partners from "./Partners";
import Footer from "./Footer";
import { HeroBanner } from "./HeroBanner";
import BentoGrid from "./BentoGrid";
import MainNavigation from "./MainNavigation";

export const Homepage = () => {
  return (
    <>
      {/* <BentoGrid /> */}
      <MainNavigation />
      <HeroBanner />
      {/* <AboutUsSection /> */}
      <Trades />
      <Services />
      {/* <ProgressSection /> */}
      <LatestProjects />
      <Partners />
      {/* <OurSkillSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
};
