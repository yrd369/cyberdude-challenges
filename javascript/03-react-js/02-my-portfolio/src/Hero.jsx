import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import App from "./App";

const Hero = ({ details }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 relative md:h-screen">
        <section className="bg-secondary p-5 space-y-10">
          <p className="font-cursive">Yogha Raj Dhayal</p>
          <div className="space-y-5 pt-20">
            <img
              src={details.profilePic}
              alt="profile"
              className="rounded-full w-72 mx-auto"
            />
            <div className="flex gap-x-5 justify-center">
              <a
                href="https://www.linkedin.com/in/yogha-raj-dhayal"
                target="blank"
              >
                <FaLinkedin className="text-3xl hover:scale-110" />
              </a>
              <a href="https://github.com/yrd369" target="blank">
                <FaGithub className="text-3xl hover:scale-110" />
              </a>
              <FaInstagram className="text-3xl hover:scale-110" />
            </div>
          </div>
        </section>
        <section className="bg-primary cols-span-1.5 font-poppins p-5 space-y-5">
          <div className="space-y-5 pt-10 md:pt-40 px-20 ">
            <h1 className="text-gray-400 font-semibold text-lg md:text-xl">
              {details.role}
            </h1>
            <p className="text-gray-200 font-bold text-2xl md:text-4xl">
              {details.name}
            </p>
            <p className="text-gray-400 font-semibold">{details.quote}</p>
            <div className="md:space-x-5 space-y-3 md:space-y-0">
              <button className="py-2 px-3 border-2 border-secondary rounded-full text-secondary w-full md:w-auto hover:bg-white hover:border-white hover:text-black">
                Download CV
              </button>
              <button className="py-2 px-7 bg-secondary rounded-full w-full md:w-auto hover:bg-black hover:border-2 hover:border-white hover:text-white">
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
