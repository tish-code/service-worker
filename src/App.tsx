import { Layout } from "./layout/layout";
import { AboutUs } from "./sections/about-us";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero/hero";
import { OurServices } from "./sections/our-services";
import { RecentProject } from "./sections/recent-projects";
import { SectionOne } from "./sections/section-one";
import { Testimonials } from "./sections/testimonials";
import { WhyChooseUs } from "./sections/why-choose-us";

function App() {
  return (
    <Layout>
      <main className="">
        <Hero />
        <SectionOne />
        <WhyChooseUs />
        <AboutUs />
        <OurServices />
        <RecentProject />
        <Testimonials />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
