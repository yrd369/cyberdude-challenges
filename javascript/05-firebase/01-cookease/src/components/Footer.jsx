import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-950 p-3 px-20 mt-5 text-white text-lg md:flex justify-between">
      <h1 className="font-semibold">CookEase</h1>
      <p className="text-sm tracking-wider">Developed by Yogha Raj Dhayal</p>
      <div className="flex space-x-1.5">
        <a href="https://github.com/yrd369">
          <FaGithub className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/yogha-raj-dhayal">
          <FaLinkedin className="text-xl" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
