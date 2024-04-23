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
  const contactUsRef = useRef<HTMLDivElement>(null);
  const getQuoteRef = useRef<HTMLDivElement>(null);

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
    if (contactUsRef.current) {
      window.scrollTo({
        top: contactUsRef.current.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };
  const scrollToGetQuote = () => {
    if (getQuoteRef.current) {
      window.scrollTo({
        top: getQuoteRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  const navigationMethods = {
    toAbout: scrollToAbout,
    toHome: scrollToHome,
    toServices: scrollToOurServices,
    toContact: scrollToContact,
    toGetQuote: scrollToGetQuote,
  };
  return (
    <Layout navMethods={{ ...navigationMethods }}>
      <main className="" ref={homeRef}>
        <Hero navMethods={{ ...navigationMethods }} />
        <SectionOne />
        <WhyChooseUs />
        <AboutUs aboutUsRef={aboutUsRef} />
        <ContactUs contactUsRef={contactUsRef} getQuoteRef={getQuoteRef} />
        <OurServices serviceRef={ourServiceRef} />
        <RecentProject />
        <Testimonials />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
