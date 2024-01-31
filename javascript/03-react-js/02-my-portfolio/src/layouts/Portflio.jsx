import About from "../About";
import Experience from "../Experience";
import Hero from "../Hero";
import Skills from "../Skills";
import Education from "../Education";
import Footer from "./Footer";
import data from "../data/data.json";

const Portfolio = () => {
  return (
    <>
      <Hero details={data} />
      <About details={data} />
      <Education details={data} />
      <Skills />
      <Experience details={data} />
      <Footer />
    </>
  );
};
export default Portfolio;
