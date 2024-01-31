import { Link } from "react-router-dom";

const About = ({details}) => {
  return (
    <>
      <div className="bg-primary p-10 font-poppins">
        <hr className="mt-5 border-2 border-secondary md:w-[1000px] mx-auto"></hr>
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:p-20 p-10 space-y-10">
            <h1 className="font-bold text-secondary text-5xl">Who I am</h1>
            <div className="max-w-lg text-lg">
              <p className="text-gray-400 font-medium">
             {details.myStory}
              </p>
            </div>
          </div>
          <div className="md:ml-60">
            <img
              src="https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg"
              alt="banner image"
              className="w-72"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
