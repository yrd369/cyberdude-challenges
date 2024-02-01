import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-primary text-white md:flex items-center justify-center md:justify-between p-5 px-14">
      <div>
        <Link to={"/"}>
          <h1 className="font-semibold font-Viga text-center mb-5 md:mb-0 hover:text-gray-300">
            BLOG.CO
          </h1>
        </Link>
      </div>
      <ul className="text-center md:flex md:space-x-3 space-x-0.5 font-roboto">
        <Link to="/" className="hover:text-gray-300">
          <li>Home</li>
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          <li>About</li>
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
