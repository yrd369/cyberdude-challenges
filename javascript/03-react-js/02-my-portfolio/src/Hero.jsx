import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import About from "./About";
import App from "./App";
const Hero = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 relative">
        <section className="bg-secondary p-5 space-y-10 md:h-screen">
          <p className="font-cursive">Yogha Raj Dhayal</p>
          <div className="space-y-5 pt-20">
            <img
              src="https://avatars.githubusercontent.com/u/136661914?v=4"
              alt="profile"
              className="rounded-full w-72 mx-auto"
            />
            <div className="flex gap-x-5 justify-center">
              <FaLinkedin className="text-3xl" />
              <FaGithub className="text-3xl" />
              <FaInstagram className="text-3xl" />
            </div>
          </div>
        </section>
        <section className="bg-primary cols-span-1.5 font-poppins p-5 space-y-5">
          <div className="space-y-5 pt-10 md:pt-40 px-20 ">
            <h1 className="text-gray-400 font-semibold text-lg">
              Full Stack Developer
            </h1>
            <p className="text-gray-200 font-bold text-2xl">Yogha Raj Dhayal</p>
            <p className="text-gray-400">
              There wasn't a bird in the sky, but that was not what caught his
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these. He knew what was coming and he
              hoped he was prepared.
            </p>
            <div className="md:space-x-5 space-y-3 md:space-y-0">
              <button className="py-2 px-3 border-2 border-secondary rounded-full text-secondary w-full md:w-auto">
                Download CV
              </button>
              <button className="py-2 px-7 bg-secondary rounded-full w-full md:w-auto">
                Contact
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hero;
