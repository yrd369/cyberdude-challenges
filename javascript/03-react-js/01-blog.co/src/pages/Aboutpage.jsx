import pic from "../assets/images/yrd.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Aboutpage = () => {
  return (
    <div className="bg-additional p-5">
      <div className="p-10 container mx-auto">
        <div>
          <section className="grid md:grid-cols-2 md:gap-x-5 gap-y-5">
            <div className="rounded p-5 bg-[#fff]">
              <div className="md:flex gap-x-10 items-center">
                <img src={pic} className="w-64 mx-auto rounded" />
                <div className="space-y-3 mt-3 md:mt-0">
                  <h1 className="text-xl">About Me</h1>
                  <p className="text-sm">
                    I am a Full Stack Engineer had enthusiasm in building
                    websites and webapps.
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/yrd369"
                      className="hover:text-gray-500"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yogha-raj-dhayal/"
                      className="hover:text-gray-500"
                    >
                      <FaLinkedin />
                    </a>
                    <a href="#" className="hover:text-gray-500">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 bg-[#fff] rounded">
              <div className="md:flex gap-x-10 items-center pt-10">
                <img
                  src="https://life.futuregenerali.in/Content/images/about/mission.jpg"
                  className="w-64"
                />
                <div className="space-y-3">
                  <h1 className="text-xl mt-3 md:mt-0">Mission</h1>
                  <p className="text-sm">
                    At Blog.co, we are driven by a steadfast commitment to
                    delivering accurate, insightful, and unbiased news coverage
                    to our readers. Our mission is to empower individuals with
                    the information they need to make informed decisions, foster
                    informed discourse, and uphold the principles of
                    journalistic integrity.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Aboutpage;
