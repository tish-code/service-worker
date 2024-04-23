import { useRef } from "react";
import { Layout } from "./layout/layout";
import { AboutUs } from "./sections/about-us";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero/hero";
import { OurServices } from "./sections/our-services";
import { RecentProject } from "./sections/recent-projects";
import { SectionOne } from "./sections/section-one";
import { Testimonials } from "./sections/testimonials";
import { WhyChooseUs } from "./sections/why-choose-us";
import { ContactUs } from "./sections/contact-us";

function App() {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const ourServiceRef = useRef<HTMLDivElement>(null);
  const contactUseRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutUsRef.current) {
      window.scrollTo({
        top: aboutUsRef.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };
  const scrollToHome = () => {
    if (homeRef.current) {
      window.scrollTo({
        top: homeRef.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };
  const scrollToOurServices = () => {
    if (ourServiceRef.current) {
      window.scrollTo({
        top: ourServiceRef.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };
  const scrollToContact = () => {
    if (contactUseRef.current) {
      window.scrollTo({
        top: contactUseRef.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };
  const navigationMethods = {
    toAbout: scrollToAbout,
    toHome: scrollToHome,
    toServices: scrollToOurServices,
    toContact: scrollToContact,
  };
  return (
    <Layout navMethods={{ ...navigationMethods }}>
      <main className="" ref={homeRef}>
        <Hero />
        <SectionOne />
        <WhyChooseUs />
        <AboutUs aboutUsRef={aboutUsRef} />
        <ContactUs contactUsRef={contactUseRef} />
        <OurServices serviceRef={ourServiceRef} />
        <RecentProject />
        <Testimonials />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
