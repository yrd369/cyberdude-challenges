import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="bg-primary p-10 font-poppins">
        <hr className="mt-5 border-2 border-secondary md:w-[1000px] mx-auto"></hr>
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:p-20 p-10 space-y-10">
            <h1 className="font-bold text-secondary text-5xl">Who I am</h1>
            <div className="max-w-lg text-lg">
              <p className="text-gray-400">
                <span>
                  My name's Jane. I'm a web designer and developer based in
                  Southampton, UK.
                </span>
                <br></br>
                During the day I work as a lead developer at a local agency and
                in the evening I work on freelance projects and utilize the time
                to built my own products. I spent my leisure hours writing
                articles and poetry. Right now I'm also trying a hand at machine
                learning and AI. I love to learn and explore new arenas.
              </p>
            </div>
          </div>
          <div className="md:ml-60">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg"
              alt="banner image" className="w-72"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
